"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[2323],{5554:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),s=t(5714),i=["components"],l={title:"22. Generate Parentheses (Medium)",tags:["String","Dynamic Programming","Backtracking","Medium","Uber","Google"]},u=void 0,c={unversionedId:"22",id:"22",title:"22. Generate Parentheses (Medium)",description:"<SolutionDocHead",source:"@site/solutions/22.mdx",sourceDirName:".",slug:"/22",permalink:"/leetcode/solutions/22",tags:[{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Dynamic Programming",permalink:"/leetcode/solutions/tags/dynamic-programming"},{label:"Backtracking",permalink:"/leetcode/solutions/tags/backtracking"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"},{label:"Uber",permalink:"/leetcode/solutions/tags/uber"},{label:"Google",permalink:"/leetcode/solutions/tags/google"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651240850,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"22. Generate Parentheses (Medium)",tags:["String","Dynamic Programming","Backtracking","Medium","Uber","Google"]},sidebar:"solutions",previous:{title:"21. Merge Two Sorted Lists (Easy)",permalink:"/leetcode/solutions/21"},next:{title:"26. Remove Duplicates from Sorted Array (Easy)",permalink:"/leetcode/solutions/26"}},p={},m=[],d={toc:m};function g(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{solutionType:"medium",labels:["String","Dynamic Programming","Backtracking","Medium"],companies:["Uber","Google"],url:"https://leetcode.com/problems/generate-parentheses/",mdxType:"SolutionDocHead"}),(0,a.kt)("p",null,"Given ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," pairs of parentheses, write a function to generate all combinations of well-formed parentheses."),(0,a.kt)("b",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: n = 3\nOutput: ["((()))","(()())","(())()","()(())","()()()"]\n')),(0,a.kt)("b",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: n = 1\nOutput: ["()"]\n')),(0,a.kt)("b",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 8"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},'function generateParenthesis(n: number): string[] {\n  const output: string[] = [];\n  const dfs = (str: string, open: number, close: number) => {\n    // Close parenthesis can not be more than open parenthesis at any given time to stay valid\n    if (open > close) {\n      return;\n    }\n    // Base case. We now have n pairs of parenthesis\n    if (open == 0 && close === 0) {\n      output.push(str);\n      return;\n    }\n    // Insert open parenthesis and search for the next valid insertion.\n    if (open > 0) {\n      dfs(`${str}(`, open - 1, close);\n    }\n    // Insert close parenthesis and search for the next valid insertion.\n    if (close > 0) {\n      dfs(`${str})`, open, close - 1);\n    }\n  };\n  dfs("", n, n);\n  return output;\n}\n')))}g.isMDXComponent=!0}}]);