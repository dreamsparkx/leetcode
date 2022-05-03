"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[8212],{1973:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(5714),s=["components"],l={title:"394. Decode String (Medium)",tags:["String","Stack","Recursion","Medium","Yahoo","Facebook","Yelp"]},u=void 0,c={unversionedId:"394",id:"394",title:"394. Decode String (Medium)",description:"<SolutionDocHead",source:"@site/solutions/394.mdx",sourceDirName:".",slug:"/394",permalink:"/leetcode/solutions/394",tags:[{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Stack",permalink:"/leetcode/solutions/tags/stack"},{label:"Recursion",permalink:"/leetcode/solutions/tags/recursion"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"},{label:"Yahoo",permalink:"/leetcode/solutions/tags/yahoo"},{label:"Facebook",permalink:"/leetcode/solutions/tags/facebook"},{label:"Yelp",permalink:"/leetcode/solutions/tags/yelp"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1651598924,formattedLastUpdatedAt:"5/3/2022",frontMatter:{title:"394. Decode String (Medium)",tags:["String","Stack","Recursion","Medium","Yahoo","Facebook","Yelp"]},sidebar:"solutions",previous:{title:"374. Guess Number Higher or Lower (Easy)",permalink:"/leetcode/solutions/374"},next:{title:"406. Queue Reconstruction by Height (Medium)",permalink:"/leetcode/solutions/406"}},p={},d=[],m={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{solutionType:"medium",labels:["String","Stack","Recursion"],companies:["Yahoo","Facebook","Yelp"],url:"https://leetcode.com/problems/decode-string/",mdxType:"SolutionDocHead"}),(0,o.kt)("p",null,"Given an encoded string, return its decoded string."),(0,o.kt)("p",null,"The encoding rule is: ",(0,o.kt)("inlineCode",{parentName:"p"},"k[encoded_string]"),", where the ",(0,o.kt)("inlineCode",{parentName:"p"},"encoded_string")," inside the square brackets is being repeated exactly ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," times. Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," is guaranteed to be a positive integer."),(0,o.kt)("p",null,"You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc."),(0,o.kt)("p",null,"Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, ",(0,o.kt)("inlineCode",{parentName:"p"},"k"),". For example, there will not be input like ",(0,o.kt)("inlineCode",{parentName:"p"},"3a")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"2[4]"),"."),(0,o.kt)("b",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "3[a]2[bc]"\nOutput: "aaabcbc"\n')),(0,o.kt)("b",null,"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "3[a2[c]]"\nOutput: "accaccacc"\n')),(0,o.kt)("b",null,"Example 3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "2[abc]3[cd]ef"\nOutput: "abcabccdcdcdef"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},'function decodeString(s: string): string {\n  let stack = [];\n  let currStr: string = "";\n  let currNum = 0;\n  for (let i = 0; i < s.length; i++) {\n    if (s[i] === "[") {\n      stack.push(currStr);\n      stack.push(currNum);\n      currStr = "";\n      currNum = 0;\n    } else if (s[i] === "]") {\n      let prevNum = stack.pop();\n      let prevStr = stack.pop();\n      currStr = prevStr + currStr.repeat(prevNum);\n    } else if (s[i] >= "0" && s[i] <= "9") {\n      currNum = currNum * 10 + Number(s[i]);\n    } else {\n      currStr += s[i];\n    }\n  }\n  return currStr;\n}\n')))}k.isMDXComponent=!0}}]);