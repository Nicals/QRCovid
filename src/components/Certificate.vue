<template>
  <div>
    <h1>ATTESTATION DE DÉPLACEMENT DÉROGATOIRE</h1>

    <div class="text-center">
      <img :src="qrCode">
    </div>

    <p>
      En application du décret n°2020-1310 du 29 octobre 2020 prescrivant les mesures
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
    Demeurant: {{ covidId.address }} {{ covidId.zipcode }} {{ covidId.city }}
    </p>

    <p>
      certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé
      par le décret n°2020-1310 du 29 octobre 2020 prescrivant les mesures générales
      nécessaires pour faire face àl'épidémie de Covid19 dans le cadre de l'état
      d'urgence sanitaire <small>[1]</small> :
    </p>

    <p>
      <span class="cert-tick">
        <span v-if="goingOut.reasons.includes('travail')">X</span>
      </span>
      Déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle
      ou un établissement d’enseignement ou de formation ; déplacements professionnels
      ne pouvant être différés;déplacements pour un concours ou un examen; <small>[2]</small>
    </p>

    <p>
      <span class="cert-tick">
        <span v-if="goingOut.reasons.includes('achats_culturel_cultuel')">X</span>
      </span>
      Déplacements pour se rendre dans un établissement culturel autorisé ou un lieu
      de culte ; déplacements pour effectuer des achats de biens, pour des services
      dont la fourniture est autorisée, pour les retraits de commandes et les livraisons
      à domicile;
    </p>

    <p>
      <span class="cert-tick">
        <span v-if="goingOut.reasons.includes('sante')">X</span>
      </span>
      Consultations, examens et soins ne pouvant être assurés à distance et achats
      de médicaments;
    </p>

    <p>
      <span class="cert-tick">
        <span v-if="goingOut.reasons.includes('famille')">X</span>
      </span>
      Déplacements pour motif familial impérieux, pour l’assistance aux personnes
      vulnérables et précaires ou la garde d’enfants;
    </p>

    <p>
      <span class="cert-tick">
        <span v-if="goingOut.reasons.includes('handicap')">X</span>
      </span>
      Déplacements des personnes en situation de handicap et leur accompagnant;
    </p>

    <p>
      <span class="cert-tick">
        <span v-if="goingOut.reasons.includes('sport_animaux')">X</span>
      </span>
      Déplacements en plein air ou vers un lieu de plein air, sans changement du
      lieu de résidence, dans la limite de trois heures quotidiennes et dans un
      rayon maximal de vingt kilomètres autour du domicile, liés soit à l’activité
      physique ou aux loisirs individuels, à l’exclusion de toute pratique sportive
      collective et de toute proximité avec d’autres personnes, soit à la promenade
      avec les seules personnes regroupées dans un même domicile, soit aux besoins
      des animaux de compagnie;
    </p>

    <p>
      <span class="cert-tick">
        <span v-if="goingOut.reasons.includes('convocation')">X</span>
      </span>
      Convocations judiciaires ou administratives et déplacements pour se rendre
      dans un service public;
    </p>

    <p>
      <span class="cert-tick">
        <span v-if="goingOut.reasons.includes('missions')">X</span>
      </span>
      Participation à des missions d’intérêt général sur demandede l’autorité
      administrative;
    </p>

    <p>
      <span class="cert-tick">
        <span v-if="goingOut.reasons.includes('enfants')">X</span>
      </span>
      Déplacements pour chercher les enfants à l’école et à l’occasion de leurs
      activités périscolaires;
    </p>

    <p>
      Fait à {{ covidId.city }} le {{ goingOut.startDate }} à {{ goingOut.startTime }}.
    </p>

    <div>
      <p class="my-0">
        <small class="text-muted">
          [1]:
          Les personnes souhaitant bénéficier de l'une de ces exceptions doivent
          se munir s'il y a lieu, lors de leurs déplacements hors de leur domicile,
          d'un document leur permettant de justifier que le déplacement considéré entre
          dans le champ de l'une de ces exceptions. 
        </small>
      </p>

      <p class="my-0">
        <small class="text-muted">
         [2]:
         A utiliser par les travailleurs non-salariés, lorsqu'ils ne peuvent
         disposer d'un justificatif de déplacement établi par leur employeur.
        </small>
      </p>
    </div>
  </div>
</template>


<style scoped>
.cert-tick {
  display: inline-block;
  height: 20px;
  width: 20px;
  border: 2px solid black;

  font-size: 15px;
}
</style>


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
        `Cree le: ${this.goingOut.startDate} a ${this.goingOut.startTime}`,
        `Nom: ${this.covidId.lastName}`,
        `Prenom: ${this.covidId.firstName}`,
        `Naissance: ${this.covidId.birthday} a ${this.covidId.birthPlace}`,
        `Adresse: ${this.covidId.address} ${this.covidId.zipcode} ${this.covidId.city}`,
        `Sortie: ${this.goingOut.startDate} a ${this.goingOut.startTime}`,
        `Motifs: ${this.goingOut.reasons.join(', ')}`,
      ].join(';\n');

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
