"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[5865],{7614:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=n.p+"assets/images/image-c221c617d892ba98f1837a3f2817bccd.png",i=n.p+"assets/images/image1-19a8ec4632a1fcc0770436319a5d575f.png",s=n(5714),c=["components"],u={title:"37. Sudoku Solver (Hard)",tags:["Array","Backtracking","Matrix","Hard"]},d=void 0,p={unversionedId:"37",id:"37",title:"37. Sudoku Solver (Hard)",description:"<SolutionDocHead",source:"@site/solutions/37.mdx",sourceDirName:".",slug:"/37",permalink:"/leetcode/solutions/37",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Backtracking",permalink:"/leetcode/solutions/tags/backtracking"},{label:"Matrix",permalink:"/leetcode/solutions/tags/matrix"},{label:"Hard",permalink:"/leetcode/solutions/tags/hard"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650915156,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"37. Sudoku Solver (Hard)",tags:["Array","Backtracking","Matrix","Hard"]},sidebar:"solutions",previous:{title:"36. Valid Sudoku (Medium)",permalink:"/leetcode/solutions/36"},next:{title:"42. Trapping Rain Water (Hard)",permalink:"/leetcode/solutions/42"}},m={},f=[],k={toc:f};function b(t){var e=t.components,n=(0,r.Z)(t,c);return(0,a.kt)("wrapper",(0,o.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{solutionType:"hard",labels:["Array","Backtracking","Matrix"],companies:["Snapchat","Uber"],url:"https://leetcode.com/problems/sudoku-solver/",mdxType:"SolutionDocHead"}),(0,a.kt)("p",null,"Write a program to solve a Sudoku puzzle by filling the empty cells."),(0,a.kt)("p",null,"A sudoku solution must satisfy ",(0,a.kt)("b",null,"all of the following rules:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Each of the digits ",(0,a.kt)("inlineCode",{parentName:"li"},"1-9")," must occur exactly once in each row."),(0,a.kt)("li",{parentName:"ol"},"Each of the digits ",(0,a.kt)("inlineCode",{parentName:"li"},"1-9")," must occur exactly once in each column."),(0,a.kt)("li",{parentName:"ol"},"Each of the digits ",(0,a.kt)("inlineCode",{parentName:"li"},"1-9")," must occur exactly once in each of the 9 ",(0,a.kt)("inlineCode",{parentName:"li"},"3x3")," sub-boxes of the grid.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"'.'")," character indicates empty cells."),(0,a.kt)("br",null),(0,a.kt)("img",{src:l,width:"483",height:"342"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]\nOutput: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]\nExplanation: The input board is shown above and the only valid solution is shown below:\n')),(0,a.kt)("br",null),(0,a.kt)("img",{src:i,width:"483",height:"342"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},'type Board = string[][];\n\nfunction solveSudoku(board: Board): void {\n  dfs(board, board.length);\n}\n\nfunction dfs(board: Board, n: number) {\n  // for every cell in the sudoku\n  for (let row = 0; row < n; row++) {\n    for (let col = 0; col < n; col++) {\n      // if its empty\n      if (board[row][col] !== ".") {\n        continue;\n      }\n      // try every number 1-9\n      for (let i = 1; i <= 9; i++) {\n        const c = i.toString();\n        // if that number is valid\n        if (isValid(board, row, col, n, c)) {\n          board[row][col] = c;\n          // continue search for that board, ret true if solution is reached\n          if (dfs(board, n)) {\n            return true;\n          }\n        }\n      }\n      // solution wasnt found for any num 1-9 here, must be a dead end...\n      // set the current cell back to empty\n      board[row][col] = ".";\n      // ret false to signal dead end\n      return false;\n    }\n  }\n  // all cells filled, must be a solution\n  return true;\n}\n\nfunction isValid(board: Board, row: number, col: number, n: number, c: string) {\n  const blockRow = Math.floor(row / 3) * 3;\n  const blockCol = Math.floor(col / 3) * 3;\n  for (let i = 0; i < n; i++) {\n    if (board[row][i] === c || board[i][col] === c) {\n      return false;\n    }\n    const curRow = blockRow + Math.floor(i / 3);\n    const curCol = blockCol + Math.floor(i % 3);\n    if (board[curRow][curCol] === c) {\n      return false;\n    }\n  }\n  return true;\n}\n')))}b.isMDXComponent=!0}}]);