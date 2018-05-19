<template>
  <div class="template-container">
    <div class="template-container-inner pa3 pa5-ns tc">
      <my-header></my-header>
      <div class="f4 f3-ns fw4 lh-title mt4 tl">
        I'm Max, a traditionally trained computer scientist who does
        <span class="script">human-computer interaction.</span>
        I&nbsp;work at the intersection of research, design, &amp; computer science.<br /><br />
        Throughout my career, I've designed interactive systems &amp; conducted research on how humans
        interact with computers&mdash;both in academia and industry.
        My areas of expertise are AR/VR, UX design, and usability.<br /><br />
        I <i class="fas fa-heart"></i> minimalism &amp; typography.
      </div>
      <div class="dib f1 fw6 measure-wide mt5 mt6-ns tl">
        <img src="~/assets/img/me-as-a-venn-diagram.png" style="max-width: 667px; width: 100%" />
      </div>
      <div class="cf lh-copy mt5 mt6-ns tl">
        <div class="f3 fl fw4 mb3 mb0-ns pr3-ns w-100 w-third-m w-25-l">
          Academia.
        </div>
        <div class="fl w-100 w-two-thirds-m w-75-l">
            Currently, I'm a post-doctoral research fellow.
            The research projects I currently lead at the University of Michigan School of Information focus on
            natural user interfaces &amp; user experience design, with a particular focus on augmented and
            virtual reality.
            In particular, we develop new method for physical and digital prototyping to support the design
            process of AR/VR experiences.
            <br /><br />
            I earned my <span class="script">Ph.D.</span> from Chemnitz University of Technology in 2016 and
            my M.Sc. from ETH Zurich in 2012.
        </div>
      </div>
      <div class="cf lh-copy mt5 mt6-ns tl">
        <div class="f3 fl fw4 mb3 mb0-ns pr3-ns w-100 w-third-m w-25-l">
          Industry.
        </div>
        <div class="fl w-100 w-two-thirds-m w-75-l">
            For two years, I've helped grow HoloBuilder, an AR/VR startup now specializing in solutions for
            the construction industry.
            As their VP of Customer &amp; Data Analytics &amp; Optimization, I designed a company-wide
            data analytics pipeline and was also significantly involved in user research and UX design.<br /><br />
            Prior to that, I completed an industrial Ph.D. program in the R&amp;D department of Unister GmbH
            (Leipzig), where I developed a new methodology for more automatic usability evaluation and
            optimization of search engines that is still effective.
        </div>
      </div>
      <div class="cf lh-copy mt5 mt6-ns tl">
        <div class="f3 fl fw4 mb3 mb0-ns pr3-ns w-100 w-third-m w-25-l">
          Other Stuff.
        </div>
        <div class="fl w-100 w-two-thirds-m w-75-l">
            One of my biggest strenghts is that I'm a quick learner, which has helped me a lot in my career
            so far.<br /><br />

            Apart from everything above, I'm a passionate <span class="script">Ringtennis</span> player. I've won
            five German Championships and two World Team Championships and was the men's captain of the Germany
            Ringtennis National Team from 2010 till 2018.
        </div>
      </div>
      <div class="mt5 mt6-ns">
        <a class="bw0 dim" href="https://www.linkedin.com/in/maximilianspeicher/">
          <i class="fab fa-linkedin fa-7x"></i>
        </a>
      </div>
      <my-footer></my-footer>
      <small>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>, licensed under <a class="bw0" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"><i class="fab fa-creative-commons"></i><i class="fab fa-creative-commons-by"></i></a>.</small>
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
