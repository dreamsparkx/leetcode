"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[1943],{6529:function(e,t,n){var a=n(7294),r=n(1285),l=(0,n(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));t.Z=function(e){var t=l(),n=e.labels;return a.createElement("div",{className:t.root},n.map((function(e,t){return a.createElement(r.Z,{label:e,key:t+"-"+e})})))}},5714:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},l=function(e){var t=e.type,n="";switch(t){case"medium":n="Medium";break;case"hard":n="Hard";break;default:n="Easy"}return a.createElement("span",{className:r[t]},n)},o=n(6529),s=function(e){var t=e.solutionType,n=e.labels,r=e.companies,s=e.url;return a.createElement(a.Fragment,null,a.createElement(l,{type:t}),a.createElement("br",null),a.createElement("br",null),a.createElement(o.Z,{labels:n}),a.createElement("br",null),r&&r.length>0&&a.createElement(a.Fragment,null,"Companies:",a.createElement(o.Z,{labels:r}),a.createElement("br",null)),"URL: ",a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},s),a.createElement("br",null),a.createElement("br",null))}},1275:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(5714),s=["components"],i={title:"451. Sort Characters By Frequency (Medium)",tags:["Hash Table","String","Sorting","Heap","Priority Queue","Bucket Sort","Counting","Medium"]},u=void 0,c={unversionedId:"451",id:"451",title:"451. Sort Characters By Frequency (Medium)",description:"<SolutionDocHead",source:"@site/solutions/451.mdx",sourceDirName:".",slug:"/451",permalink:"/leetcode/solutions/451",tags:[{label:"Hash Table",permalink:"/leetcode/solutions/tags/hash-table"},{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Sorting",permalink:"/leetcode/solutions/tags/sorting"},{label:"Heap",permalink:"/leetcode/solutions/tags/heap"},{label:"Priority Queue",permalink:"/leetcode/solutions/tags/priority-queue"},{label:"Bucket Sort",permalink:"/leetcode/solutions/tags/bucket-sort"},{label:"Counting",permalink:"/leetcode/solutions/tags/counting"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650984126,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"451. Sort Characters By Frequency (Medium)",tags:["Hash Table","String","Sorting","Heap","Priority Queue","Bucket Sort","Counting","Medium"]},sidebar:"solutions",previous:{title:"347. Top K Frequent Elements (Medium)",permalink:"/leetcode/solutions/347"},next:{title:"535. Encode and Decode TinyURL (Medium)",permalink:"/leetcode/solutions/535"}},p={},m=[],d={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{solutionType:"medium",labels:["Hash Table","String","Sorting","Heap","Bucket Sort","Counting","Priority Queue"],companies:["Google","Amazon"],url:"https://leetcode.com/problems/sort-characters-by-frequency/",mdxType:"SolutionDocHead"}),(0,l.kt)("p",null,"Given a string ",(0,l.kt)("inlineCode",{parentName:"p"},"s"),", sort it in ",(0,l.kt)("b",null,"decreasing order")," based on the ",(0,l.kt)("b",null,"frequency")," of the characters. The ",(0,l.kt)("b",null,"frequency")," of a character is the number of times it appears in the string."),(0,l.kt)("p",null,"Return the sorted string. If there are multiple answers, return any of them."),(0,l.kt)("b",null,"Example 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: s = \"tree\"\nOutput: \"eert\"\nExplanation: 'e' appears twice while 'r' and 't' both appear once.\nSo 'e' must appear before both 'r' and 't'. Therefore \"eetr\" is also a valid answer.\n")),(0,l.kt)("b",null,"Example 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: s = "cccaaa"\nOutput: "aaaccc"\nExplanation: Both \'c\' and \'a\' appear three times, so both "cccaaa" and "aaaccc" are valid answers.\nNote that "cacaca" is incorrect, as the same characters must be together.\n')),(0,l.kt)("b",null,"Example 3:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: s = "Aabb"\nOutput: "bbAa"\nExplanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.\nNote that \'A\' and \'a\' are treated as two different characters.\n')),(0,l.kt)("b",null,"Constraints:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 <= s.length <= 5 ","*"," 10",(0,l.kt)("sup",null,"5")),(0,l.kt)("li",{parentName:"ul"},"s consists of uppercase and lowercase English letters and digits.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},'function frequencySort(s: string): string {\n  let seen = {};\n  let result = "";\n  for (const char of s) {\n    if (seen[char]) {\n      seen[char]++;\n    } else {\n      seen[char] = 1;\n    }\n  }\n  let sortedCharacterArray = Object.keys(seen).sort((a, b) => {\n    return seen[b] - seen[a];\n  });\n  for (let char of sortedCharacterArray) {\n    result += char.repeat(seen[char]);\n  }\n  return result;\n}\n')))}b.isMDXComponent=!0}}]);