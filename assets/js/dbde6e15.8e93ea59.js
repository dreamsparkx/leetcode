"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[7192],{6529:function(e,t,n){var l=n(7294),r=n(1285),a=(0,n(1120).Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));t.Z=function(e){var t=a(),n=e.labels;return l.createElement("div",{className:t.root},n.map((function(e,t){return l.createElement(r.Z,{label:e,key:t+"-"+e})})))}},5714:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),r={medium:"medium_AtL5",easy:"easy_Arst",hard:"hard_vnPO"},a=function(e){var t=e.type,n="";switch(t){case"medium":n="Medium";break;case"hard":n="Hard";break;default:n="Easy"}return l.createElement("span",{className:r[t]},n)},u=n(6529),i=function(e){var t=e.solutionType,n=e.labels,r=e.companies,i=e.url;return l.createElement(l.Fragment,null,l.createElement(a,{type:t}),l.createElement("br",null),l.createElement("br",null),l.createElement(u.Z,{labels:n}),l.createElement("br",null),r&&r.length>0&&l.createElement(l.Fragment,null,"Companies:",l.createElement(u.Z,{labels:r}),l.createElement("br",null)),"URL: ",l.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},i),l.createElement("br",null),l.createElement("br",null))}},6477:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var l=n(7462),r=n(3366),a=(n(7294),n(3905)),u=n.p+"assets/images/image-fb251b72bbb9fa9abfd437c124375e18.png",i=n(5714),s=["components"],o={title:"2. Add Two Numbers (Medium)",tags:["Linked List","Math","Recursion"]},d=void 0,c={unversionedId:"2",id:"2",title:"2. Add Two Numbers (Medium)",description:"<SolutionDocHead",source:"@site/solutions/2.mdx",sourceDirName:".",slug:"/2",permalink:"/leetcode/solutions/2",tags:[{label:"Linked List",permalink:"/leetcode/solutions/tags/linked-list"},{label:"Math",permalink:"/leetcode/solutions/tags/math"},{label:"Recursion",permalink:"/leetcode/solutions/tags/recursion"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650483089,formattedLastUpdatedAt:"4/21/2022",frontMatter:{title:"2. Add Two Numbers (Medium)",tags:["Linked List","Math","Recursion"]},sidebar:"solutions",previous:{title:"1. Two Sum (Easy)",permalink:"/leetcode/solutions/1"},next:{title:"3. Longest Substring Without Repeating Characters (Medium)",permalink:"/leetcode/solutions/3"}},m={},p=[],b={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,l.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{solutionType:"medium",labels:["Linked List","Math","Recursion"],url:"https://leetcode.com/problems/add-two-numbers/",mdxType:"SolutionDocHead"}),(0,a.kt)("p",null,"You are given two ",(0,a.kt)("b",null,"non-empty")," linked lists representing two non-negative integers. The digits are stored in ",(0,a.kt)("b",null,"reverse order"),", and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list."),(0,a.kt)("p",null,"You may assume the two numbers do not contain any leading zero, except the number 0 itself."),(0,a.kt)("b",null,"Example 1:"),(0,a.kt)("br",null),(0,a.kt)("img",{src:u,width:"483",height:"342"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: l1 = [2,4,3], l2 = [5,6,4]\nOutput: [7,0,8]\nExplanation: 342 + 465 = 807.\n")),(0,a.kt)("b",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: l1 = [0], l2 = [0]\nOutput: [0]\n")),(0,a.kt)("b",null,"Example 3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\nOutput: [8,9,9,9,0,0,0,1]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function addTwoNumbers(\n  l1: ListNode | null,\n  l2: ListNode | null\n): ListNode | null {\n  let dummyHead = new ListNode(0);\n  let p = l1;\n  let q = l2;\n  let curr = dummyHead;\n  let carry = 0;\n  while (p != null || q !== null) {\n    let x = p != null ? p.val : 0;\n    let y = q != null ? q.val : 0;\n    let sum = carry + x + y;\n    carry = sum / 10;\n    curr.next = new ListNode(sum % 10);\n    curr = curr.next;\n    if (p != null) {\n      p = p.next;\n    }\n    if (q != null) {\n      q = q.next;\n    }\n  }\n  if (carry > 0) {\n    curr.next = new ListNode(carry);\n  }\n  return dummyHead.next;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=solution.java",title:"solution.java"},"public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n    ListNode dummyHead = new ListNode(0);\n    ListNode p = l1, q = l2, curr = dummyHead;\n    int carry = 0;\n    while (p != null || q != null) {\n        int x = (p != null) ? p.val : 0;\n        int y = (q != null) ? q.val : 0;\n        int sum = carry + x + y;\n        carry = sum / 10;\n        curr.next = new ListNode(sum % 10);\n        curr = curr.next;\n        if (p != null) p = p.next;\n        if (q != null) q = q.next;\n    }\n    if (carry > 0) {\n        curr.next = new ListNode(carry);\n    }\n    return dummyHead.next;\n}\n")))}k.isMDXComponent=!0}}]);