"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[3786],{3733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return c}});var a=n(7462),s=n(3366),o=(n(7294),n(3905)),l=n(5714),i=(n(1990),["components"]),r={title:"3. Longest Substring Without Repeating Characters (Medium)",tags:["Hash Table","String","Sliding Window","Medium","Adobe","Amazon","Bloomberg","Yelp"]},u=void 0,d={unversionedId:"3",id:"3",title:"3. Longest Substring Without Repeating Characters (Medium)",description:"<SolutionDocHead",source:"@site/solutions/3.mdx",sourceDirName:".",slug:"/3",permalink:"/leetcode/solutions/3",tags:[{label:"Hash Table",permalink:"/leetcode/solutions/tags/hash-table"},{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Sliding Window",permalink:"/leetcode/solutions/tags/sliding-window"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"},{label:"Adobe",permalink:"/leetcode/solutions/tags/adobe"},{label:"Amazon",permalink:"/leetcode/solutions/tags/amazon"},{label:"Bloomberg",permalink:"/leetcode/solutions/tags/bloomberg"},{label:"Yelp",permalink:"/leetcode/solutions/tags/yelp"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651240850,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"3. Longest Substring Without Repeating Characters (Medium)",tags:["Hash Table","String","Sliding Window","Medium","Adobe","Amazon","Bloomberg","Yelp"]},sidebar:"solutions",previous:{title:"2. Add Two Numbers (Medium)",permalink:"/leetcode/solutions/2"},next:{title:"4. Median of Two Sorted Arrays (Hard)",permalink:"/leetcode/solutions/4"}},p={},c=[],m={toc:c};function b(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{solutionType:"medium",labels:["Hash Table","String","Sliding Window"],companies:["Adobe","Amazon","Bloomberg","Yelp"],url:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",mdxType:"SolutionDocHead"}),(0,o.kt)("p",null,"Given a string ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),", find the length of the ",(0,o.kt)("b",null,"longest substring")," without repeating characters."),(0,o.kt)("b",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with the length of 3.\n')),(0,o.kt)("b",null,"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "bbbbb"\nOutput: 1\nExplanation: The answer is "b", with the length of 1.\n')),(0,o.kt)("b",null,"Example 3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "pwwkew"\nOutput: 3\nExplanation: The answer is "wke", with the length of 3.\nNotice that the answer must be a substring, "pwke" is a subsequence and not a substring.\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function lengthOfLongestSubstring(s: string): number {\n  if (!s) {\n    return 0;\n  }\n  let start: number = 0,\n    end: number = 0,\n    result: number = 0;\n  const uniqueCharacters = new Set();\n  while (end < s.length) {\n    if (!uniqueCharacters.has(s[end])) {\n      // new char\n      uniqueCharacters.add(s[end]);\n      end++;\n      result = Math.max(result, uniqueCharacters.size);\n    } else {\n      uniqueCharacters.delete(s[start]);\n      start++;\n    }\n  }\n  return result;\n}\n")))}b.isMDXComponent=!0}}]);