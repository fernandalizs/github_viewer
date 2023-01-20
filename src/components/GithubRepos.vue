<template>
  <v-container>
    <v-autocomplete
      v-model="user"
      :items="userlist"
      :loading="userloading"
      :search-input.sync="usersearch"
      item-text="login"
    />
  </v-container>
</template>

<script>
  let _debounceUser = null
  export default {
    data: () => ({
      user: null,
      usersearch: null,
      userlist: [],
      userloading: false,
    }),
    methods: {
      procuraUsuariosGithubDebounced(){
        if (_debounceUser) {
          clearTimeout(_debounceUser)
        }
        _debounceUser = setTimeout(() => {
          this.procuraUsuariosGithub()
          _debounceUser = null
        }, 500)
      },
      procuraUsuariosGithub() {
        console.log('faz de conta que eu perguntei pro github:' + this.usersearch)
        setTimeout(() => {
          setTimeout(() => {
            this.userlist = [
              {login: 'joao'},
              {login: 'jose'}
            ]
            this.userloading = false
          }, 1000)
        })
      }
    },
    watch: {
      usersearch() {
        this.userloading = true
        this.procuraUsuariosGithub()
      }
    },
  }
</script>
