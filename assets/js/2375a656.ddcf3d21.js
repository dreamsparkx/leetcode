"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[5185],{2325:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(5714),o=["components"],s={title:"242. Valid Anagram (Easy)",tags:["Hash Table","String","Sorting","Easy"]},u=void 0,p={unversionedId:"242",id:"242",title:"242. Valid Anagram (Easy)",description:"<SolutionDocHead",source:"@site/solutions/242.mdx",sourceDirName:".",slug:"/242",permalink:"/leetcode/solutions/242",tags:[{label:"Hash Table",permalink:"/leetcode/solutions/tags/hash-table"},{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Sorting",permalink:"/leetcode/solutions/tags/sorting"},{label:"Easy",permalink:"/leetcode/solutions/tags/easy"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650980131,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"242. Valid Anagram (Easy)",tags:["Hash Table","String","Sorting","Easy"]},sidebar:"solutions",previous:{title:"206. Reverse Linked List (Easy)",permalink:"/leetcode/solutions/206"},next:{title:"344. Reverse String (Easy)",permalink:"/leetcode/solutions/344"}},c={},d=[],g={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(i.Z,{solutionType:"easy",labels:["Hash Table","String","Sorting"],url:"https://leetcode.com/problems/valid-anagram/",mdxType:"SolutionDocHead"}),(0,l.kt)("p",null,"Given two strings ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"t"),", return ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"t")," is an anagram of ",(0,l.kt)("inlineCode",{parentName:"p"},"s"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,l.kt)("p",null,"An ",(0,l.kt)("b",null,"Anagram")," is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."),(0,l.kt)("b",null,"Example 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: s = "anagram", t = "nagaram"\nOutput: true\n')),(0,l.kt)("b",null,"Example 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: s = "rat", t = "car"\nOutput: false\n')),(0,l.kt)("b",null,"Constraints:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 <= s.length, t.length <= 5 ","*"," 10",(0,l.kt)("sup",null,"4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"t")," consist of lowercase English letters.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},'function isAnagram(s: string, t: string): boolean {\n  if (s.length !== t.length) {\n    return false;\n  }\n  const countLeftArr = new Array(26).fill(0);\n  const countRightArr = new Array(26).fill(0);\n  for (let i = 0; i < s.length; i++) {\n    const leftChar = s[i];\n    const rightChar = t[i];\n    countLeftArr[leftChar.charCodeAt(0) - 97]++;\n    countRightArr[rightChar.charCodeAt(0) - 97]++;\n  }\n  if (countLeftArr.join("#") === countRightArr.join("#")) return true;\n  return false;\n}\n')))}m.isMDXComponent=!0}}]);