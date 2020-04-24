<template>
  <div>
    <p>
      <router-link :to="{name: 'settings'}">Configurer</router-link>
    </p>
  </div>
</template>


<script>

export default {
  name: 'index-page',
  mounted() {
    if (!localStorage.covidId)
    {
      this.$router.push({name: 'settings'});
    }
  },
};

</script>
