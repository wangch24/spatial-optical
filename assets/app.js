"use strict";
(() => {
 const data = window.SITE_DATA;
 if (!data) { console.error("未找到 site-data.js，请检查文件路径或语法。"); return; }
 const make = (tag, className, text) => { const el=document.createElement(tag); if(className) el.className=className; if(text!==undefined) el.textContent=text; return el; };
 const safeUrl = value => { try { const u=new URL(value); return ["https:","http:"].includes(u.protocol)?u.href:null; } catch { return null; } };
 const external = (label,url,className) => { const a=make("a",className,label); a.href=url;a.target="_blank";a.rel="noopener noreferrer";a.setAttribute("aria-label",label+"（新窗口打开）");return a; };
 document.querySelectorAll("[data-text]").forEach(el=>{const value=data.site[el.dataset.text];if(typeof value==="string")el.textContent=value;});
 document.title=(document.getElementById("resource-list")?"Resources 资料共享":data.site.direction)+" · "+data.site.name;
 document.getElementById("year").textContent=new Date().getFullYear();
 if(data.site.affiliation){const el=document.getElementById("affiliation");el.textContent=data.site.affiliation;el.hidden=false;}
 if(data.site.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.site.email)){const el=document.getElementById("contact-link");el.href="mailto:"+data.site.email;el.hidden=false;}
 const github=safeUrl(data.site.github);if(github){const el=document.getElementById("github-link");el.href=github;el.hidden=false;}
 const toggle=document.querySelector(".menu-toggle"),nav=document.getElementById("nav");
 function closeNav(){nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","展开导航");}
 toggle.addEventListener("click",()=>{const opened=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(opened));toggle.setAttribute("aria-label",opened?"收起导航":"展开导航");});
 nav.addEventListener("click",e=>{if(e.target.closest("a"))closeNav();});
 document.addEventListener("keydown",e=>{if(e.key==="Escape" && nav.classList.contains("open")){closeNav();toggle.focus();}});
 const research=document.getElementById("research-list");
 if(research)(data.research||[]).forEach((item,i)=>{const row=make("article","research-item"),heading=make("div"),detail=make("div","research-detail");row.append(make("span","research-number",String(i+1).padStart(2,"0")));heading.append(make("h3","",item.title),make("p","research-english",item.english));detail.append(make("p","research-description",item.description));const tags=make("div","tags");(item.tags||[]).forEach(t=>tags.append(make("span","",t)));detail.append(tags);row.append(heading,detail);research.append(row);});
 const pubs=document.getElementById("publication-list");
 if(pubs && data.publications?.length){pubs.replaceChildren();data.publications.forEach(item=>{const row=make("article","publication"),body=make("div"),links=make("div","publication-links");row.append(make("span","research-number",item.year));body.append(make("h3","",item.title),make("p","",[item.authors,item.venue].filter(Boolean).join(" · ")));[["Paper",item.paper],["Code",item.code],["Project",item.project]].forEach(([label,url])=>{const valid=safeUrl(url);if(valid)links.append(external(label+" ↗",valid));});body.append(links);row.append(body);pubs.append(row);});}
 const list=document.getElementById("resource-list");if(!list)return;
 const resources=(data.resources||[]).filter(r=>safeUrl(r.url));
 const search=document.getElementById("resource-search"),filters=document.getElementById("resource-filters"),count=document.getElementById("resource-count"),empty=document.getElementById("resource-empty");
 let selected=null;
 const categories=[...new Set(resources.map(r=>r.category||"其他"))];
 const buttons=[];
 [null,...categories].forEach(category=>{const b=make("button","filter",category===null?"全部资料":category);b.type="button";b.setAttribute("aria-pressed",String(category===null));b.addEventListener("click",()=>{selected=category;render();});filters.append(b);buttons.push({b,category});});
 function render(){
  const query=search.value.trim().toLocaleLowerCase();
  const items=resources.filter(r=>(selected===null||(r.category||"其他")===selected) && [r.title,r.description,r.source,r.category,...(r.tags||[])].join(" ").toLocaleLowerCase().includes(query));
  buttons.forEach(({b,category})=>b.setAttribute("aria-pressed",String(category===selected)));
  list.replaceChildren();count.textContent=`显示 ${items.length} / ${resources.length} 份资料`;empty.hidden=items.length!==0;
  items.forEach(r=>{const card=make("article","resource-card"),top=make("div","resource-card-top"),title=make("h2"),tags=make("div","tags"),bottom=make("div","resource-card-bottom"),url=safeUrl(r.url);
   top.append(make("span","",r.category||"其他"),make("span","",r.type||"在线文档"));title.append(external(r.title,url));(r.tags||[]).forEach(t=>tags.append(make("span","",t)));
   bottom.append(make("span","",r.source||"共享资料"),external("阅读文档 ↗",url));card.append(top,title,make("p","description",r.description||""),tags,bottom);list.append(card);
  });
 }
 search.addEventListener("input",render);document.getElementById("reset-search").addEventListener("click",()=>{selected=null;search.value="";render();search.focus();});render();
})();
