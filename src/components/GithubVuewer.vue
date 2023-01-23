<template>
  <v-container>
    <github-repos @repoSelected="onRepoSelected"/>
    <github-issues :repo="repo"/>
  </v-container>
</template>

<script>
  import GithubIssues from './GithubIssues.vue'
  import GithubRepos from './GithubRepos'

  export default {
  components: {
    GithubRepos,
    GithubIssues
  },
  data: () => ({
    repo: null
  }),
  methods: {
    onRepoSelected(repo) {
      this.repo = repo
    }
  }
  }
</script>
