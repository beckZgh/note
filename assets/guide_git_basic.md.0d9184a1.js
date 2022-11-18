import{_ as s,c as n,o as a,d as l}from"./app.b36e13f7.js";const d=JSON.parse('{"title":"Git \u57FA\u7840\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0B\u8F7D","slug":"\u4E0B\u8F7D","link":"#\u4E0B\u8F7D","children":[]},{"level":2,"title":"\u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A","slug":"\u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A","link":"#\u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A","children":[]},{"level":2,"title":"\u8FDC\u7A0B\u4ED3\u5E93","slug":"\u8FDC\u7A0B\u4ED3\u5E93","link":"#\u8FDC\u7A0B\u4ED3\u5E93","children":[]},{"level":2,"title":"\u5206\u652F\u7BA1\u7406","slug":"\u5206\u652F\u7BA1\u7406","link":"#\u5206\u652F\u7BA1\u7406","children":[]},{"level":2,"title":"\u591A\u4EBA\u534F\u4F5C","slug":"\u591A\u4EBA\u534F\u4F5C","link":"#\u591A\u4EBA\u534F\u4F5C","children":[]},{"level":2,"title":"\u6807\u7B7E\u7BA1\u7406","slug":"\u6807\u7B7E\u7BA1\u7406","link":"#\u6807\u7B7E\u7BA1\u7406","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49Git","slug":"\u81EA\u5B9A\u4E49git","link":"#\u81EA\u5B9A\u4E49git","children":[]}],"relativePath":"guide/git/basic.md"}'),p={name:"guide/git/basic.md"},e=l(`<h1 id="git-\u57FA\u7840\u4F7F\u7528" tabindex="-1">Git \u57FA\u7840\u4F7F\u7528 <a class="header-anchor" href="#git-\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a></h1><h2 id="\u4E0B\u8F7D" tabindex="-1">\u4E0B\u8F7D <a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a></h2><ul><li><a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">Windows\u7248\u672C</a></li><li>Linux</li></ul><h2 id="\u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A" tabindex="-1">\u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A <a class="header-anchor" href="#\u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A" aria-hidden="true">#</a></h2><ul><li>\u5F00\u53D1\u76EE\u5F55\u4E3A\u5DE5\u4F5C\u533A</li><li>\u5176\u4E2D\u7684 .git (\u7248\u672C\u5E93) <ul><li>stage \xA0\u6682\u5B58\u533A</li><li>master \u81EA\u52A8\u521B\u5EFA\u7684\u4E3B\u5206\u652F</li><li>HEAD \xA0 \u6307\u5411master\u7684\u6307\u9488</li></ul></li></ul><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">git add     // \u6DFB\u52A0\u5230\u6682\u5B58\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit  // \u63D0\u4EA4\u5230\u5F53\u524D\u5206\u652F</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u7B80\u5355\u7406\u89E3: \u9700\u8981\u63D0\u4EA4\u7684\u6587\u4EF6\u5148\u653E\u6682\u5B58\u533A, \u7136\u540E\u4E00\u6B21\u6027\u63D0\u4EA4\u6682\u5B58\u533A\u7684\u4FEE\u6539\u5230\u5206\u652F</p></blockquote><ul><li>git\u8DDF\u8E2A\u7BA1\u7406\u7684\u662F\u4FEE\u6539</li></ul><blockquote><p>\u7406\u89E3: \u5C31\u662Fgit\u8DDF\u8E2A\u7BA1\u7406\u7684\u662F\u6BCF\u6B21 git add \u5230\u6682\u5B58\u533A\u7684\u6587\u4EF6</p></blockquote><ul><li>git checkout -- \u6587\u4EF6\u7684\u4E24\u79CD\u60C5\u51B5 <ul><li>\u6587\u4EF6\u81EA\u7136\u4FEE\u6539\u672A\u6DFB\u52A0\u5230\u201C\u6682\u5B58\u533A\u201D,\u5219\u64A4\u9500\u5230\u56DE\u7248\u672C\u5E93\u72B6\u6001</li><li>\u6587\u4EF6\u6DFB\u52A0\u5230\u201C\u6682\u5B58\u533A\u201D,\u5219\u64A4\u9500\u5230\u63D0\u4EA4\u524D\u7684\u72B6\u6001</li></ul></li></ul><blockquote><p>-- \u5982\u5FD8\u8BB0,\u5219\u4F1A\u53D8\u6210\u5207\u6362\u5206\u652F</p></blockquote><ul><li>git \u4E2D\u7684\u5220\u9664 <ul><li>\u901A\u5E38\u60C5\u51B5\u4E0B\u5220\u9664\u4E5F\u662F\u4E00\u4E2A\u4FEE\u6539,\u6709\u4EE5\u4E0B\u4E24\u4E2A\u9009\u9879 <ul><li>git rm \u6587\u4EF6, \u4ECE\u7248\u672C\u5E93\u4E2D\u5220\u9664\u8BE5\u6587\u4EF6,\u4E0D\u80FD\u6062\u590D</li><li>git commit \u63D0\u4EA4\u8FD9\u6B21\u4FEE\u6539</li></ul></li></ul></li></ul><h2 id="\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1">\u8FDC\u7A0B\u4ED3\u5E93 <a class="header-anchor" href="#\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a></h2><ul><li>\u5BF9\u63A5 github <ol><li>\u521B\u5EFA SSH key</li></ol></li></ul><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh-keygen -t rsa -C </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">youremail</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u7136\u540E\u4E00\u8DEF\u56DE\u8F66, \u5728\u7528\u6237\u76EE\u5F55\u4E0B\u4F1A\u751F\u6210 .ssh \u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6709 id_rsa, id_rsa.pub \u4E24\u4E2A\u6587\u4EF6</span></span>
<span class="line"></span></code></pre></div><ol><li>\u767B\u5F55 GitHub \u6253\u5F00 &quot; Account settings&quot; &quot;SSH keys&quot; \u4E2D, &quot;Add SSH Keys&quot;</li></ol><ul><li>Github \u4E0E \u672C\u5730\u4ED3\u5E93\u5173\u8054</li></ul><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">// origin: git\u8FDC\u7A0B\u5E93\u7684\u9ED8\u8BA4\u53EB\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin git@github....git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u63D0\u4EA4\u672C\u5730\u5E93\u63A8\u9001\u5230\u8FDC\u7A0B\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u52A0\u4E0A -u \u53C2\u6570, \u4F1A\u5C06\u672C\u5730\u7684master\u5206\u652F\u5185\u5BB9\u4E0D\u4EC5\u63A8\u9001\u5230\u8FDC\u7A0B\u65B0\u7684 master \u5206\u652F, \u8FD8\u4F1A\u4E0E\u4E4B\u5173\u8054, \u540E\u9762\u63A8\u9001\u548C\u62C9\u53D6\u65F6\u53EF\u4EE5\u7B80\u5316\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -u origin master</span></span>
<span class="line"></span></code></pre></div><ul><li>\u8FDC\u7A0B\u514B\u9686</li></ul><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">git clone ....git</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5206\u652F\u7BA1\u7406" tabindex="-1">\u5206\u652F\u7BA1\u7406 <a class="header-anchor" href="#\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a></h2><p>\u5982\u51C6\u5907\u5F00\u53D1\u4E00\u4E2A\u65B0\u529F\u80FD,\u7B2C\u4E00\u5468\u5199\u4E8650%\u7684\u4EE3\u7801,\u5982\u679C\u7ACB\u523B\u63D0\u4EA4,\u7531\u4E8E\u4EE3\u7801\u6CA1\u6709\u5199\u5B8C,\u5B8C\u6574\u7684\u4EE3\u7801\u4F1A\u5BFC\u81F4\u522B\u4EBA\u4E0D\u80FD\u5E72\u6D3B\u4E86,\u5982\u7B49\u4EE3\u7801\u5168\u90E8\u5199\u5B8C\u518D\u4E00\u6B21\u63D0\u4EA4,\u53C8\u5B58\u5728\u4E22\u5931\u6BCF\u5929\u8FDB\u5EA6\u7684\u5DE8\u5927\u98CE\u9669\u3002</p><p>\u800C\u4F7F\u7528\u5206\u652F,\u5219\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5206\u652F</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u521B\u5EFA\u5206\u652F -b \u8868\u793A\u521B\u5EFA\u5E76\u5207\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b \u5206\u652F\u540D\u79F0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u7B49\u540C\u4E8E\u4E0B\u65B9\u4E24\u6761\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch \u5206\u652F\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkount \u5206\u652F\u540D\u79F0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u7F57\u5217\u51FA\u5F53\u524D\u672C\u5730\u6240\u6709\u5206\u652F\uFF0C\u5F53\u524D\u5206\u652F\uFF08</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u8FDC\u7A0B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5408\u5E76\u5206\u652F\uFF1A\u6307\u5B9A\u5206\u652F\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge \u5206\u652F\u540D\u79F0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5220\u9664\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -d \u5206\u652F\u540D\u79F0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u65B0\u7248\u672C\u5207\u6362\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5207\u6362\u5230\u65B0\u7684\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git switch -c \u5206\u652F\u540D\u79F0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5207\u6362\u5230\u5DF2\u6709\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git switch \u5206\u652F\u540D\u79F0</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u56E0\u4E3A\u521B\u5EFA\u3001\u5408\u5E76\u3001\u5220\u9664\u5206\u652F\u975E\u5E38\u5FEB\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u4F7F\u7528\u5206\u652F\u5B8C\u6210\u67D0\u9879\u529F\u80FD\u518D\u8FDB\u884C\u5408\u5E76\uFF0C\u5408\u5E76\u540E\u5728\u5220\u9664\u5206\u652F</p></blockquote><blockquote><p>git \u5408\u5E76\u5206\u652F\u65F6\uFF0C\u4F1A\u9ED8\u8BA4\u4F7F\u7528 Fast forward \u6A21\u5F0F, \u8FD9\u79CD\u6A21\u5F0F\u4E0B\u5408\u5E76\u5206\u652F\u3001\u5220\u9664\u5206\u652F\u4F1A\u4E22\u6389\u5206\u652F\u4FE1\u606F\uFF0C\u6240\u4EE5\u53EF\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u5408\u5E76\uFF0C\u4FDD\u7559\u5408\u5E76\u8BB0\u5F55</p></blockquote><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u901A\u8FC7\u8FD9\u79CD\u6A21\u5F0F\u662F\u65B0\u5EFA\u4E00\u4E2A commit \u6240\u4EE5\u8981\u52A0\u63CF\u8FF0</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge --no-ff -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">desc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \u5206\u652F\u540D\u79F0</span></span>
<span class="line"></span></code></pre></div><ul><li>BUG \u5206\u652F \u5F53\u5728\u4E00\u4E2A\u5206\u652F\u4E0A\u8FDB\u884C\u5230\u4E00\u534A\u65F6\uFF0C\u9700\u8981\u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\u89E3\u51B3BUG,\u90A3\u4E48\u53EF\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u6E05\u7A7A\u4E14\u9690\u85CF\u5F53\u524D\u5DE5\u4F5C\u533A</li></ul><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u9690\u85CF\u5F53\u524D\u5DE5\u4F5C\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u6240\u6709\u9690\u85CF</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u6062\u590D\u5DE5\u4F5C\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash apply</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5220\u9664\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash drop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u6062\u590D\u5E76\u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash pop</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5982\u4F55\u5C06\u5176\u4ED6\u5206\u652F\u4E0A\u4FEE\u6539\u7684bug\uFF0C\u5F15\u5165\u5230\u5F53\u524D\u6211\u5F00\u53D1\u7684\u5206\u652F\u8FDB\u884C\u4FEE\u590D\u5F53\u524Dbug</li><li></li></ul><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u590D\u5236\u4E00\u4E2A\u7279\u5B9A\u7684\u63D0\u4EA4\u5230\u5F53\u524D\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git cherry-pick  4c805e2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5F3A\u884C\u5220\u9664\u4E00\u4E2A\u672A\u5408\u5E76\u7684\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -D \u5206\u652F\u540D</span></span>
<span class="line"></span></code></pre></div><h2 id="\u591A\u4EBA\u534F\u4F5C" tabindex="-1">\u591A\u4EBA\u534F\u4F5C <a class="header-anchor" href="#\u591A\u4EBA\u534F\u4F5C" aria-hidden="true">#</a></h2><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u8FDC\u7A0B\u5E93\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u66F4\u8BE6\u7EC6\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote -v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u63A8\u9001\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u9ED8\u8BA4\u514B\u9686\u4E0B\u6765\u53EA\u6709 master \u5206\u652F\uFF0C\u901A\u8FC7\u4E0B\u65B9\u5173\u8054 dev\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b dev origin/dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u8BBE\u7F6E\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --set-upstream branch-name origin/branch-name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5927\u6982\u591A\u4EBA\u534F\u4F5C\u7684\u5DE5\u4F5C\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">1. git push origin \u5206\u652F\u540D \u5C1D\u8BD5\u80FD\u5426\u63A8\u9001</span></span>
<span class="line"><span style="color:#A6ACCD;">2. git pull \u5982\u8FDC\u7A0B\u66F4\u65B0,\u5219\u66F4\u65B0\u672C\u5730</span></span>
<span class="line"><span style="color:#A6ACCD;">3. git push origin \u5206\u652F\u540D \u89E3\u51B3\u51B2\u7A81\uFF0C\u63D0\u4EA4\u63A8\u9001</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u628A\u672C\u5730\u672Apush\u7684\u5206\u53C9\u63D0\u4EA4\u5386\u53F2\u6574\u7406\u6210\u76F4\u7EBF\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6807\u7B7E\u7BA1\u7406" tabindex="-1">\u6807\u7B7E\u7BA1\u7406 <a class="header-anchor" href="#\u6807\u7B7E\u7BA1\u7406" aria-hidden="true">#</a></h2><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u6240\u6709\u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u65B0\u5EFA\u4E00\u4E2A\u6807\u7B7E\uFF0C\u9ED8\u8BA4\u4E3AHEAD,\u4E5F\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2Acommit id\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">git tab \u6807\u7B7E\u540D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u53EF\u4EE5\u6307\u5B9A\u6807\u7B7E\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag -a </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">tagname</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blablabla...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5220\u9664\u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag -d v0.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u63A8\u9001\u8FDC\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">tagname</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E00\u6B21\u6027\u63A8\u9001\u5168\u90E8</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin --tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5220\u9664\u5DF2\u7ECF\u63A8\u9001\u7684\u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag -d v0.9</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin :refs/tags/v0.9</span></span>
<span class="line"></span></code></pre></div><h2 id="\u81EA\u5B9A\u4E49git" tabindex="-1">\u81EA\u5B9A\u4E49Git <a class="header-anchor" href="#\u81EA\u5B9A\u4E49git" aria-hidden="true">#</a></h2><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u8BA9Git\u663E\u793A\u989C\u8272\uFF0C\u4F1A\u8BA9\u547D\u4EE4\u8F93\u51FA\u770B\u8D77\u6765\u66F4\u9192\u76EE</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global color.ui </span><span style="color:#82AAFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5B9A\u4E49\u5FFD\u7565\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u521B\u5EFA .gitignore \u6587\u4EF6, \u5728\u7EBF\u89C4\u5219\u914D\u7F6E https://github.com/github/gitignore</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u6DFB\u52A0\u4E00\u4E2A\u88AB\u5FFD\u7565\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">git add -f App.class</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u68C0\u67E5\u6587\u4EF6\u88AB\u54EA\u6761\u89C4\u5219\u5FFD\u7565\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">git check-ignore -v App.class</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u914D\u7F6E\u522B\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6572git st\u5C31\u8868\u793Agit status\u90A3\u5C31\u7B80\u5355\u591A\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5F53\u7136\u8FD8\u6709\u522B\u7684\u547D\u4EE4\u53EF\u4EE5\u7B80\u5199\uFF0C\u5F88\u591A\u4EBA\u90FD\u7528co\u8868\u793Acheckout\uFF0Cci\u8868\u793Acommit\uFF0Cbr\u8868\u793Abranch\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global alias.st status</span></span>
<span class="line"></span></code></pre></div>`,37),c=[e];function i(o,t,r,A,C,g){return a(),n("div",null,c)}const y=s(p,[["render",i]]);export{d as __pageData,y as default};
