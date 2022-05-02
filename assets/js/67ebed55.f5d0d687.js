"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[7611],{4836:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=n(5714),s=["components"],l={title:"278. First Bad Version (Easy)",tags:["Binary Search","Interactive","Easy"]},u=void 0,d={unversionedId:"278",id:"278",title:"278. First Bad Version (Easy)",description:"<SolutionDocHead",source:"@site/solutions/278.mdx",sourceDirName:".",slug:"/278",permalink:"/leetcode/solutions/278",tags:[{label:"Binary Search",permalink:"/leetcode/solutions/tags/binary-search"},{label:"Interactive",permalink:"/leetcode/solutions/tags/interactive"},{label:"Easy",permalink:"/leetcode/solutions/tags/easy"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651072671,formattedLastUpdatedAt:"4/27/2022",frontMatter:{title:"278. First Bad Version (Easy)",tags:["Binary Search","Interactive","Easy"]},sidebar:"solutions",previous:{title:"270. Closest Binary Search Tree Value (Medium)",permalink:"/leetcode/solutions/270"},next:{title:"295. Find Median from Data Stream (Hard)",permalink:"/leetcode/solutions/295"}},c={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{solutionType:"easy",labels:["Binary Search","Interactive"],url:"https://leetcode.com/problems/first-bad-version/",mdxType:"SolutionDocHead"}),(0,i.kt)("p",null,"You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad."),(0,i.kt)("p",null,"Suppose you have n versions ",(0,i.kt)("inlineCode",{parentName:"p"},"[1, 2, ..., n]")," and you want to find out the first bad one, which causes all the following ones to be bad."),(0,i.kt)("p",null,"You are given an API ",(0,i.kt)("inlineCode",{parentName:"p"},"bool isBadVersion(version)")," which returns whether ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API."),(0,i.kt)("b",null,"Example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 5, bad = 4\nOutput: 4\nExplanation:\ncall isBadVersion(3) -> false\ncall isBadVersion(5) -> true\ncall isBadVersion(4) -> true\nThen 4 is the first bad version.\n")),(0,i.kt)("b",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 1, bad = 1\nOutput: 1\n")),(0,i.kt)("b",null,"Constraints:"),(0,i.kt)("p",null,"1 <= bad <= n <= 2",(0,i.kt)("sup",null,"31")," - 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"/**\n * The knows API is defined in the parent class Relation.\n * isBadVersion(version: number): boolean {\n *     ...\n * };\n */\n\nvar solution = function (isBadVersion: any) {\n  return function (n: number): number {\n    let left = 1,\n      right = n;\n    while (right > left) {\n      const mid = left + Math.floor((right - left) / 2);\n      if (isBadVersion(mid)) {\n        right = mid;\n      } else {\n        left = mid + 1;\n      }\n    }\n    return left;\n  };\n};\n")))}f.isMDXComponent=!0}}]);