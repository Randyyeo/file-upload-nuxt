<template>
  <v-row justify="center" align="center" style="margin-top: 10%">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline"> Login </v-card-title>
        <v-card-text>
          <v-text-field v-model="email" label="Email" filled></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            filled
          ></v-text-field>
          <v-btn color="primary" class="mb-2" v-on:click="login">Login</v-btn>
          <br />
          <a href="./register" 
            >Haven't made an account? Register here</a
          >
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    login() {
      console.log("HI");
    },
    
  },
};
</script>
