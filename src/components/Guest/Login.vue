<template>
  <div class="container">
    <p>f.r@gmail.com</p>
    <p>florian</p>
    <form action="">
      <b-field label="Email">
        <b-input
          type="text"
          v-model="email"
          placeholder="Email"
          required
          oninvalid="this.setCustomValidity('Please fillout this field')"
          oninput="this.setCustomValidity('')"
          validation-message="An email is required"
        >
        </b-input>
      </b-field>
      <b-field label="Password">
        <b-input
          type="password"
          v-model="password"
          placeholder="Password"
          required
          oninvalid="this.setCustomValidity('Please fillout this field')"
          oninput="this.setCustomValidity('')"
          validation-message="A password is required"
        >
        </b-input>
      </b-field>
      <button type="button" class="button is-primary" v-on:click="login()">
        Login
      </button>
      <p>{{ message }}</p>

      <b-button
        type="button"
        class="button is-primary"
        v-on:click="$router.push('/register')"
      >
        Register
      </b-button>
    </form>
  </div>
</template>

<script>
import { login } from "../../scripts/AuthentificationApi";
export default {
  data() {
    return {
      email: "",
      password: "",
      message: ""
    };
  },
  methods: {
    async login() {
      if (this.password.length > 0 && this.email.length > 0) {
        try {
          const jsonResponse = await login(this.email, this.password);
          if (jsonResponse.token) {
            this.$cookies.set("token", jsonResponse.token);
            this.$cookies.set("name", jsonResponse.name); //
            this.$cookies.set("email", jsonResponse.email); //
            this.$router.push("/");
          } else {
            this.message = "Login failed";
          }
        } catch {
          this.message = "Login failed";
        }
      } else {
        this.message = "Invalid credentials";
      }
    }
  }
};
</script>

<style scoped></style>
