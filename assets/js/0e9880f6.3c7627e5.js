"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[5871],{6529:function(e,t,n){var r=n(7294),a=n(1285),l=(0,n(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));t.Z=function(e){var t=l(),n=e.labels;return r.createElement("div",{className:t.root},n.map((function(e,t){return r.createElement(a.Z,{label:e,key:t+"-"+e})})))}},5714:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},l=function(e){var t=e.type,n="";switch(t){case"medium":n="Medium";break;case"hard":n="Hard";break;default:n="Easy"}return r.createElement("span",{className:a[t]},n)},o=n(6529),s=function(e){var t=e.solutionType,n=e.labels,a=e.companies,s=e.url;return r.createElement(r.Fragment,null,r.createElement(l,{type:t}),r.createElement("br",null),r.createElement("br",null),r.createElement(o.Z,{labels:n}),r.createElement("br",null),a&&a.length>0&&r.createElement(r.Fragment,null,"Companies:",r.createElement(o.Z,{labels:a}),r.createElement("br",null)),"URL: ",r.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},s),r.createElement("br",null),r.createElement("br",null))}},4439:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(5714),s=["components"],i={title:"345. Reverse Vowels of a String (Easy)",tags:["Two Pointers","String","Easy","Google"]},u=void 0,c={unversionedId:"345",id:"345",title:"345. Reverse Vowels of a String (Easy)",description:"<SolutionDocHead",source:"@site/solutions/345.mdx",sourceDirName:".",slug:"/345",permalink:"/leetcode/solutions/345",tags:[{label:"Two Pointers",permalink:"/leetcode/solutions/tags/two-pointers"},{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Easy",permalink:"/leetcode/solutions/tags/easy"},{label:"Google",permalink:"/leetcode/solutions/tags/google"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651240850,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"345. Reverse Vowels of a String (Easy)",tags:["Two Pointers","String","Easy","Google"]},sidebar:"solutions",previous:{title:"344. Reverse String (Easy)",permalink:"/leetcode/solutions/344"},next:{title:"347. Top K Frequent Elements (Medium)",permalink:"/leetcode/solutions/347"}},p={},m=[],d={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{solutionType:"easy",labels:["Two Pointers","String"],companies:["Google"],url:"https://leetcode.com/problems/reverse-vowels-of-a-string/",mdxType:"SolutionDocHead"}),(0,l.kt)("p",null,"Given a string ",(0,l.kt)("inlineCode",{parentName:"p"},"s"),", reverse only all the vowels in the string and return it."),(0,l.kt)("p",null,"The vowels are ",(0,l.kt)("inlineCode",{parentName:"p"},"'a'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'e'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'i'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'o'"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"'u'"),", and they can appear in both cases."),(0,l.kt)("b",null,"Example 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: s = "hello"\nOutput: "holle"\n')),(0,l.kt)("b",null,"Example 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: s = "leetcode"\nOutput: "leotcede"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},'function reverseVowels(s: string): string {\n  const VOWELS = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };\n  const arr = s.split("");\n  let i = 0,\n    j = arr.length - 1;\n  while (i < j) {\n    if (VOWELS[arr[i]] && VOWELS[arr[j]]) {\n      [arr[i], arr[j]] = [arr[j], arr[i]];\n      i++;\n      j--;\n    } else if (VOWELS[arr[i]]) {\n      j--;\n    } else {\n      i++;\n    }\n  }\n  return arr.join("");\n}\n')))}g.isMDXComponent=!0}}]);