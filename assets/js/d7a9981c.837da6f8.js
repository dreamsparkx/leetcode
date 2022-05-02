"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[7784],{2098:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return r},metadata:function(){return m},toc:function(){return c}});var a=n(7462),u=n(3366),l=(n(7294),n(3905)),o=n(5714),s=["components"],r={title:"560. Subarray Sum Equals K (Medium)",tags:["Array","Hash Table","Prefix Sum","Medium","Facebook","Google"]},i=void 0,m={unversionedId:"560",id:"560",title:"560. Subarray Sum Equals K (Medium)",description:"<SolutionDocHead",source:"@site/solutions/560.mdx",sourceDirName:".",slug:"/560",permalink:"/leetcode/solutions/560",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Hash Table",permalink:"/leetcode/solutions/tags/hash-table"},{label:"Prefix Sum",permalink:"/leetcode/solutions/tags/prefix-sum"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"},{label:"Facebook",permalink:"/leetcode/solutions/tags/facebook"},{label:"Google",permalink:"/leetcode/solutions/tags/google"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651240850,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"560. Subarray Sum Equals K (Medium)",tags:["Array","Hash Table","Prefix Sum","Medium","Facebook","Google"]},sidebar:"solutions",previous:{title:"535. Encode and Decode TinyURL (Medium)",permalink:"/leetcode/solutions/535"},next:{title:"621. Task Scheduler (Medium)",permalink:"/leetcode/solutions/621"}},p={},c=[],d={toc:c};function k(e){var t=e.components,n=(0,u.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{solutionType:"medium",labels:["Array","Hash Table","Prefix Sum"],companies:["Facebook","Google"],url:"https://leetcode.com/problems/subarray-sum-equals-k/",mdxType:"SolutionDocHead"}),(0,l.kt)("p",null,"Given an array of integers ",(0,l.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,l.kt)("inlineCode",{parentName:"p"},"k"),", return the total number of subarrays whose sum equals to ",(0,l.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,l.kt)("b",null,"Example 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: nums = [1,1,1], k = 2\nOutput: 2\n")),(0,l.kt)("b",null,"Example 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3], k = 3\nOutput: 2\n")),(0,l.kt)("b",null,"Constraints:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 <= nums.length <= 2 ","*"," 10",(0,l.kt)("sup",null,"4")),(0,l.kt)("li",{parentName:"ul"},"-1000 <= nums","[i]"," <= 1000"),(0,l.kt)("li",{parentName:"ul"},"-10",(0,l.kt)("sup",null,"7")," <= k <= 10",(0,l.kt)("sup",null,"7"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function subarraySum(nums: number[], k: number): number {\n  const map = new Map();\n  let sum = 0;\n  let count = 0;\n  map.set(0, 1);\n  for (let i = 0; i < nums.length; i++) {\n    sum = sum + nums[i];\n    if (map.has(sum - k)) {\n      count = count + map.get(sum - k);\n    }\n    if (map.has(sum)) {\n      map.set(sum, map.get(sum) + 1);\n    } else {\n      map.set(sum, 1);\n    }\n  }\n  return count;\n}\n")))}k.isMDXComponent=!0}}]);