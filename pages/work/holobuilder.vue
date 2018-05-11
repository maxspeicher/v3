<template>
  <div class="template-container">
    <div class="bg-image">
      <div class="gradient"></div>
    </div>
    <div class="template-container-inner pa3 pa5-ns tc">
      <div class="on-top">
        <my-header></my-header>
        <project-summary title="HoloBuilder">
          <a href="https://www.holobuilder.com/">HoloBuilder</a> is an augmented and virtual reality web platform
          specifically aimed at the documentation of construction sites.
          At the heart of the platform is the upload of 360° photos that can be connected to create virtual
          tours.
          I joined the project in March 2015 and helped grow the product in a variety of roles for two years.
        </project-summary>
        <process v-bind:data="process"></process>  
        <project-section-text title="Discovering the Target User.">
          When I joined HoloBuilder (in their Aachen office), the project was still aimed at whoever owned a
          360° camera or simply wanted to create AR/VR content online without the programming effort.
          Therefore, in the first eight months, we conducted a lot of
          <span class="fw4 small-caps">field research</span> (e.g., in local businesses for which we created
          virtual tours), <span class="fw4 small-caps">interviews</span>, and
          <span class="fw4 small-caps">meetups</span> in order to observe how and why people use the product and
          to discover suitable use cases.
          From these insights, we generated <span class="fw4 small-caps">customer journeys</span> as well as
          various <span class="fw4 small-caps">personas</span> for different kinds of 360° camera owners, e.g.,
          professional photographers vs. tech enthusiasts.<br /><br />
          Ultimately, in October 2015, we discovered that virtual tours created with HoloBuilder are
          particularly useful to real estate agents, while the CEO (in San Francisco) attracted the interest of
          the construction industry.
          In the following, the relevant personas were reduced to two&mdash;the construction user and the real
          estate user.
        </project-section-text>
        <project-section>
          <img src="~/assets/img/holobuilder/holobuilder-mockup-1.png" />
        </project-section>
        <project-section-text title="Designing the Floor Plan Feature.">
          After construction users had been identified as the primary target audience and the future strategy
          for the product had been defined, I was the responsible interaction designer for the floor plan
          feature, which was the first feature demanded by our new target users.
          The goal was to provide functionality for uploading and displaying floor plans on which the location
          of the different 360° photos in a virtual tour could be marked (think Google Maps for construction
          sites).<br /><br />
          After eliciting requirements in intial interviews (e.g., the possibility to upload both images and 
          PDFs), in coordination with the responsible graphic designer and software engineer, I created a variety
          of potential solutions in the form of <span class="fw4 small-caps">sketches</span> and
          <span class="fw4 small-caps">storyboards</span>.
          In the following, we selected the four best ideas and I created medium-fidelity
          <span class="fw4 small-caps">mockups</span> that were presented to the CEO and stakeholders.
          With the gathered feedback, I revised the mockups in a second iteration, based on which a decision was
          made.
          Subsequently, the feature went into production and we implemented an
          <span class="fw4 small-caps">mvp</span> that was in the following incrementally improved using
          <span class="fw4 small-caps">Lean UX</span> principles.
          After I left the company, the floor plan was further extended with the option for multiple floors,
          among other things.
          It is still one of the core features of HoloBuilder.
        </project-section-text>
        <project-section class="cf dt">
          <div class="fl fn-ns dtc pa2 w-100 v-mid w-50-ns">
            <img class="shadow" src="~/assets/img/holobuilder/holobuilder-sketch-1.jpg" />
          </div>
          <div class="fl fn-ns dtc pa2 w-100 v-mid w-50-ns">
            <img src="~/assets/img/holobuilder/holobuilder-mockup-2.png" />
          </div>
        </project-section>
        <project-section-text title="Company-wide Data Analytics.">
          Based on the first round of studies, we concluded the need for a different worker UI that shows only
          one gesture template at a time rather than the whole gesture set.
          The latter was confusing for crows workers since templates are animated GIFs and resulted in
          suboptimal recognition performance.
          Besides, we decided to added a gamification component to the system to further improve recognition
          quality.
          In this way, crowd workers can earn a bonus by being especially quick and accurate.
          We validated these new design decision in a second round of crowd worker
          <span class="fw4 small-caps">experiments</span> with an improved prototype.
          Additionally, we conducted a second study with 12 interaction designers that were again asked to design
          gestures for a slideshow application, this time in a co-creation setting.<br /><br />
          The main findings from the study were that GestureWiz is quick and easy to use and well suited for
          conflict resolution of ambiguous gestures.
          The interaction designers we tested with appreciated the support GestureWiz can provide for the
          prototyping process of gesture-based apps.
        </project-section-text>
        <prev-next prevTitle="GestureWiz" prevLink="gesturewiz" nextTitle="Search Interaction Optimization" nextLink="sio"></prev-next>
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
      teamSize: "roughly 20",
      timeframe: "Mar 2015&ndash;Feb 2017",
      roles: ["VP of Customer &amp; Data Analytics &amp; Optimization", "Strategy", "User Research", "Interaction Design", "Product Management"],
      process: {
        "Discovery": ["field research", "interviews", "meetups", "personas", "customer journeys"],
        "Floor Plan Feature": ["sketches", "storyboards", "mockups", "mvp", "lean ux"],
        "Data Analytics": ["laber"],
        "Other Stuff": ["blah"]
      }
    }
  })
}
</script>

<style scoped>
  .template-container {
    background-color: rgba(41, 128, 185, 1.0);
    color: ivory;
  }

  .template-container >>> a {
    color: ivory;
  }
  
  .bg-image {
    background-image: url(~/assets/img/holobuilder/holobuilder.jpg);
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
    background-image: linear-gradient(rgba(41, 128, 185, 0.0) 30%, rgb(41, 128, 185, 1.0));
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
