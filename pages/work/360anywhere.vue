<template>
  <div class="template-container">
    <div class="bg-image">
      <div class="gradient"></div>
    </div>
    <div class="template-container-inner pa3 pa5-ns tc">
      <div class="on-top">
        <my-header></my-header>
        <div class="dib f3 f1-ns fw6 measure-wide tl w-100">
          360Anywhere
          <div class="f4 f3-ns fw4 mt4">
            We wanted to merge the physical and digital worlds by providing a remote collaboration solution
            that combines 360° video and augmented reality.
            Imagine a meeting room that is live-streamed to remote meeting participants in 360° and whatever
            they draw into the live stream appears in the actual room.<br /><br />
            A full research paper about 360Anywhere is currently under review.
          </div>
        </div>
        <div class="cf mt5 mt6-ns tl">
          <div class="f3 fl fw4 mb3 mb0-ns pr3-ns w-100 w-third-m w-25-l">
            Identifying Challenges.
          </div>
          <div class="fl w-100 w-two-thirds-m w-75-l">
            Both 360° videos and augmented reality are really powerful for remote collaboration.
            Yet, their full potential had not been made use of.
            Through a <span class="fw4 small-caps">literature review</span> and
            <span class="fw4 small-caps">competitive analysis</span> (including Skype on HoloLens, 
            Sketchboard.io, and Chalk by Vuforia), we found a number of unresolved challenges, the most
            important of which were:
            <ul>
              <li>360° video and AR had not been combined before.</li>
              <li>Users are often not aware of where others are looking in a 360° video.</li>
              <li>Users are often looking into different directions.</li>
            </ul>
          </div>
        </div>
        <div class="mt5 mt6-ns">
          <img src="/img/360anywhere/360anywhere-mockups.png" />
        </div>
        <div class="cf mt5 mt6-ns tl">
          <div class="f3 fl fw4 mb3 mb0-ns pr3-ns w-100 w-third-m w-25-l">
            Finding a Solution.
          </div>
          <div class="fl w-100 w-two-thirds-m w-75-l">
            Making use of standard methods&mdash;<span class="fw4 small-caps">sketching</span>,
            <span class="fw4 small-caps">storyboards</span>, <span class="fw4 small-caps">mind maps</span>, and
            <span class="fw4 small-caps">affinity diagrams</span>&mdash;we brainstormed a range of scenarios
            and solutions and also created initial <span class="fw4 small-caps">wireframes</span>.
            We soon noticed that there is no one-size-fits-all solution for all remote collaboration scenarios.
            Therefore, we decided for a component-based solution that lets users design just the system they
            need.
            A second important requirement was as little hardware as possible to address a wide range of
            potential users.
          </div>
        </div>
        <div class="cf mt5 mt6-ns">
          <div class="fl pa2 w-100 w-50-ns">
            <img class="shadow" src="/img/360anywhere/360anywhere-detail-2.jpg" />
          </div>
          <div class="fl pa2 w-100 w-50-ns">
            <img class="shadow" src="/img/360anywhere/360anywhere-detail-3.jpg" />
          </div>
        </div>
        <div class="cf mt5 mt6-ns tl">
          <div class="f3 fl fw4 mb3 mb0-ns pr3-ns w-100 w-third-m w-25-l">
            Building and Testing 360Anywhere.
          </div>
          <div class="fl w-100 w-two-thirds-m w-75-l">
            Starting with a high-fidelity prototype based on A-Frame, 360Anywhere was built in three iterations,
            each consisting of a <span class="fw4 small-caps">design sprint</span> (adjusted to our needs) with
            a <span class="fw4 small-caps">user study</span> at the end.
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
            In this way, we can create interactive whiteboards onto with both local and remote meeting
            participants can draw.<br /><br />
            The <span class="fw4 small-caps">user studies</span> were carried out with one group of three
            and two groups of four and were intended to identify usability issues and explore more potential
            scenarios.
            Our participants were presented with three tasks to be solved in a group and afterwards filled out
            a post-study questionnaire and gave open-ended feedback.
            The studies suggest that our system can solve the existing challenges and be applied to a wide
            range of scenarios.<br /><br />
            Overall, setting up 360Anywhere requires only a laptop, a 360° camera, and (optionally) a projector.
          </div>
        </div>
        <my-footer></my-footer>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "~/components/Header.vue"
import MyFooter from "~/components/Footer.vue"

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style scoped>
  .template-container {
    background-color: #111111;
    color: ivory;
  }

  .template-container >>> a {
    color: ivory;
  }
  
  .bg-image {
    background-image: url(/img/360anywhere/360anywhere.jpg);
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
    background-image: linear-gradient(rgba(17, 17, 17, 0.0) 30%, rgb(17, 17, 17, 1.0));
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
