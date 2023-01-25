<template>
  <v-app>
    <v-app-bar
      max-height="60px"
      color="indigo lighten-2"
      class="d-flex align-center"
      dense
      dark
    >
      <v-btn class="ml-2" icon href="https://github.com/fernandalizs" target="_blank">
        <v-icon x-large>mdi-github</v-icon>
      </v-btn>
      <v-toolbar-title>GitHub Vuewer</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <GithubVuewer/>
    </v-main>
  </v-app>
</template>

<script>
import GithubVuewer from './components/GithubVuewer';

export default {
  name: 'App',

  components: {
    GithubVuewer,
  },

  data: () => ({
    //
  }),
};
</script>
