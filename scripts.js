// How to define the data property of the vue application instance
const appProperties = {
    // data property
    data() {
        return {
            title: 'bulb challenge',
            bulb: true
            
            
        }
    },

    //method property
    methods: {
        Turn(type) {
           this.bulb =!this.bulb;
        }
    }
};

// How to create the application instance
const app = Vue.createApp(appProperties);

// How do we connect the application instance to the views (HTML)
app.mount("#app");
