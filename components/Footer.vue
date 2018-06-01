<template>
  <footer class="cf lh-copy mt6">
    <div class="fl w-100 w-50-ns tc tl-ns">
    <!-- &copy; 2018 <span class="fw4">Maximilian Speicher</span>. -->
      Made with <i class="fas fa-coffee"></i> in <span class="fw4">Ann Arbor.</span><br />
      Powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a> and <a href="http://tachyons.io/" target="_blank">Tachyons</a>.
      <div class="mt4">
        <privacy-policy></privacy-policy>
      </div>
    </div>
    <div class="fl mt4 mt0-ns w-100 w-50-ns tc tr-ns">
      <div class="social-media">
        <a class="dim" href="https://www.researchgate.net/profile/Maximilian_Speicher"><i class="fab fa-researchgate fa-2x mh2"></i></a>
        <a class="dim" href="https://www.linkedin.com/in/maximilianspeicher/"><i class="fab fa-linkedin-in fa-2x mh2"></i></a>
        <a class="dim" href="https://github.com/maxspeicher/"><i class="fab fa-github fa-2x mh2"></i></a>
        <a class="dim" href="#" v-on:click="strikeMeDownWithAllYourHatred"><i class="fab fa-sith fa-2x mh2"></i></a>
        <a class="dim" href="https://medium.com/@maxspeicher"><i class="fab fa-medium-m fa-2x mh2"></i></a>
      </div>
    </div>
    <div class="back-to-top">
      <a class="dim bw0" href="#top"><i class="fas fa-arrow-alt-circle-up fa-lg"></i></a>
    </div>
  </footer>
</template>

<style>
  .back-to-top {
    bottom: 1em;
    position: fixed;
    right: 1em;
  }
</style>

<script>
import PrivacyPolicy from "~/components/PrivacyPolicy.vue"

export default {
  components: {
      PrivacyPolicy
  },
  methods: {
    strikeMeDownWithAllYourHatred(e) {
      e.preventDefault();
      window.toggleNerdMode();
    }
  }
}
</script>
