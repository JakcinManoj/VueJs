const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      if (this.counter > 0) {
        this.counter = this.counter - num;
      }
      // this.counter--;
    },
    reset() {
      this.$refs["namee"].value = "",
      this.name=""
    },
  },
});

app.mount("#events");
