<template>
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
            <div color="primary" class="d-flex px-5 py-3 blue align-content-center"
              ><h1>Upload your file</h1>
              <v-spacer></v-spacer>
                <v-btn  icon @click="dialog.value = false"
                  ><v-icon>mdi-close</v-icon></v-btn
                ></div
            >
            <v-card-text>
              <v-text-field label="Name of upload" v-model="name">
              </v-text-field>
              <v-file-input show-size counter label="File input"></v-file-input>
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
                top="true"
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
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>
    <v-card class="my-3 mx-auto" style="width: 50%">
      <v-card-title>Name of upload</v-card-title>
      <v-card-subtitle>Uploaded Date</v-card-subtitle>
      <v-card-text>
        <div class="d-flex align-content-center">
          <p class="mt-2">File name</p>
          <v-spacer></v-spacer>
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-icon :class="{ 'show-btns': hover }" style="cursor: pointer"
              >mdi-cloud-download</v-icon
            >
          </v-hover>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "InspirePage",
  data() {
    return {
      snackbar: false,
      text: "File has been uploaded",
      timeout: 4000,
      loading: false,
      name: null,
      transparent: "rgba(255, 255, 255, 0)",
    };
  },
  methods: {
    submit() {
      this.loading = true;
      setTimeout(() => {
        this.snackbar = true;
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
<style scoped>
.show-btns {
  color: rgba(8, 8, 8, 1) !important;
}

/* .v-icon {
  transition: opacity 0.4s ease-in-out;
}

.v-icon:not(.on-hover) {
  opacity: 0.6;
} */
</style>
