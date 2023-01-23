export const api = {
  async search_users(searchstring){
    const url = `https://api.github.com/search/users?q=${searchstring}`
    const result = await fetch(url)
    return await result.json()
  },
  async list_repos(username){
    const url = `https://api.github.com/users/${username}/repos`
    const result = await fetch(url)
    return await result.json
  }
}
