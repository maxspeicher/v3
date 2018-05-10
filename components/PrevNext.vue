<template>
  <div class="cf f4 f3-ns fw7 mt5 mt6-ns tl">
    <div class="fl tl w-50">
        <nuxt-link v-if="prevTitle && prevLink" v-bind:to="'/work/' + prevLink" class="no-underline"><i class="fas fa-angle-left mr2"></i> {{ prevTitle }}</nuxt-link>
        <span v-else>&nbsp;</span>
    </div>
    <div class="fl tr w-50">
        <nuxt-link v-if="nextTitle && nextLink" v-bind:to="'/work/' + nextLink" class="no-underline">{{ nextTitle }} <i class="fas fa-angle-right ml2"></i></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: [
      "prevTitle",
      "prevLink",
      "nextTitle",
      "nextLink"
  ]
}
</script>

<style scoped>
  
</style>
