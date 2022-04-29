"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[2978],{6529:function(e,t,n){var r=n(7294),a=n(1285),l=(0,n(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));t.Z=function(e){var t=l(),n=e.labels;return r.createElement("div",{className:t.root},n.map((function(e,t){return r.createElement(a.Z,{label:e,key:t+"-"+e})})))}},5714:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},l=function(e){var t=e.type,n="";switch(t){case"medium":n="Medium";break;case"hard":n="Hard";break;default:n="Easy"}return r.createElement("span",{className:a[t]},n)},o=n(6529),i=function(e){var t=e.solutionType,n=e.labels,a=e.companies,i=e.url;return r.createElement(r.Fragment,null,r.createElement(l,{type:t}),r.createElement("br",null),r.createElement("br",null),r.createElement(o.Z,{labels:n}),r.createElement("br",null),a&&a.length>0&&r.createElement(r.Fragment,null,"Companies:",r.createElement(o.Z,{labels:a}),r.createElement("br",null)),"URL: ",r.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},i),r.createElement("br",null),r.createElement("br",null))}},9207:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(5714),i=["components"],u={title:"167. Two Sum II - Input Array Is Sorted (Medium)",tags:["Array","Two Pointers","Binary Search","Medium","Amazon"]},s=void 0,m={unversionedId:"167",id:"167",title:"167. Two Sum II - Input Array Is Sorted (Medium)",description:"<SolutionDocHead",source:"@site/solutions/167.mdx",sourceDirName:".",slug:"/167",permalink:"/leetcode/solutions/167",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Two Pointers",permalink:"/leetcode/solutions/tags/two-pointers"},{label:"Binary Search",permalink:"/leetcode/solutions/tags/binary-search"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"},{label:"Amazon",permalink:"/leetcode/solutions/tags/amazon"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651240850,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"167. Two Sum II - Input Array Is Sorted (Medium)",tags:["Array","Two Pointers","Binary Search","Medium","Amazon"]},sidebar:"solutions",previous:{title:"162. Find Peak Element (Medium)",permalink:"/leetcode/solutions/162"},next:{title:"187. Repeated DNA Sequences (Medium)",permalink:"/leetcode/solutions/187"}},d={},p=[],c={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{solutionType:"medium",labels:["Array","Two Pointers","Binary Search"],companies:["Amazon"],url:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",mdxType:"SolutionDocHead"}),(0,l.kt)("p",null,"Given a 1-indexed array of integers ",(0,l.kt)("inlineCode",{parentName:"p"},"numbers")," that is already sorted in non-decreasing order, find two numbers such that they add up to a specific ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," number. Let these two numbers be ",(0,l.kt)("inlineCode",{parentName:"p"},"numbers[index1]")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"numbers[index2]")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"1 <= index1 < index2 <= numbers.length"),"."),(0,l.kt)("p",null,"Return the indices of the two numbers, ",(0,l.kt)("inlineCode",{parentName:"p"},"index1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"index2"),", added by one as an integer array ",(0,l.kt)("inlineCode",{parentName:"p"},"[index1, index2]")," of length 2."),(0,l.kt)("p",null,"The tests are generated such that there is exactly one solution. You may not use the same element twice."),(0,l.kt)("p",null,"Your solution must use only constant extra space."),(0,l.kt)("b",null,"Example 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: numbers = [2,7,11,15], target = 9\nOutput: [1,2]\nExplanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].\n")),(0,l.kt)("b",null,"Example 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: numbers = [2,3,4], target = 6\nOutput: [1,3]\nExplanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].\n")),(0,l.kt)("b",null,"Example 3:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: numbers = [-1,0], target = -1\nOutput: [1,2]\nExplanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function twoSum(numbers: number[], target: number): number[] {\n  let left = 0,\n    right = numbers.length - 1;\n  const result: number[] = Array(2);\n  while (left < right) {\n    let temp = numbers[left] + numbers[right];\n    if (temp == target) {\n      result[0] = left + 1;\n      result[1] = right + 1;\n      break;\n    }\n    if (temp > target) {\n      right--;\n    } else {\n      left++;\n    }\n  }\n  return result;\n}\n")))}b.isMDXComponent=!0}}]);