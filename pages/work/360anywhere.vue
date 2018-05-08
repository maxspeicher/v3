<template>
  <div class="template-container">
    <div class="bg-image">
      <div class="gradient"></div>
    </div>
    <div class="template-container-inner pa3 pa5-ns tc">
      <div class="on-top">
        <my-header></my-header>
        <div class="dib f1 fw6 measure-wide tl">
          360Anywhere ...
        </div>
        <my-footer></my-footer>
      </div>
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
    background-position: center;
    background-size: cover;
    height: 100vh;
    left: 0;
    opacity: .5;
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: 1;
  }

  .gradient {
    background-image: linear-gradient(rgba(17, 17, 17, 0.0) 30%, rgb(17, 17, 17, 1.0));
    bottom: 0px;
    height: 100%;
    left: 0px;
    position: absolute;
    width: 100%;
  }

  .on-top {
    position: relative;
    z-index: 2;
  }
</style>
