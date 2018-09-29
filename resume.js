var rollnumber=localStorage.getItem("rollno");





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
var data=store.get(rollnumber);
data.onsuccess=e=>
{
  var res=e.target.result;
  var main=document.getElementById('maindiv');
  var left=document.createElement("div");
  left.classList.add("leftdiv");
  var name1=document.createElement("h3");
  name1.textContent=res.name;
  left.appendChild(name1);
  main.appendChild(left);
  var hr=document.createElement("hr");
  left.appendChild(hr);
  var roll=document.createElement("p");
  roll.textContent=res.rollno;
    left.appendChild(roll);
    var email=document.createElement("p");
    email.textContent=res.email;

    left.appendChild(email);

    var right=document.createElement("div");
    right.classList.add("rightdiv");
    var co=document.createElement("p");
    co.textContent=res.c1;
    right.appendChild(co);
    main.appendChild(right);


}

  console.log("success....!");
 }
