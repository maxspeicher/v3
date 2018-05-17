<template>
  <div class="template-container">
    <div class="bg-image">
      <div class="gradient"></div>
    </div>
    <div class="template-container-inner pa3 pa5-ns tc">
      <div class="on-top">
        <my-header></my-header>
        <project-summary title="Search Interaction Optimization">
          I completed an industrial Ph.D. program in the R&amp;D department of Unister GmbH, in cooperation with
          Chemnitz University of Technology.
          The goal of my project was to develop a new methodology for more automatic usability evaluation
          and optimization of search engines that is still effective.<br /><br />

          Its title was
          <a href="http://www.qucosa.de/fileadmin/data/qucosa/documents/20810/Dissertation_Archivierung_Speicher.pdf">Search Interaction Optimization: A Human-Centered Design Approach</a>.
        </project-summary>
        <process v-bind:data="process"></process>  
        <project-section-text title="Finding a Ph.D. Project.">
          <span class="fw4 small-caps">Lean UX</span>
        </project-section-text>
        <project-section>
          <img class="w-75-l shadow" src="~/assets/img/sio/interview-setup.jpg" />
        </project-section>
        <project-section-text title="Predicting the Relevance of Search Results from User Interactions.">
          
        </project-section-text>
        <project-section>
          <img src="~/assets/img/sio/sio-mockup-1.png" />
        </project-section>
        <project-section-text title="Usability-based Split Testing: A New Methodology.">
          
        </project-section-text>
        <project-section>
          <img class="w-75-l shadow" src="~/assets/img/sio/SERP-comparison.jpg" />
        </project-section>
        <project-section-text title="Optimizing BlueKiwi.">
          
        </project-section-text>
        <prev-next prevTitle="HoloBuilder" prevLink="holobuilder" nextTitle="W3Touch" nextLink="w3touch"></prev-next>
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
      teamSize: "roughly 30",
      timeframe: "Jun 2012&ndash;Dec 2014",
      roles: ["Industrial Ph.D. Student", "User Research", "Project Management"],
      process: {
        "Discovery": ["field research", "interviews", "meetups", "personas", "customer journeys"],
        "Concept": ["personas", "scenarios"],
        "Relevance Prediction": ["sketches", "storyboards", "mockups", "mvp", "scrum", "lean ux"],
        "Usability Evaluation": ["interviews", "scrum", "lean ux"],
        "Usability Optimization": []
      }
    }
  })
}
</script>

<style scoped>
  .template-container {
    background-color: rgba(142, 68, 173, 1.0);
    color: ivory;
  }

  .template-container >>> a {
    color: ivory;
  }
  
  .bg-image {
    background-image: url(~/assets/img/sio/sio.jpg);
    background-position: center;
    background-size: cover;
    height: 100vh;
    left: 0;
    opacity: .5;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .gradient {
    background-image: linear-gradient(rgba(142, 68, 173, 0.0) 30%, rgb(142, 68, 173, 1.0));
    bottom: 0px;
    height: 100%;
    left: 0px;
    position: absolute;
    width: 100%;
  }

  .on-top {
    position: relative;
    z-index: 2;
  }
</style>
