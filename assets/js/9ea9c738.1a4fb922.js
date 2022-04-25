"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[4770],{6529:function(e,t,n){var r=n(7294),a=n(1285),o=(0,n(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));t.Z=function(e){var t=o(),n=e.labels;return r.createElement("div",{className:t.root},n.map((function(e,t){return r.createElement(a.Z,{label:e,key:t+"-"+e})})))}},5714:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},o=function(e){var t=e.type,n="";switch(t){case"medium":n="Medium";break;case"hard":n="Hard";break;default:n="Easy"}return r.createElement("span",{className:a[t]},n)},l=n(6529),s=function(e){var t=e.solutionType,n=e.labels,a=e.companies,s=e.url;return r.createElement(r.Fragment,null,r.createElement(o,{type:t}),r.createElement("br",null),r.createElement("br",null),r.createElement(l.Z,{labels:n}),r.createElement("br",null),a&&a.length>0&&r.createElement(r.Fragment,null,"Companies:",r.createElement(l.Z,{labels:a}),r.createElement("br",null)),"URL: ",r.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},s),r.createElement("br",null),r.createElement("br",null))}},3722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5714),s=["components"],i={title:"15. 3Sum (Medium)",tags:["Array","Two Pointers","Sorting"]},u=void 0,m={unversionedId:"15",id:"15",title:"15. 3Sum (Medium)",description:"<SolutionDocHead",source:"@site/solutions/15.mdx",sourceDirName:".",slug:"/15",permalink:"/leetcode/solutions/15",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Two Pointers",permalink:"/leetcode/solutions/tags/two-pointers"},{label:"Sorting",permalink:"/leetcode/solutions/tags/sorting"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650482437,formattedLastUpdatedAt:"4/21/2022",frontMatter:{title:"15. 3Sum (Medium)",tags:["Array","Two Pointers","Sorting"]},sidebar:"solutions",previous:{title:"11. Container With Most Water (Medium)",permalink:"/leetcode/solutions/11"},next:{title:"18. 4Sum (Medium)",permalink:"/leetcode/solutions/18"}},c={},d=[],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{solutionType:"medium",labels:["Array","Two Pointers","Sorting"],url:"https://leetcode.com/problems/3sum/",mdxType:"SolutionDocHead"}),(0,o.kt)("p",null,"Given an integer array nums, return all the triplets ",(0,o.kt)("inlineCode",{parentName:"p"},"[nums[i], nums[j], nums[k]]")," such that ",(0,o.kt)("inlineCode",{parentName:"p"},"i != j"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"i != k"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"j != k"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"nums[i] + nums[j] + nums[k] == 0"),"."),(0,o.kt)("p",null,"Notice that the solution set must not contain duplicate triplets."),(0,o.kt)("b",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [-1,0,1,2,-1,-4]\nOutput: [[-1,-1,2],[-1,0,1]]\n")),(0,o.kt)("b",null,"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = []\nOutput: []\n")),(0,o.kt)("b",null,"Example 3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [0]\nOutput: []\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function threeSum(nums: number[]): number[][] {\n  const results = [];\n\n  // obviously irrelevant if we don't have at least 3 numbers to play with!\n  if (nums.length < 3) return results;\n\n  // having the numbers in ascending order will make this problem much easier.\n  // also, knowing the overall problem  will take at least O(N^2) time, we can\n  // afford the O(NlogN) sort operation\n  nums = nums.sort((a, b) => a - b);\n\n  // if the question asks us for a custom target, we can control it here\n  let target = 0;\n\n  for (let i = 0; i < nums.length - 2; i++) {\n    // `i` represents the \"left\" most number in our sorted set.\n    // once this number hits 0, there's no need to go further since\n    // positive numbers cannot sum to a negative number\n    if (nums[i] > target) break;\n\n    // we don't want repeats, so skip numbers we've already seen\n    if (i > 0 && nums[i] === nums[i - 1]) continue;\n\n    // `j` represents the \"middle\" element between `i` and `k`.\n    // we will increment this up through the array while `i` and `k`\n    // are anchored to their positions. we will decrement `k` for\n    // for each pass through the array, and finally increment `i`\n    // once `j` and `k` meet.\n    let j = i + 1;\n\n    // `k` represents the \"right\" most element\n    let k = nums.length - 1;\n\n    // to summarize our setup, we have `i` that starts at the beginning,\n    // `k` that starts at the end, and `j` that races in between the two.\n    //\n    // note that `i` is controlled by our outer for-loop and will move the slowest.\n    // in the meantime, `j` and `k` will take turns inching towards each other depending\n    // on some logic we'll set up below. once they collide, `i` will be incremented up\n    // and we'll repeat the process.\n\n    while (j < k) {\n      let sum = nums[i] + nums[j] + nums[k];\n\n      // if we find the target sum, increment `j` and decrement `k` for\n      // other potential combos where `i` is the anchor\n      if (sum === target) {\n        // store the valid threesum\n        results.push([nums[i], nums[j], nums[k]]);\n\n        // this is important! we need to continue to increment `j` and decrement `k`\n        // as long as those values are duplicated. in other words, we wanna skip values\n        // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in\n        // [[-2,0,2], [-2,0,2]].\n        //\n        // (i'm not a fan of this part because we're doing a while loop as we're\n        // already inside of another while loop...)\n        while (nums[j] === nums[j + 1]) j++;\n        while (nums[k] === nums[k - 1]) k--;\n\n        // finally, we need to actually move `j` forward and `k` backward to the\n        // next unique elements. the previous while loops will not handle this.\n        j++;\n        k--;\n\n        // if the sum is too small, increment `j` to get closer to the target\n      } else if (sum < target) {\n        j++;\n\n        // if the sum is too large, decrement `k` to get closer to the target\n      } else {\n        // (sum > target)\n        k--;\n      }\n    }\n  }\n\n  return results;\n}\n")))}h.isMDXComponent=!0}}]);