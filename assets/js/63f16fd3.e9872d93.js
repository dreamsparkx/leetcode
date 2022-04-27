"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[7071],{5715:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=t(7462),l=t(3366),i=(t(7294),t(3905)),r=t(5714),a=["components"],s={title:"535. Encode and Decode TinyURL (Medium)",tags:["Hash Table","String","Design","Hash function","Medium"]},d=void 0,u={unversionedId:"535",id:"535",title:"535. Encode and Decode TinyURL (Medium)",description:"<SolutionDocHead",source:"@site/solutions/535.mdx",sourceDirName:".",slug:"/535",permalink:"/leetcode/solutions/535",tags:[{label:"Hash Table",permalink:"/leetcode/solutions/tags/hash-table"},{label:"String",permalink:"/leetcode/solutions/tags/string"},{label:"Design",permalink:"/leetcode/solutions/tags/design"},{label:"Hash function",permalink:"/leetcode/solutions/tags/hash-function"},{label:"Medium",permalink:"/leetcode/solutions/tags/medium"}],version:"current",lastUpdatedBy:"Gaurav Bharti",lastUpdatedAt:1650915156,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"535. Encode and Decode TinyURL (Medium)",tags:["Hash Table","String","Design","Hash function","Medium"]},sidebar:"solutions",previous:{title:"451. Sort Characters By Frequency (Medium)",permalink:"/leetcode/solutions/451"},next:{title:"560. Subarray Sum Equals K (Medium)",permalink:"/leetcode/solutions/560"}},c={},p=[],m={toc:p};function g(e){var n=e.components,t=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{solutionType:"medium",labels:["Hash Table","String","Design","Hash function"],companies:["Amazon","Uber","Facebook","Google","PayPal"],url:"https://leetcode.com/problems/encode-and-decode-tinyurl/",mdxType:"SolutionDocHead"}),(0,i.kt)("p",null,"TinyURL is a URL shortening service where you enter a URL such as ",(0,i.kt)("inlineCode",{parentName:"p"},"https://leetcode.com/problems/design-tinyurl")," and it returns a short URL such as ",(0,i.kt)("inlineCode",{parentName:"p"},"http://tinyurl.com/4e9iAk"),". Design a class to encode a URL and decode a tiny URL."),(0,i.kt)("p",null,"There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL."),(0,i.kt)("p",null,"Implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Solution")," class:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Solution()")," Initializes the object of the system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String encode(String longUrl)")," Returns a tiny URL for the given ",(0,i.kt)("inlineCode",{parentName:"li"},"longUrl"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String decode(String shortUrl)")," Returns the original long URL for the given ",(0,i.kt)("inlineCode",{parentName:"li"},"shortUrl"),". It is guaranteed that the given ",(0,i.kt)("inlineCode",{parentName:"li"},"shortUrl")," was encoded by the same object.")),(0,i.kt)("b",null,"Example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: url = "https://leetcode.com/problems/design-tinyurl"\nOutput: "https://leetcode.com/problems/design-tinyurl"\n\nExplanation:\nSolution obj = new Solution();\nstring tiny = obj.encode(url); // returns the encoded tiny url.\nstring ans = obj.decode(tiny); // returns the original url after deconding it.\n')),(0,i.kt)("b",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 <= url.length <= 10",(0,i.kt)("sup",null,"4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url")," is guranteed to be a valid URL.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=solution.ts",title:"solution.ts"},'let codeDB = new Map();\nlet urlDB = new Map();\nconst chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";\n\nfunction getCode() {\n  let code = new Array(6)\n    .fill(undefined)\n    .map((_) => chars.charAt(~~(Math.random() * 62)));\n  return "http://tinyurl.com/" + code.join("");\n}\n\n/**\n * Encodes a URL to a shortened URL.\n */\nfunction encode(longUrl: string): string {\n  if (urlDB.has(longUrl)) {\n    return urlDB.get(longUrl);\n  }\n  let code = getCode();\n  while (codeDB.has(code)) {\n    code = getCode();\n  }\n  codeDB.set(code, longUrl);\n  urlDB.set(longUrl, code);\n  return code;\n}\n\n/**\n * Decodes a shortened URL to its original URL.\n */\nfunction decode(shortUrl: string): string {\n  return codeDB.get(shortUrl);\n}\n\n/**\n * Your functions will be called as such:\n * decode(encode(strs));\n */\n')))}g.isMDXComponent=!0}}]);