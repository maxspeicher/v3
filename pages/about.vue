<template>
  <div class="template-container pa5 tc">
    <my-header></my-header>
    <div class="dib f1 fw6 measure-wide tl">
      Blah blub laber ...
    </div>
    <my-footer></my-footer>
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
