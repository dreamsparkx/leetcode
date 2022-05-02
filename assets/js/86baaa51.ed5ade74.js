"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[9536],{7267:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return g}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),s=n.p+"assets/images/image-74804a633861238dccad047cebfcc02b.png",l=n(5714),r=["components"],u={title:"17. Letter Combinations of a Phone Number (Medium)",tags:["Hash Table","String","Backtracking","Medium","Amazon","Facebook","Dropbox","Uber","Google"]},c=void 0,m={unversionedId:"17",id:"17",title:"17. Letter Combinations of a Phone Number (Medium)",description:"<SolutionDocHead",source:"@site/solutions/17.mdx",sourceDirName:".",slug:"/17",permalink:"/leetcode/solutions/17",tags:[{label:"Hash Table",permalink:"/leetcode/solutions/tags/hash-table"},{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Backtracking",permalink:"/leetcode/solutions/tags/backtracking"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"},{label:"Amazon",permalink:"/leetcode/solutions/tags/amazon"},{label:"Facebook",permalink:"/leetcode/solutions/tags/facebook"},{label:"Dropbox",permalink:"/leetcode/solutions/tags/dropbox"},{label:"Uber",permalink:"/leetcode/solutions/tags/uber"},{label:"Google",permalink:"/leetcode/solutions/tags/google"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651240850,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"17. Letter Combinations of a Phone Number (Medium)",tags:["Hash Table","String","Backtracking","Medium","Amazon","Facebook","Dropbox","Uber","Google"]},sidebar:"solutions",previous:{title:"15. 3Sum (Medium)",permalink:"/leetcode/solutions/15"},next:{title:"18. 4Sum (Medium)",permalink:"/leetcode/solutions/18"}},d={},g=[],p={toc:g};function b(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{solutionType:"medium",labels:["Hash Table","String","Backtracking"],companies:["Amazon","Facebook","Dropbox","Uber","Google"],url:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/",mdxType:"SolutionDocHead"}),(0,a.kt)("p",null,"Given a string containing digits from ",(0,a.kt)("inlineCode",{parentName:"p"},"2-9")," inclusive, return all possible letter combinations that the number could represent. Return the answer in ",(0,a.kt)("b",null,"any order"),"."),(0,a.kt)("p",null,"A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters."),(0,a.kt)("img",{src:s}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},'function letterCombinations(digits: string): string[] {\n  if (digits === null || digits.length === 0) {\n    return [];\n  }\n  const map: Record<number, string> = {\n    2: "abc",\n    3: "def",\n    4: "ghi",\n    5: "jkl",\n    6: "mno",\n    7: "pqrs",\n    8: "tuv",\n    9: "wxyz",\n  };\n  const res: string[] = [];\n  const go = (i: number, s: string) => {\n    if (i === digits.length) {\n      res.push(s);\n      return;\n    }\n    for (const c of map[digits[i]]) {\n      go(i + 1, s + c);\n    }\n  };\n  go(0, "");\n  return res;\n}\n')))}b.isMDXComponent=!0}}]);