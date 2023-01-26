<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <v-banner v-if="!actualPath" class="text-left">
                  <v-icon>mdi-folder-account</v-icon>
                  {{repo.name}}
                </v-banner>
                <v-banner v-else>
                  <v-icon>mdi-folder-account</v-icon>
                  {{actualPath}}
                </v-banner>
              </tr>
            </thead>
            <tbody>
              <tr v-for="doc in docs" :key="doc.name">
                <td class="text-left" v-if="doc.type == 'dir'">
                  <v-icon class="icon">mdi-folder</v-icon>
                  <v-btn
                    x-small
                    color="deep-purple lighten-2"
                    @click="openFolder(doc.path)"
                  >
                    {{ doc.name }}
                  </v-btn>
                </td>
                <td v-else>
                  <v-icon class="icon">mdi-file-outline</v-icon>
                  {{ doc.name }}
                  </td>
              </tr>
              <div v-if="typeof currentPath == 'string'">
                <v-btn class="ma-2" outlined color="deep-purple lighten-2" @click="backFolder">
                  Voltar
                </v-btn>
              </div>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-progress-circular indeterminate color="deep-purple lighten-2" v-if="loading"></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  import {api} from '~api'

  export default {
    props: ['repo'],
    data: () => ({
      docs: [],
      // docsContent: [],
      currentPath: null,
      actualPath: null,
      loading: false,
    }),
    methods: {
      async listContent() {
        this.loading = true
        const files = await api.listContent(this.repo.owner.login, this.repo.name)
        this.docs = this.docs.concat(files)
        this.currentPath = null
        this.loading = false;
      },
      async listReposContent(path) {
        let gitPath = []
        this.loading = true
        const files = await api.listReposContent(this.repo.owner.login, this.repo.name, path)
        gitPath.push(this.repo.name, path)
        this.actualPath = gitPath.join('/')
        let newCurrentPathList = path.split("/");
        newCurrentPathList.pop();
        const newCurrentPath = newCurrentPathList.join("/");
        this.currentPath = newCurrentPath;
        this.docs = this.docs.concat(files);
        this.loading = false;
      },
      openFolder(path) {
        this.docs = [];
        this.listReposContent(path);
      },
      backFolder() {
        if (this.currentPath == "") {
          this.docs = [];
          this.listContent();
          this.actualPath = ''
        } else {
          this.docs = [];
          this.listReposContent(this.currentPath);
        }
      },
    },
    watch: {
      repo(){
        this.docs = []
        this.listContent()
      }
    }
  }
</script>
