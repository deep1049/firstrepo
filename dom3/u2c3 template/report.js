// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
let form=document.querySelector("form");
form.addEventListener("submit",function(elem){
 elem.preventDefault();
 let avatar=document.querySelector("#image").value;
 let name=document.querySelector("#name").value;
 let batch=document.querySelector("#batch").value;
 let DSA=document.querySelector("#dsa").value;
 let skillathon=document.querySelector("#cs").value;
 let coding=document.querySelector("#coding").value;
 console.log(avatar,name,batch,DSA,skillathon,coding);

 let tr=document.createElement("tr");

 let td1=document.createElement("td");
 let image=document.createElement("img");
 image.src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png";
 td1.append(image);
 

 let td2=document.createElement("td");
 td2.innerText=name;
 let td3=document.createElement("td");
 td3.innerText=batch;
 let td4=document.createElement("td");
 td4.innerText=DSA;
 let td5=document.createElement("td");
 td5.innerText=skillathon;
 let td6=document.createElement("td");
 td6.innerText=coding;

 let per=((Number(DSA)+Number(skillathon)+Number(coding))/30)*100;
 let td7=document.createElement("td");
 td7.innerText=per.toFixed(3);

 let td8=document.createElement("td");
 if(per>50){
    td8.innerText="REGULAR";
 }else{
    td8.innertext="ASYNC";
 }
 let td9=document.createElement("td");
 td9.innerText="DELETE";
 td9.style.backgroundColor="red";
 td9.addEventListener("click",function(){
    
 })

 tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
 document.querySelector("tbody").append(tr);
 

})
