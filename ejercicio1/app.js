function readInput(){
    let inputString = document.getElementById("prices").value;
    let result="";
    if(inputString !==""){
        inputString = inputString.split(",");
        inputString = inputString.map(i=> parseFloat(i));
        result = calculateMaxProfit(inputString);
    }else{
        result="Wrong entry";
    }
    document.write(`<h3>${result}</h3>`)
}
function calculateMaxProfit(prices) { 
  
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;
    let changeBuyPrice = true;
    
    for(let i = 0; i < prices.length-1; i++) {
      sellPrice = prices[i+1]; 
      
      if (changeBuyPrice) 
        buyPrice = prices[i]; 
      
      if (sellPrice < buyPrice) {
        changeBuyPrice = true; 
      }else { 
        let tempProfit = sellPrice - buyPrice;
        if (tempProfit > maxProfit)  
          maxProfit = tempProfit; 
        changeBuyPrice = false;
      }
    }
    
    return maxProfit;
           
  }
  
  /*console.log(calculateMaxProfit([44, 30, 22, 32, 35, 30, 41, 38, 15]));
  console.log(calculateMaxProfit([2,3,4,2]));
  console.log(calculateMaxProfit([50, 30, 4, 2]));*/