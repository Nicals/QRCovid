<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <!-- brand -->
  <router-link :to="{name: 'index'}" class="navbar-brand">QRCovid 2</router-link>

  <!-- hamburger -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-items" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- actual navbar -->
  <div class="collapse navbar-collapse" id="navbar-items">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item" :class="{active: $route.name == 'settings'}">
        <router-link :to="{name: 'settings'}"
                     class="nav-link"
                     :class="{active: $route.name == 'settings'}"
                     >
          Configurer
        </router-link>
      </li>
      <li class="nav-item mr-auto mt-2 mt-lg-0">
        <router-link :to="{name: 'about'}"
                     class="nav-link"
                     :class="{active: $route.name == 'about'}"
                     >
          A propos
        </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>

export default {
}

</script>
