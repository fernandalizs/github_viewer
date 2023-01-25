<template>
  <v-container>
    <github-repos @repoSelected="onRepoSelected"/>
    <!-- <github-issues :repo="repo"/> -->
    <github-repos-content :repo="repo"/>
  </v-container>
</template>

<script>
  // import GithubIssues from './GithubIssues.vue'
  import GithubRepos from './GithubRepos'
  import GithubReposContent from './GithubReposContent.vue'

  export default {
  components: {
    GithubRepos,
    // GithubIssues,
    GithubReposContent
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
