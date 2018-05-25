<template>
  <header class="cf mb6">
      <div class="abril f3 fl tl w-100 w-50-ns">
          <div class="dib" v-on:mouseenter="rotateCharacters">
            <nuxt-link to="/">
              <span class="rotate m">M</span>aximilian
              <span class="nowrap">
                <span class="rotate s">S</span>peicher.
              </span>
            </nuxt-link>
          </div>
      </div>
      <div class="menu dt fl fw4 mt2 mt0-ns pt2-ns tl tr-ns w-100 w-50-ns">
        <span class="dib mb2-m">
          <nuxt-link to="/about">About</nuxt-link>&nbsp;
        </span>
        <!-- This has to be manually adjusted to match the root dir. -->
        <span class="dib mb2-m pl4">
          <nuxt-link to="/#work" @click.native="smoothScroll" data-scroll-to="#work">Work</nuxt-link>&nbsp;
        </span>
        <span class="dib pl4">
          <nuxt-link to="/#publications" @click.native="smoothScroll" data-scroll-to="#publications">Publications</nuxt-link>&nbsp;
        </span>
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
    },
    smoothScroll(e) {
      e.preventDefault();

      const id = e.target.dataset.scrollTo;

      document.querySelector(id).scrollIntoView({ 
        behavior: "smooth"
      });
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