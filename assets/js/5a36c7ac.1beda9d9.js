"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[3032],{6529:function(e,n,t){var l=t(7294),a=t(1285),i=(0,t(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));n.Z=function(e){var n=i(),t=e.labels;return l.createElement("div",{className:n.root},t.map((function(e,n){return l.createElement(a.Z,{label:e,key:n+"-"+e})})))}},5714:function(e,n,t){t.d(n,{Z:function(){return s}});var l=t(7294),a={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},i=function(e){var n=e.type,t="";switch(n){case"medium":t="Medium";break;case"hard":t="Hard";break;default:t="Easy"}return l.createElement("span",{className:a[n]},t)},r=t(6529),s=function(e){var n=e.solutionType,t=e.labels,a=e.companies,s=e.url;return l.createElement(l.Fragment,null,l.createElement(i,{type:n}),l.createElement("br",null),l.createElement("br",null),l.createElement(r.Z,{labels:t}),l.createElement("br",null),a&&a.length>0&&l.createElement(l.Fragment,null,"Companies:",l.createElement(r.Z,{labels:a}),l.createElement("br",null)),"URL: ",l.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},s),l.createElement("br",null),l.createElement("br",null))}},9003:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return A},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var l=t(7462),a=t(3366),i=(t(7294),t(3905)),r=t(5714),s=["components"],o={title:"187. Repeated DNA Sequences (Medium)",tags:["Hash Table","String","Bit Manipulation","Sliding Window","Rolling Hash","Hash Function","Medium","LinkedIn"]},u=void 0,d={unversionedId:"187",id:"187",title:"187. Repeated DNA Sequences (Medium)",description:"<SolutionDocHead",source:"@site/solutions/187.mdx",sourceDirName:".",slug:"/187",permalink:"/leetcode/solutions/187",tags:[{label:"Hash Table",permalink:"/leetcode/solutions/tags/hash-table"},{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Bit Manipulation",permalink:"/leetcode/solutions/tags/bit-manipulation"},{label:"Sliding Window",permalink:"/leetcode/solutions/tags/sliding-window"},{label:"Rolling Hash",permalink:"/leetcode/solutions/tags/rolling-hash"},{label:"Hash Function",permalink:"/leetcode/solutions/tags/hash-function"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"},{label:"LinkedIn",permalink:"/leetcode/solutions/tags/linked-in"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651240850,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"187. Repeated DNA Sequences (Medium)",tags:["Hash Table","String","Bit Manipulation","Sliding Window","Rolling Hash","Hash Function","Medium","LinkedIn"]},sidebar:"solutions",previous:{title:"167. Two Sum II - Input Array Is Sorted (Medium)",permalink:"/leetcode/solutions/167"},next:{title:"189. Rotate Array (Medium)",permalink:"/leetcode/solutions/189"}},c={},p=[],m={toc:p};function A(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{solutionType:"medium",labels:["Hash Table","String","Bit Manipulation","Sliding Window","Rolling Hash","Hash Function"],companies:["LinkedIn"],url:"https://leetcode.com/problems/repeated-dna-sequences/",mdxType:"SolutionDocHead"}),(0,i.kt)("p",null,"The ",(0,i.kt)("b",null,"DNA sequence")," is composed of a series of nucleotides abbreviated as ",(0,i.kt)("inlineCode",{parentName:"p"},"'A'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'C'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'G'"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"'T'"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For example, ",(0,i.kt)("inlineCode",{parentName:"li"},'"ACGAATTCCG"')," is a ",(0,i.kt)("b",null,"DNA sequence"),".")),(0,i.kt)("p",null,"When studying ",(0,i.kt)("b",null,"DNA"),", it is useful to identify repeated sequences within the DNA."),(0,i.kt)("p",null,"Given a string ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," that represents a ",(0,i.kt)("b",null,"DNA sequence"),", return all the ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),"-",(0,i.kt)("b",null,"letter-long")," sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in ",(0,i.kt)("b",null,"any order"),"."),(0,i.kt)("b",null,"Example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"\nOutput: ["AAAAACCCCC","CCCCCAAAAA"]\n')),(0,i.kt)("b",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = "AAAAAAAAAAAAA"\nOutput: ["AAAAAAAAAA"]\n')),(0,i.kt)("b",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 <= s.length <= 10",(0,i.kt)("sup",null,"5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s[i]")," is either ",(0,i.kt)("inlineCode",{parentName:"li"},"'A'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'C'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'G'"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"'T'"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function findRepeatedDnaSequences(s: string): string[] {\n  let curr = s.slice(0, 10);\n  const seen = new Set([curr]);\n  const res: Set<string> = new Set();\n  for (let i = 10; i < s.length; i++) {\n    curr = curr.slice(1) + s[i];\n    if (seen.has(curr)) {\n      res.add(curr);\n    }\n    seen.add(curr);\n  }\n  return [...res];\n}\n")))}A.isMDXComponent=!0}}]);