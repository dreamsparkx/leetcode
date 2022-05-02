"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[3818],{7319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=n(5714),o=["components"],u={title:"153. Find Minimum in Rotated Sorted Array (Medium)",tags:["Array","Binary Search"]},m=void 0,s={unversionedId:"153",id:"153",title:"153. Find Minimum in Rotated Sorted Array (Medium)",description:"<SolutionDocHead",source:"@site/solutions/153.mdx",sourceDirName:".",slug:"/153",permalink:"/leetcode/solutions/153",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Binary Search",permalink:"/leetcode/solutions/tags/binary-search"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651079303,formattedLastUpdatedAt:"4/27/2022",frontMatter:{title:"153. Find Minimum in Rotated Sorted Array (Medium)",tags:["Array","Binary Search"]},sidebar:"solutions",previous:{title:"146. LRU Cache (Medium)",permalink:"/leetcode/solutions/146"},next:{title:"162. Find Peak Element (Medium)",permalink:"/leetcode/solutions/162"}},d={},p=[],k={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{solutionType:"medium",labels:["Array","Binary Search"],url:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",mdxType:"SolutionDocHead"}),(0,r.kt)("p",null,"Suppose an array of length ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," sorted in ascending order is ",(0,r.kt)("b",null,"rotated")," between ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," times. For example, the array ",(0,r.kt)("inlineCode",{parentName:"p"},"nums = [0,1,2,4,5,6,7]")," might become:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[4,5,6,7,0,1,2]")," if it was rotated ",(0,r.kt)("inlineCode",{parentName:"li"},"4")," times."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[0,1,2,4,5,6,7]")," if it was rotated ",(0,r.kt)("inlineCode",{parentName:"li"},"7")," times.\nNotice that ",(0,r.kt)("b",null,"rotating")," an array ",(0,r.kt)("inlineCode",{parentName:"li"},"[a[0], a[1], a[2], ..., a[n-1]]")," 1 time results in the array ",(0,r.kt)("inlineCode",{parentName:"li"},"[a[n-1], a[0], a[1], a[2], ..., a[n-2]]"),".")),(0,r.kt)("p",null,"Given the sorted rotated array ",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," of ",(0,r.kt)("b",null,"unique")," elements, return the minimum element of this array."),(0,r.kt)("p",null,"You must write an algorithm that runs in ",(0,r.kt)("inlineCode",{parentName:"p"},"O(log n)")," time."),(0,r.kt)("b",null,"Example 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [3,4,5,1,2]\nOutput: 1\nExplanation: The original array was [1,2,3,4,5] rotated 3 times.\n")),(0,r.kt)("b",null,"Example 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [4,5,6,7,0,1,2]\nOutput: 0\nExplanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.\n")),(0,r.kt)("b",null,"Example 3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [11,13,15,17]\nOutput: 11\nExplanation: The original array was [11,13,15,17] and it was rotated 4 times.\n")),(0,r.kt)("b",null,"Constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n == nums.length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n <= 5000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-5000 <= nums[i] <= 5000")),(0,r.kt)("li",{parentName:"ul"},"All the integers of ",(0,r.kt)("inlineCode",{parentName:"li"},"nums")," are ",(0,r.kt)("b",null,"unique"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nums")," is sorted and rotated between ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," times.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function findMin(nums: number[]): number {\n  let left = 0,\n    right = nums.length - 1;\n  while (left < right) {\n    let mid = Math.floor((left + right) / 2);\n    if (nums[mid] > nums[right]) {\n      left = mid + 1;\n    } else {\n      right = mid;\n    }\n  }\n  return nums[left];\n}\n")))}c.isMDXComponent=!0}}]);