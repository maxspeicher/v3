<template>
  <div class="template-container">
    <div class="template-container-inner pa3 pa5-ns tc">
      <my-header></my-header>
      <div class="f4 f3-ns fw4 lh-title mt4 tl">
        <div class="mb3">
          I'm Max, currently a post-doctoral fellow at the University of Michigan working on 
          <span class="fw5">augmented reality</span>,
          <span class="fw5">UX design</span>, and 
          <span class="fw5">usability</span> topics.
          I'm passionate about research, designing and developing interactive systems and digital products,
          and working with cutting-edge technologies.
        </div>
        <div class="mb3">
          Throughout my career, I've gained <span class="fw5">leadership</span> and
          <span class="fw5">management</span> experience in various roles&mdash;in both,
          <span class="fw5">academia</span> and <span class="fw5">industry</span>.
        </div>
        <div class="mb3">
          I hold a <span class="fw5">Ph.D.</span> in Computer Science and have specialized in and done
          <span class="fw5">Human-Centered Design</span> since 2010.
        </div>
      </div>
      <div class="dib measure-wide mt5 mt6-ns tl">
        <img src="~/assets/img/me-as-a-venn-diagram.png" style="max-width: 667px; width: 100%" />
      </div>
      <div class="cf lh-copy mt5 mt6-ns tl">
        <div class="f3 fl fw4 mb3 mb0-ns pr3-ns w-100 w-third-m w-25-l">
          Academia.
        </div>
        <div class="fl w-100 w-two-thirds-m w-75-l">
            Currently, I'm a post-doctoral research fellow.
            The research projects I lead at the University of Michigan School of Information focus on
            natural user interfaces &amp; <span class="fw5">UX design</span>, with a particular emphasis on
            <span class="fw5">AR/VR</span> and <span class="fw5">usability</span>.
            In particular, we develop new methods for physical and digital prototyping to support the design
            process for AR/VR experiences.
            I also assist with teaching <span class="fw5">interaction design</span> and have introduced
            <span class="fw5">Kanban</span> for our research projects.
            <br /><br />
            I earned my Ph.D. from Chemnitz University of Technology in 2016 and my M.Sc. from ETH Zurich
            in 2012.
        </div>
      </div>
      <div class="cf lh-copy mt5 mt6-ns tl">
        <div class="f3 fl fw4 mb3 mb0-ns pr3-ns w-100 w-third-m w-25-l">
          Industry.
        </div>
        <div class="fl w-100 w-two-thirds-m w-75-l">
            For two years, I've helped grow HoloBuilder, an AR/VR startup now specializing in solutions for
            the construction industry.
            As their VP of Customer &amp; Data Analytics &amp; Optimization, I acted as the internal product
            manager responsible for company-wide data analytics.
            I was also significantly involved in <span class="fw5">user research</span> and
            <span class="fw5">UX design</span>, e.g., as feature owner and designer of core platform
            features.<br /><br />
            Prior to that, I completed an industrial Ph.D. program in the R&amp;D department of Unister GmbH,
            where I developed a new human-centered methodology for more automatic
            <span class="fw5">usability</span> evaluation and optimization of search engines that is still
            effective.<br /><br />
            In my 4&frac12; years in industry, I have learned working in <span class="fw5">Scrum</span> teams
            first-hand.
        </div>
      </div>
      <div class="cf lh-copy mt5 mt6-ns tl">
        <div class="f3 fl fw4 mb3 mb0-ns pr3-ns w-100 w-third-m w-25-l">
          Other Stuff.
        </div>
        <div class="fl w-100 w-two-thirds-m w-75-l">
            I <i class="fas fa-heart"></i> minimalism &amp; typography.<br /><br />

            In my opionion, one of my biggest strenghts is probably that I'm a quick learner, which has helped
            me a lot in my career so far.<br /><br />

            Apart from everything above, I'm also a passionate <span class="fw5">Ringtennis</span> player.
            I've won five German Championships and two World Team Championships and was the men's captain of
            the Germany Ringtennis National Team from 2010 till 2018.

            <div class="f4 mt5 mt6-ns tl">
              <a class="fw4" href="https://www.linkedin.com/in/maximilianspeicher/">More on LinkedId <i class="fab fa-linkedin"></i></a>
              &nbsp;
              <i class="fas fa-long-arrow-alt-right"></i>
            </div>
        </div>
      </div>
      <my-footer></my-footer>
      <div class="mt4 tc tl-ns">
        <small>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>, licensed under <a class="bw0" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"><i class="fab fa-creative-commons"></i><i class="fab fa-creative-commons-by"></i></a>.</small>
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
