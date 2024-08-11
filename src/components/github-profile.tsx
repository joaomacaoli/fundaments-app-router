export async function GithubProfile() {
  await new Promise(resolve => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/joaomacaoli')
  const user = await response.json()

  return <pre>{JSON.stringify(user.name, null, 2)}</pre>
}
