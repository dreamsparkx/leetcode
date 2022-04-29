"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[9536],{6529:function(e,t,n){var o=n(7294),a=n(1285),r=(0,n(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));t.Z=function(e){var t=r(),n=e.labels;return o.createElement("div",{className:t.root},n.map((function(e,t){return o.createElement(a.Z,{label:e,key:t+"-"+e})})))}},5714:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(7294),a={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},r=function(e){var t=e.type,n="";switch(t){case"medium":n="Medium";break;case"hard":n="Hard";break;default:n="Easy"}return o.createElement("span",{className:a[t]},n)},l=n(6529),i=function(e){var t=e.solutionType,n=e.labels,a=e.companies,i=e.url;return o.createElement(o.Fragment,null,o.createElement(r,{type:t}),o.createElement("br",null),o.createElement("br",null),o.createElement(l.Z,{labels:n}),o.createElement("br",null),a&&a.length>0&&o.createElement(o.Fragment,null,"Companies:",o.createElement(l.Z,{labels:a}),o.createElement("br",null)),"URL: ",o.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},i),o.createElement("br",null),o.createElement("br",null))}},7267:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return b}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=n.p+"assets/images/image-74804a633861238dccad047cebfcc02b.png",i=n(5714),s=["components"],u={title:"17. Letter Combinations of a Phone Number (Medium)",tags:["Hash Table","String","Backtracking","Medium","Amazon","Facebook","Dropbox","Uber","Google"]},c=void 0,m={unversionedId:"17",id:"17",title:"17. Letter Combinations of a Phone Number (Medium)",description:"<SolutionDocHead",source:"@site/solutions/17.mdx",sourceDirName:".",slug:"/17",permalink:"/leetcode/solutions/17",tags:[{label:"Hash Table",permalink:"/leetcode/solutions/tags/hash-table"},{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Backtracking",permalink:"/leetcode/solutions/tags/backtracking"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"},{label:"Amazon",permalink:"/leetcode/solutions/tags/amazon"},{label:"Facebook",permalink:"/leetcode/solutions/tags/facebook"},{label:"Dropbox",permalink:"/leetcode/solutions/tags/dropbox"},{label:"Uber",permalink:"/leetcode/solutions/tags/uber"},{label:"Google",permalink:"/leetcode/solutions/tags/google"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651240850,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"17. Letter Combinations of a Phone Number (Medium)",tags:["Hash Table","String","Backtracking","Medium","Amazon","Facebook","Dropbox","Uber","Google"]},sidebar:"solutions",previous:{title:"15. 3Sum (Medium)",permalink:"/leetcode/solutions/15"},next:{title:"18. 4Sum (Medium)",permalink:"/leetcode/solutions/18"}},d={},b=[],p={toc:b};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{solutionType:"medium",labels:["Hash Table","String","Backtracking"],companies:["Amazon","Facebook","Dropbox","Uber","Google"],url:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/",mdxType:"SolutionDocHead"}),(0,r.kt)("p",null,"Given a string containing digits from ",(0,r.kt)("inlineCode",{parentName:"p"},"2-9")," inclusive, return all possible letter combinations that the number could represent. Return the answer in ",(0,r.kt)("b",null,"any order"),"."),(0,r.kt)("p",null,"A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters."),(0,r.kt)("img",{src:l}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},'function letterCombinations(digits: string): string[] {\n  if (digits === null || digits.length === 0) {\n    return [];\n  }\n  const map: Record<number, string> = {\n    2: "abc",\n    3: "def",\n    4: "ghi",\n    5: "jkl",\n    6: "mno",\n    7: "pqrs",\n    8: "tuv",\n    9: "wxyz",\n  };\n  const res: string[] = [];\n  const go = (i: number, s: string) => {\n    if (i === digits.length) {\n      res.push(s);\n      return;\n    }\n    for (const c of map[digits[i]]) {\n      go(i + 1, s + c);\n    }\n  };\n  go(0, "");\n  return res;\n}\n')))}g.isMDXComponent=!0}}]);