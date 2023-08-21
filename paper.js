function compMove(){
    const randomNumber = Math.random();
    let computeMove = '';
   if(randomNumber >= 0 && randomNumber < 1/3){
    computeMove = 'rock';
    
   }
   else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computeMove = 'paper';
    
   } 
 else if(randomNumber >= 2/3 && randomNumber < 1) {
    computeMove = 'scissors'
    
 }
 return computeMove;
 
 
 }
 
 
 
 function playGame(playerMove){
 
        
          computerMove = ''
 
          let    result = '';
 
    if (playerMove === 'rock'){
                
           if (computerMove === 'rock'){
             result =  'Tie.';
           
          }
          if (computerMove === 'paper'){
             result =  'You loose.';
            
          }
          if (computerMove === 'scissors'){
             result = 'You won.';
             
          }
          
          
 
    else if (playerMove === 'paper'){
          // result = '';
          if (computerMove === 'paper'){
             result = 'Tie.';
          }
          if (computerMove === 'rock'){
             result = 'You won.';
          }
          if (computerMove === 'scissors'){
             result = 'You loose.';
          }
    }
 
    else if (playerMove === 'scissors'){
       // result = '';
       if (computerMove === 'scissors'){
          result = 'Tie.';
       }
       if (computerMove === 'paper'){
          result = 'You won.';
       }
       if (computerMove === 'rock'){
          result = 'You loose.';
       }
    }
 }
    
 
    
   return result;
 }
 
 
 
 document.getElementById('btn').addEventListener('click',(e )=> {
        
      const  computerMove = compMove();
 
      let playerMove =e.target.innerHTML
      
      let result1 = playGame(playerMove);
      console.log(result1)
 
      alert(`You picked ${playerMove}.The ComputerMove is ${computerMove}.${ result1}`);
    
        
          
          
       
    
    
 });  
 document.getElementById('btn1').addEventListener('click' , (e)=>{
 
    const  computerMove = compMove();
 
    let playerMove =e.target.innerHTML
    
    let result1 = playGame(playerMove);
    console.log(result1)

    alert(`You picked ${playerMove}.The ComputerMove is ${computerMove}.${ result1}`);
  
          
    
 });
 document.getElementById('btn2').addEventListener('click' , (e)=>{
 
    const  computerMove = compMove();
 
    let playerMove =e.target.innerHTML
    
    let result1 = playGame(playerMove);
    console.log(result1)

    alert(`You picked ${playerMove}.The ComputerMove is ${computerMove}.${ result1}`);
  
          
    
 });