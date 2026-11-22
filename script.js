
(function(){
var $=function(i){return document.getElementById(i)||document.createElement('div')};
if(typeof STORE!=='undefined'&&STORE.products&&STORE.products.length)PRODUCTS=STORE.products;
var MAIL=(typeof EMAIL!=='undefined'&&EMAIL)||'hello@example.com';
var P=PRODUCTS,pg=document.body.dataset.page,cat='All';
function naira(n){return '₦'+n.toLocaleString('en-NG')}
function ld(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}}
function sv(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function bgOf(x,k){k=k||0;var m=(x.img||[])[k];return m?"url('"+encodeURI(m)+"') center/cover no-repeat":'linear-gradient('+(155+k*40)+'deg,hsl('+((x.h+k*20)%360)+' 55% '+(62-k*5)+'%),hsl('+((x.h+30+k*20)%360)+' 50% 28%))'}
function sizes(x){return x.c==='Accessories'?[]:['XS','S','M','L','XL']}
document.documentElement.classList.add('js');

var logoHtml=(typeof LOGO!=='undefined'&&LOGO)?'<img class="logoimg" src="'+LOGO+'" alt="'+BRAND+'">':BRAND;
var user=ld('mn_user',null);
var LINKS=[['index.html','Home','home'],['women.html','Women','women'],['men.html','Men','men'],['accessories.html?t=F','Accessories','accessories'],['design.html','Custom design','design'],['story.html','Our story','story'],['book.html','Book a fitting','book']];
var ACCS=[['M','Male accessories'],['F','Female accessories'],['U','Unisex accessories']];
function nav(side){return LINKS.map(function(l){var a='<a href="'+l[0]+'"'+(pg===l[2]?' class="cur"':'')+'>'+l[1]+'</a>';if(l[2]!=='accessories')return a;var m=ACCS.map(function(c){return '<a href="accessories.html?t='+c[0]+'">'+c[1]+'</a>'}).join('');return side?a+'<div class="sub2">'+m+'</div>':'<span class="dd">'+a+'<span class="ddm">'+m+'</span></span>'}).join('')}
var acct=user?'Sign out':'Sign in';
$('hdr').innerHTML='<header><div class="wrap"><a class="logo" href="index.html">'+logoHtml+'</a><nav>'+nav()+'</nav><div class="hr"><a class="acc" id="acc" href="signin.html">'+acct+'</a><button class="bagbtn" id="bb">Bag (<span id="bc">0</span>)</button><button class="mbtn" id="mb" aria-label="Open menu">☰</button></div></div></header><div id="ov"></div><aside id="sm"><div class="smh"><a class="logo" href="index.html">'+logoHtml+'</a><button class="bagbtn" id="sx">Close</button></div><div class="smn">'+nav(1)+'<a href="signin.html" id="acc2">'+acct+'</a></div></aside>';

$('ftr').innerHTML='<section class="wrap sec" id="contact"><h2>Contact us</h2><p class="sub">Questions, custom orders or bulk requests? We’d love to hear from you.</p><div class="cols"><div><b>Email</b><br><a href="mailto:'+MAIL+'">Send us an email</a></div><div><b>Instagram</b><br>'+INSTAGRAM+'</div><div><b>Studio</b><br>'+ADDR+'<br>'+HOURS+'</div></div></section><footer>© '+new Date().getFullYear()+' '+BRAND+'. All rights reserved. · <a href="admin.html">Admin</a></footer>'+"<aside id=\"dr\" aria-label=\"Shopping bag\">\n<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:8px\"><h2 style=\"font-size:28px\">Your bag</h2><button class=\"bagbtn\" id=\"cl\">Close</button></div>\n<div id=\"dl\"></div>\n<div style=\"padding-top:12px\"><div class=\"li\" style=\"border:0;font-weight:500\"><span>Total</span><span id=\"tt\">\u20a60</span></div>\n<a class=\"btn\" id=\"wa\" href=\"#\" target=\"_blank\" rel=\"noopener\" style=\"display:block;text-align:center;margin-top:6px\">Order on WhatsApp</a></div>\n</aside>";
function signout(e){if(user){e.preventDefault();try{localStorage.removeItem('mn_user')}catch(x){}location.reload()}}
$('acc').onclick=$('acc2').onclick=signout;
function menu(o){$('sm').classList.toggle('open',o);$('ov').classList.toggle('open',o);document.body.classList.toggle('lock',o)}
$('mb').onclick=function(){menu(true)};$('sx').onclick=$('ov').onclick=function(){menu(false)};
function openBag(){$('dr').classList.add('open')}
$('bb').onclick=openBag;$('cl').onclick=function(){$('dr').classList.remove('open')};
document.addEventListener('keydown',function(e){if(e.key==='Escape'){menu(false);$('dr').classList.remove('open')}});

document.body.insertAdjacentHTML('beforeend','<div id="gate" class="gate" hidden><div class="gbox"><button class="gx" id="gx" aria-label="Close">✕</button><h3>Sign in to continue</h3><p class="sub">Please sign in or create an account to place an order, book a fitting or request a custom design.</p><a class="btn" href="signin.html">Sign in</a> <a class="btn o" href="signin.html?m=up" style="margin-left:6px">Sign up</a></div></div>');
function showGate(){var u=location.pathname.split('/').pop()||'index.html';sv('mn_next',u+location.search);$('gate').hidden=false}
$('gx').onclick=function(){$('gate').hidden=true};
document.addEventListener('click',function(e){if(user)return;if(e.target.closest('#wa,#pwa,#bgo,#dgo,a[href^="design.html"],a[href^="book.html"]')){e.preventDefault();e.stopPropagation();showGate()}},true);
if(!user&&(pg==='design'||pg==='book'))showGate();

var bag=ld('mn_bag',{});
function addBag(i,sz,q){var k=i+'|'+(sz||'');bag[k]=(bag[k]||0)+(q||1);sv('mn_bag',bag);renderBag()}
function renderBag(){var k=Object.keys(bag),t=0,q=0,msg='Hello '+BRAND+', I\u2019d like to order:\n';
$('dl').innerHTML=k.length?k.map(function(key){var a=key.split('|'),x=P[+a[0]],n=bag[key];if(!x)return '';t+=x.p*n;q+=n;msg+='• '+n+' × '+x.n+(a[1]?' (size '+a[1]+')':'')+' ('+naira(x.p*n)+')\n';
return '<div class="li"><span>'+n+' × '+x.n+(a[1]?' · '+a[1]:'')+'<br><span style="color:var(--muted)">'+naira(x.p*n)+'</span></span><button data-r="'+key+'">Remove</button></div>'}).join(''):'<p class="sub">Your bag is empty.</p>';
msg+='Total: '+naira(t);$('tt').textContent=naira(t);$('bc').textContent=q;$('wa').href=k.length?'https://wa.me/'+WA+'?text='+encodeURIComponent(msg):'#'}

function cardHtml(i){var x=P[i];return '<div class="card" data-i="'+i+'"><div class="sw" style="background:'+bgOf(x)+'">'+(x.tag?'<i class="tg">'+x.tag+'</i>':'')+'</div><div class="in"><div class="c">'+x.c+'</div><h3>'+x.n+'</h3><div class="r"><span>'+(x.was?'<s class="was">'+naira(x.was)+'</s> ':'')+naira(x.p)+'</span><button data-a="'+i+'">Add<span class="t2"> to bag</span></button></div></div></div>'}
var at=new URLSearchParams(location.search).get('t')||'F';
function inScope(x){if(pg==='women')return x.c!=='Accessories'&&x.g!=='M';if(pg==='men')return x.c!=='Accessories'&&x.g!=='F';if(pg==='accessories')return x.c==='Accessories'&&x.g===at;return true}
function tabs(){if(pg==='accessories'){$('tabs').innerHTML=ACCS.map(function(c){return '<button data-t="'+c[0]+'"'+(c[0]===at?' class="on"':'')+'>'+c[1]+'</button>'}).join('');return}
var cs=['All'].concat(P.filter(inScope).map(function(x){return x.c}).filter(function(v,i,a){return a.indexOf(v)===i}));$('tabs').innerHTML=cs.map(function(c){return '<button data-c="'+c+'"'+(c===cat?' class="on"':'')+'>'+c+'</button>'}).join('')}
function shop(){$('grid').innerHTML=P.map(function(x,i){return inScope(x)&&(pg==='accessories'||cat==='All'||x.c===cat)?cardHtml(i):''}).join('')}
document.addEventListener('click',function(e){var t=e.target,m;
if((m=t.closest('[data-a]'))){var x=P[+m.dataset.a];addBag(+m.dataset.a,sizes(x).length?'M':'');openBag();return}
if((m=t.closest('[data-r]'))){var k=m.dataset.r;if(--bag[k]<1)delete bag[k];sv('mn_bag',bag);renderBag();return}
if((m=t.closest('[data-d]'))){var r=m.closest('.rs,.tw').querySelector('.hs,.tiles');r.scrollBy({left:m.dataset.d*r.clientWidth*.8,behavior:'smooth'});return}
if((m=t.closest('#tabs [data-t]'))){at=m.dataset.t;tabs();shop();return}
if((m=t.closest('#tabs [data-c]'))){cat=m.dataset.c;tabs();shop();return}
if((m=t.closest('.card[data-i]'))){location.href='product.html?id='+m.dataset.i}
});

var ROWS=[['Women','women.html',function(x){return x.c!=='Accessories'&&x.g!=='M'}],['Men','men.html',function(x){return x.c!=='Accessories'&&x.g!=='F'}],['Accessories','accessories.html?t=F',function(x){return x.c==='Accessories'}]];
$('rsec').innerHTML=ROWS.map(function(r){var ids=[];P.forEach(function(x,i){if(r[2](x))ids.push(i)});
return '<div class="rs"><div class="rh"><h3>'+r[0]+'</h3><div class="rc"><a href="'+r[1]+'">See all '+r[0].toLowerCase()+' →</a><button class="ar" data-d="-1" aria-label="Scroll left">‹</button><button class="ar" data-d="1" aria-label="Scroll right">›</button></div></div><div class="grid hs">'+ids.slice(-5).reverse().map(cardHtml).join('')+'</div></div>'}).join('');

/* ---------- shop page ---------- */
if(pg==='women'||pg==='men'||pg==='accessories'){tabs();shop()}

/* ---------- product page ---------- */
if(pg==='product'){
var pi=+new URLSearchParams(location.search).get('id'),px0=P[pi]||P[0];pi=P.indexOf(px0);
var sz=sizes(px0),sel=sz.length?'M':'',qty=1,bk=px0.c==='Accessories'?'accessories.html?t='+px0.g:px0.g==='M'?'men.html':'women.html';
document.title=px0.n+' | '+BRAND;
var wl=function(){return 'https://wa.me/'+WA+'?text='+encodeURIComponent('Hello '+BRAND+', I\u2019d like to order '+qty+' × '+px0.n+(sel?' (size '+sel+')':'')+' ('+naira(px0.p*qty)+').')};
var rel=[];P.forEach(function(x,i){if(x.c===px0.c&&x.g===px0.g&&i!==pi)rel.push(i)});
$('pd').innerHTML='<a class="back" href="'+bk+'">← Back</a><div class="pdg"><div><div id="gmain" style="background:'+bgOf(px0,0)+'"></div><div class="th">'+[0,1,2,3].map(function(k){return '<button data-k="'+k+'" class="'+(k?'':'on')+'" style="background:'+bgOf(px0,k)+'" aria-label="View picture '+(k+1)+'"></button>'}).join('')+'</div></div><div class="info"><div class="c" style="color:var(--muted);text-transform:uppercase;letter-spacing:.08em;font-size:12px">'+px0.c+(px0.g==='M'?' · Men':px0.g==='F'?' · Women':' · Unisex')+'</div><h1>'+px0.n+'</h1><div class="pr">'+(px0.was?'<s class="was">'+naira(px0.was)+'</s> ':'')+naira(px0.p)+(px0.tag?' <i class="tg" style="position:static;vertical-align:middle">'+px0.tag+'</i>':'')+'</div><p class="sub">'+(px0.d||DESC[px0.c]||'')+'</p>'+
(sz.length?'<label class="sub" style="margin:0">Size</label><div class="sz" id="szs">'+sz.map(function(s){return '<button data-s="'+s+'" class="'+(s===sel?'on':'')+'">'+s+'</button>'}).join('')+'</div>':'')+
'<div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center"><div class="qty"><button data-q="-1" aria-label="Fewer">−</button><span id="qv">1</span><button data-q="1" aria-label="More">+</button></div><button class="btn" id="pa">Add to bag</button><a class="btn o" id="pwa" target="_blank" rel="noopener" style="margin:0">Order on WhatsApp</a></div>'+
'<dl class="dt"><div><dt>Fabric</dt><dd>'+(px0.f||'Quality fabric')+'</dd></div><div><dt>Sizes</dt><dd>'+(sz.length?sz.join(', ')+', or made to your measurements':'One size')+'</dd></div><div><dt>Care</dt><dd>Hand wash cold or dry clean. Iron on a low heat.</dd></div><div><dt>Delivery</dt><dd>Made to order. Timelines are confirmed with you on WhatsApp.</dd></div></dl></div></div>'+
(rel.length?'<h2>You may also like</h2><div class="grid" style="margin-top:18px">'+rel.slice(0,4).map(cardHtml).join('')+'</div>':'');
var upd=function(){$('qv').textContent=qty;$('pwa').href=wl()};upd();
$('pd').addEventListener('click',function(e){var t=e.target,m;
if((m=t.closest('[data-k]'))){var g=$('gmain');var kk=+m.dataset.k;g.style.opacity=0;setTimeout(function(){g.style.background=bgOf(px0,kk);g.style.opacity=1},150);document.querySelectorAll('.th button').forEach(function(b){b.classList.toggle('on',b===m)})}
if((m=t.closest('[data-s]'))){sel=m.dataset.s;document.querySelectorAll('#szs button').forEach(function(b){b.classList.toggle('on',b===m)});upd()}
if((m=t.closest('[data-q]'))){qty=Math.max(1,Math.min(20,qty+ +m.dataset.q));upd()}
if(t.id==='pa'){addBag(pi,sel,qty);openBag()}});
}

/* ---------- Our story page: scroll animations ---------- */
var rvs=document.querySelectorAll('.rv');
function count(el){el.querySelectorAll('[data-n]').forEach(function(c){var n=+c.dataset.n,t0=performance.now();(function f(t){var p=Math.min(1,(t-t0)/1400);c.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)})}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);count(e.target)}})},{threshold:.15});rvs.forEach(function(r){io.observe(r)})}else rvs.forEach(function(r){r.classList.add('in');count(r)});
var pxs=document.querySelectorAll('.px');
if(pxs.length&&!matchMedia('(prefers-reduced-motion:reduce)').matches)addEventListener('scroll',function(){var y=scrollY;pxs.forEach(function(p){p.style.translate='0 '+(y*(+p.dataset.s||.1))+'px'})},{passive:true});

/* ---------- sign in: phone + password + OTP ---------- */
if(pg==='signin'){
var mode='in',pend=null,code=null,exp=0,tm=null;
var normPhone=function(v){var d=v.replace(/\D/g,'');if(/^0[789][01]\d{8}$/.test(d))return '234'+d.slice(1);if(/^234[789][01]\d{8}$/.test(d))return d;return ''};
var hx=async function(s){try{var b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')}catch(e){return btoa(unescape(encodeURIComponent(s)))}};
$('atabs').onclick=function(e){var m=e.target.dataset.m;if(!m)return;mode=m;document.querySelectorAll('#atabs button').forEach(function(b){b.classList.toggle('on',b.dataset.m===m)});$('cfl').hidden=m==='in';$('am').textContent=''};
if(new URLSearchParams(location.search).get('m')==='up')document.querySelector('#atabs [data-m="up"]').click();
$('ago').onclick=async function(){var m=$('am'),p=normPhone($('ph').value),pw=$('pw').value,us=ld('mn_users',{});
if(!p){m.textContent='Enter a valid Nigerian phone number, for example 0803 123 4567.';return}
if(pw.length<(mode==='up'?8:1)){m.textContent=mode==='up'?'Use a password of at least 8 characters.':'Enter your password.';return}
var h=await hx(pw);
if(mode==='up'){if($('pw2').value!==pw){m.textContent='The passwords don\u2019t match.';return}if(us[p]){m.textContent='This number already has an account. Please sign in.';return}}
else if(!us[p]||us[p]!==h){m.textContent='Phone number or password is incorrect.';return}
m.textContent='';pend={p:p,h:h};sendOtp()};
function cd(n){clearTimeout(tm);var b=$('rsd');b.disabled=n>0;b.textContent=n>0?'Resend in '+n+'s':'Resend code';if(n>0)tm=setTimeout(function(){cd(n-1)},1000)}
function sendOtp(){var m=$('am2');m.textContent='';$('s1').hidden=true;$('s2').hidden=false;$('otp').value='';
$('ot').textContent='Enter the 6-digit code sent to 0'+pend.p.slice(3,6)+' ••• '+pend.p.slice(-4)+'.';
if(OTP_SEND_URL){fetch(OTP_SEND_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({phone:'+'+pend.p})}).catch(function(){m.textContent='We couldn\u2019t send the code. Please try again.'})}
else if(OTP_DEMO){code=String(Math.floor(100000+Math.random()*900000));$('dm2').hidden=false;$('dm2').textContent='Demo mode: no SMS is sent. Your code is '+code}
exp=Date.now()+3e5;cd(30)}
$('avf').onclick=async function(){var m=$('am2'),v=$('otp').value.trim(),ok=false;
if(OTP_VERIFY_URL){try{var r=await fetch(OTP_VERIFY_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({phone:'+'+pend.p,code:v})});ok=r.ok}catch(e){}}
else ok=OTP_DEMO&&v===code&&Date.now()<exp;
if(!ok){m.textContent='That code isn\u2019t right or has expired. Please try again.';return}
if(mode==='up'){var us=ld('mn_users',{});us[pend.p]=pend.h;sv('mn_users',us)}
sv('mn_user',{p:pend.p});var nx=ld('mn_next','index.html');try{localStorage.removeItem('mn_next')}catch(x){}location.href=/^[a-z]+\.html(\?.*)?$/.test(nx)?nx:'index.html'};
$('rsd').onclick=sendOtp;$('abk').onclick=function(){$('s1').hidden=false;$('s2').hidden=true};
}



var bd=$('bd'),td=new Date();bd.min=td.getFullYear()+'-'+String(td.getMonth()+1).padStart(2,'0')+'-'+String(td.getDate()).padStart(2,'0');
$('bgo').onclick=function(){var n=$('bn').value.trim(),p=$('bp').value.trim(),d=bd.value,m=$('bm');
if(!n||!p||!d){m.textContent='Please add your name, phone number and a preferred date.';return}
var dt=new Date(d+'T00:00:00');if(dt.getDay()===0){m.textContent='We\u2019re closed on Sundays. Please pick another day.';return}
var ds=dt.toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'}),nt=$('bnote').value.trim();
var msg='Hello '+BRAND+', I\u2019d like to book a fitting.\nName: '+n+'\nPhone: '+p+'\nService: '+$('bsv').value+'\nDate: '+ds+'\nTime: '+$('bt').value+(nt?'\nNotes: '+nt:'');
if(!ENDPOINT)m.textContent='Opening WhatsApp to send your request\u2026';
sendReq({form:'Fitting booking',name:n,phone:p,service:$('bsv').value,date:ds,time:$('bt').value,notes:$('bnote').value.trim()},null,msg,m)};
var CO=[['Ivory','#e9dcc3'],['Gold','#c9973f'],['Emerald','#1f6b4f'],['Burgundy','#7a1f2b'],['Royal blue','#1f3f8a'],['Black','#1c1917']],ci=2;
var GM={'Dress':'dress','Skirt & top set':'set','Pant suit':'pant','Jumpsuit':'jump','Kaftan / Agbada':'kaftan','Corset':'corset','Something else':'other'};
function fx(k){var w=$('dmn'),b=$('bs');w.classList.remove('tw2');b.classList.remove('go');void w.getBoundingClientRect();if(k==='c')w.classList.add('tw2');b.classList.add('go')}
function dview(){$('dsw').innerHTML=CO.map(function(c,i){return '<button class="cs'+(i===ci?' on':'')+'" data-i="'+i+'" title="'+c[0]+'" aria-label="'+c[0]+'" style="background:'+c[1]+'"></button>'}).join('');
$('dmn').style.setProperty('--gc',CO[ci][1]);var gid=GM[$('dg').value]||'other';document.querySelectorAll('#dmn .gm').forEach(function(g){g.classList.toggle('on',g.id==='g-'+gid)});
$('dtx').textContent=$('dg').value+' \u00b7 '+$('df').value+' \u00b7 '+CO[ci][0]}
$('dsw').onclick=function(e){var i=e.target.dataset.i;if(i==null)return;ci=+i;dview();fx('c')};
$('dg').oninput=function(){dview();fx('g')};$('df').oninput=dview;$('dn').min=bd.min;
$('dgo').onclick=function(){var n=$('dnm').value.trim(),m=$('dm'),nt=$('dnote').value.trim(),by=$('dn').value;
if(!n){m.textContent='Please add your name.';return}
var msg='Hello '+BRAND+', I\u2019d like a custom design.\nName: '+n+'\nGarment: '+$('dg').value+'\nFabric: '+$('df').value+'\nColour: '+CO[ci][0]+'\nBudget: '+$('db').value+(by?'\nNeeded by: '+by:'')+(nt?'\nIdeas: '+nt:'')+(hasImg?'\nReference picture: I will attach it in this chat':'');
if(!ENDPOINT)m.textContent=hasImg?'Opening WhatsApp. Remember to attach your reference picture in the chat.':'Opening WhatsApp to send your brief\u2026';
sendReq({form:'Custom design',name:n,garment:$('dg').value,fabric:$('df').value,colour:CO[ci][0],budget:$('db').value,needed_by:by,ideas:nt},imgFile,msg,m)};

var stg=$('stg'),mn=$('mn'),spk=$('sp');
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
stg.addEventListener('pointermove',function(e){var r=stg.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;mn.style.transform='rotateY('+(x*28)+'deg) rotateX('+(-y*14)+'deg)';spk.style.transform='translate('+(x*-14)+'px,'+(y*-8)+'px)'});
stg.addEventListener('pointerleave',function(){mn.style.transform='';spk.style.transform=''})}
var hasImg=false,imgFile=null;
function sendReq(f,file,wa,m){
if(!ENDPOINT){window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(wa),'_blank','noopener');return}
var fd=new FormData();Object.keys(f).forEach(function(k){fd.append(k,f[k])});if(file)fd.append('reference_picture',file);
m.textContent='Sending\u2026';
fetch(ENDPOINT,{method:'POST',body:fd,headers:{Accept:'application/json'}}).then(function(r){m.textContent=r.ok?'Thank you! We\u2019ve received your request and will be in touch on WhatsApp.':'Sorry, that didn\u2019t send. Please try again or message us on WhatsApp.'}).catch(function(){m.textContent='Sorry, that didn\u2019t send. Please check your connection and try again.'})}
if(ENDPOINT)$('dhint').textContent='Your picture is sent along with your request.';
function showImg(file){if(!file||file.type.indexOf('image/')!==0)return;var r=new FileReader();r.onload=function(){$('dim').src=r.result;$('dim').hidden=false;$('drm').hidden=false;$('dph').hidden=true;hasImg=true;imgFile=file};r.readAsDataURL(file)}
$('dfile').onchange=function(){showImg(this.files[0])};
$('drm').onclick=function(e){e.preventDefault();$('dim').hidden=true;$('dim').removeAttribute('src');$('drm').hidden=true;$('dph').hidden=false;$('dfile').value='';hasImg=false;imgFile=null};
$('drp').ondragover=function(e){e.preventDefault()};
$('drp').ondrop=function(e){e.preventDefault();showImg(e.dataTransfer.files[0])};
dview();

document.querySelectorAll('.addr').forEach(function(e){e.textContent=ADDR});
$('mp').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(ADDR);
if(HERO_IMAGE)$('heroimg').style.background='url("'+HERO_IMAGE+'") center/cover no-repeat';
/* arrows for the Women / Men / Accessories tile row */
document.querySelectorAll('.tiles').forEach(function(t){var w=document.createElement('div');w.className='tw';t.parentNode.insertBefore(w,t);w.appendChild(t);w.insertAdjacentHTML('beforeend','<button class="ar al" data-d="-1" aria-label="Scroll left">‹</button><button class="ar arr" data-d="1" aria-label="Scroll right">›</button>');
function chk(){w.classList.toggle('no',t.scrollWidth<=t.clientWidth+4)}chk();addEventListener('resize',chk)});
/* flash sale bar: repeats the message so it can scroll without end */
(function(){var f=$('fst'),t=f.dataset.text;if(t){var u='<span>⚡ '+t+'</span>',h='';for(var n=0;n<16;n++)h+=u;f.innerHTML=h}})();
/* wording changed in the admin page */
if(typeof STORE!=='undefined'&&STORE.text)document.querySelectorAll('[data-k]').forEach(function(e){var v=STORE.text[e.dataset.k];if(v==null||v==='')return;if(e.dataset.n!==undefined){e.dataset.n=parseInt(v)||0;return}e.innerHTML=v.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>')});
renderBag();
})();
