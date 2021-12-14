<template>
  <v-container>
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
              
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
            ></v-text-field>
            <v-btn color="primary" class="mb-2" @click="login"
              >Login
              <v-progress-circular
                :width="3"
                class="ml-2"
                v-if="loading"
                indeterminate
                color="primary"
              ></v-progress-circular
            ></v-btn>
            <br />
            <a href="./register">Haven't made an account? Register here</a>
            <p v-if="error" class="red--text">
              Please check that you have done the verification. If yes, you have
              entered an incorrect email/password. Please try again.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api/API";
export default {
  name: "LoginPage",
  data() {
    return {
      show: false,
      email: null,
      password: null,
      loading: false,
      error: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      if (this.email && this.password) {
        const data = { email: this.email, password: this.password };
        try {
          const res = await API.signin(data);
          const { token } = res.data;

          window.localStorage.setItem("token", token);
          this.$router.push("/files");
        } catch (error) {
          this.error = true;
        }
      } else {
        this.isLoading = false;
        this.error = true;
      }
    },
  },
};
</script>
