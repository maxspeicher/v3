webpackJsonp([3],{"3eTl":function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},"4S0Y":function(t,i,e){var s=e("86UL");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("47218a9a",s,!1,{sourceMap:!1})},"6X5Q":function(t,i,e){"use strict";var s=e("pUrR"),a=!1;var n=function(t){a||e("pdTn")},o=e("VU/8")(null,s.a,!1,n,null,null);o.options.__file="components\\Separator.vue",i.a=o.exports},"86UL":function(t,i,e){(i=t.exports=e("FZ+f")(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500,700);",""]),i.push([t.i,'a{text-decoration:underline}a,body{color:#111}body{background-color:#fff;font-family:Roboto Mono,monospace;font-weight:300}.back-to-top{-webkit-box-shadow:2px 2px #111;box-shadow:2px 2px #111;position:fixed;bottom:1em;right:1em}.title1{text-transform:uppercase}.title1,.title2{color:#ff1493;font-weight:700}.title3{text-transform:uppercase}.title3,.title4{font-weight:700}.toc{top:0;left:0;overflow:auto}.x:before{content:"[ ]"}.x-active:before{content:"[x]"}',""])},JE2i:function(t,i,e){"use strict";var s=e("fzEs"),a=e("6X5Q");i.a={asyncData:function(t){return s.a},components:{Separator:a.a},data:function(){return{displayByOccupation:!0,methods:["Field Studies","In-house Studies","Remote Asynchronous Studies"]}},layout:"default-old",methods:{test:function(){}}}},WI7E:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("JE2i"),a=e("zRhK"),n=!1;var o=function(t){n||e("4S0Y")},c=e("VU/8")(s.a,a.a,!1,o,null,null);c.options.__file="pages\\index-old.vue",i.default=c.exports},fzEs:function(t,i,e){"use strict";for(var s={projects:[{id:"vfl-wehbach",occupation:"Owner",place:"Old West Site Usability",name:"VfL-Wehbach.de",year:2018,timeFrame:"since April 2018",teamSize:1,roles:["Design","Consulting"],summary:"",process:[{id:"step1",title:"Requirements Elicitation",description:"\n                        Blah blah blah\n                    "},{id:"step2",title:"Step 2",description:"Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."},{id:"step3",title:"Step 3",description:"Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."}]},{id:"gesturewiz",occupation:"Research Fellow",place:"University of Michigan",year:2017,name:"GestureWiz",roles:["Project Lead","Design","Code"]},{id:"xd-ar",occupation:"Research Fellow",place:"University of Michigan",year:2017,name:"XD-AR",roles:["Project Lead","Design"]},{id:"floorplan",occupation:"VP of Data Analytics",place:"bitstars GmbH",year:2016,name:"Floor Plan Feature for HoloBuilder.com",roles:["Feature Ownership","Interaction Design"]},{id:"sio",occupation:"Industrial Ph.D. Student",place:"Unister GmbH",year:2016,name:"Search Interaction Optimization",roles:["Project Lead","Design","Code"]},{id:"sos",occupation:"Industrial Ph.D. Student",place:"Unister GmbH",year:2015,name:"SERP Optimization Suite",roles:["Project Lead","Design","Code"]},{id:"w3touch",occupation:"Master's Student",place:"ETH Zürich",year:2012,name:"W3Touch",roles:["Design","Code"]},{id:"crowdadapt",occupation:"Research Assistant",place:"ETH Zürich",year:2011,name:"CrowdAdapt",roles:["Design","Code"]}],byOccupation:{},byOccupationKeys:[],byYear:{},byYearKeys:[]},a=0;a<s.projects.length;++a){var n=s.projects[a],o=n.occupation+" @ "+n.place;s.byOccupation[o]||(s.byOccupation[o]=[],s.byOccupationKeys.push(o)),s.byOccupation[o].push({id:n.id,name:n.name}),s.byYear[n.year]||(s.byYear[n.year]=[],s.byYearKeys.push(n.year)),s.byYear[n.year].push({id:n.id,name:n.name})}i.a=s},pUrR:function(t,i,e){"use strict";var s=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"gray ma5 tc"},[this._v("⁎ ⁎ ⁎")])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};i.a=a},pdTn:function(t,i,e){var s=e("3eTl");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("448f0462",s,!1,{sourceMap:!1})},zRhK:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tc"},[e("div",{staticClass:"fl-l vh-100-l w-third-l"}),e("div",{staticClass:"fl-l mb4 w-two-thirds-l"},[e("div",{staticClass:"title1"},[t._v("\n      Portfolio of Maximilian Speicher\n    ")]),t._m(0),e("separator"),e("div",{staticClass:"toc fixed-l pa4-l tl-l vh-100-l w-third-l"},[e("a",{attrs:{id:"menu",name:"menu"}}),e("div",{staticClass:"mb2 title3"},[t._v("\n        Selected Projects\n      ")]),e("span",{staticClass:"mr2 pointer",class:{"o-50":!t.displayByOccupation},on:{click:function(i){t.displayByOccupation=!0}}},[t._v("by occupation")]),e("span",{staticClass:"pointer x",class:[{"x-active":t.displayByOccupation},{"o-50":!t.displayByOccupation}],on:{click:function(i){t.displayByOccupation=!t.displayByOccupation}}}),t._v(" \n      "),e("span",{staticClass:"pointer x",class:[{"x-active":!t.displayByOccupation},{"o-50":t.displayByOccupation}],on:{click:function(i){t.displayByOccupation=!t.displayByOccupation}}}),e("span",{staticClass:"ml2 pointer",class:{"o-50":t.displayByOccupation},on:{click:function(i){t.displayByOccupation=!1}}},[t._v("by year")]),e("div",{staticClass:"mt4",class:{dn:!t.displayByOccupation}},t._l(t.byOccupationKeys,function(i,s){return e("div",{key:s,class:{mb4:s<t.byOccupationKeys.length-1}},[e("div",{staticClass:"o-50 mb2"},[e("span",{domProps:{innerHTML:t._s(i)}})]),t._l(t.byOccupation[i],function(i,s){return e("div",{key:s,staticClass:"mb2"},[e("a",{attrs:{href:"#"+i.id}},[e("span",{domProps:{innerHTML:t._s(i.name)}})])])})],2)})),e("div",{staticClass:"mt4",class:{dn:t.displayByOccupation}},t._l(t.byYearKeys,function(i,s){return e("div",{key:s,class:{mb4:s<t.byYearKeys.length-1}},[e("div",{staticClass:"o-50 mb2"},[t._v(t._s(i))]),t._l(t.byYear[i],function(i,s){return e("div",{key:s,staticClass:"mb2"},[e("a",{attrs:{href:"#"+i.id}},[e("span",{domProps:{innerHTML:t._s(i.name)}})])])})],2)}))]),e("separator",{staticClass:"dn-l"}),e("div",[e("div",{staticClass:"mb2 title3"},[t._v("\n        Methods\n      ")]),t._l(t.methods,function(i,s){return e("span",{key:s},[t._v("\n        "+t._s(i)+"\n        "),s<t.methods.length-1?e("span",[t._v("|")]):t._e()])})],2),e("separator"),e("div",t._l(t.projects,function(i,s){return e("div",{key:s},[e("div",{staticClass:"cf mw-90"},[e("div",{staticClass:"fl pa3 w-75-ns"},[e("a",{attrs:{id:i.id,name:i.id}}),e("div",{staticClass:"mb4 title2"},[e("span",{domProps:{innerHTML:t._s(i.name)}})]),t._m(1,!0),e("div",{staticClass:"dib measure-wide tl"},t._l(i.process,function(s,a){return e("div",{key:a,staticClass:"mb4"},[e("a",{attrs:{id:i.id+"--"+s.id,name:i.id+"--"+s.id}}),e("div",{staticClass:"fw5 tc"},[t._v(t._s(s.title))]),e("br"),e("br"),e("div",{domProps:{innerHTML:t._s(s.description)}})])}))]),e("div",{staticClass:"dn db-ns fl w-25 pa3"},[e("div",{staticClass:"mb4 title4"},[t._v("\n              Process\n            ")]),t._l(i.process,function(s,a){return e("div",{key:a},[e("a",{attrs:{href:"#"+i.id+"--"+s.id}},[t._v(t._s(s.title))]),a<i.process.length-1?e("div",{staticClass:"ma2"},[t._v("↓")]):t._e()])})],2)]),e("separator")],1)})),t._v("\n    Made with <3 in Ann Arbor, MI. Powered by "),e("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("Nuxt.js")]),t._v(" and "),e("a",{attrs:{href:"http://tachyons.io/",target:"_blank"}},[t._v("Tachyons")]),t._v(".\n  ")],1),e("a",{staticClass:"back-to-top ba dn db-l fw7 no-underline pa1 pointer",attrs:{href:"#top"}},[t._v("\n    ^\n  ")]),e("a",{staticClass:"back-to-top ba dn-l fw7 no-underline pa1 pointer",attrs:{href:"#menu"}},[t._v("\n    ^\n  ")])])};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mt5"},[i("div",{staticClass:"dib measure-wide tl"},[this._v("\n        Blah, blah, little intro text about me ...\n      ")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"cf dib mb4 measure-wide tl w-100"},[i("div",{staticClass:"fl w-third"},[this._v("blah")]),i("div",{staticClass:"fl w-two-thirds"},[this._v("blub")]),i("div",{staticClass:"fl w-third"},[this._v("laber")]),i("div",{staticClass:"fl w-two-thirds"},[this._v("arsch")])])}]};i.a=a}});