<template>
  <div>
    <p>
      <router-link :to="{name: 'settings'}">Configurer</router-link>
    </p>

    <Certificate v-if="goingOut"
                 :going-out="goingOut"
                 :covid-id="covidId">
    </Certificate>
  </div>
</template>


<script>

import Certificate from './Certificate.vue';


export default {
  name: 'index-page',
  data() {
    return {
      goingOut: {
        reasons: ["walk"],
        startDate: "24/01/2020",
        startTime: "10h36",
      },
      covidId: null,
      qrCode: null,
      qrContent: null,
    };
  },
  mounted() {
    if (!localStorage.covidId)
    {
      this.$router.push({name: 'settings'});
    }

    this.covidId = localStorage.covidId;
  },
  components: {
    Certificate,
  },
};

</script>
