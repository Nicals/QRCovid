<template>
  <div>
    <p>
      <router-link :to="{name: 'settings'}">Configurer</router-link>
    </p>

    <div v-if="qrCode">
      <img :src="qrCode">
      <p>
        {{ qrContent }}
      </p>
    </div>

    <button class="btn btn-primary" @click="generateQRCode">
      Biboup
    </button>

  </div>
</template>


<script>

import QRCode from 'qrcode';


export default {
  name: 'index-page',
  data() {
    return {
      goingOut: {
        reasons: ["walk"],
        startDate: "24/01/2020",
        startTime: "10h36",
      },
      qrCode: null,
      qrContent: null,
    };
  },
  mounted() {
    if (!localStorage.covidId)
    {
      this.$router.push({name: 'settings'});
    }
  },
  methods: {
    generateQRCode()
    {
      const covidId = JSON.parse(localStorage.covidId);

      const content = [
        `Cree le ${this.goingOut.startDate} a ${this.goingOut.startTime}`,
        `Nom: ${covidId.lastName}`,
        `Prenom: ${covidId.firstName}`,
        `Naissance: ${covidId.birthday} a ${covidId.birthPlace}`,
        `Adresse: ${covidId.address} ${covidId.city} ${covidId.zipcode}`,
        `Sortie: ${this.goingOut.startDate} a ${this.goingOut.startTime}`,
        `Motifs: ${this.goingOut.reasons.join('-')}`,
      ].join('; ');

      this.qrCode = QRCode.toDataURL(
        content,
        {
          errorCorrectionLevel: 'M',
          type: 'image/png',
          quality: 0.92,
          margin: 1,
        },
      ).then((dataURL) => {
        this.qrCode = dataURL;
      });

      this.qrContent = content;
    },
  },
};

</script>
