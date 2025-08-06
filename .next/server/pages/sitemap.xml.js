"use strict";(()=>{var e={};e.id=164,e.ids=[164,660,888],e.modules={4815:(e,t,r)=>{r.r(t),r.d(t,{config:()=>S,default:()=>c,getServerSideProps:()=>m,getStaticPaths:()=>d,getStaticProps:()=>g,reportWebVitals:()=>f,routeModule:()=>b,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>h});var a={};r.r(a),r.d(a,{default:()=>u,getServerSideProps:()=>getServerSideProps});var l=r(7093),i=r(5244),s=r(1323),o=r(1207),n=r(5656),p=r(2386);function generateSiteMap(e){let t="https://my-blog-lemon-mu-45.vercel.app";return`<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${t}</loc>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${t}/articles</loc>
       <changefreq>daily</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${t}/about</loc>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
     <url>
       <loc>${t}/newsletter</loc>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
     ${e.map(({slug:e,date:r})=>`
       <url>
           <loc>${t}/articles/${e}</loc>
           <lastmod>${new Date(r).toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>
     `).join("")}
   </urlset>
 `}function SiteMap(){return null}let getServerSideProps=async({res:e})=>{let t=(0,p.B)(),r=generateSiteMap(t);return e.setHeader("Content-Type","text/xml"),e.setHeader("Cache-Control","public, s-maxage=1200, stale-while-revalidate=600"),e.write(r),e.end(),{props:{}}},u=SiteMap,c=(0,s.l)(a,"default"),g=(0,s.l)(a,"getStaticProps"),d=(0,s.l)(a,"getStaticPaths"),m=(0,s.l)(a,"getServerSideProps"),S=(0,s.l)(a,"config"),f=(0,s.l)(a,"reportWebVitals"),h=(0,s.l)(a,"unstable_getStaticProps"),x=(0,s.l)(a,"unstable_getStaticPaths"),P=(0,s.l)(a,"unstable_getStaticParams"),q=(0,s.l)(a,"unstable_getServerProps"),y=(0,s.l)(a,"unstable_getServerSideProps"),b=new l.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/sitemap.xml",pathname:"/sitemap.xml",bundlePath:"",filename:""},components:{App:n.default,Document:o.default},userland:a})},2386:(e,t,r)=>{r.d(t,{B:()=>getAllPosts});var a=r(7147),l=r.n(a),i=r(1017),s=r.n(i),o=r(8076),n=r.n(o);let p=s().join(process.cwd(),"content");function getAllPosts(){let e=l().readdirSync(p);return e.map(e=>{let t=s().join(p,e),r=l().readFileSync(t,"utf8"),{data:a}=n()(r);return{slug:a.slug||e.replace(/\.mdx$/,""),...a}}).filter(e=>e.date).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime())}},8076:e=>{e.exports=require("gray-matter")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},7310:e=>{e.exports=require("url")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[928,424,859,450,656,207],()=>__webpack_exec__(4815));module.exports=r})();