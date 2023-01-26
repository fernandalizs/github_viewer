<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="2" v-if="user">
        <v-avatar><img :src="avatar"></v-avatar>
      </v-col>
      <v-col cols="5">
        <v-autocomplete
          v-model="user"
          label="Encontre seu usuário"
          :items="userlist"
          :loading="userloading"
          :search-input.sync="usersearch"
          item-text="login"
          color="deep-purple lighten-2"
          prepend-inner-icon="mdi-account"
          solo
          clearable
        >
          <template v-slot:item="data">
            <v-list-item-avatar>
              <v-img :src="data.item.avatar_url"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="data.item.login"></v-list-item-title>
            </v-list-item-content>
          </template>
        </v-autocomplete>
      </v-col>
      <v-col cols="5">
        <v-select
          v-model="repo"
          :items="repolist"
          :loading="repoloading"
          item-text="name"
          label="Selecione um repositório"
          color="deep-purple lighten-2"
          prepend-inner-icon="mdi-source-repository"
          return-object
          single-line
          solo
          clearable
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {debouncerDecorator} from '@/helpers/debouncer.js'
  import {api} from '~api'

  export default {
    data: () => ({
      user: null,
      repo: null,
      usersearch: null,
      userlist: [],
      repolist: [],
      userloading: false,
      repoloading: false,
      avatar: null
    }),
    methods: {
      searchUsersGithub: debouncerDecorator(async function () {
        this.userloading = true
        const data = await api.searchUsers(this.usersearch)
        this.userlist = data.items
        this.avatar = this.userlist.map(user => user.avatar_url)
        this.userloading = false
      }, 500),
      async listRepository() {
        this.repoloading = true
        const data = await api.listRepos(this.user)
        this.repolist = data
        this.repoloading = false
      }
    },
    watch: {
      usersearch() {
        this.searchUsersGithub()
      },
      user() {
        if(this.user){
          this.listRepository()
        }
      },
      repo() {
        this.$emit('repoSelected', this.repo)
      }
    },
  }
</script>
