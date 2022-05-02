"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[5787],{3145:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return m}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),a=n.p+"assets/images/image-56c1769b3997b98ec67ebe09d5a20558.png",o=n(5714),s=["components"],d={title:"463. Island Perimeter (Easy)",tags:["Array","Depth First Search","Breadth First Search","Easy","Google"]},p=void 0,c={unversionedId:"463",id:"463",title:"463. Island Perimeter (Easy)",description:"<SolutionDocHead",source:"@site/solutions/463.mdx",sourceDirName:".",slug:"/463",permalink:"/leetcode/solutions/463",tags:[{label:"Array",permalink:"/leetcode/solutions/tags/array"},{label:"Depth First Search",permalink:"/leetcode/solutions/tags/depth-first-search"},{label:"Breadth First Search",permalink:"/leetcode/solutions/tags/breadth-first-search"},{label:"Easy",permalink:"/leetcode/solutions/tags/easy"},{label:"Google",permalink:"/leetcode/solutions/tags/google"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651259396,formattedLastUpdatedAt:"4/30/2022",frontMatter:{title:"463. Island Perimeter (Easy)",tags:["Array","Depth First Search","Breadth First Search","Easy","Google"]},sidebar:"solutions",previous:{title:"451. Sort Characters By Frequency (Medium)",permalink:"/leetcode/solutions/451"},next:{title:"482. License Key Formatting (Easy)",permalink:"/leetcode/solutions/482"}},u={},m=[],g={toc:m};function h(e){var t=e.components,n=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{solutionType:"easy",labels:["Array","Depth First Search","Breadth First Search"],companies:["Google"],url:"https://leetcode.com/problems/island-perimeter/",mdxType:"SolutionDocHead"}),(0,i.kt)("p",null,"You are given ",(0,i.kt)("inlineCode",{parentName:"p"},"row x col")," grid representing a map where ",(0,i.kt)("inlineCode",{parentName:"p"},"grid[i][j] = 1")," represents land and ",(0,i.kt)("inlineCode",{parentName:"p"},"grid[i][j] = 0")," represents water."),(0,i.kt)("p",null,"Grid cells are connected ",(0,i.kt)("b",null,"horizontally/vertically")," (not diagonally). The ",(0,i.kt)("inlineCode",{parentName:"p"},"grid")," is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells)."),(0,i.kt)("p",null,"The island doesn't have \"lakes\", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island."),(0,i.kt)("b",null,"Example 1:"),(0,i.kt)("br",null),(0,i.kt)("img",{src:a}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]\nOutput: 16\nExplanation: The perimeter is the 16 yellow stripes in the image above.\n")),(0,i.kt)("b",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: grid = [[1]]\nOutput: 4\n")),(0,i.kt)("b",null,"Example 3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: grid = [[1,0]]\nOutput: 4\n")),(0,i.kt)("b",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"row == grid.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"col == grid[i].length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= row, col <= 100")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grid[i][j]")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},"There is exactly one island in ",(0,i.kt)("inlineCode",{parentName:"li"},"grid"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},"function islandPerimeter(grid: number[][]): number {\n  const rows = grid.length;\n  const cols = grid[0].length;\n  let perimeter = 0;\n  for (let row = 0; row < rows; row++) {\n    for (let col = 0; col < cols; col++) {\n      if (!grid[row][col]) continue;\n      perimeter += 4;\n      // abstract the number of adjacent island\n      if (row > 0 && grid[row - 1][col]) perimeter--;\n      if (col > 0 && grid[row][col - 1]) perimeter--;\n      if (row < rows - 1 && grid[row + 1][col]) perimeter--;\n      if (col < cols - 1 && grid[row][col + 1]) perimeter--;\n    }\n  }\n  return perimeter;\n}\n")))}h.isMDXComponent=!0}}]);