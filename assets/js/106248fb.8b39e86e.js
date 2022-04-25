"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[8155],{6465:function(n,t,e){e.r(t),e.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=e(7462),r=e(3366),i=(e(7294),e(3905)),a=e(5714),l=["components"],s={title:"30. Substring with Concatenation of All Words (Hard)",tags:["Hash Table","String","Sliding Window"]},d=void 0,u={unversionedId:"30",id:"30",title:"30. Substring with Concatenation of All Words (Hard)",description:"<SolutionDocHead",source:"@site/solutions/30.mdx",sourceDirName:".",slug:"/30",permalink:"/leetcode/solutions/30",tags:[{label:"Hash Table",permalink:"/leetcode/solutions/tags/hash-table"},{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Sliding Window",permalink:"/leetcode/solutions/tags/sliding-window"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650890825,formattedLastUpdatedAt:"4/25/2022",frontMatter:{title:"30. Substring with Concatenation of All Words (Hard)",tags:["Hash Table","String","Sliding Window"]},sidebar:"solutions",previous:{title:"26. Remove Duplicates from Sorted Array (Easy)",permalink:"/leetcode/solutions/26"},next:{title:"35. Search Insert Position (Easy)",permalink:"/leetcode/solutions/35"}},p={},c=[],g={toc:c};function m(n){var t=n.components,e=(0,r.Z)(n,l);return(0,i.kt)("wrapper",(0,o.Z)({},g,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{solutionType:"hard",labels:["Hash Table","String","Sliding Window"],url:"https://leetcode.com/problems/substring-with-concatenation-of-all-words/",mdxType:"SolutionDocHead"}),(0,i.kt)("p",null,"You are given a string ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," and an array of strings ",(0,i.kt)("inlineCode",{parentName:"p"},"words")," of the ",(0,i.kt)("b",null,"same length"),". Return all starting indices of substring(s) in ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," that is a concatenation of each word in ",(0,i.kt)("inlineCode",{parentName:"p"},"words")," ",(0,i.kt)("b",null,"exactly once, in any order"),", and ",(0,i.kt)("b",null,"without any intervening characters"),"."),(0,i.kt)("p",null,"You can return the answer in ",(0,i.kt)("b",null,"any order"),"."),(0,i.kt)("b",null,"Example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = "barfoothefoobarman", words = ["foo","bar"]\nOutput: [0,9]\nExplanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.\nThe output order does not matter, returning [9,0] is fine too.\n')),(0,i.kt)("b",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]\nOutput: []\n')),(0,i.kt)("b",null,"Example 3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]\nOutput: [6,9,12]\n')),(0,i.kt)("b",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 <= s.length <= 10",(0,i.kt)("sup",null,"4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s")," consists of lower-case English letters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= words.length <= 5000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= words[i].length <= 30")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"words[i]")," consists of lower-case English letters.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function findSubstring(s: string, words: string[]): number[] {\n  let res: number[] = []; // answer\n  let wordLength = words[0].length;\n  let wordCount = words.length;\n  let len = wordCount * wordLength; // length of sliding window\n  let map = {};\n  for (const word of words) {\n    map[word] = map[word] + 1 || 1;\n  }\n  for (let i = 0; i < s.length - len + 1; i++) {\n    const sub = s.slice(i, i + len); // Generate substring of sliding window length\n    if (isConcat(sub, map, wordLength)) {\n      res.push(i);\n    }\n  }\n  return res; // return answer\n}\n\nfunction isConcat(\n  sub: string,\n  map: Record<string, number>,\n  wordLength: number\n): boolean {\n  let seen = {};\n  for (let i = 0; i < sub.length; i += wordLength) {\n    let word = sub.slice(i, i + wordLength);\n    seen[word] = seen[word] + 1 || 1;\n  }\n  for (let key in map) {\n    if (map[key] !== seen[key]) {\n      return false;\n    }\n  }\n  return true;\n}\n")))}m.isMDXComponent=!0}}]);