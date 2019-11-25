<template>
  <div class="template-container">
    <div class="template-container-inner pa3 pa5-ns tc">
      <my-header></my-header>
      <div class="dib f3 f1-ns fw6 lh-title measure-wide tl">
        I'm a researcher, designer, &amp; computer scientist
        <div class="f4 f3-ns fw4 mt4">
          who does augmented reality, UX design, &amp; usability.
          <a href="#" v-if="!isMoreDisplayed" v-on:click="displayMore">More ...</a>
          <span v-if="isMoreDisplayed">
            Currently, I'm a UX Manager at C&amp;A&mdash;one of Europe's biggest fashion retailers.
            I mainly work on optimizing their online shops through quantitative and qualitative research,
            as well as UX design and A/B testing.
            <!-- Currently, I'm working on new physical &amp; digital methods for designers to create &amp; test
            better AR/VR experiences.
            At the University of Michigan School of Information, we are reinventing UX design itself. -->
          </span>
        </div>
        <div class="f5 f4-ns fw3 mt5">
          A website is never finished. Therefore, I keep feedback &amp; to-dos in
          <a class="dim fw4 important-link" href="https://trello.com/b/OV7i5MHH/maxspeichercom">a public Trello board <i class="fab fa-trello"></i></a>
          &nbsp;<i class="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div class="mt5 mt6-ns">
        <a id="work" name="work"></a>
        <div class="f3 f2-ns fw6 mb4 mb5-ns tl">
          Selected Work.
        </div>
        <div class="cf">
          <box id="360anywhere" title="360&shy;Any&shy;where" topic="Collaboration in 360° &amp; AR."></box>
          <box id="gesturewiz" title="Gesture&shy;Wiz" topic="Rapid gesture prototyping."></box>
          <box id="holobuilder" title="Holo&shy;Builder" topic="An AR/VR web platform."></box>
          <box id="sio" title="Search<br />Inter&shy;action<br />Optimi&shy;zation" topic="My Ph.D. thesis."></box>
          <box id="w3touch" title="W3Touch" topic="Website adaptation for touch."></box>
          <div class="fl pa2 w-100 w-50-m w-third-l">
            <div class="box f2 f3-m fw6 w-100">
              <div class="box-padding"></div>
              <a href="https://2008.maxspeicher.com" class="box-inner mid-gray" style="background-color: #eee">
                <div class="center w-100">
                  Read my blog
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mt5 mt6-ns">
        <a id="publications" name="publications"></a>
        <div class="f3 f2-ns fw6 mb4 mb5-ns tl">
          Some Publications.
        </div>
        <div class="tl mb4 mb5-ns">
          <div class="mb4">
            <div class="relative f4 fw4 lh-title mb3">
              <span class="dn db-ns fa-layers fa-fw" style="position: absolute; transform: translateX(-105%) translateY(15%)">
                <i class="fas fa-certificate"></i>
                <span class="fa-layers-text fa-inverse" data-fa-transform="shrink-11.5 rotate--30">NEW</span>
              </span>
              <a class="dim" href="/pdf/what-is-mr.pdf">What is Mixed Reality?</a>
            </div>
            <div class="lh-copy">
              <span class="fw4">M. Speicher</span>, B.D. Hall, M. Nebeling
              &bull; <span class="fw4">CHI '19</span> &bull; #AR &bull;
              <i class="silver fas fa-award" title="Best Paper Honorable Mention Award"></i>
            </div>
          </div>
          <div class="mb4">
            <div class="relative f4 fw4 lh-title mb3">
              <span class="dn db-ns fa-layers fa-fw" style="position: absolute; transform: translateX(-105%) translateY(15%)">
                <i class="fas fa-certificate"></i>
                <span class="fa-layers-text fa-inverse" data-fa-transform="shrink-11.5 rotate--30">NEW</span>
              </span>
              <a class="dim" href="/pdf/the-trouble.pdf">The Trouble with Augmented Reality/Virtual Reality Authoring Tools</a>
            </div>
            <div class="lh-copy">
              M. Nebeling, <span class="fw4">M. Speicher</span>
              &bull; <span class="fw4">ISMAR '18 Adjunct</span> &bull; #AR #UXDesign
            </div>
          </div>
          <div class="mb4">
            <div class="f4 fw4 lh-title mb3">
              <a class="dim" href="/pdf/xd-ar.pdf">XD-AR: Challenges and Opportunities in Cross-Device Augmented Reality Application Development</a>
            </div>
            <div class="lh-copy">
              <span class="fw4">M. Speicher</span>, B.D. Hall, A. Yu, B. Zhang, H. Zhang, J. Nebeling, M. Nebeling
              &bull; <span class="fw4">EICS '18</span> &bull; #AR &bull;
              <i class="gold fas fa-trophy" title="Best Paper Award"></i>
            </div>
          </div>
          <div class="mb4">
            <div class="f4 fw4 lh-title mb3">
              <a class="dim" href="https://www.researchgate.net/publication/324665021_GestureWiz_A_Human-Powered_Gesture_Design_Environment_for_User_Interface_Prototypes">GestureWiz: A Human-Powered Gesture Design Environment for User Interface Prototypes</a>
            </div>
            <div class="lh-copy">
              <span class="fw4">M. Speicher</span>, M. Nebeling
              &bull; <span class="fw4">CHI '18</span> &bull; #UXdesign
            </div>
          </div>
          <div class="mb4">
            <div class="f4 fw4 lh-title mb3">
              <a class="dim" href="https://www.researchgate.net/publication/282441131_SOS_Does_Your_Search_Engine_Results_Page_SERP_Need_Help">S.O.S.: Does Your Search Engine Results Page (SERP) Need Help?</a>
            </div>
            <div class="lh-copy">
              <span class="fw4">M. Speicher</span>, A. Both, M. Gaedke
              &bull; <span class="fw4">CHI '15</span> &bull; #UXdesign #usability &bull;
              <i class="silver fas fa-award" title="Best Paper Honorable Mention Award"></i>
            </div>
          </div>
          <div class="mb4">
            <div class="relative f4 fw4 lh-title mb3">
              <a class="dim" href="/pdf/360anywhere.pdf">360Anywhere: Mobile Ad-hoc Collaboration in Any Environment using 360 Video and Augmented Reality</a>
            </div>
            <div class="lh-copy">
              <span class="fw4">M. Speicher</span>, J. Cao, A. Yu, H. Zhang, M. Nebeling
              &bull; <span class="fw4">EICS '18</span> &bull; #AR
            </div>
          </div>
          <div class="mb4">
            <div class="f4 fw4 lh-title mb3">
              <a class="dim" href="https://www.researchgate.net/publication/249009504_W3touch_Metrics-based_Web_Page_Adaptation_for_Touch">W3Touch: Metrics-based Web Page Adaptation for Touch</a>
            </div>
            <div class="lh-copy">
              M. Nebeling, <span class="fw4">M. Speicher</span>, M.C. Norrie
              &bull; <span class="fw4">CHI '13</span> &bull; #usability
            </div>
          </div>
          <div class="mb4">
            <div class="f4 fw4 lh-title mb3">
              <a class="dim" href="https://www.researchgate.net/publication/301430241_TellMyRelevance_Predicting_the_Relevance_of_Web_Search_Results_from_Cursor_Interactions">TellMyRelevance! Predicting the Relevance of Web Search Results from Cursor Interactions</a>
            </div>
            <div class="lh-copy">
              <span class="fw4">M. Speicher</span>, A. Both, M. Gaedke
              &bull; <span class="fw4">CIKM '13</span> &bull; #usability
            </div>
          </div>
          <div class="mb4">
            <div class="f4 fw4 lh-title mb3">
              <a class="dim" href="https://www.researchgate.net/publication/271269916_Ensuring_Web_Interface_Quality_through_Usability-Based_Split_Testing">Ensuring Web Interface Quality through Usability-Based Split Testing</a>
            </div>
            <div class="lh-copy">
              <span class="fw4">M. Speicher</span>, A. Both, M. Gaedke
              &bull; <span class="fw4">ICWE '14</span> &bull; #usability
            </div>
          </div>
          <div class="mb4">
            <div class="f4 fw4 lh-title mb3">
              <a class="dim" href="http://www.qucosa.de/fileadmin/data/qucosa/documents/20810/Dissertation_Archivierung_Speicher.pdf">Search Interaction Optimization: A Human-Centered Design Approach</a>
            </div>
            <div class="lh-copy">
              <span class="fw4">M. Speicher</span>
              &bull; <span class="fw4">Ph.D. Thesis</span> &bull; #UXdesign #usability #searchEngines
            </div>
          </div>
        </div>
        <div class="f4 tl">
          <a class="dim fw4 important-link" href="http://dblp.org/pers/hd/s/Speicher:Maximilian">And some more</a>
          &nbsp;<i class="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div class="mt5 mt6-ns">
        <div class="f3 f2-ns fw6 mb4 mb5-ns tl">
          A Couple of Articles.
        </div>
        <div class="tl mb4 mb5-ns">
          <my-article title="What is augmented reality, anyway?" link="http://theconversation.com/what-is-augmented-reality-anyway-99827" publication="The Conversation"></my-article>
          <my-article title="What is Design Thinking?" link="https://medium.muz.li/what-is-design-thinking-4afa067cb986" publication="Muzli"></my-article>
          <my-article title="On Design Thinking" link="https://medium.theuxblog.com/on-design-thinking-4a4980aebe8d" publication="The UX Blog"></my-article>
          <my-article title="How usability impacts profit: The Conversion/Usability Framework" link="https://uxdesign.cc/the-conversion-usability-framework-3e2068edebbc" publication="UX Collective"></my-article>
          <my-article title="What Do Highly Successful Start-ups Have in Common?" link="https://www.startups.co/articles/what-do-highly-successful-start-ups-have-in-common" publication="Startups.co"></my-article>
          <my-article title="How to Data Analytics (in a Start-up)" link="https://medium.com/startupsco/how-to-data-analytics-in-a-start-up-f801d0ccf5d2" publication="Startups.co"></my-article>
        </div>
      </div>
      <my-footer></my-footer>
      <back-to-top></back-to-top>
    </div>
  </div>
</template>

<script>
import DATA from "~/data/projects.js"

import MyHeader from "~/components/Header.vue"
import MyFooter from "~/components/Footer.vue"
import Box from "~/components/Box.vue"
import BackToTop from "~/components/BackToTop.vue"
import MyArticle from "~/components/Article.vue"

export default {
  asyncData(context) {
    // called every time before loading the component
    return DATA;
  },
  components: {
    MyHeader,
    MyFooter,
    Box,
    BackToTop,
    MyArticle
  },
  data: () => ({
    isMoreDisplayed: false
  }),
  layout: "default",
  methods: {
    displayMore(e) {
      e.preventDefault();
      this.isMoreDisplayed = true;
    }
  }
}
</script>

<style>
.box-360anywhere {
  background-image: url(~/assets/img/360anywhere/360anywhere-thumb.jpg);
}

.box-gesturewiz {
  background-image: url(~/assets/img/gesturewiz/gesturewiz-thumb.jpg);
}

.box-holobuilder {
  background-image: url(~/assets/img/holobuilder/holobuilder-thumb.jpg);
}

.box-sio {
  background-image: url(~/assets/img/sio/sio-thumb.jpg);
}

.box-w3touch {
  background-image: url(~/assets/img/w3touch/w3touch-thumb.jpg);
}
</style>