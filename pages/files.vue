<template>
  <div v-if="authenticated">
    <v-app-bar color="blue accent-4" dark>
      <v-toolbar-title class="ml-4">My files</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-btn text class="mr-4" @click="logout">Logout</v-btn>
    </v-app-bar>
    <v-container>
      <div style="width: 50%" class="text-right mx-auto">
        <!--       <v-btn >
        <v-icon>mdi-plus</v-icon>
      </v-btn> -->
        <v-dialog transition="dialog-top-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on"><v-icon>mdi-plus</v-icon></v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <div
                color="primary"
                class="d-flex px-5 py-3 blue align-content-center"
              >
                <h1>Upload your file</h1>
                <v-spacer></v-spacer>
                <v-btn icon @click="dialog.value = false"
                  ><v-icon>mdi-close</v-icon></v-btn
                >
              </div>
              <v-card-text>
                <v-text-field label="Name of upload" v-model="name">
                </v-text-field>
                <v-file-input
                  show-size
                  counter
                  label="File input"
                  name="file"
                  v-model="file"
                ></v-file-input>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="submit"
                  >Upload
                  <v-progress-circular
                    :width="3"
                    class="ml-2"
                    v-if="loading"
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-btn>
                <v-snackbar
                  class="mt-5"
                  v-model="snackbar"
                  :timeout="timeout"
                  :top="top"
                >
                  {{ text }}

                  <template v-slot:action="{ attrs }">
                    <v-btn
                      color="blue"
                      text
                      v-bind="attrs"
                      @click="snackbar = false"
                    >
                      Close
                    </v-btn>
                  </template>
                </v-snackbar>
                <v-snackbar
                  class="mt-5"
                  v-model="error"
                  :timeout="timeout"
                  :top="top"
                >
                  {{ error }}

                  <template v-slot:action="{ attrs }">
                    <v-btn
                      color="blue"
                      text
                      v-bind="attrs"
                      @click="snackbar = false"
                    >
                      Close
                    </v-btn>
                  </template>
                </v-snackbar>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
      <div v-if="files.length > 0">
        <v-card
          class="my-3 mx-auto"
          style="width: 50%"
          v-for="(card, index) in files"
          :key="index"
        >
          <v-card-title>{{ card[0] }}</v-card-title>
          <v-card-subtitle>{{ card[2] }} {{card[3]}}</v-card-subtitle>
          <v-card-text>
            <div class="d-flex align-content-center">
              <p class="mt-2">{{ card[1] }}</p>
              <v-spacer></v-spacer>
              <v-hover v-slot="{ hover }" open-delay="200">
                <v-icon :class="{ 'show-btns': hover }" style="cursor: pointer"
                  >mdi-cloud-download</v-icon
                >
              </v-hover>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div class="mt-5" v-else>
        <p class="text-center">
          You do not have any files uploaded. Press the "+" button to add some.
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
import API from "../api/API";
export default {
  name: "FilesPage",
  data() {
    return {
      top: true,
      file: null,
      drawer: false,
      snackbar: false,
      text: "File has been uploaded",
      timeout: 4000,
      loading: false,
      name: null,
      transparent: "rgba(255, 255, 255, 0)",
      authenticated: false,
      error: null,
      files: [],
    };
  },
  methods: {
    async submit() {
      this.loading = true;

      var form = new FormData();
      
      form.append("file", this.file, this.file.name);
      
      const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        var d = new Date();
        var day = d.getDate();
        var year = d.getFullYear();
        var month = months[d.getMonth()];
        var date = `${day} ${month} ${year}`;
        var seconds = d.getSeconds();
        var minutes = d.getMinutes();
        var hours = d.getHours();
        var time = `${hours}:${minutes}:${seconds}`;
        

      try {
        
        
        const token = window.localStorage.getItem("token");
        const res = await API.upload(token, form);
        var data = { name: this.name, filename: this.file.name, date, time };
        
        const res1 = await API.db(token, data);
        this.files.push([this.name, this.file.name, date, time]);
        setTimeout(() => {
          this.snackbar = true;
          this.loading = false;
        }, 2000);
      } catch (error) {
        this.error = "File upload has an error";
      }
    },
    logout() {
      window.localStorage.clear();
      this.$router.push("/");
    },
  },
  async mounted() {
    try {
      const token = window.localStorage.getItem("token");
      const res = await API.token(token);
      this.authenticated = true;
      const res1 = await API.getAll(token);
      const datas = res1.data;
      console.log(datas);
      for (var data of datas) {
        this.files.push([data.name, data.filename, data.date, data.time]);
      }
      console.log(this.files);
    } catch (err) {
      window.localStorage.clear();
      this.$router.push("/");
    }
  },
};
</script>
<style scoped>
.show-btns {
  color: rgba(8, 8, 8, 1) !important;
}
</style>
