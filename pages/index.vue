<template>
  <v-container fluid>
    <v-row justify="center" align="center"  class="contain">
      <v-col cols="12" lg="4" class="pl-5">
        <div style="padding-left: 20%">
          <h1>File Upload</h1>
          <p>Upload your files in this website to store them and retrieve them again</p>
          <v-btn rounded color="primary" @click="route">Proceed to login/register</v-btn>
        </div>
      </v-col>
      <v-col cols="12" lg="8" class="pr-5">
        <div style="width: 100%">
          <img src="/background.png" alt="" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api/API";
export default {
  name: "IndexPage",
  methods:{
    route(){
      this.$router.push("/login")
    }
  }
};
</script>
<style scoped>
img {
  max-width: 100%;
  height: auto;
}

.contain{
  margin-top: 2%;
}

@media screen and (max-width: 1264px) {
  .contain{
    margin-top: 10%;
    
  }
}
</style>
