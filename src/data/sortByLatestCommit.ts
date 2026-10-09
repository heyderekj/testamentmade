import type { AppEntry } from './apps';

/**
 * Latest commit on the repo's default branch, looked up at build time.
 * A private repo needs `GITHUB_TOKEN` in the build environment; without it
 * (or if GitHub can't be reached) the date is unknown.
 */
async function latestCommitDate(repo: string): Promise<number | null> {
  const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'testamentmade.com',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const [commit] = await res.json();
    const date = commit?.commit?.committer?.date;
    return date ? Date.parse(date) : null;
  } catch {
    return null;
  }
}

/** Most recently committed-to first; apps with no known date keep their listed order at the end. */
export async function sortByLatestCommit(apps: AppEntry[]): Promise<AppEntry[]> {
  const dates = await Promise.all(apps.map((app) => (app.repo ? latestCommitDate(app.repo) : null)));
  return apps
    .map((app, i) => ({ app, i, date: dates[i] }))
    .sort((a, b) => {
      if (a.date !== null && b.date !== null) return b.date - a.date;
      if (a.date !== null) return -1;
      if (b.date !== null) return 1;
      return a.i - b.i;
    })
    .map(({ app }) => app);
}
