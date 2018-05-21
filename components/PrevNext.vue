<template>
  <div class="prev-next dt f5 f4-m f3-l fw7 mt5 mt6-ns tl w-100">
    <div class="dtc tl v-btm w-50">
        <nuxt-link v-if="prevTitle && prevLink" v-bind:to="'/work/' + prevLink"><i class="fas fa-angle-left mr2"></i>&nbsp;<span v-html="prevTitle"></span></nuxt-link>
        <span v-else>&nbsp;</span>
    </div>
    <div class="dtc tr v-btm w-50">
        <nuxt-link v-if="nextTitle && nextLink" v-bind:to="'/work/' + nextLink"><span v-html="nextTitle"></span>&nbsp;<i class="fas fa-angle-right ml2"></i></nuxt-link>
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
