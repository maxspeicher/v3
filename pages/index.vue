<template>
  <div class="tc">
    <div class="h1">
      {{ message }}
    </div>
    <div class="mt4">
      <a href="#">This is a link</a>
    </div>
  </div>
</template>

<script>
import PROJECTS from "~/data/projects.js"

export default {
  asyncData (context) {
    // called every time before loading the component
    return PROJECTS;
  }
}
</script>
