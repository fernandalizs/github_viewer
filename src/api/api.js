async function fetch_all_pages(url){
  let nextPage = true
  let result = []
  let page = 1
  while(nextPage){
      const response = await fetch(`${url}?page=${page}`)
      const tmpitems = await response.json()
      if(tmpitems.length > 0){
          result = result.concat(tmpitems)
          page++
      } else {
          nextPage = false
      }
  }
  return result
}

export const api = {
  async searchUsers(searchstring){
    const url = `https://api.github.com/search/users?q=${searchstring}`
    const response = await fetch(url)
    return await response.json()
  },
  async listRepos(username){
    const url = `https://api.github.com/users/${username}/repos`
    const data = await fetch_all_pages(url)
    return data
  },
  async listIssues(owner, name, page) {
    const url = `https://api.github.com/repos/${owner}/${name}/issues?page=${page}`
    const response = await fetch(url)
    return await response.json()
  },
  async listReposContent(owner, repo, path) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
    const response = await fetch(url)
    return await response.json()
  },
  async listContent(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/`
    const response = await fetch(url)
    return await response.json()
  },
  async treeRepos(owner, repo, tree) {
    const url = `https://api.github.com/repos/${owner}/${repo}/git/tree/${tree}`
    const response = await fetch(url)
    return await response.json()
  }
}
