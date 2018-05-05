<template>
  <div class="tc">
    <div class="fl-l vh-100-l w-third-l"></div>
    <div class="fl-l w-two-thirds-l">
      <div class="title1">
        Portfolio of Maximilian Speicher<br />
        ================================
      </div>
      <separator class="dn-l"></separator>

      <!-- TOC -->
      <div class="toc fixed-l pa4-l tl-l vh-100-l w-third-l">
        <div class="mb2 title3">
          Selected Projects<br />
          =================
        </div>
        <span class="mr2 pointer" v-bind:class="{ silver: !displayByOccupation }" v-on:click="displayByOccupation = true">by occupation</span>
        <span class="pointer x" v-bind:class="[{ 'x-active': displayByOccupation }, { 'silver': !displayByOccupation }]" v-on:click="displayByOccupation = !displayByOccupation"></span>&nbsp;
        <span class="pointer x" v-bind:class="[{ 'x-active': !displayByOccupation }, { 'silver': displayByOccupation }]" v-on:click="displayByOccupation = !displayByOccupation"></span>
        <!--<i class="fas pointer" v-bind:class="[{ 'fa-toggle-off': displayByOccupation }, { 'fa-toggle-on': !displayByOccupation }]" v-on:click="displayByOccupation = !displayByOccupation"></i>-->
        <span class="ml2 pointer" v-bind:class="{ silver: displayByOccupation }" v-on:click="displayByOccupation = false">by year</span>
        <div class="mt4" v-bind:class="{ dn: !displayByOccupation }">
          <div v-for="(occupation, i) in byOccupationKeys" :key="i">
            <div class="silver mb2">
              <span v-html="occupation"></span>
            </div>
            <div class="mb4">
              <div class="mb2" v-for="project in byOccupation[occupation]" :key="project.id">
                <a v-bind:href="'#' + project.id"><span v-html="project.name"></span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt4" v-bind:class="{ dn: displayByOccupation }">
          <div v-for="(year, i) in byYearKeys" :key="i">
            <div class="silver mb2">{{ year }}</div>
            <div class="mb4">
              <div class="mb2" v-for="project in byYear[year]" :key="project.id">
                <a v-bind:href="'#' + project.id"><span v-html="project.name"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <separator></separator>

      <!-- THE PROJECTS -->
      <div>
        <div v-for="(project, i) in projects" :key="i">
          <div class="cf mw-90">
            <div class="fl pa3 w-80">
              <a v-bind:id="project.id" v-bind:name="project.id"></a>
              <div class="mb4 title2">
                <span v-html="project.name"></span><br />
                <span v-for="n in project.name.length" :key="n">-</span>
              </div>
              <div class="dib measure-wide tl">
                <div class="mb4" v-for="(step, i) in project.process" :key="i">
                  <a v-bind:id="project.id + '--' + step.id" v-bind:name="project.id + '--' + step.id"></a>
                  {{ step.title }}<br /><br />
                  {{ step.description }}
                </div>
              </div>
            </div>
            <div class="fl w-20 pa3">
              <div class="mb4 title4">
                Process<br />
                -------
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
    </div>
  </div>
</template>

<script>
import DATA from "~/data/projects.js"
import Separator from '~/components/Separator.vue'

export default {
  asyncData(context) {
    // called every time before loading the component
    return DATA;
  },
  components: {
    Separator
  },
  data: () => ({
    displayByOccupation: true
  }),
  methods: {
    test() {
      
    }
  }
}
</script>
