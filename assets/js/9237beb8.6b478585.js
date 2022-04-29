"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[5779],{6529:function(e,n,t){var r=t(7294),a=t(1285),l=(0,t(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));n.Z=function(e){var n=l(),t=e.labels;return r.createElement("div",{className:n.root},t.map((function(e,n){return r.createElement(a.Z,{label:e,key:n+"-"+e})})))}},5714:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),a={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},l=function(e){var n=e.type,t="";switch(n){case"medium":t="Medium";break;case"hard":t="Hard";break;default:t="Easy"}return r.createElement("span",{className:a[n]},t)},i=t(6529),o=function(e){var n=e.solutionType,t=e.labels,a=e.companies,o=e.url;return r.createElement(r.Fragment,null,r.createElement(l,{type:n}),r.createElement("br",null),r.createElement("br",null),r.createElement(i.Z,{labels:t}),r.createElement("br",null),a&&a.length>0&&r.createElement(r.Fragment,null,"Companies:",r.createElement(i.Z,{labels:a}),r.createElement("br",null)),"URL: ",r.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},o),r.createElement("br",null),r.createElement("br",null))}},9445:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=t(5714),o=["components"],u={title:"34. Find First and Last Position of Element in Sorted Array (Medium)",tags:["Array","Binary Search","Medium","LinkedIn"]},s=void 0,m={unversionedId:"34",id:"34",title:"34. Find First and Last Position of Element in Sorted Array (Medium)",description:"<SolutionDocHead",source:"@site/solutions/34.mdx",sourceDirName:".",slug:"/34",permalink:"/leetcode/solutions/34",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Binary Search",permalink:"/leetcode/solutions/tags/binary-search"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"},{label:"LinkedIn",permalink:"/leetcode/solutions/tags/linked-in"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651240850,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"34. Find First and Last Position of Element in Sorted Array (Medium)",tags:["Array","Binary Search","Medium","LinkedIn"]},sidebar:"solutions",previous:{title:"33. Search in Rotated Sorted Array (Medium)",permalink:"/leetcode/solutions/33"},next:{title:"35. Search Insert Position (Easy)",permalink:"/leetcode/solutions/35"}},d={},p=[],c={toc:p};function k(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(i.Z,{solutionType:"medium",labels:["Array","Binary Search"],companies:["LinkedIn"],url:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",mdxType:"SolutionDocHead"}),(0,l.kt)("p",null,"Given an array of integers ",(0,l.kt)("inlineCode",{parentName:"p"},"nums")," sorted in non-decreasing order, find the starting and ending position of a given ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," value."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," is not found in the array, return ",(0,l.kt)("inlineCode",{parentName:"p"},"[-1, -1]"),"."),(0,l.kt)("p",null,"You must write an algorithm with ",(0,l.kt)("inlineCode",{parentName:"p"},"O(log n)")," runtime complexity."),(0,l.kt)("b",null,"Example 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: nums = [5,7,7,8,8,10], target = 8\nOutput: [3,4]\n")),(0,l.kt)("b",null,"Example 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: nums = [5,7,7,8,8,10], target = 6\nOutput: [-1,-1]\n")),(0,l.kt)("b",null,"Example 3:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: nums = [], target = 0\nOutput: [-1,-1]\n")),(0,l.kt)("b",null,"Constraints:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0 <= nums.length <= 10",(0,l.kt)("sup",null,"5")),(0,l.kt)("li",{parentName:"ul"},"-10",(0,l.kt)("sup",null,"9")," <= nums","[i]"," <= 10",(0,l.kt)("sup",null,"9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nums")," is a non-decreasing array."),(0,l.kt)("li",{parentName:"ul"},"-10",(0,l.kt)("sup",null,"9")," <= target <= 10",(0,l.kt)("sup",null,"9"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function searchRange(nums: number[], target: number): number[] {\n  let low = 0,\n    high = nums.length - 1,\n    mid;\n  // find the start\n  while (low <= high) {\n    mid = Math.floor((low + high) / 2);\n    if (nums[mid] >= target) {\n      high = mid - 1;\n    } else {\n      low = mid + 1;\n    }\n  }\n  // if target don't exist\n  if (nums[low] != target) {\n    return [-1, -1];\n  }\n\n  const start = low;\n  // reset\n  (low = 0), (high = nums.length - 1);\n\n  // find the end\n  while (low <= high) {\n    mid = Math.floor((low + high) / 2);\n    if (nums[mid] <= target) {\n      low = mid + 1;\n    } else {\n      high = mid - 1;\n    }\n  }\n  return [start, high];\n}\n")))}k.isMDXComponent=!0}}]);