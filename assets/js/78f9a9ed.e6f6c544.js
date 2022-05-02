"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[5676],{6427:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(5714),l=["components"],s={title:"35. Search Insert Position (Easy)",tags:["Array","Binary Search","Easy"]},u=void 0,d={unversionedId:"35",id:"35",title:"35. Search Insert Position (Easy)",description:"<SolutionDocHead",source:"@site/solutions/35.mdx",sourceDirName:".",slug:"/35",permalink:"/leetcode/solutions/35",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Binary Search",permalink:"/leetcode/solutions/tags/binary-search"},{label:"Easy",permalink:"/leetcode/solutions/tags/easy"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650915156,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"35. Search Insert Position (Easy)",tags:["Array","Binary Search","Easy"]},sidebar:"solutions",previous:{title:"34. Find First and Last Position of Element in Sorted Array (Medium)",permalink:"/leetcode/solutions/34"},next:{title:"36. Valid Sudoku (Medium)",permalink:"/leetcode/solutions/36"}},m={},c=[],p={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{solutionType:"easy",labels:["Array","Binary Search"],url:"https://leetcode.com/problems/search-insert-position/",mdxType:"SolutionDocHead"}),(0,i.kt)("p",null,"Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order."),(0,i.kt)("p",null,"You must write an algorithm with ",(0,i.kt)("inlineCode",{parentName:"p"},"O(log n)")," runtime complexity."),(0,i.kt)("b",null,"Example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,3,5,6], target = 5\nOutput: 2\n")),(0,i.kt)("b",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,3,5,6], target = 2\nOutput: 1\n")),(0,i.kt)("b",null,"Example 3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,3,5,6], target = 7\nOutput: 4\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function searchInsert(nums: number[], target: number): number {\n  // binary search\n  let l: number = 0;\n  let r: number = nums.length - 1;\n  let mid: number;\n  while (r >= l) {\n    mid = l + Math.floor((r - l) / 2);\n    if (nums[mid] === target) {\n      return mid;\n    }\n    if (nums[mid] > target) {\n      r = mid - 1;\n    } else {\n      l = mid + 1;\n    }\n  }\n  return l;\n}\n")))}k.isMDXComponent=!0}}]);