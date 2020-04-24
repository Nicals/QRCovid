<template>
  <div>
    <h1>ATTESTATION DE DÉPLACEMENT DÉROGATOIRE</h1>

    <div class="text-center">
      <img :src="qrCode">
    </div>

    <p>
      En application de l'article 3 du décret du 23 mars 2020 préscrivant les mesures
      générales nécessaires pour faire face à l'épidémie de Covid19 dans le cadre de
      l'état d'urgence sanitaire
    </p>

    <p>
      je soussigné(e),
    </p>

    <p>
    Mme/M.: {{ covidId.firstName }} {{ covidId.lastName }}
    </p>

    <p>
    Né(e) le: {{ covidId.birthday }}
    </p>

    <p>
      A: {{ covidId.birthPlace }}
    </p>

    <p>
    Certifie  que  mon  déplacement  est  lié  au  motif  suivant  (cocher  la  case)  autorisé  par
    l'article I du décret du 16 mars 2020 portant réglementation des déplacements dans 
    le cadre de la lutte contre la propagation du virus Covid-19  :
    </p>

    <p>
      <span class="cert-tick" :class="{checked: goingOut.reasons.includes('travail')}"></span>
      Déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle, lorsqu'ils sont indispensables à l'exercice d’activités ne pouvant être organisées sous forme de télétravail ou déplacements professionnels ne pouvant être différés;
    </p>

    <p>
      <span class="cert-tick" :class="{checked: goingOut.reasons.includes('courses')}"></span>
      Déplacements pour effectuer des achats de fournitures nécessaires à l’activité professionnelle et des achats de première nécessité dans des établissements dont les activités demeurent autorisées (liste sur gouvernement.fr);
    </p>

    <p>
      <span class="cert-tick" :class="{checked: goingOut.reasons.includes('sante')}"></span>
      Consultations et soins ne pouvant être assurés à distance et ne pouvant être différés ; consultations et soins des patients atteints d'une affection de longue durée;
    </p>

    <p>
      <span class="cert-tick" :class="{checked: goingOut.reasons.includes('famille')}"></span>
      Déplacements pour motif familial impérieux, pour l’assistance aux personnes vulnérables ou la garde d’enfants;
    </p>

    <p>
      <span class="cert-tick" :class="{checked: goingOut.reasons.includes('sport')}"></span>
      éplacements brefs, dans la limite d'une heure quotidienne et dans un rayon maximal d'un kilomètre autour du domicile, liés soit à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive collective et de toute proximité avec d'autres personnes, soit à la promenade avec les seules personnes regroupées dans un même domicile, soit aux besoins des animaux de compagnie.
    </p>

    <p>
      <span class="cert-tick" :class="{checked: goingOut.reasons.includes('judiciaire')}"></span>
      Convocation judiciaire ou administrative.
    </p>

    <p>
      <span class="cert-tick" :class="{checked: goingOut.reasons.includes('missions')}"></span>
      Participation à des missions d’intérêt général sur demande de l’autorité administrative.
    </p>

    <p>
      Fait à {{ covidId.city }} le {{ goingOut.startDate }} à {{ goingOut.startTime }}.
    </p>
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
