<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <widget-container-modal />
  <p></p>
  <h1>{{ title }}</h1>
  <div v-if="showModel">
    <Modal :header="header" :text="text" theme='sale' @close="toggleModel" />
  </div>
  <p></p>
  <input type="text" ref="name" placeholder="Enter Your Name" />
  <p></p>
  <button @click="toggleModel">Touch ME</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  components: { Modal },
  name: "App",
  data() {
    return {
      title: `My first Vue App`,
      header: `Signup for a giveaway`,
      text:`Grab the deals...`,
      showModel: false
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add(`active`);
      this.$refs.name.focus();
    },
    toggleModel() {
      this.showModel=!this.showModel
    }
  },
};
</script>

<style>
body {
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
  color: aquamarine;
}
input {
  background-color: aquamarine;
  text-transform: capitalize;
}
</style>
