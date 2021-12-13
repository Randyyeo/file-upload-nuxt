<template>
  <v-container>
    <v-row justify="center" align="center" style="margin-top: 10%">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline"> Register </v-card-title>
          <v-card-text>
            <v-text-field v-model="name" label="Name" filled></v-text-field>
            <v-text-field v-model="email" label="Email" filled></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              filled
            ></v-text-field>
            <v-text-field
              v-model="re_password"
              label="Re-enter Password"
              filled
            ></v-text-field>
            <v-btn color="primary" class="mb-2" v-on:click="login"
              >Register</v-btn
            >
            <br />
            <a href="/" 
              >Already have an account? Login here</a
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      re_password: null,
    };
  },
  methods: {
    login() {
      console.log("HI");
    },
  },
};
</script>
