"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[6104],{6529:function(e,t,n){var a=n(7294),r=n(1285),l=(0,n(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));t.Z=function(e){var t=l(),n=e.labels;return a.createElement("div",{className:t.root},n.map((function(e,t){return a.createElement(r.Z,{label:e,key:t+"-"+e})})))}},5714:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},l=function(e){var t=e.type,n="";switch(t){case"medium":n="Medium";break;case"hard":n="Hard";break;default:n="Easy"}return a.createElement("span",{className:r[t]},n)},s=n(6529),o=function(e){var t=e.solutionType,n=e.labels,r=e.companies,o=e.url;return a.createElement(a.Fragment,null,a.createElement(l,{type:t}),a.createElement("br",null),a.createElement("br",null),a.createElement(s.Z,{labels:n}),a.createElement("br",null),r&&r.length>0&&a.createElement(a.Fragment,null,"Companies:",a.createElement(s.Z,{labels:r}),a.createElement("br",null)),"URL: ",a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},o),a.createElement("br",null),a.createElement("br",null))}},7874:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),s=n(5714),o=["components"],i={title:"482. License Key Formatting (Easy)",tags:["String","Easy","Google"]},u=void 0,c={unversionedId:"482",id:"482",title:"482. License Key Formatting (Easy)",description:"<SolutionDocHead",source:"@site/solutions/482.mdx",sourceDirName:".",slug:"/482",permalink:"/leetcode/solutions/482",tags:[{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Easy",permalink:"/leetcode/solutions/tags/easy"},{label:"Google",permalink:"/leetcode/solutions/tags/google"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651240850,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"482. License Key Formatting (Easy)",tags:["String","Easy","Google"]},sidebar:"solutions",previous:{title:"451. Sort Characters By Frequency (Medium)",permalink:"/leetcode/solutions/451"},next:{title:"535. Encode and Decode TinyURL (Medium)",permalink:"/leetcode/solutions/535"}},p={},m=[],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,{solutionType:"easy",labels:["String","Math","Recursion"],companies:["Google"],url:"https://leetcode.com/problems/license-key-formatting/",mdxType:"SolutionDocHead"}),(0,l.kt)("p",null,"You are given a license key represented as a string ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," that consists of only alphanumeric characters and dashes. The string is separated into ",(0,l.kt)("inlineCode",{parentName:"p"},"n + 1")," groups by ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," dashes. You are also given an integer ",(0,l.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,l.kt)("p",null,"We want to reformat the string ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," such that each group contains exactly ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," characters, except for the first group, which could be shorter than ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase."),(0,l.kt)("p",null,"Return the reformatted license key."),(0,l.kt)("b",null,"Example 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: s = "5F3Z-2e-9-w", k = 4\nOutput: "5F3Z-2E9W"\nExplanation: The string s has been split into two parts, each part has 4 characters.\nNote that the two extra dashes are not needed and can be removed.\n')),(0,l.kt)("b",null,"Example 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: s = "2-5g-3-J", k = 2\nOutput: "2-5G-3J"\nExplanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.\n')),(0,l.kt)("b",null,"Constraints:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 <= s.length <= 10",(0,l.kt)("sup",null,"5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s")," consists of English letters, digits, and dashes ",(0,l.kt)("inlineCode",{parentName:"li"},"'-'"),"."),(0,l.kt)("li",{parentName:"ul"},"1 <= k <= 10",(0,l.kt)("sup",null,"4"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},'function licenseKeyFormatting(s: string, k: number): string {\n  const newStr = s.replace(/-/g, "").toUpperCase(); // Remove existing dashes and convert any lowercase letters to uppercase\n  const arr = newStr.split(""); // Convert string to an array so we can manipulate it\n  for (let i = arr.length - 1 - k; i >= 0; i -= k) {\n    // Loop through array backwards and decrement by value of K\n    arr[i] = arr[i] + "-";\n  }\n  return arr.join("");\n}\n')))}h.isMDXComponent=!0}}]);