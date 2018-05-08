<template>
  <div class="template-container">
    <div class="template-container-inner pa3 pa5-ns tc">
      <my-header></my-header>
      <div class="dib f3 f1-ns fw6 measure-wide tl">
        I'm a traditionally trained computer scientist who does design &amp; research.
        <div class="f4 f3-ns fw4 mt4">
          I make natural user interfaces &amp; augmented reality.
          <a href="#" v-if="!isMoreDisplayed" v-on:click="displayMore">More ...</a>
          <span v-if="isMoreDisplayed">
            Currently, I'm working on new physical &amp; digital methods for designers to create &amp; test
            better AR/VR experiences.
            At the University of Michigan School of Information, we are reinventing interaction design itself.
          </span>
        </div>
      </div>
      <div class="mt5 mt6-ns">
        <a id="work" name="work"></a>
        <div class="f3 f2-ns fw6 mb4 mb5-ns tl">
          Selected Work.
        </div>
        <div class="cf">
          <div class="fl pa2 w-100 w-50-m w-third-l">
            <div class="box f2 fw6 w-100" style="background-image: url(/img/360anywhere/360anywhere.jpg)">
              <div class="box-padding"></div>
              <nuxt-link to="/work/360anywhere" class="box-inner color-ivory">
                <div class="center w-100">
                  360&shy;Any&shy;where
                  <div class="separator-thin"></div>
                  <span class="f3 fw2">U of Michigan</span>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="fl pa2 w-100 w-50-m w-third-l">
            <div class="box f2 fw6 w-100" style="background-image: url(/img/gesturewiz.jpg)">
              <div class="box-padding"></div>
              <nuxt-link to="/work/gesturewiz" class="box-inner color-ivory">
                <div class="center w-100">
                  Gesture&shy;Wiz
                  <div class="separator-thin"></div>
                  <span class="f3 fw2">U of Michigan</span>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="mt5 mt6-ns">
        <a id="work" name="work"></a>
        <div class="f3 f2-ns fw6 mb4 mb5-ns tl">
          Some Publications.
        </div>
        <div class="">
          
        </div>
        <div class="tl">
          <a href="http://dblp.org/pers/hd/s/Speicher:Maximilian">And some more ...</a>
        </div>
      </div>
      <my-footer></my-footer>
    </div>
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
