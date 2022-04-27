"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[9325],{9017:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return a},metadata:function(){return m},toc:function(){return d}});var l=t(7462),u=t(3366),i=(t(7294),t(3905)),r=t(5714),s=["components"],a={title:"18. 4Sum (Medium)",tags:["Array","Two Pointers","Sorting","Medium"]},o=void 0,m={unversionedId:"18",id:"18",title:"18. 4Sum (Medium)",description:"<SolutionDocHead",source:"@site/solutions/18.mdx",sourceDirName:".",slug:"/18",permalink:"/leetcode/solutions/18",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Two Pointers",permalink:"/leetcode/solutions/tags/two-pointers"},{label:"Sorting",permalink:"/leetcode/solutions/tags/sorting"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650915156,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"18. 4Sum (Medium)",tags:["Array","Two Pointers","Sorting","Medium"]},sidebar:"solutions",previous:{title:"15. 3Sum (Medium)",permalink:"/leetcode/solutions/15"},next:{title:"19. Remove Nth Node From End of List (Medium)",permalink:"/leetcode/solutions/19"}},p={},d=[],k={toc:d};function c(n){var e=n.components,t=(0,u.Z)(n,s);return(0,i.kt)("wrapper",(0,l.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{solutionType:"medium",labels:["Array","Two Pointers","Sorting"],url:"https://leetcode.com/problems/4sum/",mdxType:"SolutionDocHead"}),(0,i.kt)("p",null,"Given an array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," integers, return an array of all the ",(0,i.kt)("b",null,"unique")," quadruplets ",(0,i.kt)("inlineCode",{parentName:"p"},"[nums[a], nums[b], nums[c], nums[d]]")," such that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= a, b, c, d < n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"a"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"b"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"c"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"d")," are ",(0,i.kt)("b",null,"distinct"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nums[a] + nums[b] + nums[c] + nums[d] == target"))),(0,i.kt)("p",null,"You may return the answer in any order."),(0,i.kt)("b",null,"Example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,0,-1,0,-2,2], target = 0\nOutput: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]\n")),(0,i.kt)("b",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [2,2,2,2,2], target = 8\nOutput: [[2,2,2,2]]\n")),(0,i.kt)("b",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 200")),(0,i.kt)("li",{parentName:"ul"},"-10",(0,i.kt)("sup",null,"9")," <= nums","[i]"," <= 10",(0,i.kt)("sup",null,"9")),(0,i.kt)("li",{parentName:"ul"},"-10",(0,i.kt)("sup",null,"9")," <= target <= 10",(0,i.kt)("sup",null,"9"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function fourSum(nums: number[], target: number): number[][] {\n  nums.sort((a, b) => a - b);\n  const result = [];\n  for (let i = 0; i < nums.length - 3; i++) {\n    for (let j = i + 1; j < nums.length - 2; j++) {\n      let low = j + 1;\n      let high = nums.length - 1;\n      while (low < high) {\n        const sum = nums[i] + nums[j] + nums[low] + nums[high];\n        if (sum === target) {\n          result.push([nums[i], nums[j], nums[low], nums[high]]);\n          while (nums[low] === nums[low + 1]) {\n            low++;\n          }\n          while (nums[high] === nums[high - 1]) {\n            high--;\n          }\n          low++;\n          high--;\n        } else if (sum < target) {\n          low++;\n        } else {\n          high--;\n        }\n      }\n      while (nums[j] === nums[j + 1]) {\n        j++;\n      }\n    }\n    while (nums[i] === nums[i + 1]) {\n      i++;\n    }\n  }\n  return result;\n}\n")))}c.isMDXComponent=!0}}]);