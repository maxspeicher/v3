<template>
  <div class="template-container">
    <div class="bg-image">
      <div class="gradient"></div>
    </div>
    <div class="template-container-inner pa3 pa5-ns tc">
      <div class="on-top">
        <my-header></my-header>
        <project-summary title="360Anywhere">
          In this research project, we merge the physical and digital worlds by providing a
          collaboration tool that combines 360° video and augmented reality.
          Imagine a meeting room that is live-streamed to remote meeting participants in 360° and whatever
          they draw into the live stream appears in the actual room.<br /><br />
          A <a href="/pdf/360anywhere.pdf">research paper</a> about 360Anywhere has been accepted at the 2018
          ACM Symposium on Engineering Interactive Computing Systems.
        </project-summary>
        <process v-bind:data="process"></process>  
        <project-section-text title="Identifying Challenges.">
          Both 360° videos and augmented reality are really powerful for remote collaboration.
          Yet, their full potential had not been made use of so far.
          Through a <span class="fw4 small-caps">literature review</span> and
          <span class="fw4 small-caps">competitive analysis</span> (including Skype on HoloLens, 
          Sketchboard.io, and Chalk by Vuforia), we found a number of unresolved challenges, the most
          important of which were:
          <ol>
            <li>360° video and AR had not been combined before.</li>
            <li>Users are often not aware of where others are looking in a 360° video.</li>
            <li>Users are often looking into different directions.</li>
          </ol>
        </project-section-text>
        <project-section>
          <img src="~/assets/img/360anywhere/360anywhere-mockups.png" />
          <div class="f6 fw4 lh-copy pb2 pt3">
            The UI for collaborators, showing the 360° stream in which they can look around freely.
            The laptop screenshot (left) shows a <q>gaze cone</q> indicating where the mobile user (right) is looking.
            This is one way to solve challenge 2 above.
          </div>
        </project-section>
        <project-section-text title="Finding a Solution.">
          Making use of standard methods&mdash;<span class="fw4 small-caps">sketching</span>,
          <span class="fw4 small-caps">storyboards</span>, <span class="fw4 small-caps">mind maps</span>, and
          <span class="fw4 small-caps">affinity diagrams</span>&mdash;we brainstormed a range of scenarios
          and solutions and also created initial <span class="fw4 small-caps">wireframes</span>.
          We soon noticed that there is no one-size-fits-all solution for all remote collaboration scenarios.
          Therefore, we decided for a component-based solution that lets users design just the system they
          need.
          A second important requirement was as little hardware as possible to address a wide range of
          potential users.
        </project-section-text>
        <project-section class="cf">
          <div class="fl pa2 w-100 w-50-ns">
            <img class="shadow" src="~/assets/img/360anywhere/360anywhere-detail-2.jpg" />
            <div class="fl f6 fw4 lh-copy pa2 w-100">
              We display things that are drawn into the 360° stream directly in the room using
              projective augmented reality.
            </div>
          </div>
          <div class="fl pa2 w-100 w-50-ns">
            <img class="shadow" src="~/assets/img/360anywhere/360anywhere-detail-3.jpg" />
            <div class="fl f6 fw4 lh-copy pa2 w-100">
              The collaborator UI, showing the projective augmented reality region with a blue outline.
            </div>
          </div>
        </project-section>
        <project-section-text title="Building and Testing 360&shy;Any&shy;where.">
          Starting with an initial prototype based on A-Frame, <span class="script">360Anywhere</span> was
          built in three <span class="fw4 small-caps">iterations</span>, each with a
          <span class="fw4 small-caps">user study</span> at the end.
          Based on these tests as well as the challenges and requirements we had identified earlier in the
          process, we ultimately created a system that (among other things) provides the following components
          that can be activated based on users' needs:
          <ul>
            <li>Gaze cones to indicate where other users are looking in the 360° live stream,</li>
            <li>a function to <q>take over</q> the stream and force everyone to look in the same direction, and</li>
            <li>the possibility to add text, images, videos, and drawings to the 360° live stream.</li>
          </ul>
          However, most importantly, when a projector is available, the system can be set up to support
          <span class="fw4">projective augmented reality</span>.
          That is, whatever is drawn into such a projective region in the 360° live stream appears at the
          exact position in the room and can be saved for later sessions.
          In this way, we can create interactive whiteboards onto which both local and remote meeting
          participants can draw.<br /><br />
          The <span class="fw4 small-caps">user studies</span> were carried out with one group of three
          and two groups of four and were intended to identify usability issues and explore more potential
          scenarios.
          Our participants were presented with three tasks to be solved in a group and afterwards filled out
          a post-study questionnaire and gave open-ended feedback.
          The studies suggest that our system can solve the existing challenges and be applied to a wide
          range of scenarios.<br /><br />
          Overall, setting up 360Anywhere requires only a laptop, a 360° camera, and (optionally) a projector.
        </project-section-text>
        <project-section>
          <a class="bw0 dim pa2" href="/pdf/360anywhere.pdf">
            <img class="paper-img shadow" src="~/assets/img/360anywhere/paper.png" />
          </a>
        </project-section>
        <prev-next prevTitle="" prevLink="" nextTitle="Gesture&shy;Wiz" nextLink="gesturewiz"></prev-next>
        <my-footer></my-footer>
        <back-to-top></back-to-top>
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
import BackToTop from "~/components/BackToTop.vue"

export default {
  components: {
    MyHeader,
    MyFooter,
    ProjectSummary,
    Process,
    ProjectSectionText,
    ProjectSection,
    PrevNext,
    BackToTop
  },
  data: () => ({
    process: {
      teamSize: 5,
      timeframe: "Jun&ndash;Sep 2017",
      affiliation: "University of Michigan",
      roles: ["Team/Project Lead", "User Research", "System Design + Architecture"],
      process: {
        "Discovery": ["literature review", "competitive analysis"],
        "Concept": ["sketches", "storyboards", "mind maps", "affinity diagrams", "wireframes", "initial prototype"],
        "Iterative Implementation (3&times;)": ["high-fidelity prototype", "user study", "kanban"]
      }
    }
  })
}
</script>

<style scoped>
  .template-container {
    background-color: rgba(44, 62, 80, 1.0);
    color: ivory;
  }

  .template-container >>> a {
    color: ivory;
  }

  .template-container >>> .color-background {
    color: rgb(44, 62, 80);
  }
  
  .bg-image {
    background-image: url(~/assets/img/360anywhere/360anywhere.jpg);
  }

  .gradient {
    background-image: linear-gradient(rgba(44, 62, 80, 0.0) 30%, rgb(44, 62, 80, 1.0));
  }
  
  .gradient-text {
    background: linear-gradient(left, DeepPink, #eeeeee);
    background: -webkit-linear-gradient(left, DeepPink, #eeeeee);
    background-clip: border-box;
    -webkit-background-clip: text;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }
</style>
