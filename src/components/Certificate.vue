<template>
  <div>
    <img :src="qrCode">
  </div>
</template>


<script>

import QRCode from 'qrcode';

export default {
  name: 'certificate',
  data() {
    return {
      qrContent: null,
    };
  },
  props: [
    'goingOut',
    'covidId',
  ],
  asyncComputed: {
    async qrCode() {
      const content = [
        `Cree le ${this.goingOut.startDate} a ${this.goingOut.startTime}`,
        `Nom: ${this.covidId.lastName}`,
        `Prenom: ${this.covidId.firstName}`,
        `Naissance: ${this.covidId.birthday} a ${this.covidId.birthPlace}`,
        `Adresse: ${this.covidId.address} ${this.covidId.city} ${this.covidId.zipcode}`,
        `Sortie: ${this.goingOut.startDate} a ${this.goingOut.startTime}`,
        `Motifs: ${this.goingOut.reasons.join('-')}`,
      ].join('; ');

      return await QRCode.toDataURL(
        content,
        {
          errorCorrectionLevel: 'M',
          type: 'image/png',
          quality: 0.92,
          margin: 1,
        },
      );
    },
  },
};

</script>
