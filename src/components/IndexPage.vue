<template>
  <div>
    <Certificate v-if="goingOut"
                 :going-out="goingOut"
                 :covid-id="covidId">
    </Certificate>

    <div class="text-center p-5">
      <button v-if="goingOut"
              class="btn btn-danger"
              @click="resetGoingOut">
        Terminer la sortie
      </button>
      <router-link v-else
                   :to="{name: 'going-out'}"
                   class="btn btn-primary"
                   >
        Laissez-moi sortir !
      </router-link>
    </div>
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
  methods: {
    resetGoingOut() {
      localStorage.removeItem('goingOut');
      this.goingOut = null;
    },
  },
  components: {
    Certificate,
  },
};

</script>
