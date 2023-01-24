<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Número</th>
                <th class="text-left">Título</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="issue in issues" :key="issue.number">
                <td>{{ issue.number }}</td>
                <td>{{ issue.title }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
        <v-btn color="primary" v-if="hasMoreIssues" @click="listIssues">MAIS</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {api} from '~api'

export default {
  props: ['repo'],
  data: () => ({
    issues: [],
    loading: false,
    hasMoreIssues: false,
    currentPage: 1
  }),
  methods: {
    async listIssues(){
      this.loading = true
      const moreIssues = await api.listIssues(this.repo.owner.login, this.repo.name, this.currentPage)
      this.issues = this.issues.concat(moreIssues)
      this.currentPage++
      this.loading = false
      this.hasMoreIssues = moreIssues.length > 0
    }
  },
  watch: {
    repo(){
      this.issues = []
      if (this.repo) {
        this.hasMoreIssues = false
        this.currentPage = 1
        this.listIssues()
      } else {
        this.issues = []
        this.hasMoreIssues = false
        this.currentPage = 1
      }
    }
  }
}
</script>
