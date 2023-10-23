<template>
  <q-page class="box">
    <div class="text-center text-title">
      <span
        >Create new <br />
        account</span
      >
    </div>
    <div class="rowinput q-mx-lg">
      <label>Username</label>
      <div class="input-text">
        <input
          type="text"
          placeholder="Enter your username"
          style="width: 100%; border: 1px solid #c7c4c4"
        />
      </div>
    </div>
    <div class="rowinput q-mx-lg">
      <label>Fullname</label>
      <div class="input-text">
        <input
          type="text"
          placeholder="Enter your fullname"
          style="width: 100%; border: 1px solid #c7c4c4"
        />
      </div>
    </div>
    <div class="rowinput q-mx-lg">
      <label>Password</label>
      <div class="input-text">
        <input
          type="text"
          placeholder="Enter your username"
          style="width: 100%; border: 1px solid #c7c4c4"
        />
      </div>
    </div>
    <div class="rowinput q-mx-lg">
      <label>Confirm Password</label>
      <div class="input-text">
        <input
          type="text"
          placeholder="Enter your username"
          style="width: 100%; border: 1px solid #c7c4c4"
        />
      </div>
    </div>
    <div class="rowinput q-mx-lg">
      <button @click="regisFunction">Register</button>
      <div class="text-center">{{ message }}</div>
    </div>
    <div class="fixed-bottom text-center dont-have">
      Already have an account ? <a @click="direct">login</a>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    regisFunction() {
      this.$router.push("/dashboard");
      // this.message= 'Test...'
      // setTimeout(() => {
      //   this.message= ''
      // }, 2000);
    },
    direct() {
      this.$router.push("/");
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
.box{
  padding-top: 70px;
}
.box span {
  font-size: 37px;
  font-family: "Roboto";
  font-weight: 600;
  line-height: normal;
}
.box .text-title{
  margin-bottom: 40px;
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
