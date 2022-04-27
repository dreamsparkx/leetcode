"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[4645],{3966:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var o=n(7462),l=n(3366),a=(n(7294),n(3905)),i=n(5714),r=["components"],u={title:"36. Valid Sudoku (Medium)",tags:["Array","Hash Table","Matrix","Medium"]},s=void 0,d={unversionedId:"36",id:"36",title:"36. Valid Sudoku (Medium)",description:"<SolutionDocHead",source:"@site/solutions/36.mdx",sourceDirName:".",slug:"/36",permalink:"/leetcode/solutions/36",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Hash Table",permalink:"/leetcode/solutions/tags/hash-table"},{label:"Matrix",permalink:"/leetcode/solutions/tags/matrix"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650996235,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"36. Valid Sudoku (Medium)",tags:["Array","Hash Table","Matrix","Medium"]},sidebar:"solutions",previous:{title:"35. Search Insert Position (Easy)",permalink:"/leetcode/solutions/35"},next:{title:"37. Sudoku Solver (Hard)",permalink:"/leetcode/solutions/37"}},c={},p=[],m={toc:p};function b(e){var t=e.components,n=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{solutionType:"medium",labels:["Array","Hash Table","Matrix"],companies:["Apple","Snapchat","Google"],url:"https://leetcode.com/problems/valid-sudoku/",mdxType:"SolutionDocHead"}),(0,a.kt)("p",null,"Determine if a ",(0,a.kt)("inlineCode",{parentName:"p"},"9 x 9")," Sudoku board is valid. Only the filled cells need to be validated ",(0,a.kt)("b",null,"according to the following rules"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Each row must contain the digits ",(0,a.kt)("inlineCode",{parentName:"li"},"1-9")," without repetition."),(0,a.kt)("li",{parentName:"ol"},"Each column must contain the digits ",(0,a.kt)("inlineCode",{parentName:"li"},"1-9")," without repetition."),(0,a.kt)("li",{parentName:"ol"},"Each of the nine ",(0,a.kt)("inlineCode",{parentName:"li"},"3 x 3")," sub-boxes of the grid must contain the digits ",(0,a.kt)("inlineCode",{parentName:"li"},"1-9")," without repetition.")),(0,a.kt)("b",null,"Note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Sudoku board (partially filled) could be valid but is not necessarily solvable."),(0,a.kt)("li",{parentName:"ul"},"Only the filled cells need to be validated according to the mentioned rules.")),(0,a.kt)("b",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: board =\n[["5","3",".",".","7",".",".",".","."]\n,["6",".",".","1","9","5",".",".","."]\n,[".","9","8",".",".",".",".","6","."]\n,["8",".",".",".","6",".",".",".","3"]\n,["4",".",".","8",".","3",".",".","1"]\n,["7",".",".",".","2",".",".",".","6"]\n,[".","6",".",".",".",".","2","8","."]\n,[".",".",".","4","1","9",".",".","5"]\n,[".",".",".",".","8",".",".","7","9"]]\nOutput: true\n')),(0,a.kt)("b",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: board =\n[["8","3",".",".","7",".",".",".","."]\n,["6",".",".","1","9","5",".",".","."]\n,[".","9","8",".",".",".",".","6","."]\n,["8",".",".",".","6",".",".",".","3"]\n,["4",".",".","8",".","3",".",".","1"]\n,["7",".",".",".","2",".",".",".","6"]\n,[".","6",".",".",".",".","2","8","."]\n,[".",".",".","4","1","9",".",".","5"]\n,[".",".",".",".","8",".",".","7","9"]]\nOutput: false\nExplanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8\'s in the top left 3x3 sub-box, it is invalid.\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},'function isValidSudoku(board: string[][]): boolean {\n  for (let i = 0; i < 9; i++) {\n    let row = new Set(),\n      col = new Set(),\n      box = new Set();\n    for (let j = 0; j < 9; j++) {\n      let _row = board[i][j];\n      let _col = board[j][i];\n      let _box =\n        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];\n      if (_row !== ".") {\n        if (row.has(_row)) {\n          return false;\n        }\n        row.add(_row);\n      }\n      if (_col !== ".") {\n        if (col.has(_col)) {\n          return false;\n        }\n        col.add(_col);\n      }\n      if (_box !== ".") {\n        if (box.has(_box)) {\n          return false;\n        }\n        box.add(_box);\n      }\n    }\n  }\n  return true;\n}\n')))}b.isMDXComponent=!0}}]);