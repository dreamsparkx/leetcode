"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[4939],{5925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=n.p+"assets/images/image-4c16711827e28a372d89171facdd53ff.png",i=n(5714),s=["components"],u={title:"104. Maximum Depth of Binary Tree (Easy)",tags:["Tree","Depth First Search","Breadth First Search","Binary Tree","Easy"]},d=void 0,p={unversionedId:"104",id:"104",title:"104. Maximum Depth of Binary Tree (Easy)",description:"<SolutionDocHead",source:"@site/solutions/104.mdx",sourceDirName:".",slug:"/104",permalink:"/leetcode/solutions/104",tags:[{label:"Tree",permalink:"/leetcode/solutions/tags/tree"},{label:"Depth First Search",permalink:"/leetcode/solutions/tags/depth-first-search"},{label:"Breadth First Search",permalink:"/leetcode/solutions/tags/breadth-first-search"},{label:"Binary Tree",permalink:"/leetcode/solutions/tags/binary-tree"},{label:"Easy",permalink:"/leetcode/solutions/tags/easy"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651587714,formattedLastUpdatedAt:"5/3/2022",frontMatter:{title:"104. Maximum Depth of Binary Tree (Easy)",tags:["Tree","Depth First Search","Breadth First Search","Binary Tree","Easy"]},sidebar:"solutions",previous:{title:"69. Sqrt(x) (Easy)",permalink:"/leetcode/solutions/69"},next:{title:"122. Best Time to Buy and Sell Stock II (Medium)",permalink:"/leetcode/solutions/122"}},m={},c=[],h={toc:c};function f(e){var t=e.components,n=(0,l.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{solutionType:"easy",labels:["Tree","Depth First Search","Breadth First Search","Binary Tree"],url:"https://leetcode.com/problems/maximum-depth-of-binary-tree/",mdxType:"SolutionDocHead"}),(0,a.kt)("p",null,"Given the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, return its maximum depth."),(0,a.kt)("p",null,"A binary tree's ",(0,a.kt)("b",null,"maximum depth")," is the number of nodes along the longest path from the root node down to the farthest leaf node."),(0,a.kt)("b",null,"Example 1:"),(0,a.kt)("br",null),(0,a.kt)("img",{src:o,width:"483",height:"342"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [3,9,20,null,null,15,7]\nOutput: 3\n")),(0,a.kt)("b",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1,null,2]\nOutput: 2\n")),(0,a.kt)("b",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ","[0, 10",(0,a.kt)("sup",null,"4"),"]","."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=TreeNode.ts",title:"TreeNode.ts"},"class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {\n    this.val = val === undefined ? 0 : val;\n    this.left = left === undefined ? null : left;\n    this.right = right === undefined ? null : right;\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function maxDepth(root: TreeNode | null): number {\n  if (root === undefined || root === null) {\n    return 0;\n  }\n  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;\n}\n")))}f.isMDXComponent=!0}}]);