webpackJsonp([5],{"/TYz":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("0qDp"),i=e("iA8U"),n=!1;var r=function(t){n||e("S5nK")},o=e("VU/8")(a.a,i.a,!1,r,null,null);o.options.__file="pages\\index.vue",s.default=o.exports},"0qDp":function(t,s,e){"use strict";var a=e("fzEs"),i=e("YXP+"),n=e("yqLL"),r=e("dJon");s.a={asyncData:function(t){return a.a},components:{MyHeader:i.a,MyFooter:n.a,Box:r.a},data:function(){return{isMoreDisplayed:!1}},layout:"default",methods:{displayMore:function(t){t.preventDefault(),this.isMoreDisplayed=!0}}}},"2ZCo":function(t,s,e){t.exports=e.p+"img/w3touch.a1ce293.jpg"},"3VcA":function(t,s,e){"use strict";s.a={data:function(){return{mRotation:0,sRotation:0,mStep:90,sStep:-45}},methods:{rotateCharacters:function(){this.mRotation=(this.mRotation+this.mStep)%360,this.sRotation=(this.sRotation+this.sStep)%360,document.querySelector(".m").style.transform="rotateZ("+this.mRotation+"deg)",document.querySelector(".s").style.transform="rotateZ("+this.sRotation+"deg)"}}}},ANnM:function(t,s,e){t.exports=e.p+"img/sio.b354db1.jpg"},IkvF:function(t,s,e){t.exports=e.p+"img/360anywhere.bd8fc2b.jpg"},ImTp:function(t,s,e){var a=e("kxFB");(t.exports=e("FZ+f")(!1)).push([t.i,".box-360anywhere{background-image:url("+a(e("IkvF"))+")}.box-gesturewiz{background-image:url("+a(e("okeH"))+")}.box-holobuilder{background-image:url("+a(e("Tann"))+")}.box-sio{background-image:url("+a(e("ANnM"))+")}.box-w3touch{background-image:url("+a(e("2ZCo"))+")}",""])},JUgP:function(t,s,e){"use strict";s.a={methods:{strikeMeDownWithAllYourHatred:function(t){t.preventDefault(),window.toggleNerdMode()}}}},"M+54":function(t,s,e){var a=e("cwES");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("b27719a0",a,!1,{sourceMap:!1})},Q8pV:function(t,s,e){var a=e("yIBr");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("7c16afe4",a,!1,{sourceMap:!1})},S5nK:function(t,s,e){var a=e("ImTp");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("707df2a8",a,!1,{sourceMap:!1})},Tann:function(t,s,e){t.exports=e.p+"img/holobuilder.16547bf.jpg"},"YXP+":function(t,s,e){"use strict";var a=e("3VcA"),i=e("h9CM"),n=!1;var r=function(t){n||e("M+54")},o=e("VU/8")(a.a,i.a,!1,r,"data-v-46cf1d15",null);o.options.__file="components\\Header.vue",s.a=o.exports},cwES:function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,".rotate[data-v-46cf1d15]{display:inline-block;-webkit-transform-origin:center;transform-origin:center;-webkit-transition:all .5s;transition:all .5s}",""])},dJon:function(t,s,e){"use strict";var a=e("zSu8"),i=e("f/c0"),n=!1;var r=function(t){n||e("Q8pV")},o=e("VU/8")(a.a,i.a,!1,r,"data-v-5359d273",null);o.options.__file="components\\Box.vue",s.a=o.exports},"f/c0":function(t,s,e){"use strict";var a=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"fl pa2 w-100 w-50-m w-third-l"},[s("div",{class:"box f2 f3-m fw6 w-100 box-"+this.id},[s("div",{staticClass:"box-padding"}),s("nuxt-link",{staticClass:"box-inner color-ivory",attrs:{to:"/work/"+this.id}},[s("div",{staticClass:"center w-100"},[s("span",{domProps:{innerHTML:this._s(this.title)}}),s("div",{staticClass:"separator-thin"}),s("span",{staticClass:"f3 f4-m fw2",domProps:{innerHTML:this._s(this.workplace)}})])])],1)])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};s.a=i},fWyS:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"tc mt6"},[t._v("\n    Made with "),e("i",{staticClass:"fas fa-coffee"}),t._v(" in Ann Arbor, MI.\n    Powered by "),e("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("Nuxt.js")]),t._v(" and "),e("a",{attrs:{href:"http://tachyons.io/",target:"_blank"}},[t._v("Tachyons")]),t._v(".\n    "),t._m(0),e("div",{staticClass:"social-media mv4"},[t._m(1),t._m(2),t._m(3),e("a",{staticClass:"dim",attrs:{href:"#"},on:{click:t.strikeMeDownWithAllYourHatred}},[e("i",{staticClass:"fab fa-sith fa-2x mh2"})]),t._m(4)])])};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"mt4"},[s("a",{staticClass:"iubenda-white iubenda-embed ",attrs:{href:"https://www.iubenda.com/privacy-policy/16529602",title:"Privacy Policy"}},[this._v("Privacy Policy")]),s("script",{attrs:{type:"text/javascript"}},[this._v('\n        (function (w,d) {\n          var loader = function () {\n            var s = d.createElement("script"),\n                tag = d.getElementsByTagName("script")[0];\n                \n            s.src="https://cdn.iubenda.com/iubenda.js";\n            tag.parentNode.insertBefore(s,tag);\n          };\n          \n          if (w.addEventListener) {\n            w.addEventListener("load", loader, false);\n          } else if (w.attachEvent) {\n            w.attachEvent("onload", loader);\n          } else {\n            w.onload = loader;\n          }\n        })(window, document);\n      ')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/profile/Maximilian_Speicher"}},[s("i",{staticClass:"fab fa-researchgate fa-2x mh2"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"dim",attrs:{href:"https://www.linkedin.com/in/maximilianspeicher/"}},[s("i",{staticClass:"fab fa-linkedin-in fa-2x mh2"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"dim",attrs:{href:"https://github.com/maxspeicher/"}},[s("i",{staticClass:"fab fa-github fa-2x mh2"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"dim",attrs:{href:"https://medium.com/@maxspeicher"}},[s("i",{staticClass:"fab fa-medium-m fa-2x mh2"})])}]};s.a=i},fzEs:function(t,s,e){"use strict";for(var a={projects:[{id:"vfl-wehbach",occupation:"Owner",place:"Old West Site Usability",name:"VfL-Wehbach.de",year:2018,timeFrame:"since April 2018",teamSize:1,roles:["Design","Consulting"],summary:"",process:[{id:"step1",title:"Requirements Elicitation",description:"\n                        Blah blah blah\n                    "},{id:"step2",title:"Step 2",description:"Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."},{id:"step3",title:"Step 3",description:"Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."}]},{id:"gesturewiz",occupation:"Research Fellow",place:"University of Michigan",year:2017,name:"GestureWiz",roles:["Project Lead","Design","Code"]},{id:"xd-ar",occupation:"Research Fellow",place:"University of Michigan",year:2017,name:"XD-AR",roles:["Project Lead","Design"]},{id:"floorplan",occupation:"VP of Data Analytics",place:"bitstars GmbH",year:2016,name:"Floor Plan Feature for HoloBuilder.com",roles:["Feature Ownership","Interaction Design"]},{id:"sio",occupation:"Industrial Ph.D. Student",place:"Unister GmbH",year:2016,name:"Search Interaction Optimization",roles:["Project Lead","Design","Code"]},{id:"sos",occupation:"Industrial Ph.D. Student",place:"Unister GmbH",year:2015,name:"SERP Optimization Suite",roles:["Project Lead","Design","Code"]},{id:"w3touch",occupation:"Master's Student",place:"ETH Zürich",year:2012,name:"W3Touch",roles:["Design","Code"]},{id:"crowdadapt",occupation:"Research Assistant",place:"ETH Zürich",year:2011,name:"CrowdAdapt",roles:["Design","Code"]}],byOccupation:{},byOccupationKeys:[],byYear:{},byYearKeys:[]},i=0;i<a.projects.length;++i){var n=a.projects[i],r=n.occupation+" @ "+n.place;a.byOccupation[r]||(a.byOccupation[r]=[],a.byOccupationKeys.push(r)),a.byOccupation[r].push({id:n.id,name:n.name}),a.byYear[n.year]||(a.byYear[n.year]=[],a.byYearKeys.push(n.year)),a.byYear[n.year].push({id:n.id,name:n.name})}s.a=a},h9CM:function(t,s,e){"use strict";var a=function(){var t=this.$createElement,s=this._self._c||t;return s("header",{staticClass:"cf mb6"},[s("div",{staticClass:"abril f3 fl tl w-100 w-50-ns"},[s("div",{staticClass:"dib",on:{mouseenter:this.rotateCharacters}},[s("nuxt-link",{attrs:{to:"/"}},[s("span",{staticClass:"rotate m"},[this._v("M")]),this._v("aximilian "),s("span",{staticClass:"rotate s"},[this._v("S")]),this._v("peicher.")])],1)]),s("div",{staticClass:"menu fl fw4 mt2 mt0-ns tl tr-ns w-100 w-50-ns"},[s("nuxt-link",{staticClass:"mr4",attrs:{to:"/about"}},[this._v("About")]),s("nuxt-link",{attrs:{to:"/#work"}},[this._v("Work")])],1)])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};s.a=i},iA8U:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"template-container"},[e("div",{staticClass:"template-container-inner pa3 pa5-ns tc"},[e("my-header"),e("div",{staticClass:"dib f3 f1-ns fw6 lh-title measure-wide tl"},[t._v("\n      I'm a researcher, designer, & computer scientist\n      "),e("div",{staticClass:"f4 f3-ns fw4 mt4"},[t._v("\n        who does augmented reality, UX design, & usability.\n        "),t.isMoreDisplayed?t._e():e("a",{attrs:{href:"#"},on:{click:t.displayMore}},[t._v("More ...")]),t.isMoreDisplayed?e("span",[t._v("\n          Currently, I'm working on new physical & digital methods for designers to create & test\n          better AR/VR experiences.\n          At the University of Michigan School of Information, we are reinventing UX design itself.\n        ")]):t._e()])]),e("div",{staticClass:"mt5 mt6-ns"},[e("a",{attrs:{id:"work",name:"work"}}),e("div",{staticClass:"f3 f2-ns fw6 mb4 mb5-ns tl"},[t._v("\n        Selected Work.\n      ")]),e("div",{staticClass:"cf"},[e("box",{attrs:{id:"360anywhere",title:"360&shy;Any&shy;where",workplace:"U of Michigan"}}),e("box",{attrs:{id:"gesturewiz",title:"Gesture&shy;Wiz",workplace:"U of Michigan"}}),e("box",{attrs:{id:"holobuilder",title:"Holo&shy;Builder",workplace:"bitstars GmbH"}}),e("box",{attrs:{id:"sio",title:"Search<br />Inter&shy;action<br />Optimi&shy;zation",workplace:"Unister GmbH"}}),e("box",{attrs:{id:"w3touch",title:"W3Touch",workplace:"ETH Zurich"}}),t._m(0)],1)]),t._m(1),e("my-footer")],1)])};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"fl pa2 w-100 w-50-m w-third-l"},[s("div",{staticClass:"box f2 f3-m fw6 w-100"},[s("div",{staticClass:"box-padding"}),s("a",{staticClass:"box-inner mid-gray",staticStyle:{"background-color":"#eee"},attrs:{href:"https://2008.maxspeicher.com"}},[s("div",{staticClass:"center w-100"},[this._v("\n                Read my blog\n              ")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mt5 mt6-ns"},[e("a",{attrs:{id:"work",name:"work"}}),e("div",{staticClass:"f3 f2-ns fw6 mb4 mb5-ns tl"},[t._v("\n        Some Publications.\n      ")]),e("div",{staticClass:"tl mb4 mb5-ns"},[e("div",{staticClass:"mb4"},[e("div",{staticClass:"relative f4 fw4 lh-title mb3"},[e("span",{staticClass:"dn db-ns fa-layers fa-fw",staticStyle:{position:"absolute",transform:"translateX(-105%) translateY(15%)"}},[e("i",{staticClass:"fas fa-certificate"}),e("span",{staticClass:"fa-layers-text fa-inverse",attrs:{"data-fa-transform":"shrink-11.5 rotate--30"}},[t._v("NEW")])]),e("a",{staticClass:"dim",attrs:{href:"http://eics.acm.org/2018/"}},[t._v("360Anywhere: Mobile Ad-hoc Collaboration in Any Environment using 360 Video and Augmented Reality")])]),e("div",{staticClass:"lh-copy"},[e("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", J. Cao, A. Yu, H. Zhang, M. Nebeling\n            • "),e("span",{staticClass:"fw4"},[t._v("EICS '18")]),t._v(" • #AR\n          ")])]),e("div",{staticClass:"mb4"},[e("div",{staticClass:"f4 fw4 lh-title mb3"},[e("span",{staticClass:"dn db-ns fa-layers fa-fw",staticStyle:{position:"absolute",transform:"translateX(-105%) translateY(15%)"}},[e("i",{staticClass:"fas fa-certificate"}),e("span",{staticClass:"fa-layers-text fa-inverse",attrs:{"data-fa-transform":"shrink-11.5 rotate--30"}},[t._v("NEW")])]),e("a",{staticClass:"dim",attrs:{href:"http://eics.acm.org/2018/"}},[t._v("XD-AR: Challenges and Opportunities in Cross-Device Augmented Reality Application Development")])]),e("div",{staticClass:"lh-copy"},[e("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", B.D. Hall, A. Yu, B. Zhang, H. Zhang, J. Nebeling, M. Nebeling\n            • "),e("span",{staticClass:"fw4"},[t._v("EICS '18")]),t._v(" • #AR\n          ")])]),e("div",{staticClass:"mb4"},[e("div",{staticClass:"f4 fw4 lh-title mb3"},[e("a",{staticClass:"dim",attrs:{href:"/pdf/gesturewiz.pdf"}},[t._v("GestureWiz: A Human-Powered Gesture Design Environment for User Interface Prototypes")])]),e("div",{staticClass:"lh-copy"},[e("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", M. Nebeling\n            • "),e("span",{staticClass:"fw4"},[t._v("CHI '18")]),t._v(" • #UX design\n          ")])]),e("div",{staticClass:"mb4"},[e("div",{staticClass:"f4 fw4 lh-title mb3"},[e("a",{staticClass:"dim",attrs:{href:"/pdf/sos.pdf"}},[t._v("S.O.S.: Does Your Search Engine Results Page (SERP) Need Help?")])]),e("div",{staticClass:"lh-copy"},[e("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", A. Both, M. Gaedke\n            • "),e("span",{staticClass:"fw4"},[t._v("CHI '15")]),t._v(" "),e("i",{staticClass:"fas fa-trophy"}),t._v(" • #UX design\n          ")])]),e("div",{staticClass:"mb4"},[e("div",{staticClass:"f4 fw4 lh-title mb3"},[e("a",{staticClass:"dim",attrs:{href:"/pdf/w3touch.pdf"}},[t._v("W3Touch: Metrics-based Web Page Adaptation for Touch")])]),e("div",{staticClass:"lh-copy"},[t._v("\n            M. Nebeling, "),e("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", M.C. Norrie\n            • "),e("span",{staticClass:"fw4"},[t._v("CHI '13")]),t._v(" • #usability\n          ")])]),e("div",{staticClass:"mb4"},[e("div",{staticClass:"f4 fw4 lh-title mb3"},[e("a",{staticClass:"dim",attrs:{href:"/pdf/tmr.pdf"}},[t._v("TellMyRelevance! Predicting the Relevance of Web Search Results from Cursor Interactions")])]),e("div",{staticClass:"lh-copy"},[e("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", A. Both, M. Gaedke\n            • "),e("span",{staticClass:"fw4"},[t._v("CIKM '13")]),t._v(" • #usability\n          ")])]),e("div",{staticClass:"mb4"},[e("div",{staticClass:"f4 fw4 lh-title mb3"},[e("a",{staticClass:"dim",attrs:{href:"/pdf/wappu.pdf"}},[t._v("Ensuring Web Interface Quality through Usability-Based Split Testing")])]),e("div",{staticClass:"lh-copy"},[e("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", A. Both, M. Gaedke\n            • "),e("span",{staticClass:"fw4"},[t._v("ICWE '14")]),t._v(" • #usability\n          ")])])]),e("div",{staticClass:"tl"},[e("a",{attrs:{href:"http://dblp.org/pers/hd/s/Speicher:Maximilian"}},[t._v("And some more ...")])])])}]};s.a=i},kxFB:function(t,s){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},okeH:function(t,s,e){t.exports=e.p+"img/gesturewiz.37f0153.jpg"},yIBr:function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},yqLL:function(t,s,e){"use strict";var a=e("JUgP"),i=e("fWyS"),n=e("VU/8")(a.a,i.a,!1,null,null,null);n.options.__file="components\\Footer.vue",s.a=n.exports},zSu8:function(t,s,e){"use strict";s.a={props:["id","title","workplace"]}}});