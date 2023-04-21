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

console.log(bill.value);
console.log(people.value);
console.log(tipResult.innerText);
console.log(totalResult.innerText);

p5.addEventListener("click",function()
{   const tipAmount = 0.05*bill.value;
    tipResult.innerText=`$${tipAmount}.00`;
    totalResult.innerText=`$${people.value*tipAmount}.00`;
    
})

p10.addEventListener("click",function()
{   const tipAmount = 0.1*bill.value;
    tipResult.innerText=`$${tipAmount}.00`;
    totalResult.innerText=`$${people.value*tipAmount}.00`;
})

p15.addEventListener("click",function()
{   const tipAmount = 0.15*bill.value;
    tipResult.innerText=`$${tipAmount}.00`;
    totalResult.innerText=`$${people.value*tipAmount}.00`;
})

p25.addEventListener("click",function()
{   const tipAmount = 0.25*bill.value;
    tipResult.innerText=`$${tipAmount}.00`;
    totalResult.innerText=`$${people.value*tipAmount}.00`;
})

p50.addEventListener("click",function()
{   const tipAmount = 0.5*bill.value;
    tipResult.innerText=`$${tipAmount}.00`;
    totalResult.innerText=`$${people.value*tipAmount}.00`;
})


custom.addEventListener("input", function(e)
{
    const tipAmount = (e.target.value*bill.value)/100;
    tipResult.innerText=`$${tipAmount}.00`;
    totalResult.innerText=`$${people.value*tipAmount}.00`;

    
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
  }
  else{
    resetBtn.style.opacity="0.3";
  }


});

custom.addEventListener("input", function(e)
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


