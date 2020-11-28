<template>
  <div class="text-center">
    <h1>Qr Covid</h1>

    <img src="/toilet_128.png" alt="Toilet paper logo">

    <p>
      Cette application est sous licence Beerware.
      Le code est open source et librement utilisable.
      Si l'application vous est utile et que vous rencontrez l'auteur, vous
      êtes libre de lui offrir une bière.
    </p>

    <p>
      Le code de l'application est distribué sur <a href="https://github.com/Nicals/QRCovid">github</a>.
    </p>

    <p>
      <router-link :to="{name: 'index'}"
                   class="btn btn-primary"
                   >
        Ok, pas mal.
      </router-link>
    </p>
  </div>
</template>


<script>

export default {
  name: 'about',
}

</script>
