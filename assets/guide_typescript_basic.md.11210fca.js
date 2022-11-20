import{_ as e,c as t,o as i,d as l}from"./app.79a528cc.js";const r="/note/assets/overview.8be366cc.jpg",u=JSON.parse('{"title":"\u57FA\u7840\u77E5\u8BC6\u603B\u7ED3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u9700\u8981 Typescript","slug":"\u4E3A\u4EC0\u4E48\u9700\u8981-typescript","link":"#\u4E3A\u4EC0\u4E48\u9700\u8981-typescript","children":[]},{"level":2,"title":"\u529F\u80FD\u6982\u89C8","slug":"\u529F\u80FD\u6982\u89C8","link":"#\u529F\u80FD\u6982\u89C8","children":[]},{"level":2,"title":"\u5DE5\u5177\u7C7B\u578B\u6982\u89C8","slug":"\u5DE5\u5177\u7C7B\u578B\u6982\u89C8","link":"#\u5DE5\u5177\u7C7B\u578B\u6982\u89C8","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"relativePath":"guide/typescript/basic.md"}'),c={name:"guide/typescript/basic.md"},a=l('<h1 id="\u57FA\u7840\u77E5\u8BC6\u603B\u7ED3" tabindex="-1">\u57FA\u7840\u77E5\u8BC6\u603B\u7ED3 <a class="header-anchor" href="#\u57FA\u7840\u77E5\u8BC6\u603B\u7ED3" aria-hidden="true">#</a></h1><h2 id="\u4E3A\u4EC0\u4E48\u9700\u8981-typescript" tabindex="-1">\u4E3A\u4EC0\u4E48\u9700\u8981 Typescript <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981-typescript" aria-hidden="true">#</a></h2><p>Javascript \u662F\u4E00\u95E8\u52A8\u6001\u7684\u811A\u672C\u8BED\u8A00\uFF0C\u610F\u5473\u7740\u53EA\u6709\u8FD0\u884C\u7684\u65F6\u5019\u624D\u80FD\u53D1\u73B0\u7A0B\u5E8F\u7684\u67D0\u4E9B\u9519\u8BEF\u3002 \u800C Typescript \u63D0\u4F9B\u4E86\u9759\u6001\u5206\u6790\uFF0C\u5C31\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5728\u7A0B\u5E8F\u8FD0\u884C\u524D\u7684\u7F16\u7801\u9636\u6BB5\u5C31\u80FD\u53D1\u73B0\u67D0\u4E9B\u9519\u8BEF\u3002</p><h2 id="\u529F\u80FD\u6982\u89C8" tabindex="-1">\u529F\u80FD\u6982\u89C8 <a class="header-anchor" href="#\u529F\u80FD\u6982\u89C8" aria-hidden="true">#</a></h2><p><a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html" target="_blank" rel="noreferrer">Typescript \u57FA\u7840\u77E5\u8BC6\u6587\u6863</a></p><p><img src="'+r+'" alt="Typescript \u529F\u80FD"></p><h2 id="\u5DE5\u5177\u7C7B\u578B\u6982\u89C8" tabindex="-1">\u5DE5\u5177\u7C7B\u578B\u6982\u89C8 <a class="header-anchor" href="#\u5DE5\u5177\u7C7B\u578B\u6982\u89C8" aria-hidden="true">#</a></h2><p><a href="https://www.typescriptlang.org/docs/handbook/utility-types.html" target="_blank" rel="noreferrer">Typescript \u5DE5\u5177\u7C7B\u578B\u6587\u6863</a></p><ul><li><code>Awaited&lt;Type&gt;</code> \u53D6\u5F97 Promise \u8FD4\u56DE\u503C\u7C7B\u578B</li><li><code>Partial&lt;Type&gt;</code> \u5C06\u7ED9\u5B9A\u7C7B\u578B\u7684\u5C5E\u6027\u8F6C\u6362\u4E3A\u53EF\u9009\u5C5E\u6027</li><li><code>Required&lt;Type&gt;</code> \u5C06\u7ED9\u5B9A\u7C7B\u578B\u7684\u5C5E\u6027\u8F6C\u6362\u4E3A\u5FC5\u987B\u5C5E\u6027</li><li><code>Readonly&lt;Type&gt;</code> \u5C06\u7ED9\u5B9A\u7C7B\u578B\u7684\u5C5E\u6027\u8F6C\u6362\u4E3A\u53EA\u8BFB\u5C5E\u6027</li><li><code>Record&lt;Keys, Type&gt;</code> \u6784\u9020\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5176\u5C5E\u6027\u952E\u4E3AKeys\uFF0C\u5C5E\u6027\u503C\u4E3AType</li><li><code>Pick&lt;Type, Keys&gt;</code> \u9009\u53D6\u7ED9\u5B9A\u7C7B\u578B\u6307\u5B9A\u7684 keys(\u5B57\u7B26\u4E32\u6587\u5B57\u6216\u5B57\u7B26\u4E32\u6587\u5B57\u7684\u5E76\u96C6) \u6765\u6784\u9020\u4E00\u4E2A\u7C7B\u578B</li><li><code>Omit&lt;Type, Keys&gt;</code> \u6392\u9664\u7ED9\u5B9A\u7C7B\u578B\u6307\u5B9A\u7684 keys(\u5B57\u7B26\u4E32\u6587\u5B57\u6216\u5B57\u7B26\u4E32\u6587\u5B57\u7684\u5E76\u96C6) \u6765\u6784\u9020\u4E00\u4E2A\u7C7B\u578B</li><li><code>Exclude&lt;UnionType, ExcludedMembers&gt;</code> \u63D0\u53D6\u8054\u5408\u6210\u5458\u4E2D\u65E0\u4EA4\u96C6\u7684\u6210\u5458\u6784\u9020\u4E00\u4E2A\u7C7B\u578B</li><li><code>Extract&lt;Type, Union&gt;</code> \u63D0\u53D6\u8054\u5408\u6210\u5458\u4E2D\u6709\u4EA4\u96C6\u7684\u6210\u5458\u6784\u9020\u4E00\u4E2A\u7C7B\u578B</li><li><code>NonNullable&lt;Type&gt;</code> \u6392\u9664\u4E0D\u662F <code>null</code> \u548C <code>undefined</code> \u6765\u6784\u9020\u4E00\u4E2A\u7C7B\u578B</li><li><code>Parameters&lt;Type&gt;</code> \u63D0\u53D6\u51FD\u6570\u53C2\u6570\u7C7B\u578B\u6765\u6784\u9020\u4E00\u4E2A\u5143\u7EC4\u7C7B\u578B</li><li><code>ConstructorParameters&lt;Type&gt;</code> \u63D0\u53D6\u6784\u9020\u51FD\u6570\u53C2\u6570\u7C7B\u578B\u6765\u6784\u9020\u4E00\u4E2A\u5143\u7EC4\u7C7B\u578B</li><li><code>ReturnType&lt;Type&gt;</code> \u63D0\u53D6\u51FD\u6570\u8FD4\u56DE\u7C7B\u578B\u6765\u6784\u9020\u4E00\u4E2A\u7C7B\u578B</li><li><code>InstanceType&lt;Type&gt;</code> \u63D0\u53D6\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u7684\u5B9E\u4F8B\u7C7B\u578B\u6784\u9020\u4E00\u4E2A\u7C7B\u578B</li><li><code>ThisParameterType&lt;Type&gt;</code> \u63D0\u53D6\u51FD\u6570\u7684 <code>this</code> \u53C2\u6570\u7C7B\u578B, \u65E0\u53C2\u6570\u8FD4\u56DE <code>unknown</code></li><li><code>OmitThisParameter&lt;Type&gt;</code> \u5220\u9664\u51FD\u6570\u7684 <code>this</code> \u53C2\u6570\u7C7B\u578B</li><li><code>ThisType&lt;Type&gt;</code> \u53D6\u5F97 <code>this</code> \u7C7B\u578B</li><li>\u5B57\u7B26\u4E32\u64CD\u4F5C\u7C7B\u578B <ul><li><code>Uppercase&lt;StringType&gt;</code> \u5C06\u5B57\u7B26\u4E32\u7684\u6BCF\u4E2A\u5B57\u7B26\u8F6C\u6362\u4E3A\u5927\u5199</li><li><code>Lowercase&lt;StringType&gt;</code> \u5C06\u5B57\u7B26\u4E32\u7684\u6BCF\u4E2A\u5B57\u7B26\u8F6C\u6362\u4E3A\u5C0F\u5199</li><li><code>Capitalize&lt;StringType&gt;</code> \u5C06\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u8F6C\u6362\u4E3A\u5927\u5199</li><li><code>Uncapitalize&lt;StringType&gt;</code> \u5C06\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BCD\u8F6C\u6362\u4E3A\u5C0F\u5199</li></ul></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1">\u53C2\u8003\u6587\u7AE0 <a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a></h2><ul><li><a href="https://www.typescriptlang.org/docs/handbook/2/basic-types.html" target="_blank" rel="noreferrer">Typescript \u5B98\u7F51</a></li><li><a href="https://ts.xcatliu.com/basics/type-inference.html" target="_blank" rel="noreferrer">Typescript \u5165\u95E8\u6559\u7A0B - \u962E\u4E00\u5CF0</a></li><li><a href="https://juejin.cn/post/7018805943710253086#heading-11" target="_blank" rel="noreferrer">2022 typescript\u53F2\u4E0A\u6700\u5F3A\u5B66\u4E60\u5165\u95E8\u6587\u7AE0(2w\u5B57)</a></li><li><a href="https://juejin.cn/post/6994102811218673700#heading-20" target="_blank" rel="noreferrer">Ts\u9AD8\u624B\u7BC7\uFF1A22\u4E2A\u793A\u4F8B\u6DF1\u5165\u8BB2\u89E3Ts\u6700\u6666\u6DA9\u96BE\u61C2\u7684\u9AD8\u7EA7\u7C7B\u578B\u5DE5\u5177</a></li></ul>',11),d=[a];function o(s,p,n,h,y,g){return i(),t("div",null,d)}const _=e(c,[["render",o]]);export{u as __pageData,_ as default};
