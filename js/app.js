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

var flag=0;

p5.addEventListener("click", function(e)
{
  console.log("p5 clicked");
  flag=5;
  console.log(flag);
  e.preventDefault();
});

p10.addEventListener("click", function(e)
{
  console.log("p10 clicked");
  flag=10;
  console.log(flag);
  e.preventDefault();
});

p15.addEventListener("click", function(e)
{
  console.log("p15 clicked");
  flag=15;
  console.log(flag);
  e.preventDefault();
});

p25.addEventListener("click", function(e)
{
  console.log("p25 clicked");
  flag=25;
  console.log(flag);
  e.preventDefault();
});

p50.addEventListener("click", function(e)
{
  console.log("p50 clicked");
  flag=50;
  console.log(flag);
  e.preventDefault();
});

custom.addEventListener("input", function(e)
{
  console.log("custom clicked");
  flag=e.target.value;
  console.log(flag);
  e.preventDefault();


});

function calc5(target)
{
    const tipAmount = 0.05*bill.value;
    tipRoundedOff=Math.round((tipAmount*100/target))/100;
    tipResult.innerText=`$${tipRoundedOff}`;
    resultRoundedOff=Math.round(target*tipRoundedOff*100)/100;
    totalBill=Math.round(bill.value/target*100)/100;
    totalResult.innerText=`$${tipRoundedOff+totalBill}`;
    custom.value="";
    console.log("p5 reached");
}

function calc10(target)
{
    const tipAmount = 0.05*bill.value;
    tipRoundedOff=Math.round((tipAmount*100/target))/100;
    tipResult.innerText=`$${tipRoundedOff}`;
    resultRoundedOff=Math.round(target*tipRoundedOff*100)/100;
    totalBill=Math.round(bill.value/target*100)/100;
    totalResult.innerText=`$${tipRoundedOff+totalBill}`;
    custom.value="";
    console.log("p10 reached");
}


function calc15(target)
{
    const tipAmount = 0.15*bill.value;
    tipRoundedOff=Math.round((tipAmount*100/target))/100;
    tipResult.innerText=`$${tipRoundedOff}`;
    resultRoundedOff=Math.round(target*tipRoundedOff*100)/100;
    totalBill=Math.round(bill.value/target*100)/100;
    totalResult.innerText=`$${tipRoundedOff+totalBill}`;
    custom.value="";
    console.log("p15 reached");
}


function calc25(target)
{
    const tipAmount = 0.25*bill.value;
    tipRoundedOff=Math.round((tipAmount*100/target))/100;
    tipResult.innerText=`$${tipRoundedOff}`;
    resultRoundedOff=Math.round(target*tipRoundedOff*100)/100;
    totalBill=Math.round(bill.value/target*100)/100;
    totalResult.innerText=`$${tipRoundedOff+totalBill}`;
    custom.value="";
    console.log("p25 reached");
}


function calc50(target)
{
    const tipAmount = 0.50*bill.value;
    tipRoundedOff=Math.round((tipAmount*100/target))/100;
    tipResult.innerText=`$${tipRoundedOff}`;
    resultRoundedOff=Math.round(target*tipRoundedOff*100)/100;
    totalBill=Math.round(bill.value/target*100)/100;
    totalResult.innerText=`$${tipRoundedOff+totalBill}`;
    custom.value="";
    console.log("p50 reached");
}

function calcCustom(target, customVal)
{
  // custom.addEventListener("click", function(e)
  // {
    console.log("CV", customVal);
    console.log("billV", bill.value);
    const tipAmount = (customVal*bill.value)/100;
    tipRoundedOff=Math.round((tipAmount*100/target))/100;
    tipResult.innerText=`$${tipRoundedOff}`;
    resultRoundedOff=Math.round(target*tipRoundedOff*100)/100;
    totalBill=Math.round(bill.value/target*100)/100;
    totalResult.innerText=`$${tipRoundedOff+totalBill}`;
    console.log("custom reached");
  // });

}



function calc()
{
  p5.addEventListener("click", function()
  {
    console.log("people", people.value);
    calc5(people.value); 
  });
  p10.addEventListener("click", function()
  {
    console.log("people", people.value);
    calc10(people.value); 
  });
  p15.addEventListener("click", function()
  {
    console.log("people", people.value);
    calc15(people.value); 
  });
  p25.addEventListener("click", function()
  {
    console.log("people", people.value);
    calc25(people.value); 
  });
  p50.addEventListener("click", function()
  {
    console.log("people", people.value);
    calc50(people.value); 
  });

  custom.addEventListener("input", function(e)
  {
    const customVal=e.target.value;
    console.log("people", people.value);
    calcCustom(people.value, customVal); 
  });

  custom.addEventListener("keypress", function(e)
{
   if(e.key==="Enter")
   {
    e.preventDefault();
    calcCustom(people.value,e.target.value);
   }
});
}


people.addEventListener("input", function(e)
{
  console.log("target", e.target.value);
  if(e.target.value!=="")
  {
    resetBtn.style.opacity="1";
    if(e.target.value==0)
    {
       errorPeople.innerText="Can't be zero";
       people.style.borderColor="rgb(224, 61, 61)";
    }
    console.log("midway");
    console.log(flag);
    console.log("custom value", custom.value);

    if(flag==5)
        {
          calc5(people.value); 
          calc();
        }
    }

    if(flag==10)
    {
        calc10(e.target.value);
        calc();
    }

    if(flag==15)
    {
        calc15(e.target.value);
        calc();
    }

    if(flag==25)
    {
        calc25(e.target.value);
        calc();
    }

    if(flag==50)
    {
        calc50(e.target.value);
        calc();
    }

    if(flag==custom.value)
    {
      
      calcCustom(e.target.value, custom.value);
      calc();
    }
    e.preventDefault();
  }
);



// Reset Btn
if(bill.value=='' && people.value=='')
{
    resetBtn.style.opacity="0.3";

}

resetBtn.addEventListener("click", function()
{
  tipResult.innerText="$0.00";
  totalResult.innerText="$0.00";
});


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