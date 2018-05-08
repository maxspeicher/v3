<template>
  <div class="template-container">
    <div class="template-container-inner pa3 pa5-ns tc">
      <my-header></my-header>
      <div class="dib f1 fw6 measure-wide tl">
        <img src="/img/me-as-a-venn-diagram.png" style="max-width: 667px; width: 100%" />
      </div>
      <my-footer></my-footer>
      <small>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>, licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"><i class="fab fa-creative-commons"></i><i class="fab fa-creative-commons-by"></i></a>.</small>
    </div>
  </div>
</template>

<script>
import MyHeader from "~/components/Header.vue"
import MyFooter from "~/components/Footer.vue"

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
