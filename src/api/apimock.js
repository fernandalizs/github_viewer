function later(result) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(result)
        }, 1000);
    });
}

export const api = {
    async searchUsers(searchstring){
        const result = {
            items: [
                {login: 'joao'},
                {login: 'jose'},
            ]
        }
        return later(result)
    },
    async listRepos(username){
        const result = [
            {name: 'Django', owner: 'joao'},
            {name: 'Vue.js', owner: 'jose'},
        ]
        return later(result)
    }
}
