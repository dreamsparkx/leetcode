"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[2957],{6100:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var o=n(7462),s=n(3366),a=(n(7294),n(3905)),r=n(5714),i=["components"],l={title:"253. Meeting Rooms II (Medium)",tags:["Heap","Greedy","Medium","Google","Facebook","Uber"]},u=void 0,d={unversionedId:"253",id:"253",title:"253. Meeting Rooms II (Medium)",description:"<SolutionDocHead",source:"@site/solutions/253.mdx",sourceDirName:".",slug:"/253",permalink:"/leetcode/solutions/253",tags:[{label:"Heap",permalink:"/leetcode/solutions/tags/heap"},{label:"Greedy",permalink:"/leetcode/solutions/tags/greedy"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"},{label:"Google",permalink:"/leetcode/solutions/tags/google"},{label:"Facebook",permalink:"/leetcode/solutions/tags/facebook"},{label:"Uber",permalink:"/leetcode/solutions/tags/uber"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651240850,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"253. Meeting Rooms II (Medium)",tags:["Heap","Greedy","Medium","Google","Facebook","Uber"]},sidebar:"solutions",previous:{title:"242. Valid Anagram (Easy)",permalink:"/leetcode/solutions/242"},next:{title:"270. Closest Binary Search Tree Value (Medium)",permalink:"/leetcode/solutions/270"}},m={},p=[],c={toc:p};function g(e){var t=e.components,n=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{solutionType:"medium",labels:["Heap","Greedy"],companies:["Google","Facebook","Uber"],url:"https://leetcode.com/problems/meeting-rooms-ii/",mdxType:"SolutionDocHead"}),(0,a.kt)("p",null,"Given an array of meeting time intervals consisting of start and end times ",(0,a.kt)("inlineCode",{parentName:"p"},"[[s1,e1],[s2,e2],...] (si < ei)"),", find the minimum number of conference rooms required.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: intervals = [(0,30),(5,10),(15,20)]\nOutput: 2\nExplanation:\nWe need two meeting rooms\nroom1: (0,30)\nroom2: (5,10),(15,20)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: intervals = [(2,7)]\nOutput: 1\nExplanation:\nOnly need one meeting room\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function minMeetingRooms(intervals: number[][]): number {\n  let n = intervals.length;\n  let ans = 0,\n    j = 0,\n    starts = [],\n    ends = [];\n  for (const [start, end] of intervals) {\n    starts.push(start);\n    ends.push(end);\n  }\n  starts.sort();\n  ends.sort();\n  for (let i = 0; i < n; i++) {\n    if (starts[i] < ends[j]) {\n      ans += 1;\n    } else {\n      j += 1;\n    }\n  }\n  return ans;\n}\n")))}g.isMDXComponent=!0}}]);