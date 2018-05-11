<template>
  <footer class="tc mt6">
      Made with <i class="fas fa-coffee"></i> in Ann Arbor, MI.
      Powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a> and <a href="http://tachyons.io/" target="_blank">Tachyons</a>.
      <div class="mv4">
        <a class="dim" href="https://www.researchgate.net/profile/Maximilian_Speicher"><i class="fab fa-researchgate fa-2x mh2"></i></a>
        <a class="dim" href="https://www.linkedin.com/in/maximilianspeicher/"><i class="fab fa-linkedin-in fa-2x mh2"></i></a>
        <a class="dim" href="https://github.com/maxspeicher/"><i class="fab fa-github fa-2x mh2"></i></a>
        <a class="dim" href="#" v-on:click="strikeMeDownWithAllYourAnger"><i class="fab fa-sith fa-2x mh2"></i></a>
        <a class="dim" href="https://medium.com/@maxspeicher"><i class="fab fa-medium-m fa-2x mh2"></i></a>
      </div>
  </footer>
</template>

<script>
export default {
  methods: {
    strikeMeDownWithAllYourAnger(e) {
      e.preventDefault();
      window.toggleNerdMode();
    }
  }
}
</script>
