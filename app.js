const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
			confirmedname: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    remove(num) {
      if (this.counter < 1) return;
      this.counter -= num;
    },
    setName(event) {
			this.name = `${event.target.value} `;
		},
    confirm_input() {
      this.confirmedname= this.name,
      console.log(this.confirmedname);
    }
  },
});
app.mount("#events");
