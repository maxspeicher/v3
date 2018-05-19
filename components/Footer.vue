<template>
  <footer class="tc mt6">
      Made with <i class="fas fa-coffee"></i> in Ann Arbor, MI.
      Powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a> and <a href="http://tachyons.io/" target="_blank">Tachyons</a>.
      <div class="mt4">
        <a href="https://www.iubenda.com/privacy-policy/16529602" class="iubenda-white iubenda-embed " title="Privacy Policy">Privacy Policy</a>
        <script type="text/javascript">
          (function (w,d) {
            var loader = function () {
              var s = d.createElement("script"),
                  tag = d.getElementsByTagName("script")[0];
                  
              s.src="https://cdn.iubenda.com/iubenda.js";
              tag.parentNode.insertBefore(s,tag);
            };
            
            if (w.addEventListener) {
              w.addEventListener("load", loader, false);
            } else if (w.attachEvent) {
              w.attachEvent("onload", loader);
            } else {
              w.onload = loader;
            }
          })(window, document);
        </script>
      </div>
      <div class="social-media mv4">
        <a class="dim" href="https://www.researchgate.net/profile/Maximilian_Speicher"><i class="fab fa-researchgate fa-2x mh2"></i></a>
        <a class="dim" href="https://www.linkedin.com/in/maximilianspeicher/"><i class="fab fa-linkedin-in fa-2x mh2"></i></a>
        <a class="dim" href="https://github.com/maxspeicher/"><i class="fab fa-github fa-2x mh2"></i></a>
        <a class="dim" href="#" v-on:click="strikeMeDownWithAllYourHatred"><i class="fab fa-sith fa-2x mh2"></i></a>
        <a class="dim" href="https://medium.com/@maxspeicher"><i class="fab fa-medium-m fa-2x mh2"></i></a>
      </div>
  </footer>
</template>

<script>
export default {
  methods: {
    strikeMeDownWithAllYourHatred(e) {
      e.preventDefault();
      window.toggleNerdMode();
    }
  }
}
</script>
