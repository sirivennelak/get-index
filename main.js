var ssc;
var sscmarks;
var sscmarks1;
var c1;
var sscper;
var sscradio;
var sscyop;
var sch;
var course;
var branch;
var bmks;
var bmks1;
var bper;
var byop;
var bcol;
var bradio;
var inter;
var intmks;
var intmks1;
var intper;
var intyop;
var intcol;
var interradio;

var name;
var rollno;
var emailid;
var store;


function getdetails() {
c1=document.getElementById('c1').value;
  ssc=document.getElementById('ssc').value;
sscmarks1=document.getElementById('sscmarks1');
sscmarks=document.getElementById('sscmarks');
sscper=document.getElementById('sscper').value;
sscyop=document.getElementById('sscyop').value;
sch=document.getElementById('sch').value;
console.log(c1);


if (sscmarks.checked) {
sscradio=sscmarks.value;

}
else {
   sscradio=sscmarks1.value;

}


inter=document.getElementById('inter').value;
intmks1=document.getElementById('intmks1');
intmks=document.getElementById('intmks');
intper=document.getElementById('intper').value;
intyop=document.getElementById('intyop').value;
intcol=document.getElementById('intcol').value;

if (intmks.checked) {
interradio=intmks.value;
}
else {
   interradio=intmks1.value;

}

course=document.getElementById('course').value;
branch=document.getElementById('branch').value;
bmks1=document.getElementById('bmks1');
bmks=document.getElementById('bmks');
bper=document.getElementById('bper').value;
byop=document.getElementById('byop').value;
bcol=document.getElementById('bcol').value;
name=document.getElementById('name').value;
rollno=document.getElementById('rollno').value;
emailid=document.getElementById('emailid').value;
console.log(name+"   "+rollno+"   "+emailid);

if (bmks.checked) {
bradio=bmks.value;

}
else {
   bradio=bmks1.value;

}

console.log(course +"  "+branch+" "+bradio+" "+bper+" "+byop+" "+bcol);
console.log(inter+"  "+interradio+""+intper+" "+intyop+" "+intcol);
console.log(ssc+"  "+sscradio+" "+sscper+" "+sscyop+"  "+sch);





if(!window.indexedDB){
  console.log("indexedDB not working.....!");
}
var request= window.indexedDB.open("svitDB",1);
request.onerror=e=>{
  console.log(e);
}
request.onupgradeneeded=e=>{
var dbname=e.target.result;
dbname.createObjectStore("cse",{ keyPath:"rollno"});
  console.log("upgraded..!");

}
request.onsuccess=e=>{
var dbname=e.target.result;
store=dbname.transaction("cse","readwrite").objectStore("cse");

store.put(
  {
    "name":name,
    "rollno":rollno,
    "email":emailid,
    "c1":c1,
    "education":{
"ssc":[
ssc,
  sscradio,
  sscper,
  sscyop,
  sch
],
"inter":[
  inter,
  interradio,
  intper,
  intyop,
  intcol

],
"btech":[

course,
branch,
bradio,
bper,
byop,
bcol
]

}
      }
  );
  console.log("success....!");
 }

localStorage.setItem("rollno", rollno);
window.open("resume.html ","-self");
}
