export async function getRepository(owner, repo) {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}`
  );

  if (!response.ok) {
    throw new Error("Repository not found");
  }

  return await response.json();
}