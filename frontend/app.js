// Cohabit app logic: filters, page routing, and registration.
// Needs data.js (AREAS, LISTINGS) loaded first.
function fmt(n){return "₦"+n.toLocaleString("en-NG")}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function fillAreas(sel,city,ph){sel.innerHTML='<option value="">'+ph+'</option>';(city?AREAS[city]:AREAS.Lagos.concat(AREAS.Abuja)).forEach(function(a){var o=document.createElement("option");o.value=a;o.textContent=a;sel.appendChild(o)})}
fillAreas(document.getElementById("fa"),"","All areas");fillAreas(document.getElementById("a"),"Lagos","Choose an area");

function renderList(){
var a=document.getElementById("fa").value,b=+document.getElementById("fb").value,v=document.getElementById("fv").value;
var c=document.getElementById("fc").value;var r=LISTINGS.filter(function(x){return(!c||(x.c||"Lagos")===c)&&(!a||x.a===a)&&(!b||x.p<=b)&&(!v||x.v)});
document.getElementById("count").textContent=r.length+" room"+(r.length===1?"":"s")+" found";
var g=document.getElementById("grid");
if(!r.length){g.innerHTML='<div class="empty">No rooms match these filters. Try a different area or a higher budget.</div>';return}
g.innerHTML=r.map(function(x,i){return '<article class="card"><div class="top"><h3>'+esc(x.t)+'</h3><div class="price">'+fmt(x.p)+' <small>/yr</small></div></div><p class="meta">'+esc(x.a)+', '+(x.c||'Lagos')+' · '+esc(x.who)+'</p><div class="tags">'+(x.v?'<span class="v">Verified lister</span>':'')+x.tags.map(function(t){return '<span>'+esc(t)+'</span>'}).join("")+'</div><a class="btn on-light" href="#register">Ask about this room</a></article>'}).join("")}
["fc","fa","fb","fv"].forEach(function(id){document.getElementById(id).addEventListener("change",id==="fc"?function(){fillAreas(document.getElementById("fa"),this.value,"All areas");renderList()}:renderList)});
document.getElementById("c").addEventListener("change",function(){fillAreas(document.getElementById("a"),this.value,"Choose an area")});
renderList();

function route(){
var h=(location.hash||"#home").slice(1);
if(["home","listings","register"].indexOf(h)<0)h="home";
document.querySelectorAll("[data-page]").forEach(function(m){m.hidden=m.id!==h});
document.querySelectorAll("nav a").forEach(function(l){if(l.dataset.p===h)l.setAttribute("aria-current","page");else l.removeAttribute("aria-current")});
window.scrollTo(0,0)}
window.addEventListener("hashchange",route);route();

var form=document.getElementById("f");
form.addEventListener("submit",function(ev){
ev.preventDefault();
var d=new FormData(form),errs={};
var n=(d.get("n")||"").trim(),e=(d.get("e")||"").trim(),ph=(d.get("ph")||"").replace(/\s/g,""),a=d.get("a"),b=d.get("b");
if(n.length<2)errs.n="Enter your full name.";
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e))errs.e="Enter a valid email, like name@example.com.";
if(!/^(\+?234|0)[789][01]\d{8}$/.test(ph))errs.ph="Enter a Nigerian mobile number, like 0803 000 0000.";
if(!a)errs.a="Choose an area.";
if(!b||+b<=0)errs.b="Enter your yearly budget in naira.";
form.querySelectorAll("[data-e]").forEach(function(el){el.textContent=errs[el.dataset.e]||""});
var first=Object.keys(errs)[0];
if(first){form.querySelector('[name="'+first+'"]').focus();return}
var rec={role:d.get("role"),name:n,email:e,phone:ph,city:d.get("c"),area:a,budget:+b,rhythm:d.get("l"),at:new Date().toISOString()};
try{var all=JSON.parse(localStorage.getItem("cohabit_profiles")||"[]");all.push(rec);localStorage.setItem("cohabit_profiles",JSON.stringify(all))}catch(x){}
form.hidden=true;
document.getElementById("doneMsg").textContent="Thanks, "+n.split(" ")[0]+". We’ll match you with "+(rec.role==="seeker"?"rooms":"flatmates")+" in "+a+", "+rec.city+" around "+fmt(rec.budget)+" a year.";
document.getElementById("done").hidden=false});
window.addEventListener("hashchange",function(){if(location.hash==="#register"){form.hidden=false;document.getElementById("done").hidden=true}});