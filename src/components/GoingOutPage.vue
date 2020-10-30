<template>
  <div>
    <h1>Laissez-moi sortir !</h1>

    <div class="form-check">
      <input type="checkbox"
             class="form-check-input"
             id="_walk"
             v-model="reasons.walk">
      <label class="form-check-label" for="_walk">
        Je vais faire un tour
      </label>
    </div>

    <div class="form-check">
      <input type="checkbox"
             class="form-check-input"
             id="_food"
             v-model="reasons.food">
      <label class="form-check-label" for="_food">
        Je vais acheter à bouffer
      </label>
    </div>

    <div class="form-check">
      <input type="checkbox"
             class="form-check-input"
             id="_doctor"
             v-model="reasons.doctor">
      <label class="form-check-label" for="_doctor">
        Je vais chez le docteur
      </label>
    </div>

    <div class="form-check">
      <input type="checkbox"
             class="form-check-input"
             id="_family"
             v-model="reasons.family">
      <label class="form-check-label" for="_family">
        Je vais voir ma maman qui va pas bien
      </label>
    </div>

    <div class="form-check">
      <input type="checkbox"
             class="form-check-input"
             id="_work"
             v-model="reasons.work">
      <label class="form-check-label" for="_work">
        Je vais bosser
      </label>
      <small class="form-text text-muted">
        Je n'oublie pas de contacter mon syndicat si les conditions
        sanitaires de mon lieu de travail ne permettent pas d'assurer ma sécurité
      </small>
    </div>

    <div class="form-check">
      <input type="checkbox"
             class="form-check-input"
             id="_police"
             v-model="reasons.police">
      <label class="form-check-label" for="_police">
        Je suis convoqué chez les flics (ou autre administration).
      </label>
    </div>

    <div class="form-check">
      <input type="checkbox"
             class="form-check-input"
             id="_farm"
             v-model="reasons.farm">
      <label class="form-check-label" for="_farm">
        Je suis prof. Comme je ne travaille pas, je vais aller récolter des fraises
      </label>
    </div>

    <div class="form-check">
      <input type="checkbox"
             class="form-check-input"
             id="_handicap"
             v-model="reasons.handicap">
      <label class="form-check-label" for="_handicap">
        J'accompagne une personne en situation de handicap
      </label>
    </div>

    <div class="form-check">
      <input type="checkbox"
             class="form-check-input"
             id="_school"
             v-model="reasons.school">
      <label class="form-check-label" for="_school">
        Je vais chercher les gamins à l'école
      </label>
    </div>

    <form @submit.prevent="onSubmit">
      <div class="btn-group">
        <router-link
          :to="{name: 'index'}"
          class="btn btn-secondary"
          >
          Retour
        </router-link>

        <button type="submit" class="btn btn-primary">Valider</button>

      </div>
    </form>
  </div>
</template>


<script>

import moment from 'moment';

export default {
  name: 'going-out',
  data() {
    return {
      'reasons': {
        walk: false,
        food: false,
        doctor: false,
        family: false,
        work: false,
        police: false,
        farm: false,
        handicap: false,
        school: false,
      },
    };
  },
  mounted() {
    if (!localStorage.covidId)
    {
      this.$router.push({name: 'settings'});
    }
  },
  methods: {
    onSubmit() {
      const reasons = [];

      if (this.reasons.walk)
        reasons.push("sport_animaux");
      if (this.reasons.food)
        reasons.push("achats");
      if (this.reasons.doctor)
        reasons.push("sante");
      if (this.reasons.family)
        reasons.push("famille");
      if (this.reasons.work)
        reasons.push("travail");
      if (this.reasons.police)
        reasons.push("convocation");
      if (this.reasons.farm)
        reasons.push("missions");
      if (this.reasons.handicap)
        reasons.push("handicap");
      if (this.reasons.school)
        reasons.push("enfants");

      const goingOut = {
        reasons,
        startDate: moment().format('DD/MM/YYYY'),
        startTime: moment().format('HH[h]mm'),
      };

      localStorage.goingOut = JSON.stringify(goingOut);
      this.$router.push({name: 'index'});
    },
  },
};

</script>
