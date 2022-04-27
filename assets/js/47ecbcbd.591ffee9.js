"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[5830],{8853:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(5714),u=["components"],o={title:"33. Search in Rotated Sorted Array (Medium)",tags:["Array","Binary Search","Medium"]},s=void 0,m={unversionedId:"33",id:"33",title:"33. Search in Rotated Sorted Array (Medium)",description:"<SolutionDocHead",source:"@site/solutions/33.mdx",sourceDirName:".",slug:"/33",permalink:"/leetcode/solutions/33",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Binary Search",permalink:"/leetcode/solutions/tags/binary-search"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651072671,formattedLastUpdatedAt:"4/27/2022",frontMatter:{title:"33. Search in Rotated Sorted Array (Medium)",tags:["Array","Binary Search","Medium"]},sidebar:"solutions",previous:{title:"32. Longest Valid Parentheses (Hard)",permalink:"/leetcode/solutions/32"},next:{title:"35. Search Insert Position (Easy)",permalink:"/leetcode/solutions/35"}},d={},p=[],k={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{solutionType:"medium",labels:["Array","Binary Search"],url:"https://leetcode.com/problems/search-in-rotated-sorted-array/",mdxType:"SolutionDocHead"}),(0,i.kt)("p",null,"There is an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," sorted in ascending order (with ",(0,i.kt)("b",null,"distinct")," values)."),(0,i.kt)("p",null,"Prior to being passed to your function, ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," is ",(0,i.kt)("b",null,"possibly rotated")," at an unknown pivot index ",(0,i.kt)("inlineCode",{parentName:"p"},"k (1 <= k < nums.length)")," such that the resulting array is ",(0,i.kt)("inlineCode",{parentName:"p"},"[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]")," (",(0,i.kt)("b",null,"0-indexed"),"). For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"[0,1,2,4,5,6,7]")," might be rotated at pivot index ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," and become ",(0,i.kt)("inlineCode",{parentName:"p"},"[4,5,6,7,0,1,2]"),"."),(0,i.kt)("p",null,"Given the array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," ",(0,i.kt)("b",null,"after")," the possible rotation and an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),", return the index of ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," if it is in ",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),", or -1 if it is not in ",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),"."),(0,i.kt)("p",null,"You must write an algorithm with ",(0,i.kt)("inlineCode",{parentName:"p"},"O(log n)")," runtime complexity."),(0,i.kt)("b",null,"Example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4\n")),(0,i.kt)("b",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [4,5,6,7,0,1,2], target = 3\nOutput: -1\n")),(0,i.kt)("b",null,"Example 3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1], target = 0\nOutput: -1\n")),(0,i.kt)("b",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 5000")),(0,i.kt)("li",{parentName:"ul"},"-10",(0,i.kt)("sup",null,"4")," <= nums","[i]"," <= 10",(0,i.kt)("sup",null,"4")),(0,i.kt)("li",{parentName:"ul"},"All values of ",(0,i.kt)("inlineCode",{parentName:"li"},"nums")," are ",(0,i.kt)("b",null,"unique"),"."),(0,i.kt)("li",{parentName:"ul"},"nums is an ascending array that is possibly rotated."),(0,i.kt)("li",{parentName:"ul"},"-10",(0,i.kt)("sup",null,"4")," <= target <= 10",(0,i.kt)("sup",null,"4"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function search(nums: number[], target: number): number {\n  let l = 0;\n  let r = nums.length - 1;\n  while (l <= r) {\n    let mid = Math.floor((r - l) / 2 + l);\n    if (nums[mid] === target) {\n      return mid;\n    }\n    if (nums[l] <= nums[mid]) {\n      // left sorted\n      if (target >= nums[l] && target < nums[mid]) {\n        // target in sorted\n        r = mid - 1;\n      } else {\n        // target in unsorted\n        l = mid + 1;\n      }\n    } else {\n      // right sorted\n      if (target <= nums[r] && target > nums[mid]) {\n        // target in sorted\n        l = mid + 1;\n      } else {\n        // target in unsorted\n        r = mid - 1;\n      }\n    }\n  }\n  return -1;\n}\n")))}c.isMDXComponent=!0}}]);