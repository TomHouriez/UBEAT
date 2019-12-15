<template>
  <div class="container">
    <div class="formContainer">
      <p>f.r@gmail.com</p>
      <p>florian</p>
      <h1 id="regSuccess" v-if="this.reg">
        Registration successful. Please login
      </h1>
      <form action="" id="loginForm">
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
        <p class="message">{{ message }}</p>

        <p class="registrationMessage">If you want to sign up:</p>
        <b-button
          type="button"
          class="button is-primary"
          v-on:click="$router.push('/register')"
        >
          Register
        </b-button>
      </form>
    </div>
  </div>
</template>

<script>
import { login } from "../../scripts/AuthentificationApi";
export default {
  data() {
    return {
      email: "",
      password: "",
      message: "",
      reg: false
    };
  },
  async created() {
    console.log(this.$route.params);
    this.reg = this.$route.params.reg;
  },
  methods: {
    async login() {
      document.getElementById("loginForm").checkValidity();
      if (this.password.length > 0 && this.email.length > 0) {
        try {
          const jsonResponse = await login(this.email, this.password);
          if (jsonResponse.token) {
            this.$cookies.set("token", jsonResponse.token);
            this.$cookies.set("name", jsonResponse.name);
            this.$cookies.set("email", jsonResponse.email);
            this.$cookies.set("id", jsonResponse.id);
            this.$router.push("/");
          } else {
            this.message = "Login failed";
          }
        } catch (err) {
          this.message = "Login failed";
        }
      } else {
        this.message = "Invalid credentials";
      }
    }
  }
};
</script>

<style scoped>
#regSuccess {
  color: green;
  font-size: 1.3em;
  align-content: center;
}

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

.registrationMessage {
  text-align: center;
}
.message {
  text-align: center;
  color: red;
}
</style>
