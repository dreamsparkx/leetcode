"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[8155],{6529:function(e,n,t){var r=t(7294),a=t(1285),o=(0,t(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));n.Z=function(e){var n=o(),t=e.labels;return r.createElement("div",{className:n.root},t.map((function(e,n){return r.createElement(a.Z,{label:e,key:n+"-"+e})})))}},5714:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),a={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},o=function(e){var n=e.type,t="";switch(n){case"medium":t="Medium";break;case"hard":t="Hard";break;default:t="Easy"}return r.createElement("span",{className:a[n]},t)},l=t(6529),i=function(e){var n=e.solutionType,t=e.labels,a=e.companies,i=e.url;return r.createElement(r.Fragment,null,r.createElement(o,{type:n}),r.createElement("br",null),r.createElement("br",null),r.createElement(l.Z,{labels:t}),r.createElement("br",null),a&&a.length>0&&r.createElement(r.Fragment,null,"Companies:",r.createElement(l.Z,{labels:a}),r.createElement("br",null)),"URL: ",r.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},i),r.createElement("br",null),r.createElement("br",null))}},6465:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(5714),i=["components"],s={title:"30. Substring with Concatenation of All Words (Hard)",tags:["Hash Table","String","Sliding Window","Hard"]},u=void 0,d={unversionedId:"30",id:"30",title:"30. Substring with Concatenation of All Words (Hard)",description:"<SolutionDocHead",source:"@site/solutions/30.mdx",sourceDirName:".",slug:"/30",permalink:"/leetcode/solutions/30",tags:[{label:"Hash Table",permalink:"/leetcode/solutions/tags/hash-table"},{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Sliding Window",permalink:"/leetcode/solutions/tags/sliding-window"},{label:"Hard",permalink:"/leetcode/solutions/tags/hard"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650915156,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"30. Substring with Concatenation of All Words (Hard)",tags:["Hash Table","String","Sliding Window","Hard"]},sidebar:"solutions",previous:{title:"26. Remove Duplicates from Sorted Array (Easy)",permalink:"/leetcode/solutions/26"},next:{title:"32. Longest Valid Parentheses (Hard)",permalink:"/leetcode/solutions/32"}},c={},p=[],m={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{solutionType:"hard",labels:["Hash Table","String","Sliding Window"],url:"https://leetcode.com/problems/substring-with-concatenation-of-all-words/",mdxType:"SolutionDocHead"}),(0,o.kt)("p",null,"You are given a string ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," and an array of strings ",(0,o.kt)("inlineCode",{parentName:"p"},"words")," of the ",(0,o.kt)("b",null,"same length"),". Return all starting indices of substring(s) in ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," that is a concatenation of each word in ",(0,o.kt)("inlineCode",{parentName:"p"},"words")," ",(0,o.kt)("b",null,"exactly once, in any order"),", and ",(0,o.kt)("b",null,"without any intervening characters"),"."),(0,o.kt)("p",null,"You can return the answer in ",(0,o.kt)("b",null,"any order"),"."),(0,o.kt)("b",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "barfoothefoobarman", words = ["foo","bar"]\nOutput: [0,9]\nExplanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.\nThe output order does not matter, returning [9,0] is fine too.\n')),(0,o.kt)("b",null,"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]\nOutput: []\n')),(0,o.kt)("b",null,"Example 3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]\nOutput: [6,9,12]\n')),(0,o.kt)("b",null,"Constraints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 <= s.length <= 10",(0,o.kt)("sup",null,"4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," consists of lower-case English letters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= words.length <= 5000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= words[i].length <= 30")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"words[i]")," consists of lower-case English letters.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function findSubstring(s: string, words: string[]): number[] {\n  let res: number[] = []; // answer\n  let wordLength = words[0].length;\n  let wordCount = words.length;\n  let len = wordCount * wordLength; // length of sliding window\n  let map = {};\n  for (const word of words) {\n    map[word] = map[word] + 1 || 1;\n  }\n  for (let i = 0; i < s.length - len + 1; i++) {\n    const sub = s.slice(i, i + len); // Generate substring of sliding window length\n    if (isConcat(sub, map, wordLength)) {\n      res.push(i);\n    }\n  }\n  return res; // return answer\n}\n\nfunction isConcat(\n  sub: string,\n  map: Record<string, number>,\n  wordLength: number\n): boolean {\n  let seen = {};\n  for (let i = 0; i < sub.length; i += wordLength) {\n    let word = sub.slice(i, i + wordLength);\n    seen[word] = seen[word] + 1 || 1;\n  }\n  for (let key in map) {\n    if (map[key] !== seen[key]) {\n      return false;\n    }\n  }\n  return true;\n}\n")))}g.isMDXComponent=!0}}]);