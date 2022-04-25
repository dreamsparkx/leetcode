"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[8503],{7891:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return c}});var o=n(7462),s=n(3366),i=(n(7294),n(3905)),l=n.p+"assets/images/image-ab770aac1356b586b1c3ba3f32c46ccd.png",a=n(5714),r=["components"],d={title:"19. Remove Nth Node From End of List (Medium)",tags:["Linked List","Two Pointers"]},u=void 0,m={unversionedId:"19",id:"19",title:"19. Remove Nth Node From End of List (Medium)",description:"<SolutionDocHead",source:"@site/solutions/19.mdx",sourceDirName:".",slug:"/19",permalink:"/leetcode/solutions/19",tags:[{label:"Linked List",permalink:"/leetcode/solutions/tags/linked-list"},{label:"Two Pointers",permalink:"/leetcode/solutions/tags/two-pointers"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650484183,formattedLastUpdatedAt:"4/21/2022",frontMatter:{title:"19. Remove Nth Node From End of List (Medium)",tags:["Linked List","Two Pointers"]},sidebar:"solutions",previous:{title:"15. 3Sum (Medium)",permalink:"/leetcode/solutions/15"},next:{title:"21. Merge Two Sorted Lists (Easy)",permalink:"/leetcode/solutions/21"}},p={},c=[],f={toc:c};function k(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{solutionType:"medium",labels:["Linked List","Two Pointers"],url:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/",mdxType:"SolutionDocHead"}),(0,i.kt)("p",null,"Given the ",(0,i.kt)("inlineCode",{parentName:"p"},"head")," of a linked list, remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"nth")," node from the end of the list and return its head."),(0,i.kt)("b",null,"Example 1:"),(0,i.kt)("br",null),(0,i.kt)("img",{src:l,width:"483",height:"342"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: head = [1,2,3,4,5], n = 2\nOutput: [1,2,3,5]\n")),(0,i.kt)("b",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: head = [1], n = 1\nOutput: []\n")),(0,i.kt)("b",null,"Example 3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: head = [1,2], n = 1\nOutput: [1]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"class ListNode {\n  val: number;\n  next: ListNode | null;\n  constructor(val?: number, next?: ListNode | null) {\n    this.val = val === undefined ? 0 : val;\n    this.next = next === undefined ? null : next;\n  }\n}\n\nfunction removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {\n  let slow: ListNode = head,\n    fast: ListNode = head;\n  for (let i = 0; i < n; i++) {\n    fast = fast.next;\n  }\n  if (!fast) {\n    return head.next;\n  }\n  while (fast.next) {\n    fast = fast.next;\n    slow = slow.next;\n  }\n  slow.next = slow.next.next;\n  return head;\n}\n")))}k.isMDXComponent=!0}}]);