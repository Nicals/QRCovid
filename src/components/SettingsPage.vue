<template>
  <div>
    <h1>Configuration</h1>

    <p v-if="firstTime"
       class="text-danger">
      On rempli tout ça avant d'aller plus loin !
    </p>

    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="_first-name">
          Prénom
        </label>
        <input type="text"
               id="_first-name"
               class="form-control"
               required
               v-model="settings.firstName">
      </div>

      <div class="form-group">
        <label for="_last-name">
          Nom
        </label>
        <input type="text"
               id="_last-name"
               class="form-control"
               required
               v-model="settings.lastName">
      </div>

      <div class="form-group">
        <label for="_birthday">
          Date de naissance
        </label>
        <input type="text"
               id="_birthdate"
               class="form-control"
               required
               v-model="settings.birthday">
        <small class="form-text text-muted">Au format (jj/mm/aaaa)</small>
      </div>

      <div class="form-group">
        <label for="_birth-place">
          Ville de naissance
        </label>
        <input type="text"
               id="_birth-place"
               class="form-control"
               required
               v-model="settings.birthPlace">
      </div>

      <div class="form-group">
        <label for="_address">
          Adresse
        </label>
        <input type="text"
               id="_address"
               class="form-control"
               required
               v-model="settings.address">
      </div>

      <div class="form-group">
        <label for="_city">
          Ville
        </label>
        <input type="text"
               id="_city"
               class="form-control"
               required
               v-model="settings.city">
      </div>

      <div class="form-group">
        <label for="_zipcode">
          Code postal
        </label>
        <input type="text"
               id="_zipcode"
               class="form-control"
               required
               v-model="settings.zipcode">
      </div>

      <div class="btn-group">
        <router-link
          :to="{name: 'index'}"
          class="btn btn-secondary"
          >
          Retour
        </router-link>

        <button type="submit"
                class="btn btn-primary">
          Enregistrer
        </button>
      </div>
    </form>
  </div>
</template>


<script>

export default {
  name: 'settings-page',
  data() {
    return {
      firstTime: true,
      settings: {
        firstName: '',
        lastName: '',
        birthday: '',
        birthPlace: '',
        address: '',
        city: '',
        zipcode: '',
      },
    };
  },
  mounted() {
    if (localStorage.covidId)
    {
      this.settings = JSON.parse(localStorage.covidId);
      this.firstTime = false;
    }
  },
  methods: {
    onSubmit() {
      window.localStorage.covidId = JSON.stringify(this.settings);
      this.$router.push({name: 'index'});
    },
  },
};

</script>
