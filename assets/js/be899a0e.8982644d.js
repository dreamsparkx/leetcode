"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[2054],{5507:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return d}});var r=n(7462),s=n(3366),o=(n(7294),n(3905)),i=n(5714),l=["components"],a={title:"344. Reverse String (Easy)",tags:["Two Pointers","String","Recursion"]},u=void 0,p={unversionedId:"344",id:"344",title:"344. Reverse String (Easy)",description:"<SolutionDocHead",source:"@site/solutions/344.mdx",sourceDirName:".",slug:"/344",permalink:"/leetcode/solutions/344",tags:[{label:"Two Pointers",permalink:"/leetcode/solutions/tags/two-pointers"},{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Recursion",permalink:"/leetcode/solutions/tags/recursion"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650482437,formattedLastUpdatedAt:"4/21/2022",frontMatter:{title:"344. Reverse String (Easy)",tags:["Two Pointers","String","Recursion"]},sidebar:"solutions",previous:{title:"206. Reverse Linked List (Easy)",permalink:"/leetcode/solutions/206"},next:{title:"345. Reverse Vowels of a String (Easy)",permalink:"/leetcode/solutions/345"}},c={},d=[],m={toc:d};function g(e){var t=e.components,n=(0,s.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{solutionType:"easy",labels:["Two Pointers","String","Recursion"],url:"https://leetcode.com/problems/reverse-string/",mdxType:"SolutionDocHead"}),(0,o.kt)("p",null,"Write a function that reverses a string. The input string is given as an array of characters ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,o.kt)("p",null,"You must do this by modifying the input array ",(0,o.kt)("inlineCode",{parentName:"p"},"in-place")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"O(1)")," extra memory."),(0,o.kt)("b",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = ["h","e","l","l","o"]\nOutput: ["o","l","l","e","h"]\n')),(0,o.kt)("b",null,"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = ["H","a","n","n","a","h"]\nOutput: ["h","a","n","n","a","H"]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function reverseString(s: string[]): void {\n  let left = 0,\n    right = s.length - 1;\n  while (left < right) {\n    let temp = s[left];\n    s[left] = s[right];\n    s[right] = temp;\n    left++;\n    right--;\n  }\n}\n")))}g.isMDXComponent=!0}}]);