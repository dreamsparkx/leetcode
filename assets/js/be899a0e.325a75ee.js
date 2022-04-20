"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[2054],{6529:function(e,t,n){var r=n(7294),a=n(1285),l=(0,n(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));t.Z=function(e){var t=l(),n=e.labels;return r.createElement("div",{className:t.root},n.map((function(e,t){return r.createElement(a.Z,{label:e,key:t+"-"+e})})))}},5714:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},l=function(e){var t=e.type,n="";switch(t){case"medium":n="Medium";break;case"hard":n="Hard";break;default:n="Easy"}return r.createElement("span",{className:a[t]},n)},o=n(6529),s=function(e){var t=e.solutionType,n=e.labels,a=e.companies,s=e.url;return r.createElement(r.Fragment,null,r.createElement(l,{type:t}),r.createElement("br",null),r.createElement("br",null),r.createElement(o.Z,{labels:n}),r.createElement("br",null),a&&a.length>0&&r.createElement(r.Fragment,null,"Companies:",r.createElement(o.Z,{labels:a}),r.createElement("br",null)),"URL: ",r.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},s),r.createElement("br",null),r.createElement("br",null))}},5507:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(5714),s=["components"],i={title:"344. Reverse String (Easy)",tags:["Two Pointers","String","Recursion"]},u=void 0,c={unversionedId:"344",id:"344",title:"344. Reverse String (Easy)",description:"<SolutionDocHead",source:"@site/solutions/344.mdx",sourceDirName:".",slug:"/344",permalink:"/leetcode/solutions/344",tags:[{label:"Two Pointers",permalink:"/leetcode/solutions/tags/two-pointers"},{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Recursion",permalink:"/leetcode/solutions/tags/recursion"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650482437,formattedLastUpdatedAt:"4/21/2022",frontMatter:{title:"344. Reverse String (Easy)",tags:["Two Pointers","String","Recursion"]},sidebar:"solutions",previous:{title:"189. Rotate Array (Medium)",permalink:"/leetcode/solutions/189"},next:{title:"345. Reverse Vowels of a String (Easy)",permalink:"/leetcode/solutions/345"}},p={},m=[],d={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{solutionType:"easy",labels:["Two Pointers","String","Recursion"],url:"https://leetcode.com/problems/reverse-string/",mdxType:"SolutionDocHead"}),(0,l.kt)("p",null,"Write a function that reverses a string. The input string is given as an array of characters ",(0,l.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,l.kt)("p",null,"You must do this by modifying the input array ",(0,l.kt)("inlineCode",{parentName:"p"},"in-place")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"O(1)")," extra memory."),(0,l.kt)("b",null,"Example 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: s = ["h","e","l","l","o"]\nOutput: ["o","l","l","e","h"]\n')),(0,l.kt)("b",null,"Example 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: s = ["H","a","n","n","a","h"]\nOutput: ["h","a","n","n","a","H"]\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function reverseString(s: string[]): void {\n  let left = 0,\n    right = s.length - 1;\n  while (left < right) {\n    let temp = s[left];\n    s[left] = s[right];\n    s[right] = temp;\n    left++;\n    right--;\n  }\n}\n")))}g.isMDXComponent=!0}}]);