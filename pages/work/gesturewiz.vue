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
          A <a href="https://www.researchgate.net/publication/324665021_GestureWiz_A_Human-Powered_Gesture_Design_Environment_for_User_Interface_Prototypes">research paper</a>
          about GestureWiz has been published at the 2018 ACM Conference on Human Factors in Computing Systems.
        </project-summary>
        <process v-bind:data="process"></process>
        <project-section style="margin-left: auto; margin-right: auto; max-width: 100%; width: 560px;">
          <div class="video-wrapper">
            <iframe class="shadow" width="560" height="315" src="https://www.youtube-nocookie.com/embed/AH4I-6k8Tq0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </project-section>
        <project-section-text title="Human-Powered Gestures.">
          Designing and testing gesture-based applications is far from trivial, mostly because there is no easy
          way to create arbitrary, multi-modal gestures.
          Existing solutions usually require coding skills, lots of training data, or are restricted to just one
          modality (e.g., touch).<br /><br />
          <span class="script">GestureWiz</span> lets designers create and test gestures without
          training data or the need to write code.
          Say, a designer wants to prototype mid-air gestures for a HoloLens application.
          First, she records and saves a set of template gestures, simply by using a webcam or Microsoft Kinect.
          Then, she records a gesture that should be recognized, which is automatically posted to
          <a href="https://www.mturk.com/">Amazon Mechanical Turk</a>.
          The recruited crowd workers compare the gesture to the template set and select the correct
          match&mdash;simple as that.<br /><br />
          We discovered the need for such a system through a <span class="fw4 small-caps">literature review</span>
          and <span class="fw4 small-caps">competitive analysis</span> of solutions like $1, JackKnife, and
          Zensors, none of which provides designers with the benefits of GestureWiz.
        </project-section-text>
        <project-section>
          <img class="pa2" src="~/assets/img/gesturewiz/gesturewiz-mockup-1.png" />
          <div class="f6 fw4 lh-copy pa2">
            The UI for designers to record and test sets of multi-modal gestures.
            The numbers below the individual gestures on the right, which are shown as animated GIFs, provide
            information about recognition accuracy and latency.
            The star on the left is a touch gesture to be recognized.
            The green outline shows the selection of the human recognizer.
          </div>
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
        <project-section class="cf dt">
          <div class="cf dt">
            <div class="fl fn-ns dtc pa2 w-100 v-mid w-50-ns">
              <img class="shadow" src="~/assets/img/gesturewiz/gesturewiz-sketch.jpg" />
            </div>
            <div class="fl fn-ns dtc pa2 w-100 v-mid w-50-ns">
              <img src="~/assets/img/gesturewiz/gesturewiz-mockup-2.png" />
            </div>
          </div>
          <div class="f6 fw4 lh-copy pa2">
            The UI for the human recognizers&mdash;from sketch to high-fidelity prototype.
            It introduces a gamification feature as a response to relatively poor accuracy and latency in
            our first round of studies.
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
          in a <span class="fw4 small-caps">co-creation</span> setting.<br /><br />
          The interaction designers we tested with appreciated that GestureWiz is quick and easy to use and
          well suited for conflict resolution of ambiguous gestures as well as the support it can provide for
          the prototyping process of gesture-based apps.
        </project-section-text>
        <project-section>
          <a class="bw0 dim pa2" href="https://www.researchgate.net/publication/324665021_GestureWiz_A_Human-Powered_Gesture_Design_Environment_for_User_Interface_Prototypes">
            <img class="shadow" src="~/assets/img/gesturewiz/paper.png" />
          </a>
        </project-section>
        <prev-next prevTitle="360Any&shy;where" prevLink="360anywhere" nextTitle="Holo&shy;Builder" nextLink="holobuilder"></prev-next>
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
      affiliation: "University of Michigan",
      roles: ["Team/Project Lead", "User Research", "System Design", "Code"],
      process: {
        "Discovery": ["literature review", "competitive analysis"],
        "Concept": ["sketches", "storyboards", "wireframes"],
        "Iterative Implementation (2&times;)": ["high-fidelity prototype", "crowd worker experiments", "user study", "co-creation", "kanban"]
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
  }

  .gradient {
    background-image: linear-gradient(rgba(22, 160, 133, 0.0) 30%, rgb(22, 160, 133, 1.0));
  }
</style>
