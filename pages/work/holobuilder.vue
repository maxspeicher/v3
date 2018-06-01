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
        <project-section style="margin-left: auto; margin-right: auto; max-width: 100%; width: 560px;">
          <div class="pa2 video-wrapper">
            <iframe class="shadow" width="560" height="315" src="https://www.youtube-nocookie.com/embed/CAJZ2XHOySc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <div class="f6 fw4 lh-copy pa2">
            We recorded this a month after I joined the project and used it as the header background of
            HoloBuilder's very first landing page (inspired by Wikiwand).
          </div>
        </project-section>
        <project-section-text title="Discovering the Target User.">
          When I joined <span class="script">HoloBuilder</span> (in their Aachen office), the project was
          still aimed at whoever owned a 360° camera or simply wanted to create AR/VR content online without
          the programming effort.
          Therefore, in the first eight months, we conducted a lot of
          <span class="fw4 small-caps">field research</span> (e.g., in local businesses for which we created
          virtual tours), <span class="fw4 small-caps">interviews</span>, and
          <span class="fw4 small-caps">meetups</span> in order to observe how and why people use the product
          and to discover suitable use cases.
          From these insights, we synthesized <span class="fw4 small-caps">customer journeys</span> as well as
          various <span class="fw4 small-caps">personas</span> for different kinds of 360° camera owners, e.g.,
          professional photographers and tech enthusiasts.<br /><br />
          Ultimately, in October 2015, we discovered that virtual tours created with HoloBuilder are
          particularly useful to real estate agents, while the CEO (in San Francisco) attracted the interest of
          the construction industry.
          In the following, the relevant personas were reduced to two&mdash;the construction user and the real
          estate user, for which we designed different landing pages.
        </project-section-text>
        <project-section>
          <img class="pa2" src="~/assets/img/holobuilder/holobuilder-mockup-1.png" />
          <div class="f6 fw4 lh-copy pa2">
            Starting in October 2015, HoloBuilder targeted construction professionals.
            This was accompanied by a complete re-branding.
          </div>
        </project-section>
        <project-section-text title="Designing the Floor Plan Feature.">
          After construction users had been identified as the primary target audience and the future strategy
          for the product had been defined, I was the responsible interaction designer for the floor plan
          feature, which was the first feature demanded by our new target users.
          The goal was to provide functionality for uploading and displaying floor plans on which the location
          of the different 360° photos in a virtual tour could be marked (think Google Maps for construction
          sites).<br /><br />
          After eliciting initial requirements in <span class="fw4 small-caps">interviews</span> (e.g.,
          the possibility to upload both images and PDFs), in coordination with the responsible graphic
          designer and software engineer, I created a variety of potential solutions in the form of
          <span class="fw4 small-caps">sketches</span> and <span class="fw4 small-caps">storyboards</span>.
          In the following, we selected the four best ideas and I created medium-fidelity
          <span class="fw4 small-caps">mockups</span> that were presented to the CEO and stakeholders.
          With the gathered feedback, I revised the mockups in a second iteration, based on which a decision
          was made.
          Subsequently, the feature went into production and we implemented an
          <span class="fw4 small-caps">mvp</span> that was in the following incrementally improved using
          <span class="fw4 small-caps">lean ux</span> principles.
          After I left the company, the floor plan was further extended with the option for multiple floors,
          among other things.
          It is still one of the core features of HoloBuilder.
        </project-section-text>
        <project-section>
          <div class="cf dt">
            <div class="fl fn-ns dtc pa2 w-100 v-mid w-50-ns">
              <img class="shadow" src="~/assets/img/holobuilder/holobuilder-sketch-1.jpg" />
            </div>
            <div class="fl fn-ns dtc pa2 w-100 v-mid w-50-ns">
              <img src="~/assets/img/holobuilder/holobuilder-mockup-2.png" />
            </div>
          </div>
          <div class="f6 fw4 lh-copy pa2">
            The floor plan feature for construction professionals&mdash;from sketch to MVP.
          </div>
        </project-section>
        <project-section-text title="Company-wide Data Analytics.">
          Besides the above, my primary responsibility at HoloBuilder was to guarantee the continuous delivery
          of meaningful data and insights to C-level management and other internal stakeholders.
          For this I acted as the internal Product Manager (officially VP of Customer &amp; Data Analytics
          &amp; Optimization) responsible for the design and development of a company-wide data analytics
          pipeline.
          In a discovery phase, I first identified my customers within the company&mdash;the CEO, the VP of
          Product, Marketing, Customer Support, and Sales&mdash;and conducted
          <span class="fw4 small-caps">interviews</span> to determine initial requirements.
          In parallel, I researched which data was already available and to be included in the infrastructure.
          Afterwards, I designed the data analytics pipeline, which was
          <span class="fw4 small-caps">iteratively revised</span> depending on stakeholders' changing
          requirements.
          I led a cross-functional team of 4 people that helped with the implementation (embedded into the
          company's <span class="fw4 small-caps">scrum</span> process) and continuous delivery of insights.
          On a weekly basis, together with the marketing manager, I presented core insights to C-level
          management and provided recommendations for action based on these.
          In particular, the data provided by the pipeline was used for iterative improvements of the web
          platform based on <span class="fw4 small-caps">lean ux</span> principles.<br /><br />

          As is natural in startup environments, I also had a number of other responsibilities, such as leading
          a task force for writing a patent and developing the first version of the HoloBuilder brand book,
          which defined the company's branding and CI.
        </project-section-text>
        <prev-next prevTitle="Gesture&shy;Wiz" prevLink="gesturewiz" nextTitle="Search Interaction Optimization" nextLink="sio"></prev-next>
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
      affiliation: "bitstars GmbH",
      roles: ["VP of Customer &amp; Data Analytics &amp; Optimization", "Team Lead", "Strategy", "User Research", "Interaction Design", "Product Management", "Branding &amp; CI"],
      process: {
        "Discovery": ["field research", "interviews", "meetups", "personas", "customer journeys"],
        "Floor Plan Feature": ["interviews", "sketches", "storyboards", "mockups", "mvp", "scrum", "lean ux"],
        "Data Analytics": ["interviews", "scrum", "lean ux"]
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
  }

  .gradient {
    background-image: linear-gradient(rgba(41, 128, 185, 0.0) 30%, rgb(41, 128, 185, 1.0));
  }
</style>
