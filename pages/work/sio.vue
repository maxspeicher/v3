<template>
  <div class="template-container">
    <div class="bg-image">
      <div class="gradient"></div>
    </div>
    <div class="template-container-inner pa3 pa5-ns tc">
      <div class="on-top">
        <my-header></my-header>
        <project-summary title="Search Interaction Optimization">
          I completed an industrial Ph.D. program in the R&amp;D department of Unister GmbH, who were
          developing <span class="script">BlueKiwi,</span> a semantic search engine, at that time.
          The goal of my project was to develop a new methodology for more automatic usability evaluation
          and optimization of search engines that is still effective.<br /><br />

          Its title was
          <a href="http://www.qucosa.de/fileadmin/data/qucosa/documents/20810/Dissertation_Archivierung_Speicher.pdf">Search Interaction Optimization: A Human-Centered Design Approach</a>.
        </project-summary>
        <process v-bind:data="process"></process>  
        <project-section-text title="Finding a Ph.D. Project.">
          My first task after joining Unister was to find a project I could write my Ph.D. thesis about and
          pitch it internally as well as to Chemnitz University of Technology and the SAB
          (Sächsische AufbauBank), who granted my scholarship.
          I started with a <span class="fw4 small-caps">literature review</span> and
          <span class="fw4 small-caps">competitive analysis</span>.
          After that, because of my interest in HCI, I spent some time doing
          <span class="fw4 small-caps">field research</span> at various teams within Unister&mdash;front-end,
          UI design, usability testing, and data analytics&mdash;where I
          <span class="fw4 small-caps">interviewed</span> people and discovered that traditional usability
          evaluation through user studies was virtually absent.
          Instead, optimization was mostly based on split testing and conversions such as the number of
          clicked ads.
          Clearly, there was the need for a new approach that would combine split testing with an effective
          metric for usability.
          I concluded this phase by synthesizing two <span class="fw4 small-caps">personas</span> (Finn, the
          searcher and Rey, the developer) and four <span class="fw4 small-caps">scenarios</span> from my
          findings, which would form the basis for my Ph.D. thesis.
        </project-section-text>
        <project-section>
          <img class="w-75-l shadow" src="~/assets/img/sio/interview-setup.jpg" />
        </project-section>
        <project-section-text title="Predicting the Relevance of Search Results from User Interactions.">
          In search engines, relevance (or informativeness) is a crucial usability factor.
          I designed and developed <span class="script">TellMyRelevance!</span> (TMR), a pipeline that
          utilized a variety of user interactions (e.g., cursor speed and the length of the cursor trail) to
          determine the relevance of search results.
          I was allowed to collect more than 30 GB of interaction data on two travel-booking websites, which
          were used to train machine-learning models used for relevance prediction.
          In comparison to a state-of-the-art solution used in industry, TMR performed considerably better for
          all datasets in my <span class="fw4 small-caps">large-scale data analysis</span>.
          In another iteration, TMR was extended with streaming capabilities and incremental learning
          and predictions were ultimately incorporated into BlueKiwi.
        </project-section-text>
        <project-section>
          <img src="~/assets/img/sio/sio-mockup-1.png" />
        </project-section>
        <project-section-text title="Usability-based Split Testing: A New Methodology.">
          Next, I applied the insights gained from relevance prediction to usability in general.
          For this, I first had to develop a new usability questionnaire with items (informativeness,
          understandability, readability, etc.) that are suitable for correlation with user interactions.
          Therefore, I conducted a review of existing best practices and guidelines as well as
          <span class="fw4 small-caps">interviews</span> with nine usability professionals.
          Then, I designed and developed <span class="script">WaPPU</span>, a new A/B testing tool based on a
          usability score rather than clicks on ads.
          WaPPU collects interaction data on two versions of the same website, trains machine-learning models,
          predicts usability as a single score as well as the items from my new questionnaire and then
          determines the better interface.
          I used a first <span class="fw4 small-caps">prototype</span> in a <span class="fw4 small-caps">user
          study</span> to validate my new questionnaire and refine the system.
          In a second study with more than 80 participants who compared BlueKiwi's results page with a
          deliberately worse version of it, WaPPU could correctly identify even subtle differences in
          usability.
        </project-section-text>
        <project-section>
          <img class="w-75-l shadow" src="~/assets/img/sio/SERP-comparison.jpg" />
        </project-section>
        <project-section-text title="Optimizing BlueKiwi.">
          Based on a <span class="fw4 small-caps">competitive analysis</span> of existing search engines and
          two rounds of <span class="fw4 small-caps">expert inspections</span>, WaPPU was then extended with a
          catalog of based practices to form <span class="script">S.O.S.,</span> a system that automatically
          proposes usability optimizations based on the usability measurements, such as <q>Your site is not
          well readable, you should consider changing your font size</q>.
          Finally, in another <span class="fw4 small-caps">user study</span>, S.O.S. was applied to BlueKiwi's
          results page and informed a redesign that proved to yield significantly better usability.
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
      roles: ["Industrial Ph.D. Student", "User Research", "System Design + Architecture", "Project Management", "Code"],
      process: {
        "Discovery": ["literature review", "competitive analysis", "field research", "interviews"],
        "Synthesis": ["personas", "scenarios"],
        "Relevance Prediction": ["iterative implementation (2&times;)", "large-scale data analysis (2&times;)"],
        "Usability Evaluation": ["expert interviews", "iterative implementation (2&times;)", "user study (2&times;)", "a/b testing"],
        "Usability Optimization": ["competitive analysis", "expert inspections (2&times;)", "user study"]
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
  }

  .gradient {
    background-image: linear-gradient(rgba(142, 68, 173, 0.0) 30%, rgb(142, 68, 173, 1.0));
  }
</style>
