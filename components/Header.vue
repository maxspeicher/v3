<template>
  <header class="cf mb6">
      <div class="abril f3 fl tl w-100 w-50-ns">
          <div class="dib" v-on:mouseenter="rotateCharacters">
            <nuxt-link to="/"><span class="rotate m">M</span>aximilian <span class="rotate s">S</span>peicher.</nuxt-link>
          </div>
      </div>
      <div class="menu fl fw4 mt2 mt0-ns tl tr-ns w-100 w-50-ns">
        <nuxt-link to="/about" class="mr4">About</nuxt-link>
        <nuxt-link to="/#work">Work</nuxt-link>
      </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    mRotation: 0,
    sRotation: 0,
    mStep: 90,
    sStep: -45
  }),
  methods: {
    rotateCharacters() {
      this.mRotation = (this.mRotation + this.mStep) % 360;
      this.sRotation = (this.sRotation + this.sStep) % 360;
    
      document.querySelector(".m").style.transform = "rotateZ(" + this.mRotation + "deg)";
      document.querySelector(".s").style.transform = "rotateZ(" + this.sRotation + "deg)";
    }
  }
}
</script>

<style scoped>
    .rotate {
        display: inline-block;
        transform-origin: center;
        transition: all .5s;
    }
</style>