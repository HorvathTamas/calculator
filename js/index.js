$( document ).ready(function(){ 
 var currentContent, digit, result, calculationString;
 var lastButtonWasEqual = false; 
 var memory = [];
  
 $("#screen").html("0"); 
 $("#clear").on("click", removeAll);
 $("#equal").on("click", getResult);
 $("#decimalPoint").on("click", makeDecimal); 
 $(".digits").on("click", addDigit);
 $(".log").on("click", doMath);
  
  
 function addDigit() {
   digit = this.id
   currentContent = "";
   
   if (isNaN($("#screen").html()) && $("#screen").html() != "Too long!") {
     currentContent = $("#screen").html();
     
     if (memory.length != 0) {
       memory.push(currentContent);
     }
    
     $("#screen").html(digit);
     console.log(memory);
   } else if ($("#screen").html() == "Too long!") {
      $("#screen").html(digit);
      console.log(memory);
   } else {
      if ($("#screen").html() != "0" && (!lastButtonWasEqual)) {
      currentContent = $("#screen").html();
      };
   
     if (currentContent.length >= 11) {
       $("#screen").html("Too long!");
     } else {
        $("#screen").html(currentContent + digit);
     }
   }; 
   
   lastButtonWasEqual = false;
 }//end of addDigit
  
 function removeAll() {
   $("#screen").html("0");
   memory = [];
   lastButtonWasEqual = false;
   
 }//end of removeAll
 
 function doMath() {
   digit = this.value;
   currentContent = "";
   
   if (!isNaN($("#screen").html())) {
      currentContent = $("#screen").html();
      memory.push(currentContent);
      $("#screen").html(digit);
      console.log(memory);
      
   } else if ($("#screen").html() != "Too long!") {
      $("#screen").html(digit);
   };
   lastButtonWasEqual = false;
 }//end of doMath
  
 function getResult() {
   if (!isNaN($("#screen").html())) {
     currentContent = $("#screen").html();
     memory.push(currentContent);
     
     for (var i = 0; i < memory.length; i++) {
       if (memory[i] == "Too long!") {
         delete memory[i];
         memory = memory.filter(Boolean);
       }
     } 
     
     calculationString = memory.join('');
     console.log(calculationString);
     result = eval(calculationString);
     
     if (Math.round(result) !== result) {
       result = parseFloat(result.toFixed(2));
     }
    
     console.log(result);
     memory = [];
     
     if (result.toString().length >= 11) {
       $("#screen").html("Too long!");
     } else {
        $("#screen").html(result);
     }
     
     lastButtonWasEqual = true;
   }
 }//end of getResult
  
 function makeDecimal() {
   if (!isNaN($("#screen").html())) {
    
     var arrCheck =  ($("#screen").html()).split('');
     if (!arrCheck.includes(".")) {
       digit = this.value
       currentContent = $("#screen").html();
     
       if (currentContent.length >= 11) {
         $("#screen").html("Too long!");
       } else {
        $("#screen").html(currentContent + digit);
       } 
     }  
   } 
   
 }//end of makeDecimal
    
}); //end of document ready

$(document).keydown(function(e){
  event.preventDefault();
  switch(e.keyCode) {
    case 96:
      $("#0").click();
      break;
    case 97:
      $("#1").click();
      break;  
    case 98:
      $("#2").click();
      break;
    case 99:
      $("#3").click();
      break;
    case 100:
      $("#4").click();
      break;
    case 101:
      $("#5").click();
      break;
    case 102:
      $("#6").click();
      break;
    case 103:
      $("#7").click();
      break;
    case 104:
      $("#8").click();
      break;
    case 105:
      $("#9").click();
      break;
    case 48:
      $("#0").click();
      break;  
    case 49:
      $("#1").click();
      break;
    case 50:
      $("#2").click();
      break;
    case 51:
      $("#3").click();
      break;
    case 52:
      $("#4").click();
      break;
    case 53:
      $("#5").click();
      break;
    case 54:
      $("#6").click();
      break;
    case 55:
      $("#7").click();
      break;
    case 56:
      $("#8").click();
      break;
    case 57:
      $("#9").click();
      break;
    case 111:
      $("#divide").click();
      break;
    case 106:
      $("#multiply").click();
      break;
    case 109:
      $("#subtract").click();
      break;
    case 107:
      $("#add").click();
      break;
    case 13:
      $("#equal").click();
      break;
    case 110:
      $("#decimalPoint").click();
      break;
    case 190:
      $("#decimalPoint").click();
      break;
    case 188:
      $("#decimalPoint").click();
      break;  
    default:
      $("#clear").click();
  }
}); //end of document keydown