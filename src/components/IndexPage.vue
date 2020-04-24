<template>
  <div>
    <p>
      <router-link :to="{name: 'settings'}">Configurer</router-link>
    </p>

    <p>
      <router-link :to="{name: 'going-out'}">Je veux sortir</router-link>
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
      covidId: null,
      goingOut: null,
    };
  },
  mounted() {
    if (!localStorage.covidId)
    {
      this.$router.push({name: 'settings'});
    }

    this.covidId = JSON.parse(localStorage.covidId);

    if (localStorage.goingOut)
    {
      this.goingOut = JSON.parse(localStorage.goingOut);
    }
  },
  components: {
    Certificate,
  },
};

</script>
