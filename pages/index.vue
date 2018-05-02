<template>
  <div class="tc">
    <div class="h1">
      Hello, Portfolio!
    </div>
    <div class="mt4">
      <a href="#">This is a link</a>
    </div>
    <div class="mt4">
      <div v-for="(projects, occupation) in byOccupation" :key="occupation">
        <div class="gray">{{ occupation }}</div>
        <div v-for="project in projects" :key="project">
          <span v-html="project"></span>
        </div>
      </div>
    </div>
    <div class="mt4">
      <div v-for="(project, id) in projects" :key="id">
        <span v-html="project.name"></span>
      </div>
    </div>
  </div>
</template>

<script>
import DATA from "~/data/projects.js"

export default {
  asyncData (context) {
    // called every time before loading the component
    return DATA;
  }
}
</script>
