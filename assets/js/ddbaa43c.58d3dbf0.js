"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[2957],{6529:function(e,t,n){var r=n(7294),a=n(1285),o=(0,n(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));t.Z=function(e){var t=o(),n=e.labels;return r.createElement("div",{className:t.root},n.map((function(e,t){return r.createElement(a.Z,{label:e,key:t+"-"+e})})))}},5714:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},o=function(e){var t=e.type,n="";switch(t){case"medium":n="Medium";break;case"hard":n="Hard";break;default:n="Easy"}return r.createElement("span",{className:a[t]},n)},l=n(6529),s=function(e){var t=e.solutionType,n=e.labels,a=e.companies,s=e.url;return r.createElement(r.Fragment,null,r.createElement(o,{type:t}),r.createElement("br",null),r.createElement("br",null),r.createElement(l.Z,{labels:n}),r.createElement("br",null),a&&a.length>0&&r.createElement(r.Fragment,null,"Companies:",r.createElement(l.Z,{labels:a}),r.createElement("br",null)),"URL: ",r.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},s),r.createElement("br",null),r.createElement("br",null))}},6100:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5714),s=["components"],i={title:"253. Meeting Rooms II (Medium)",tags:["Heap","Greedy","Medium","Google","Facebook","Uber"]},u=void 0,m={unversionedId:"253",id:"253",title:"253. Meeting Rooms II (Medium)",description:"<SolutionDocHead",source:"@site/solutions/253.mdx",sourceDirName:".",slug:"/253",permalink:"/leetcode/solutions/253",tags:[{label:"Heap",permalink:"/leetcode/solutions/tags/heap"},{label:"Greedy",permalink:"/leetcode/solutions/tags/greedy"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"},{label:"Google",permalink:"/leetcode/solutions/tags/google"},{label:"Facebook",permalink:"/leetcode/solutions/tags/facebook"},{label:"Uber",permalink:"/leetcode/solutions/tags/uber"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651240850,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"253. Meeting Rooms II (Medium)",tags:["Heap","Greedy","Medium","Google","Facebook","Uber"]},sidebar:"solutions",previous:{title:"242. Valid Anagram (Easy)",permalink:"/leetcode/solutions/242"},next:{title:"270. Closest Binary Search Tree Value (Medium)",permalink:"/leetcode/solutions/270"}},c={},d=[],p={toc:d};function b(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{solutionType:"medium",labels:["Heap","Greedy"],companies:["Google","Facebook","Uber"],url:"https://leetcode.com/problems/meeting-rooms-ii/",mdxType:"SolutionDocHead"}),(0,o.kt)("p",null,"Given an array of meeting time intervals consisting of start and end times ",(0,o.kt)("inlineCode",{parentName:"p"},"[[s1,e1],[s2,e2],...] (si < ei)"),", find the minimum number of conference rooms required.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: intervals = [(0,30),(5,10),(15,20)]\nOutput: 2\nExplanation:\nWe need two meeting rooms\nroom1: (0,30)\nroom2: (5,10),(15,20)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: intervals = [(2,7)]\nOutput: 1\nExplanation:\nOnly need one meeting room\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function minMeetingRooms(intervals: number[][]): number {\n  let n = intervals.length;\n  let ans = 0,\n    j = 0,\n    starts = [],\n    ends = [];\n  for (const [start, end] of intervals) {\n    starts.push(start);\n    ends.push(end);\n  }\n  starts.sort();\n  ends.sort();\n  for (let i = 0; i < n; i++) {\n    if (starts[i] < ends[j]) {\n      ans += 1;\n    } else {\n      j += 1;\n    }\n  }\n  return ans;\n}\n")))}b.isMDXComponent=!0}}]);