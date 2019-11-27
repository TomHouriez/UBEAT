<template>
  <div class="container">
    <div class="formContainer">
      <form action="">
        <b-field label="Name">
          <b-input
            type="text"
            v-model="name"
            placeholder="Name"
            required
            oninvalid="this.setCustomValidity('Please fillout this field')"
            oninput="this.setCustomValidity('')"
            validation-message="An email is required"
          >
          </b-input>
        </b-field>
        <b-field label="Email">
          <b-input
            type="email"
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
            v-model="password1"
            placeholder="Password"
            required
            oninvalid="this.setCustomValidity('Please fillout this field')"
            oninput="this.setCustomValidity('')"
            validation-message="A password is required"
          >
          </b-input>
        </b-field>
        <b-field label="Repeat password">
          <b-input
            type="password"
            v-model="password2"
            placeholder="Password"
            required
            oninvalid="this.setCustomValidity('Please fillout this field')"
            oninput="this.setCustomValidity('')"
            validation-message="A password is required"
          >
          </b-input>
        </b-field>
        <button type="submit" class="button is-primary" v-on:click="register">
          Register
        </button>
        <p class="message ">{{ message }}</p>
        <b-button
          type="button"
          class="button is-primary"
          v-on:click="$router.push('/login')"
          >Login</b-button
        >
      </form>
    </div>
  </div>
</template>

<script>
import { register } from "../../scripts/AuthentificationApi";

export default {
  data() {
    return {
      name: "",
      email: "",
      password1: "",
      password2: "",
      message: ""
    };
  },
  methods: {
    valideCredentials() {
      return (
        this.password1.length > 0 &&
        this.password2.length > 0 &&
        this.password1 == this.password2 &&
        this.name.length > 0 &&
        this.email.length > 0
      );
    },
    async register() {
      if (this.password1 != this.password2) {
        this.message = "Passwords are different";
        return;
      }
      if (this.valideCredentials()) {
        try {
          const jsonResponse = await register(
            this.name,
            this.email,
            this.password1
          );
          if (jsonResponse.id) {
            this.$buefy.snackbar.open(`Registration successfull`);
            this.$router.push("/login");
          } else {
            this.message = "Registration failed";
          }
        } catch {
          this.message = "Registration failed";
        }
      } else {
        this.message = "Invalid credentials";
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.formContainer {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 400px;
  flex: 1;
}

button {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.message {
  text-align: center;
  color: red;
}
</style>
