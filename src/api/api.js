export const api = {
  search_users(searchstring){
    return fetch(`https://api.github.com/search/users?q=${searchstring}`).then(result => result.json())
  }
}
