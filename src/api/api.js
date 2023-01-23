export const api = {
  async search_users(searchstring){
    const url = `https://api.github.com/search/users?q=${searchstring}`
    const result = await fetch(url)
    return await result.json()
  },
  async list_repos(username, page){
    if (!page){
      page = 1
    }
    const url = `https://api.github.com/users/${username}/repos?page=${page}`
    const result = await fetch(url)
    return await result.json()
  }
}
