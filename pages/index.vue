<template>
  <div class="template-container pa5 tc">
    <my-header></my-header>
    <div class="dib f1 fw6 measure-wide tl">
      I'm a traditionally trained computer scientist who does design &amp; research.
      <div class="f3 fw4 mt4">
        I make natural user interfaces &amp; augmented reality.
        <a href="#" v-if="!isMoreDisplayed" v-on:click="displayMore">More ...</a>
        <span v-if="isMoreDisplayed">
          Currently, I'm working on new physical &amp; digital methods for designers to create &amp; test
          better AR/VR experiences.
          At the University of Michigan School of Information, we are reinventing interaction design itself.
        </span>
      </div>
    </div>
    <div class="mt6">
      <a id="work" name="work"></a>
      <div class="f2 fw6 mb5 tl">
        Selected Work.
      </div>
      <div class="cf">
        <div class="box f2 fl fw6 pa4 w-third" style="background-image: url(/img/360anywhere.jpg)">
          <div class="box-padding"></div>
          <nuxt-link to="/work/360anywhere" class="box-inner color-ivory">
            <span class="center">360 Anywhere</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import DATA from "~/data/projects.js"

import MyHeader from "~/components/Header.vue"
import MyFooter from "~/components/Footer.vue"

export default {
  asyncData(context) {
    // called every time before loading the component
    return DATA;
  },
  components: {
    MyHeader,
    MyFooter
  },
  data: () => ({
    isMoreDisplayed: false
  }),
  layout: "default",
  methods: {
    displayMore(e) {
      e.preventDefault();
      this.isMoreDisplayed = true;
    }
  }
}
</script>
