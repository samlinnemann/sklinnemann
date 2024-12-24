//Creating vue app
const app = Vue.createApp({
    //Reactive state of app
    data() {
      return {
        //Array of objects
        photos: [
          { url: "images/personal (1).jpg", description: "Binx's first Halloween" },
          { url: "images/personal (2).jpg", description: "Our first national park" },
          { url: "images/personal (3).jpg", description: "Our trip to Lake Placid" },
          { url: "images/personal (4).jpg", description: "2 year anniversary" },
          { url: "images/personal (5).jpg", description: "Binx's adoption" },
          { url: "images/personal (6).jpg", description: "2023 hall formal" }
        ]
      };
    },
    
    mounted() {
      console.log('Vue application mounted successfully'); //Log when app initialized
      console.log('Gallery data loaded:', this.photos); //Log current photo data
    }
  });
  
  //Mount the Vue application to the DOM element with the ID 'app'
  app.mount("#app");
  