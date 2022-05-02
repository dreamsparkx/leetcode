"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[2233],{9126:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var a=n(7462),r=n(3366),u=(n(7294),n(3905)),o=n(5714),i=["components"],s={title:"53. Maximum Subarray (Easy)",tags:["Array","Dynamic Programming","Divide and Conquer","Easy"]},l=void 0,m={unversionedId:"53",id:"53",title:"53. Maximum Subarray (Easy)",description:"<SolutionDocHead",source:"@site/solutions/53.mdx",sourceDirName:".",slug:"/53",permalink:"/leetcode/solutions/53",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Dynamic Programming",permalink:"/leetcode/solutions/tags/dynamic-programming"},{label:"Divide and Conquer",permalink:"/leetcode/solutions/tags/divide-and-conquer"},{label:"Easy",permalink:"/leetcode/solutions/tags/easy"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651501637,formattedLastUpdatedAt:"5/2/2022",frontMatter:{title:"53. Maximum Subarray (Easy)",tags:["Array","Dynamic Programming","Divide and Conquer","Easy"]},sidebar:"solutions",previous:{title:"49. Group Anagrams (Medium)",permalink:"/leetcode/solutions/49"},next:{title:"69. Sqrt(x) (Easy)",permalink:"/leetcode/solutions/69"}},p={},d=[],c={toc:d};function y(t){var e=t.components,n=(0,r.Z)(t,i);return(0,u.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,u.kt)(o.Z,{solutionType:"easy",labels:["Array","Dynamic Programming","Divide and Conquer"],url:"https://leetcode.com/problems/maximum-subarray/",mdxType:"SolutionDocHead"}),(0,u.kt)("p",null,"Given an integer array ",(0,u.kt)("inlineCode",{parentName:"p"},"nums"),", find the contiguous subarray (containing at least one number) which has the largest sum and return its sum."),(0,u.kt)("p",null,"A ",(0,u.kt)("b",null,"subarray")," is a ",(0,u.kt)("b",null,"contiguous")," part of an array."),(0,u.kt)("b",null,"Example 1:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: [4,-1,2,1] has the largest sum = 6.\n")),(0,u.kt)("b",null,"Example 2:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"Input: nums = [1]\nOutput: 1\n")),(0,u.kt)("b",null,"Example 3:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"Input: nums = [5,4,-1,7,8]\nOutput: 23\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function maxSubArray(nums: number[]): number {\n  for (let i = 1; i < nums.length; i++) {\n    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);\n  }\n  return Math.max(...nums);\n}\n")))}y.isMDXComponent=!0}}]);