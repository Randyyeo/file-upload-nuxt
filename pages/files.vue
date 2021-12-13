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
            <v-toolbar color="primary" dark
              ><h1>Upload your file</h1></v-toolbar
            >
            <v-card-text>
              <v-text-field label="Name of upload" v-model="name">
              </v-text-field>
              <v-file-input
                show-size
                counter
                label="File input"
              ></v-file-input>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="submit">Close</v-btn>
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
      dialog: false,
      name: null,
      transparent: "rgba(255, 255, 255, 0)",
    };
  },
  methods:{
    submit(){
      this.dialog = false;
    }
  }
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
