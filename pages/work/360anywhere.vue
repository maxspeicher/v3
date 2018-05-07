<template>
  <div class="template-container pa5 tc">
    <div class="bg-image"></div>
    <div class="on-top">
      <my-header></my-header>
      <div class="dib f1 fw6 measure-wide tl">
        360Anywhere ...
      </div>
      <my-footer></my-footer>
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

<style scoped>
  .template-container {
    background-color: #111111;
    color: ivory;
  }

  .template-container >>> a {
    color: ivory;
  }
  
  .bg-image {
    background-image: url(/img/360anywhere.jpg);
    background-size: cover;
    height: 100vh;
    left: 0;
    opacity: .5;
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: 1;
  }

  .on-top {
    position: relative;
    z-index: 2;
  }
</style>
