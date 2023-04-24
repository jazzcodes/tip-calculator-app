const bill=document.querySelector("#bill-input");
const p5=document.querySelector("#p5");
const p10=document.querySelector("#p10");
const p15=document.querySelector("#p15");
const p25=document.querySelector("#p25");
const p50=document.querySelector("#p50");
const custom=document.querySelector("#custom-input");
const people=document.querySelector("#people-input");
const resetBtn=document.querySelector(".reset");
const tipResult=document.querySelector(".tip-amount__result");
const totalResult=document.querySelector(".total-amount__result");
const errorPeople=document.querySelector(".people__error");

console.log(bill.value);
console.log(people.value);
console.log(tipResult.innerText);
console.log(totalResult.innerText);



p5.addEventListener("click",function(e)
{   
//   if(people.value=="")
//   {
//     tipResult.innerText="$0.00";
//     totalResult.innerText="$0.00";
//     console.log("working");
  
//   }
  
// else{
    const tipAmount = 0.05*bill.value;
    tipRoundedOff=Math.round((tipAmount*100/people.value))/100;
    tipResult.innerText=`$${tipRoundedOff}`;
    resultRoundedOff=Math.round(people.value*tipRoundedOff*100)/100;
    totalBill=Math.round(bill.value/people.value*100)/100;
    totalResult.innerText=`$${tipRoundedOff+totalBill}`;
    custom.value="";
    e.preventDefault();
  // }
})

p10.addEventListener("click",function(e)
{   
  // if(people.value=="")
  // {
  //   tipResult.innerText="$0.00";
  //   totalResult.innerText="$0.00";
  // }
  // else{
    const tipAmount = 0.1*bill.value;
    tipRoundedOff=Math.round((tipAmount*100/people.value))/100;
    tipResult.innerText=`$${tipRoundedOff}`;
    resultRoundedOff=Math.round(people.value*tipRoundedOff*100)/100;
    totalBill=Math.round(bill.value/people.value*100)/100;
    totalResult.innerText=`$${tipRoundedOff+totalBill}`;
    custom.value="";
    e.preventDefault();
  // }
})

p15.addEventListener("click",function(e)
{   
  // if(people.value=="")
  // {
  //   tipResult.innerText="$0.00";
  //   totalResult.innerText="$0.00";
  // }
  // else{
    const tipAmount = 0.15*bill.value;
    tipRoundedOff=Math.round((tipAmount*100/people.value))/100;
    tipResult.innerText=`$${tipRoundedOff}`;
    resultRoundedOff=Math.round(people.value*tipRoundedOff*100)/100;
    totalBill=Math.round(bill.value/people.value*100)/100;
    totalResult.innerText=`$${tipRoundedOff+totalBill}`;
    custom.value="";
    e.preventDefault();
  // }
})

p25.addEventListener("click",function(e)
{   
  // if(people.value=="")
  // {
  //   tipResult.innerText="$0.00";
  //   totalResult.innerText="$0.00";
  // }
  // else{
  
    const tipAmount = 0.25*bill.value;
    tipRoundedOff=Math.round((tipAmount*100/people.value))/100;
    tipResult.innerText=`$${tipRoundedOff}`;
    resultRoundedOff=Math.round(people.value*tipRoundedOff*100)/100;
    totalBill=Math.round(bill.value/people.value*100)/100;
    totalResult.innerText=`$${tipRoundedOff+totalBill}`;
    custom.value="";
    e.preventDefault();
  // }
})

p50.addEventListener("click",function(e)
{   
  // if(people.value=="")
  // {
  //   tipResult.innerText="$0.00";
  //   totalResult.innerText="$0.00";
  // }
  // else{
    
    const tipAmount = 0.5*bill.value;
    tipRoundedOff=Math.round((tipAmount*100/people.value))/100;
    tipResult.innerText=`$${tipRoundedOff}`;
    resultRoundedOff=Math.round(people.value*tipRoundedOff*100)/100;
    totalBill=Math.round(bill.value/people.value*100)/100;
    totalResult.innerText=`$${tipRoundedOff+totalBill}`;
    custom.value="";
    e.preventDefault();
  // }
})


custom.addEventListener("input", function(e)
{   
  // if(people.value=="")
  // {
  //   tipResult.innerText="$0.00";
  //   totalResult.innerText="$0.00";
  // }

  // else{
    const tipAmount = (e.target.value*bill.value)/100;
    tipRoundedOff=Math.round((tipAmount*100/people.value))/100;
    tipResult.innerText=`$${tipRoundedOff}`;
    resultRoundedOff=Math.round(people.value*tipRoundedOff*100)/100;
    totalBill=Math.round(bill.value/people.value*100)/100;
    totalResult.innerText=`$${tipRoundedOff+totalBill}`;
  // }
});




if(bill.value=='' && people.value=='')
{
    resetBtn.style.opacity="0.3";

}



bill.addEventListener("input", function(e)
{
  console.log(e.target.value);
  if(e.target.value!=="")
  {
   
    resetBtn.style.opacity="1";

  }
  else{

    resetBtn.style.opacity="0.3";
  }

});

people.addEventListener("input", function(e)
{
  console.log(e.target.value);
  if(e.target.value!=="")
  {
    resetBtn.style.opacity="1";
    if(e.target.value==0)
    {
       errorPeople.innerText="Can't be zero";
       people.style.borderColor="rgb(224, 61, 61)";
    }

  
  }

  // else{
  //   tipResult.innerText="$0.00";
  //   totalResult.innerText="$0.00";
  //   resetBtn.style.opacity="0.3";
  //   errorPeople.innerText="";
  //   people.style.borderColor="var(--accent)";
  // }






});


// custom.addEventListener("input", function(e)
// {
//   console.log(e.target.value);
//   if(e.target.value!=="")
//   {
//     resetBtn.style.opacity="1";
//   }
//   else{
//     resetBtn.style.opacity="0.3";
//   }

// });


  resetBtn.addEventListener("click",function()
  {
    tipResult.innerText="$0.00";
    totalResult.innerText="$0.00";
    resetBtn.style.opacity="0.3";

  });




  console.log(resetBtn.disabled);