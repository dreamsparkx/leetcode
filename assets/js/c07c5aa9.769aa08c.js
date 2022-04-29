"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[1996],{6529:function(e,t,n){var r=n(7294),l=n(1285),a=(0,n(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));t.Z=function(e){var t=a(),n=e.labels;return r.createElement("div",{className:t.root},n.map((function(e,t){return r.createElement(l.Z,{label:e,key:t+"-"+e})})))}},5714:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),l={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},a=function(e){var t=e.type,n="";switch(t){case"medium":n="Medium";break;case"hard":n="Hard";break;default:n="Easy"}return r.createElement("span",{className:l[t]},n)},i=n(6529),o=function(e){var t=e.solutionType,n=e.labels,l=e.companies,o=e.url;return r.createElement(r.Fragment,null,r.createElement(a,{type:t}),r.createElement("br",null),r.createElement("br",null),r.createElement(i.Z,{labels:n}),r.createElement("br",null),l&&l.length>0&&r.createElement(r.Fragment,null,"Companies:",r.createElement(i.Z,{labels:l}),r.createElement("br",null)),"URL: ",r.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},o),r.createElement("br",null),r.createElement("br",null))}},422:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=n(5714),o=["components"],s={title:"658. Find K Closest Elements (Medium)",tags:["Array","Two Pointers","Binary Search","Sorting","Heap","Priority Queue","Medium","Google"]},u=void 0,m={unversionedId:"658",id:"658",title:"658. Find K Closest Elements (Medium)",description:"<SolutionDocHead",source:"@site/solutions/658.mdx",sourceDirName:".",slug:"/658",permalink:"/leetcode/solutions/658",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Two Pointers",permalink:"/leetcode/solutions/tags/two-pointers"},{label:"Binary Search",permalink:"/leetcode/solutions/tags/binary-search"},{label:"Sorting",permalink:"/leetcode/solutions/tags/sorting"},{label:"Heap",permalink:"/leetcode/solutions/tags/heap"},{label:"Priority Queue",permalink:"/leetcode/solutions/tags/priority-queue"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"},{label:"Google",permalink:"/leetcode/solutions/tags/google"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651240850,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"658. Find K Closest Elements (Medium)",tags:["Array","Two Pointers","Binary Search","Sorting","Heap","Priority Queue","Medium","Google"]},sidebar:"solutions",previous:{title:"560. Subarray Sum Equals K (Medium)",permalink:"/leetcode/solutions/560"},next:{title:"702. Search in a Sorted Array of Unknown Size (Medium)",permalink:"/leetcode/solutions/702"}},p={},d=[],c={toc:d};function k(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{solutionType:"medium",labels:["Array","Two Pointers","Binary Search","Sorting","Heap","Priority Queue"],companies:["Google"],url:"https://leetcode.com/problems/find-k-closest-elements/",mdxType:"SolutionDocHead"}),(0,a.kt)("p",null,"Given a ",(0,a.kt)("b",null,"sorted")," integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"arr"),", two integers ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),", return the ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," closest integers to ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," in the array. The result should also be sorted in ascending order."),(0,a.kt)("p",null,"An integer ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," is closer to x than an integer ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"|a - x| < |b - x|"),", or"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"|a - x| == |b - x|")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"a < b"))),(0,a.kt)("b",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: arr = [1,2,3,4,5], k = 4, x = 3\nOutput: [1,2,3,4]\n")),(0,a.kt)("b",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: arr = [1,2,3,4,5], k = 4, x = -1\nOutput: [1,2,3,4]\n")),(0,a.kt)("b",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= k <= arr.length")),(0,a.kt)("li",{parentName:"ul"},"1 <= arr.length <= 10",(0,a.kt)("sup",null,"4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arr")," is sorted in ",(0,a.kt)("b",null,"ascending")," order."),(0,a.kt)("li",{parentName:"ul"},"-10",(0,a.kt)("sup",null,"4")," <= arr","[i]",", x <= 10",(0,a.kt)("sup",null,"4"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function findClosestElements(arr: number[], k: number, x: number): number[] {\n  let lo = 0,\n    hi = arr.length - 1;\n  while (lo < hi) {\n    const mid = parseInt(`${(lo + hi) / 2}`);\n    x - arr[mid] > arr[mid + k] - x ? (lo = mid + 1) : (hi = mid);\n  }\n  return arr.slice(lo, lo + k);\n}\n")))}k.isMDXComponent=!0}}]);