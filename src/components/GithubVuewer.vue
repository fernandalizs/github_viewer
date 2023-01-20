<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <github-repos/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import GithubRepos from './GithubRepos'

  export default {
  components: {
    GithubRepos
  },
    data: () => ({
    
    }),
  }
</script>
