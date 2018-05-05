<template>
  <div class="tc">
    <div class="fl-l vh-100-l w-third-l"></div>
    <div class="fl-l w-two-thirds-l">
      <div class="title1">
        Portfolio of Maximilian Speicher<br />
        ================================
      </div>
      <separator class="dn-l"></separator>
      
      <!--<div class="dn db-l">This should be here only on large screens.</div>
      <div class="dn-l">This should be here on small and medium screens.</div>-->

      <!-- TOC -->
      <div class="toc fixed-l pa4-l tl-l vh-100-l w-third-l">
        <div class="mb2 title3">
          Selected Projects<br />
          =================
        </div>
        <span class="mr2 pointer" v-bind:class="{ gray: !displayByOccupation }" v-on:click="displayByOccupation = true">by occupation</span>
        <i class="fas pointer" v-bind:class="[{ 'fa-toggle-off': displayByOccupation }, { 'fa-toggle-on': !displayByOccupation }]" v-on:click="displayByOccupation = !displayByOccupation"></i>
        <span class="ml2 pointer" v-bind:class="{ gray: displayByOccupation }" v-on:click="displayByOccupation = false">by year</span>
        <div class="mt4" v-bind:class="{ dn: !displayByOccupation }">
          <div v-for="(projects, occupation) in byOccupation" :key="occupation">
            <div class="gray mb2">
              <span v-html="occupation"></span>
            </div>
            <div class="mb4">
              <div class="mb2" v-for="project in projects" :key="project.id">
                <a v-bind:href="'#' + project.id"><span v-html="project.name"></span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt4" v-bind:class="{ dn: displayByOccupation }">
          <div v-for="(projects, year) in byYear" :key="year">
            <div class="gray mb2">{{ year }}</div>
            <div class="mb4">
              <div class="mb2" v-for="project in projects" :key="project.id">
                <a v-bind:href="'#' + project.id"><span v-html="project.name"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <separator></separator>

      <!-- THE PROJECTS -->
      <div>
        <div v-for="(project, id) in projects" :key="id">
          <div class="cf mw-90">
            <div class="fl pa3 w-80">
              <a v-bind:id="id" v-bind:name="id"></a>
              <div class="mb4 title2">
                <span v-html="project.name"></span><br />
                <span v-for="n in project.name.length" :key="n">-</span>
              </div>
              <div class="dib measure-wide tl">
                <div class="mb4" v-for="(step, index) in project.process" :key="index">
                  <a v-bind:id="id + '--' + step.id" v-bind:name="id + '--' + step.id"></a>
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
              <div v-for="(step, index) in project.process" :key="index">
                <a v-bind:href="'#' + id + '--' + step.id">{{ step.title }}</a>
                <div class="ma2" v-if="index < project.process.length-1">↓</div>
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
