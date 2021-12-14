<template>
  <v-container>
    <v-row justify="center" align="center" style="margin-top: 10%">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline"> Register </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="firstName"
                  label="First Name"
                  filled
                  :rules="[() => !!firstName || 'This field is required']"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="lastName"
                  label="Last Name"
                  filled
                  :rules="[() => !!lastName || 'This field is required']"
                ></v-text-field
              ></v-col>
            </v-row>

            <v-text-field v-model="email" label="Email" type="email" filled :rules="[() => !!email || 'This field is required']"></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              filled
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
              :rules="[() => !!password || 'This field is required']"
            >
              ></v-text-field
            >
            <v-text-field
              v-model="re_password"
              label="Re-enter Password"
              filled
              :type="show_re ? 'text' : 'password'"
              :append-icon="show_re ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show_re = !show_re"
              :rules="[() => !!re_password || 'This field is required']"
            >
              ></v-text-field
            >
            <v-btn color="primary" class="mb-2" @click="register"
              >Register</v-btn
            >
            <br />
            <a href="/">Already have an account? Login here</a>
            <p v-if="error" class="red--text">
              {{ error }}
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
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      re_password: null,
      loading: false,
      error: null,
      show: false,
      show_re: false
    };
  },
  methods: {
    async register() {
      if (
        this.firstName &&
        this.lastName &&
        this.email &&
        this.password &&
        this.re_password
      ) {
        try {
          const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            re_password: this.re_password,
          };
          const res = await API.signup(data);

          const { token } = res.data;

          window.localStorage.setItem("token", token);
          this.$router.push("/files");
        } catch (error) {
          this.isLoading = false;
          this.error = error.response.data.message;
        }
      } else {
        this.loading = false;
        this.error = "You have not filled in all of the required details yet";
      }
    },
  },
};
</script>
