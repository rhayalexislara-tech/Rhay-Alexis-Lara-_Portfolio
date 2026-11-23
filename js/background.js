(function(){try{
if(!window.THREE)return;
var c=document.getElementById('bg'),r=new THREE.WebGLRenderer({canvas:c,alpha:true,antialias:true});
r.setPixelRatio(Math.min(devicePixelRatio,2));
var sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(60,1,.1,100);cam.position.z=7;
var n=1400,pos=new Float32Array(n*3);
for(var i=0;i<n;i++){var rad=5+Math.random()*9,t=Math.random()*6.283,u=Math.random()*2-1,q=Math.sqrt(1-u*u);
pos[i*3]=rad*q*Math.cos(t);pos[i*3+1]=rad*u;pos[i*3+2]=rad*q*Math.sin(t)}
var g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));
var pts=new THREE.Points(g,new THREE.PointsMaterial({color:0x8B7BFF,size:.045,transparent:true,opacity:.85}));sc.add(pts);
var ico=new THREE.Mesh(new THREE.IcosahedronGeometry(2.2,1),new THREE.MeshBasicMaterial({color:0x22D3EE,wireframe:true,transparent:true,opacity:.35}));
ico.position.set(3,0,-1);sc.add(ico);
var mx=0,my=0;addEventListener('pointerdown',function(){pts.scale.setScalar(1.3);ico.rotation.y+=1});addEventListener('pointermove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
function size(){r.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();ico.position.x=innerWidth<768?0:3}
addEventListener('resize',size);size();
var still=matchMedia('(prefers-reduced-motion:reduce)').matches;
function frame(){var s=scrollY/1500;
if(!still){pts.rotation.y+=.0008;ico.rotation.x+=.0025;ico.rotation.y+=.003}
cam.position.x+=(mx*1.5-cam.position.x)*.04;cam.position.y+=(-my*1.5-s-cam.position.y)*.04;cam.lookAt(0,-s,0);
pts.scale.x+=(1-pts.scale.x)*.06;pts.scale.y=pts.scale.z=pts.scale.x;r.render(sc,cam);if(!still)requestAnimationFrame(frame)}
frame();if(still)addEventListener('scroll',frame);
}catch(e){}})();
