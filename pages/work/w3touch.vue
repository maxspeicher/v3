<template>
  <div class="template-container">
    <div class="bg-image">
      <div class="gradient"></div>
    </div>
    <div class="template-container-inner pa3 pa5-ns tc">
      <div class="on-top">
        <my-header></my-header>
        <project-summary title="W3Touch">
          Many websites are still not optimized for mobile phones.
          For my Master's thesis, I therefore developed W3Touch, a plugin that collects user interactions and
          automatically adapts websites based on them.
          For instance, if users always zoom into a certain paragraph of text, that paragraph will be 
          increased based on the average zooming factor.
          This creates <q>self-repairing</q> websites that adjust over time and at the same time highlights
          the most important information.<br /><br />
          A <a href="https://www.researchgate.net/publication/249009504_W3touch_Metrics-based_Web_Page_Adaptation_for_Touch">full research paper</a>
          about W3Touch has been published at the 2018 ACM CHI Conference.
        </project-summary>
        <process v-bind:data="process"></process>  
        <project-section-text title="Identifying Common Usability Issues.">
          To build a plugin that automatically enhances the usability of websites on mobile devices,
          we first had to identify common usability issues that required attention and how they should be
          addressed.
          For this, we <span class="fw4 small-caps">reviewed</span> existing literature as well as the
          Wikipedia desktop site in comparison to their mobile app and in a second
          step conducted <span class="fw4 small-caps">interviews</span> with six web designers.
          From these, we identified two core issues: links that are too small and therefore missed and 
          unreadable text.
        </project-section-text>
        <project-section style="margin-left: auto; margin-right: auto; max-width: 100%; width: 560px;">
          <div class="video-wrapper">
            <iframe class="shadow" width="560" height="315" src="https://www.youtube-nocookie.com/embed/G0lj_ArvpUg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </project-section>
        <project-section-text title="Using W3Touch to Adapt Wikipedia.">
          I developed a <span class="fw4 small-caps">first version</span> of
          <span class="script">W3Touch</span>, with which we conducted a
          <span class="fw4 small-caps">remote asynchronous user study</span> with 84 participants.
          In this study, we collected user interactions on the desktop version of Wikipedia as used on
          a mobile phone by one half of the participants.
          We then created an adapted version based on the collected data that was assessed by the other half
          and performed considerably better.
          Afterwards, the W3Touch <span class="fw4 small-caps">prototype</span> was revised according to the
          collected user feedback.
        </project-section-text>
        <project-section class="cf dt">
          <div class="fl fn-ns dtc pa2 w-100 v-mid w-third-ns">
            <img class="shadow" src="~/assets/img/w3touch/step-1.jpg" />
          </div>
          <div class="fl fn-ns dtc pa2 w-100 v-mid w-third-ns">
            <img class="shadow" src="~/assets/img/w3touch/step-2.jpg" />
          </div>
          <div class="fl fn-ns dtc pa2 w-100 v-mid w-third-ns">
            <img class="shadow" src="~/assets/img/w3touch/step-3.jpg" />
          </div>
        </project-section>
        <project-section-text title="Great Success.">
          Finally, we carried out another <span class="fw4 small-caps">user study</span>, this time in-lab
          with 13 participants, to validate our results.
          We compared the version of Wikipedia adapted by W3Touch to both the desktop site and Wikipedia's
          dedicated mobile page.
          Results suggested that the W3Touch version was able to compete with the version specifically
          designed for mobile, which is a promising result given the relatively small design effort based on
          only two core usability issues.
        </project-section-text>
        <prev-next prevTitle="Search Interaction Optimization" prevLink="sio"></prev-next>
        <my-footer></my-footer>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "~/components/Header.vue"
import MyFooter from "~/components/Footer.vue"
import ProjectSummary from "~/components/Summary.vue"
import Process from "~/components/Process.vue"
import ProjectSectionText from "~/components/SectionText.vue"
import ProjectSection from "~/components/Section.vue"
import PrevNext from "~/components/PrevNext.vue"

export default {
  components: {
    MyHeader,
    MyFooter,
    ProjectSummary,
    Process,
    ProjectSectionText,
    ProjectSection,
    PrevNext
  },
  data: () => ({
    process: {
      teamSize: "2",
      timeframe: "Sep 2011&ndash;Mar 2012",
      affiliation: "ETH Zurich",
      roles: ["Master's Student", "User Research", "System Design + Architecture", "Code"],
      process: {
        "Discovery": ["literature review", "interviews"],
        "Implementation": ["first prototype", "user study", "second prototype"],
        "Validation": ["user study"]
      }
    }
  })
}
</script>

<style scoped>
  .template-container {
    background-color: rgba(192, 57, 43, 1.0);
    color: ivory;
  }

  .template-container >>> a {
    color: ivory;
  }
  
  .bg-image {
    background-image: url(~/assets/img/w3touch/w3touch.jpg);
  }

  .gradient {
    background-image: linear-gradient(rgba(192, 57, 43, 0.0) 30%, rgb(192, 57, 43, 1.0));
  }
</style>
