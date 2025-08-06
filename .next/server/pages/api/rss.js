"use strict";(()=>{var e={};e.id=529,e.ids=[529],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},8168:(e,t,a)=>{a.r(t),a.d(t,{config:()=>f,default:()=>m,routeModule:()=>h});var i={};a.r(i),a.d(i,{default:()=>handler});var r=a(1802),n=a(7153),l=a(6249);let s=require("fs");var o=a.n(s);let d=require("path");var u=a.n(d);let c=require("gray-matter");var p=a.n(c);let g=u().join(process.cwd(),"content");function getAllPosts(){let e=o().readdirSync(g);return e.map(e=>{let t=u().join(g,e),a=o().readFileSync(t,"utf8"),{data:i}=p()(a);return{slug:i.slug||e.replace(/\.mdx$/,""),...i}}).filter(e=>e.date).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime())}function generateRSSFeed(){let e=getAllPosts(),t="https://yourdomain.com",a=new Date,i=`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Suraj's Blog</title>
    <description>Thoughts on AI, education, and technology</description>
    <link>${t}</link>
    <language>en-us</language>
    <lastBuildDate>${a.toUTCString()}</lastBuildDate>
    <atom:link href="${t}/rss.xml" rel="self" type="application/rss+xml"/>
    ${e.map(e=>`
    <item>
      <title><![CDATA[${e.title}]]></title>
      <description><![CDATA[${e.description}]]></description>
      <link>${t}/articles/${e.slug}</link>
      <guid>${t}/articles/${e.slug}</guid>
      <pubDate>${new Date(e.date).toUTCString()}</pubDate>
    </item>`).join("")}
  </channel>
</rss>`;return i}function handler(e,t){let a=generateRSSFeed();t.setHeader("Content-Type","application/rss+xml"),t.setHeader("Cache-Control","public, s-maxage=1200, stale-while-revalidate=600"),t.write(a),t.end()}let m=(0,l.l)(i,"default"),f=(0,l.l)(i,"config"),h=new r.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/rss",pathname:"/api/rss",bundlePath:"",filename:""},userland:i})}};var t=require("../../webpack-api-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[222],()=>__webpack_exec__(8168));module.exports=a})();