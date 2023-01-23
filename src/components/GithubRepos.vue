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
  import {debouncerDecorator} from '@/helpers/debouncer.js'
  import {api} from '@/api/api.js'

  export default {
    data: () => ({
      user: null,
      usersearch: null,
      userlist: [],
      userloading: false,
    }),
    methods: {
      procuraUsuariosGithub: debouncerDecorator(function () {
        this.userloading = true
        api.search_users(this.usersearch).then(data => {
          this.userlist = data.items
          this.userloading = false
        })
      }, 500),
    },
    watch: {
      usersearch() {
        this.procuraUsuariosGithub()
      }
    },
  }
</script>
