<template>
  <div class="tc">
    <div class="fl-l vh-100-l w-third-l"></div>
    <div class="fl-l w-two-thirds-l">
      <div class="title1">
        Portfolio of Maximilian Speicher
      </div>
      <div class="dn-l gray ma5 tc">***</div>
      
      <!--<div class="dn db-l">This should be here only on large screens.</div>
      <div class="dn-l">This should be here on small and medium screens.</div>-->

      <!-- TOC -->
      <div class="toc fixed-l pa4-l tl-l vh-100-l w-third-l">
        <div class="mb2 title3">
          Selected Projects
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
      <div class="gray ma5 tc">***</div>

      <!-- THE PROJECTS -->
      <div>
        <div v-for="(project, id) in projects" :key="id">
          <div>
            <a v-bind:id="id" v-bind:name="id"></a>
            <div class="mb4 title2">
              <span v-html="project.name"></span>
            </div>
            <div class="dib measure-wide tl">
              Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos.
            </div>
          </div>
          <div class="gray ma5 tc">***</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DATA from "~/data/projects.js"

export default {
  asyncData(context) {
    // called every time before loading the component
    return DATA;
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
