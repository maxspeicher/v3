<template>
  <div class="cf mt5 mt6-ns mw-90 tl">
    <div class="fl pa3 w-100 w-50-ns">
    <div class="ba b--white pa3">
        <div class="fw7 pb3 ttu">Setting</div>
        <div class="pb3">Team of <span class="fw7">{{ data.teamSize }}</span></div>
        <div class="pb5" v-html="data.timeframe"></div>
        <div class="fw7 pb3 ttu">What I did</div>
        <div class="pb3" v-for="r in data.roles" :key="r"><span v-html="r"></span></div>
    </div>
    </div>
    <div class="fl pa3 w-100 w-50-ns">
    <div class="ba b--white pa3">
        <div class="fw7 pb3 ttu">How the process turned out</div>
        <div class="fancy-list" v-for="(entries, step) in data.process" :key="step">
            <div class="fw7 pb2" v-html="step"></div>
            <div class="small-caps">
                <div v-for="e in entries" :key="e">{{ e }}</div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style scoped>
  
</style>
