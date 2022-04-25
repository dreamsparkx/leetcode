"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[3542],{929:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n.p+"assets/images/image-231db82d4361bebf7320286f6502eace.png",l=n(5714),s=["components"],u={title:"11. Container With Most Water (Medium)",tags:["Array","Two Pointers","Greedy"]},h=void 0,p={unversionedId:"11",id:"11",title:"11. Container With Most Water (Medium)",description:"<SolutionDocHead",source:"@site/solutions/11.mdx",sourceDirName:".",slug:"/11",permalink:"/leetcode/solutions/11",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Two Pointers",permalink:"/leetcode/solutions/tags/two-pointers"},{label:"Greedy",permalink:"/leetcode/solutions/tags/greedy"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650483310,formattedLastUpdatedAt:"4/21/2022",frontMatter:{title:"11. Container With Most Water (Medium)",tags:["Array","Two Pointers","Greedy"]},sidebar:"solutions",previous:{title:"10. Regular Expression Matching (Hard)",permalink:"/leetcode/solutions/10"},next:{title:"15. 3Sum (Medium)",permalink:"/leetcode/solutions/15"}},d={},c=[],m={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{solutionType:"medium",labels:["Array","Two Pointers","Greedy"],companies:["Bloomberg"],url:"https://leetcode.com/problems/container-with-most-water/",mdxType:"SolutionDocHead"}),(0,i.kt)("p",null,"You are given an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," of length ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),". There are ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," vertical lines drawn such that the two endpoints of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ith")," line are ",(0,i.kt)("inlineCode",{parentName:"p"},"(i, 0)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"(i, height[i])"),"."),(0,i.kt)("p",null,"Find two lines that together with the x-axis form a container, such that the container contains the most water."),(0,i.kt)("p",null,"Return the maximum amount of water a container can store."),(0,i.kt)("b",null,"Notice")," that you may not slant the container.",(0,i.kt)("br",null),(0,i.kt)("b",null,"Example 1:"),(0,i.kt)("br",null),(0,i.kt)("img",{src:o,width:"483",height:"342"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: height = [1,8,6,2,5,4,8,3,7]\nOutput: 49\nExplanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.\n")),(0,i.kt)("b",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: height = [1,1]\nOutput: 1\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function maxArea(height: number[]): number {\n  let result = 0,\n    left = 0,\n    right = height.length - 1;\n  while (left < right) {\n    let smallestSide = Math.min(height[left], height[right]);\n    let area = (right - left) * smallestSide;\n    if (area > result) {\n      result = area;\n    }\n    if (height[left] < height[right]) {\n      left++;\n    } else {\n      right--;\n    }\n  }\n  return result;\n}\n")))}g.isMDXComponent=!0}}]);