//declare variables
const bill = document.querySelector('#bill');
const btns = document.querySelectorAll('.btn');
const numPeo = document.querySelector('#numPeople');
const tipAmount = document.querySelector('#tipAmount');
const totalTipPerson = document.querySelector('#totalTipPer');
const resetBtn = document.querySelector('#reset');
const tips = [0.05,0.10,0.15,0.25,0.50,0];

const customIn = document.querySelector('#customin');
const errormsn = document.querySelector('#error');
let tipPer;

  

  
  
   bill.addEventListener('keyup',getbill)
   function getbill(){
    let billamount = parseInt(bill.value);
     
     if(billamount === 0){
      bill.style.border = 'red';
      bill.textContent = 'cant be zero';
     }
    tipAmount.textContent = billamount;

    return billamount;
    
    
   }



   
for(let i=0; i < btns.length; i++){

     for(let y=0; y < tips.length; y++) {
      btns[i].addEventListener('click',function(e) {
   
   
   if(e.target === btns[0]){
   	
   	  tipPer = tips[0]
   }else if(e.target === btns[1]){
    

     tipPer= tips[1]
 
   }else if(e.target === btns[2]){
    

     tipPer = tips[2]
   }else if(e.target===btns[3]){
    

      tipPer = tips[3]
   }else if(e.target === btns[4]){


     tipPer = tips[4]

   }else if(e.target===btns[5]){
  

     tipPer = customIn.value / 100;
}
    
    tipAmount.textContent = getbill() * tipPer;
})
       
  }
}


numPeo.addEventListener('keyup',numberp)

 function numberp () {

  let numberpe = parseInt(numPeo.value);
  let total = getbill() * tipPer / numberpe;
  let final = total / numberpe;

tipAmount.textContent = total.toFixed(2);
 

  totalTipPerson.textContent =  final.toFixed(2);
  return numberpe;
 }




 resetBtn.addEventListener('click',erase);

function erase(){
bill.value = '';
numPeo.value = '';
tipAmount.textContent = '';
  totalTipPerson.textContent = '';

}




 


  
  
  
     
     
 
 
  





