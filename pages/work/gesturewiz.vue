<template>
  <div class="template-container">
    <div class="bg-image">
      <div class="gradient"></div>
    </div>
    <div class="template-container-inner pa3 pa5-ns tc">
      <div class="on-top">
        <my-header></my-header>
        <project-summary title="GestureWiz">
          GestureWiz is a rapid prototyping environment for designers to create and test arbitrary, 
          multi-modal gestures without the need for programming or training data.
          <br /><br />
          A <a href="~/assets/pdf/gesturewiz.pdf">full research paper</a> about GestureWiz has been published
          at the 2018 ACM CHI Conference.
        </project-summary>
        <process v-bind:data="process"></process>  
        <project-section-text title="Human-Powered Gestures.">
          GestureWiz lets designers create and test arbitrary gestures without training data or the need to
          write code, simply by using a webcam or Microsoft Kinect.
          In step 1, the designer records and saves a set of template gestures.
          Then, they record a gesture that should be recognized, which is automatically posted to
          <a href="https://www.mturk.com/">Amazon Mechanical Turk</a>.
          The recruited crowd workers compare the gesture to the template set and select the correct
          match&mdash;simple as that.
          We discovered the need for such a system through a <span class="fw4 small-caps">literature review</span>
          and <span class="fw4 small-caps">competitive analysis</span> of solutions like $1, JackKnife, and
          Zensors, none of which provides designers with the benefits of GestureWiz.
        </project-section-text>
        <project-section>
          <img src="~/assets/img/gesturewiz/gesturewiz-mockup-1.png" />
        </project-section>
        <project-section-text title="An Interface for Crowd Workers.">
          We created <span class="fw4 small-caps">sketches</span>,
          <span class="fw4 small-caps">storyboards</span>, and 
          <span class="fw4 small-caps">wireframes</span> of potential user interfaces for the crowd workers on
          Amazon Mechanical Turk as well as the designers creating the gestures.
          It turned out that the former was the trickier part and the solution we came up with was an interface
          that showed the whole template set on the right and a live streamed gesture to be recognized on the
          left side.
          To evaluate our designs, we created a first <span class="fw4 small-caps">high-fidelity prototype</span>
          and conducted <span class="fw4 small-caps">experiments</span> with remote crowd workers and three
          different gesture sets.
          We moreover carried out an in-lab <span class="fw4 small-caps">user study</span> with 11 interaction
          designers, who we asked to create and test a gesture set for a slideshow application.
        </project-section-text>
        <project-section class="dt">
          <div class="dtc pa2 w-100 v-mid w-50-ns">
            <img class="shadow v-mid" src="~/assets/img/gesturewiz/gesturewiz-sketch.jpg" />
          </div>
          <div class="dtc pa2 w-100 v-mid w-50-ns">
            <img class="v-mid" src="~/assets/img/gesturewiz/gesturewiz-mockup-2.png" />
          </div>
        </project-section>
        <project-section-text title="Improving GestureWiz.">
          Based on the first round of studies, we concluded the need for a different worker UI that shows only
          one gesture template at a time rather than the whole gesture set.
          The latter was confusing for crows workers since templates are animated GIFs and resulted in
          suboptimal recognition performance.
          Besides, we decided to added a gamification component to the system to further improve recognition
          quality.
          In this way, crowd workers can earn a bonus by being especially quick and accurate.
          We validated these new design decision in a second round of crowd worker
          <span class="fw4 small-caps">experiments</span> with an improved
          <span class="fw4 small-caps">prototype</span>.
          Additionally, we conducted a second <span class="fw4 small-caps">user study</span> with another 12
          interaction designers that were again asked to design gestures for a slideshow application, this time
          in a co-creation setting.<br /><br />
          The main findings from the study were that GestureWiz is quick and easy to use and well suited for
          conflict resolution of ambiguous gestures.
          The interaction designers we tested with appreciated the support GestureWiz can provide for the
          prototyping process of gesture-based apps.
        </project-section-text>
        <prev-next prevTitle="360Anywhere" prevLink="360anywhere" nextTitle="HoloBuilder" nextLink="holobuilder"></prev-next>
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
      teamSize: 3,
      timeframe: "Mar&ndash;May 2017",
      roles: ["Project Lead", "User Research", "System Design", "Code"],
      process: {
        "Discovery": ["literature review", "competitive analysis"],
        "Concept": ["sketches", "storyboards", "wireframes"],
        "Implementation": ["1st high-fidelity prototype", "crowd worker experiments", "user study"],
        "Validation": ["2nd high-fidelity prototype", "crowd worker experiments", "user study"]
      }
    }
  })
}
</script>

<style scoped>
  .template-container {
    background-color: rgba(22, 160, 133, 1.0);
    color: ivory;
  }

  .template-container >>> a {
    color: ivory;
  }
  
  .bg-image {
    background-image: url(~/assets/img/gesturewiz/gesturewiz.jpg);
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
    background-image: linear-gradient(rgba(22, 160, 133, 0.0) 30%, rgb(22, 160, 133, 1.0));
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
