import{_ as o,D as l,c as n,l as e,a,I as s,a3 as i,o as r}from"./chunks/framework.BBWgT5cc.js";const P=JSON.parse('{"title":"Cohere","description":"","frontmatter":{},"headers":[],"relativePath":"features/ai/cohere.md","filePath":"features/ai/cohere.md","lastUpdated":1716088898000}'),h={name:"features/ai/cohere.md"},p={id:"cohere",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#cohere","aria-label":'Permalink to "Cohere <Badge type="tip" text="^0.5.0-beta.0" />"'},"​",-1),d=i('<p>Raycast Unblock offers Cohere AI support. You can use Cohere&#39;s models for free via their official API.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Different from <a href="./cohere-web.html">Cohere Web</a>, this is the official API, more stable and reliable. (But you may face <em>rate limit</em> issues)</p></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol><li><p>Make sure you have an account on <a href="https://dashboard.cohere.com" target="_blank" rel="noreferrer">Cohere</a>. You can sign up for free.</p></li><li><p>Visit <a href="https://dashboard.cohere.com/api-keys" target="_blank" rel="noreferrer">https://dashboard.cohere.com/api-keys</a> to get Trial Keys</p></li><li><p>Modify the configuration file with your apiKey.</p></li><li><p>Set the <code>[AI.Cohere].type</code> to <code>api</code>.</p></li></ol><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>The configuration for this feature includes the following parameters:</p>',6),u=e("li",null,[e("code",null,"type"),a(": The type of Cohere API to use. "),e("strong",null,[a("Set this to "),e("code",null,"api"),a(".")])],-1),_=e("li",null,[e("code",null,"api_key"),a(": Your Cohere API key.")],-1),k=e("code",null,"temperature",-1),f=e("code",null,"max_tokens",-1),m=i(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Cohere</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">type = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;api&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">api_key = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;your api key&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># temperature = 0.5</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># max_tokens = 100</span></span></code></pre></div>`,2);function g(y,E,b,C,x,T){const t=l("Badge");return r(),n("div",null,[e("h1",p,[a("Cohere "),s(t,{type:"tip",text:"^0.5.0-beta.0"}),a(),c]),d,e("ul",null,[u,_,e("li",null,[k,a(": The temperature of the model. "),s(t,{type:"info",text:"Optional"})]),e("li",null,[f,a(": The maximum tokens of the model. "),s(t,{type:"info",text:"Optional"})])]),m])}const I=o(h,[["render",g]]);export{P as __pageData,I as default};