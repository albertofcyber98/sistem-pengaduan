<template>
  <q-page class="box">
    <div class="text-center">
      <img alt="Login logo" src="~assets/login.png" style="width: 300px" />
    </div>
    <form @submit.prevent="loginFunction">
      <div class="rowinput q-mx-lg">
        <label>Username</label>
        <div class="input-text">
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            style="width: 100%; border: 1px solid #c7c4c4"
          />
        </div>
      </div>
      <div class="rowinput q-mx-lg">
        <label>Password</label>
        <div class="input-text">
          <input
            type="text"
            name="password"
            placeholder="Enter your username"
            style="width: 100%; border: 1px solid #c7c4c4"
          />
        </div>
      </div>
      <p class="text-center text-red" v-show="message">Invalid Credential</p>
      <div class="rowinput q-mx-lg">
        <button type="submit">Login</button>
      </div>
    </form>
    <div class="mt-5 text-center dont-have">
      Don’t have an account ? <a @click="direct">create one</a>
    </div>
  </q-page>
</template>

<script>
import { endpoints } from "../constanta/endpoint";
import axios from "axios";
import qs from 'qs'
export default {
  data() {
    return {
      message: false,
    };
  },
  methods: {
    async loginFunction(event) {
      const els = event.target.elements;
      const username = els.username.value;
      const password = els.password.value;
      const payload = {
        username,
        password,
      };
      const result = await axios.post(
        `${endpoints}post_login.php`,
        qs.stringify(payload),
      );
      const checkRole = result.data.response
      if (checkRole == "pegawai") {
        this.$router.push("/dashboard-admin");
      } else if (checkRole == "pelapor") {
        this.$router.push("/dashboard-user");
      } else {
        this.message = true;
        setTimeout(() => {
          this.message = false;
        }, 2000);
      }
    },
    direct() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.dont-have {
  color: #c7c4c4;
  margin-bottom: 20px;
}
.dont-have a {
  text-decoration: none;
  color: #61bb86;
  font-weight: 500;
}
.box {
  padding-top: 70px;
}
button {
  border-radius: 25px;
  background: #61bb86;
  border: none;
  color: #fff;
  padding: 12px;
  width: 100%;
  margin-top: 30px;
  text-align: center;
  transition: all ease-in 0.3s;
}
button:active {
  background: #469c6a;
}
label {
  color: #000;
  font-family: "Roboto";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.rowinput {
  margin-bottom: 20px;
}
.input-text {
  margin-top: 6px;
}
input {
  padding: 14px 15px;
  border-radius: 5px;
  font-size: 12px;
}
input::placeholder {
  color: #c7c4c4;
  font-size: 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
input:focus {
  outline: none !important;
}
</style>
