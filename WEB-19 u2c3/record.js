let myForm=document.querySelector('form');
let name=document.getElementById('name');
let employeeID=document.getElementById('employeeID');
let department=document.getElementById('department');
let exp=document.getElementById('exp');
let email=document.getElementById('email');
let mbl=document.getElementById('mbl');
let tbody=document.querySelector('tbody');

let alldata=[];

myForm.addEventListener('submit',function(e){

    e.preventDefault();
    
    let data={};

    data.input0=name.value;
    data.input1=employeeID.value;
    data.input2=department.value;
    data.input3=exp.value;
    data.input4=email.value;
    data.input5=mbl.value;

    
alldata.push(data);

tbody.innerHTML=null;

alldata.map((ele)=>{

   let row=document.createElement('tr');
   let td1=document.createElement('td');
   let td2 =document.createElement('td');
   let td3=document.createElement('td');
   let td4=document.createElement('td');
   let td5=document.createElement('td');
   let td6=document.createElement('td');
   let td7 =document.createElement('td');
   let td8 =document.createElement('td');
    
   td1.innerText=ele.input0;
   td2.innerText=ele.input1;
   td3.innerText=ele.input2;
   td4.innerText=ele.input3;
   td5.innerText=ele.input4;
   td6.innerText=ele.input5;
   

   if((Number)(td4.innerText)>5)
   {
    td7.innerText="Experience";
   }
   if((Number)(td4.innerText)<=1)
   {
    td7.innerText="Fresher";
   }
   if((Number)(td4.innerText)>=2 && (Number)(td4.innerText)<=5)
   {
    td7.innerText="Junior";
   }
    
   td8.innerText="Delete";
   

   
   
      row.append(td1,td2,td3,td4,td5,td6,td7,td8);
   tbody.append(row);





})



})






