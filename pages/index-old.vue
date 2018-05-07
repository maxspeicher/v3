<template>
  <div class="tc">
    <div class="fl-l vh-100-l w-third-l"></div>
    <div class="fl-l mb4 w-two-thirds-l">
      <div class="title1">
        Portfolio of Maximilian Speicher
      </div>

      <div class="mt5">
        <div class="dib measure-wide tl">
          Blah, blah, little intro text about me ...
        </div>
      </div>
      <separator></separator>

      <!-- TOC -->
      <div class="toc fixed-l pa4-l tl-l vh-100-l w-third-l">
        <a id="menu" name="menu"></a>
        <div class="mb2 title3">
          Selected Projects
        </div>
        <span class="mr2 pointer" v-bind:class="{ 'o-50': !displayByOccupation }" v-on:click="displayByOccupation = true">by occupation</span>
        <span class="pointer x" v-bind:class="[{ 'x-active': displayByOccupation }, { 'o-50': !displayByOccupation }]" v-on:click="displayByOccupation = !displayByOccupation"></span>&nbsp;
        <span class="pointer x" v-bind:class="[{ 'x-active': !displayByOccupation }, { 'o-50': displayByOccupation }]" v-on:click="displayByOccupation = !displayByOccupation"></span>
        <span class="ml2 pointer" v-bind:class="{ 'o-50': displayByOccupation }" v-on:click="displayByOccupation = false">by year</span>
        <div class="mt4" v-bind:class="{ dn: !displayByOccupation }">
          <div v-for="(occupation, i) in byOccupationKeys" :key="i" v-bind:class="{ mb4: i < byOccupationKeys.length-1 }">
            <div class="o-50 mb2">
              <span v-html="occupation"></span>
            </div>
            <div class="mb2" v-for="(project, i) in byOccupation[occupation]" :key="i">
              <a v-bind:href="'#' + project.id"><span v-html="project.name"></span></a>
            </div>
          </div>
        </div>
        <div class="mt4" v-bind:class="{ dn: displayByOccupation }">
          <div v-for="(year, i) in byYearKeys" :key="i" v-bind:class="{ mb4: i < byYearKeys.length-1 }">
            <div class="o-50 mb2">{{ year }}</div>
            <div class="mb2" v-for="(project, i) in byYear[year]" :key="i">
              <a v-bind:href="'#' + project.id"><span v-html="project.name"></span></a>
            </div>
          </div>
        </div>
      </div>
      <separator class="dn-l"></separator>

      <!-- METHODS/FILTER -->
      <div>
        <div class="mb2 title3">
          Methods
        </div>
        <span v-for="(m, i) in methods" :key="i">
          {{ m }}
          <span v-if="i < methods.length-1">|</span>
        </span>
      </div>
      <separator></separator>

      <!-- THE PROJECTS -->
      <div>
        <div v-for="(project, i) in projects" :key="i">
          <div class="cf mw-90">
            <div class="fl pa3 w-75-ns">
              <a v-bind:id="project.id" v-bind:name="project.id"></a>
              <div class="mb4 title2">
                <span v-html="project.name"></span>
                <!-- <br /><span v-for="n in project.name.length" :key="n">-</span> -->
              </div>
              <div class="cf dib mb4 measure-wide tl w-100">
                <div class="fl w-third">blah</div><div class="fl w-two-thirds">blub</div>
                <div class="fl w-third">laber</div><div class="fl w-two-thirds">arsch</div>
              </div>
              <div class="dib measure-wide tl">
                <div class="mb4" v-for="(step, i) in project.process" :key="i">
                  <a v-bind:id="project.id + '--' + step.id" v-bind:name="project.id + '--' + step.id"></a>
                  <div class="fw5 tc">{{ step.title }}</div><br /><br />
                  <div v-html="step.description"></div>
                </div>
              </div>
            </div>
            <div class="dn db-ns fl w-25 pa3">
              <div class="mb4 title4">
                Process
              </div>
              <div v-for="(step, i) in project.process" :key="i">
                <a v-bind:href="'#' + project.id + '--' + step.id">{{ step.title }}</a>
                <div class="ma2" v-if="i < project.process.length-1">↓</div>
              </div>
            </div>
          </div>
          <separator></separator>
        </div>
      </div>
      Made with &lt;3 in Ann Arbor, MI. Powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a> and <a href="http://tachyons.io/" target="_blank">Tachyons</a>.
    </div>
    <a href="#top" class="back-to-top ba dn db-l fw7 no-underline pa1 pointer">
      ^
    </a>
    <a href="#menu" class="back-to-top ba dn-l fw7 no-underline pa1 pointer">
      ^
    </a>
  </div>
</template>

<script>
import DATA from "~/data/projects.js"
import Separator from "~/components/Separator.vue"

export default {
  asyncData(context) {
    // called every time before loading the component
    return DATA;
  },
  components: {
    Separator
  },
  data: () => ({
    displayByOccupation: true,
    methods: ["Field Studies", "In-house Studies", "Remote Asynchronous Studies"]
  }),
  layout: "default-old",
  methods: {
    test() {
      
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500,700");

a {
    color: #111111;
    text-decoration: underline;
}

body {
    background-color: #ffffff;
    color: #111111;
    font-family: "Roboto Mono", monospace;
    font-weight: 300;
}

.back-to-top {
    box-shadow: 2px 2px #111111;
    position: fixed;
    bottom: 1em;
    right: 1em;
}

.title1 {
    color: deeppink;
    font-weight: 700;
    text-transform: uppercase;
}

.title2 {
    color: deeppink;
    font-weight: 700;
}

.title3 {
    font-weight: 700;
    text-transform: uppercase;
}

.title4 {
    font-weight: 700;
}

.toc {
    top: 0;
    left: 0;
    overflow: auto;
}

.x::before {
    content: "[ ]"
}

.x-active::before {
    content: "[x]"
}
</style>
