"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[7192],{6529:function(e,n,t){var l=t(7294),r=t(1285),a=(0,t(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));n.Z=function(e){var n=a(),t=e.labels;return l.createElement("div",{className:n.root},t.map((function(e,n){return l.createElement(r.Z,{label:e,key:n+"-"+e})})))}},5714:function(e,n,t){t.d(n,{Z:function(){return s}});var l=t(7294),r={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},a=function(e){var n=e.type,t="";switch(n){case"medium":t="Medium";break;case"hard":t="Hard";break;default:t="Easy"}return l.createElement("span",{className:r[n]},t)},u=t(6529),s=function(e){var n=e.solutionType,t=e.labels,r=e.companies,s=e.url;return l.createElement(l.Fragment,null,l.createElement(a,{type:n}),l.createElement("br",null),l.createElement("br",null),l.createElement(u.Z,{labels:t}),l.createElement("br",null),r&&r.length>0&&l.createElement(l.Fragment,null,"Companies:",l.createElement(u.Z,{labels:r}),l.createElement("br",null)),"URL: ",l.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},s),l.createElement("br",null),l.createElement("br",null))}},6477:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return p}});var l=t(7462),r=t(3366),a=(t(7294),t(3905)),u=t.p+"assets/images/image-fb251b72bbb9fa9abfd437c124375e18.png",s=t(5714),i=["components"],o={title:"2. Add Two Numbers (Medium)",tags:["Linked List","Math","Recursion","Medium"]},d=void 0,m={unversionedId:"2",id:"2",title:"2. Add Two Numbers (Medium)",description:"<SolutionDocHead",source:"@site/solutions/2.mdx",sourceDirName:".",slug:"/2",permalink:"/leetcode/solutions/2",tags:[{label:"Linked List",permalink:"/leetcode/solutions/tags/linked-list"},{label:"Math",permalink:"/leetcode/solutions/tags/math"},{label:"Recursion",permalink:"/leetcode/solutions/tags/recursion"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650915156,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"2. Add Two Numbers (Medium)",tags:["Linked List","Math","Recursion","Medium"]},sidebar:"solutions",previous:{title:"1. Two Sum (Easy)",permalink:"/leetcode/solutions/1"},next:{title:"3. Longest Substring Without Repeating Characters (Medium)",permalink:"/leetcode/solutions/3"}},c={},p=[],b={toc:p};function k(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{solutionType:"medium",labels:["Linked List","Math","Recursion"],url:"https://leetcode.com/problems/add-two-numbers/",mdxType:"SolutionDocHead"}),(0,a.kt)("p",null,"You are given two ",(0,a.kt)("b",null,"non-empty")," linked lists representing two non-negative integers. The digits are stored in ",(0,a.kt)("b",null,"reverse order"),", and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list."),(0,a.kt)("p",null,"You may assume the two numbers do not contain any leading zero, except the number 0 itself."),(0,a.kt)("b",null,"Example 1:"),(0,a.kt)("br",null),(0,a.kt)("img",{src:u,width:"483",height:"342"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: l1 = [2,4,3], l2 = [5,6,4]\nOutput: [7,0,8]\nExplanation: 342 + 465 = 807.\n")),(0,a.kt)("b",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: l1 = [0], l2 = [0]\nOutput: [0]\n")),(0,a.kt)("b",null,"Example 3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\nOutput: [8,9,9,9,0,0,0,1]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=ListNode.ts",title:"ListNode.ts"},"class ListNode {\n  val: number;\n  next: ListNode | null;\n  constructor(val?: number, next?: ListNode | null) {\n    this.val = val === undefined ? 0 : val;\n    this.next = next === undefined ? null : next;\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function addTwoNumbers(\n  l1: ListNode | null,\n  l2: ListNode | null\n): ListNode | null {\n  const list = new ListNode(0);\n  let head = list;\n  let sum = 0;\n  let carry = 0;\n  while (l1 !== null || l2 !== null || sum > 0) {\n    if (l1 !== null) {\n      sum = sum + l1.val;\n      l1 = l1.next;\n    }\n    if (l2 !== null) {\n      sum = sum + l2.val;\n      l2 = l2.next;\n    }\n    if (sum >= 10) {\n      carry = 1;\n      sum = sum - 10;\n    }\n\n    head.next = new ListNode(sum);\n    head = head.next;\n\n    sum = carry;\n    carry = 0;\n  }\n\n  return list.next;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=solution.java",title:"solution.java"},"public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n    ListNode dummyHead = new ListNode(0);\n    ListNode p = l1, q = l2, curr = dummyHead;\n    int carry = 0;\n    while (p != null || q != null) {\n        int x = (p != null) ? p.val : 0;\n        int y = (q != null) ? q.val : 0;\n        int sum = carry + x + y;\n        carry = sum / 10;\n        curr.next = new ListNode(sum % 10);\n        curr = curr.next;\n        if (p != null) p = p.next;\n        if (q != null) q = q.next;\n    }\n    if (carry > 0) {\n        curr.next = new ListNode(carry);\n    }\n    return dummyHead.next;\n}\n")))}k.isMDXComponent=!0}}]);