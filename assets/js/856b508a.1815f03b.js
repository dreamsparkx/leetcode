"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[3553],{6529:function(e,t,n){var l=n(7294),s=n(1285),r=(0,n(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));t.Z=function(e){var t=r(),n=e.labels;return l.createElement("div",{className:t.root},n.map((function(e,t){return l.createElement(s.Z,{label:e,key:t+"-"+e})})))}},5714:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),s={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},r=function(e){var t=e.type,n="";switch(t){case"medium":n="Medium";break;case"hard":n="Hard";break;default:n="Easy"}return l.createElement("span",{className:s[t]},n)},a=n(6529),i=function(e){var t=e.solutionType,n=e.labels,s=e.companies,i=e.url;return l.createElement(l.Fragment,null,l.createElement(r,{type:t}),l.createElement("br",null),l.createElement("br",null),l.createElement(a.Z,{labels:n}),l.createElement("br",null),s&&s.length>0&&l.createElement(l.Fragment,null,"Companies:",l.createElement(a.Z,{labels:s}),l.createElement("br",null)),"URL: ",l.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},i),l.createElement("br",null),l.createElement("br",null))}},8117:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var l=n(7462),s=n(3366),r=(n(7294),n(3905)),a=n.p+"assets/images/image-e52e16c14816c11a778cba91a6ed80d7.png",i=n(5714),o=["components"],u={title:"21. Merge Two Sorted Lists (Easy)",tags:["Linked List","Recursion","Easy"]},d=void 0,c={unversionedId:"21",id:"21",title:"21. Merge Two Sorted Lists (Easy)",description:"<SolutionDocHead",source:"@site/solutions/21.mdx",sourceDirName:".",slug:"/21",permalink:"/leetcode/solutions/21",tags:[{label:"Linked List",permalink:"/leetcode/solutions/tags/linked-list"},{label:"Recursion",permalink:"/leetcode/solutions/tags/recursion"},{label:"Easy",permalink:"/leetcode/solutions/tags/easy"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650915156,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"21. Merge Two Sorted Lists (Easy)",tags:["Linked List","Recursion","Easy"]},sidebar:"solutions",previous:{title:"20. Valid Parentheses (Easy)",permalink:"/leetcode/solutions/20"},next:{title:"22. Generate Parentheses (Medium)",permalink:"/leetcode/solutions/22"}},m={},p=[],k={toc:p};function f(e){var t=e.components,n=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{solutionType:"easy",labels:["Linked List","Recursion"],url:"https://leetcode.com/problems/merge-two-sorted-lists/",mdxType:"SolutionDocHead"}),(0,r.kt)("p",null,"You are given the heads of two sorted linked lists ",(0,r.kt)("inlineCode",{parentName:"p"},"list1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"list2"),"."),(0,r.kt)("p",null,"Merge the two lists in a one ",(0,r.kt)("b",null,"sorted")," list. The list should be made by splicing together the nodes of the first two lists."),(0,r.kt)("p",null,"Return the head of the merged linked list."),(0,r.kt)("b",null,"Example 1:"),(0,r.kt)("br",null),(0,r.kt)("img",{src:a,width:"483",height:"342"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: list1 = [1,2,4], list2 = [1,3,4]\nOutput: [1,1,2,3,4,4]\n")),(0,r.kt)("b",null,"Example 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: list1 = [], list2 = []\nOutput: []\n")),(0,r.kt)("b",null,"Example 3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: list1 = [], list2 = [0]\nOutput: [0]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"class ListNode {\n  val: number;\n  next: ListNode | null;\n  constructor(val?: number, next?: ListNode | null) {\n    this.val = val === undefined ? 0 : val;\n    this.next = next === undefined ? null : next;\n  }\n}\n\nfunction mergeTwoLists(\n  list1: ListNode | null,\n  list2: ListNode | null\n): ListNode | null {\n  let node: ListNode = new ListNode();\n  let head: ListNode = node;\n  while (list1 !== null && list2 !== null) {\n    if (list1.val < list2.val) {\n      node.next = list1;\n      list1 = list1.next;\n    } else {\n      node.next = list2;\n      list2 = list2.next;\n    }\n    node = node.next;\n  }\n  if (list1 !== null) {\n    node.next = list1;\n  } else {\n    node.next = list2;\n  }\n  return head.next;\n}\n")))}f.isMDXComponent=!0}}]);