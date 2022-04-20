"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[786],{6529:function(e,t,n){var a=n(7294),r=n(1285),l=(0,n(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));t.Z=function(e){var t=l(),n=e.labels;return a.createElement("div",{className:t.root},n.map((function(e,t){return a.createElement(r.Z,{label:e,key:t+"-"+e})})))}},5714:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},l=function(e){var t=e.type,n="";switch(t){case"medium":n="Medium";break;case"hard":n="Hard";break;default:n="Easy"}return a.createElement("span",{className:r[t]},n)},s=n(6529),i=function(e){var t=e.solutionType,n=e.labels,r=e.companies,i=e.url;return a.createElement(a.Fragment,null,a.createElement(l,{type:t}),a.createElement("br",null),a.createElement("br",null),a.createElement(s.Z,{labels:n}),a.createElement("br",null),r&&r.length>0&&a.createElement(a.Fragment,null,"Companies:",a.createElement(s.Z,{labels:r}),a.createElement("br",null)),"URL: ",a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},i),a.createElement("br",null),a.createElement("br",null))}},3733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return b},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),s=n(5714),i=(n(6529),["components"]),u={title:"3. Longest Substring Without Repeating Characters (Medium)",tags:["Hash Table","String","Sliding Window"]},o=void 0,c={unversionedId:"3",id:"3",title:"3. Longest Substring Without Repeating Characters (Medium)",description:"<SolutionDocHead",source:"@site/solutions/3.mdx",sourceDirName:".",slug:"/3",permalink:"/leetcode/solutions/3",tags:[{label:"Hash Table",permalink:"/leetcode/solutions/tags/hash-table"},{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Sliding Window",permalink:"/leetcode/solutions/tags/sliding-window"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650482437,formattedLastUpdatedAt:"4/21/2022",frontMatter:{title:"3. Longest Substring Without Repeating Characters (Medium)",tags:["Hash Table","String","Sliding Window"]},sidebar:"solutions",previous:{title:"2. Add Two Numbers (Medium)",permalink:"/leetcode/solutions/2"},next:{title:"4. Median of Two Sorted Arrays (Hard)",permalink:"/leetcode/solutions/4"}},d={},m=[],p={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,{solutionType:"medium",labels:["Hash Table","String","Sliding Window"],companies:["Adobe","Amazon","Bloomberg","Yelp"],url:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",mdxType:"SolutionDocHead"}),(0,l.kt)("p",null,"Given a string ",(0,l.kt)("inlineCode",{parentName:"p"},"s"),", find the length of the ",(0,l.kt)("b",null,"longest substring")," without repeating characters."),(0,l.kt)("b",null,"Example 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: s = "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with the length of 3.\n')),(0,l.kt)("b",null,"Example 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: s = "bbbbb"\nOutput: 1\nExplanation: The answer is "b", with the length of 1.\n')),(0,l.kt)("b",null,"Example 3:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: s = "pwwkew"\nOutput: 3\nExplanation: The answer is "wke", with the length of 3.\nNotice that the answer must be a substring, "pwke" is a subsequence and not a substring.\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function lengthOfLongestSubstring(s: string): number {\n  if (!s) {\n    return 0;\n  }\n  let start: number = 0,\n    end: number = 0,\n    result: number = 0;\n  const uniqueCharacters = new Set();\n  while (end < s.length) {\n    if (!uniqueCharacters.has(s[end])) {\n      // new char\n      uniqueCharacters.add(s[end]);\n      end++;\n      result = Math.max(result, uniqueCharacters.size);\n    } else {\n      uniqueCharacters.delete(s[start]);\n      start++;\n    }\n  }\n  return result;\n}\n")))}b.isMDXComponent=!0}}]);