window.onload=function(){ 

  var numSquares=6;
  var colors=generateRandomColors(numSquares);
  var H1Background=document.querySelector("#H1Background");
  var squares=document.querySelectorAll(".square");
  var tryAgain=document.querySelector("#tryAgain");
  var colorDisplay=document.querySelector("#colorDisplay");
  var resetButton=document.querySelector("#reset");
  var pickedColor=pickColor();
  var eazyBtn=document.querySelector("#eazyBtn");
  var hardBtn=document.querySelector("#hardBtn");
  colorDisplay.textContent=pickedColor;

  //button - eazy

  eazyBtn.addEventListener("click",function(){

    eazyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares=2;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    hide();

  });

  //button - hard

  hardBtn.addEventListener("click",function(){
      numSquares=6;
      eazyBtn.classList.remove("selected");
      hardBtn.classList.add("selected");
      colors=generateRandomColors(numSquares);
      pickedColor=pickColor();
      colorDisplay.textContent=pickedColor;

        for(var i=0;i<=colors.length;i++)
        {

            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";

        }
  
  });

  //reset button
    resetButton.addEventListener("click", function(){ 
    tryAgain.textContent="";
    H1Background.style.backgroundColor="steelblue";
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    
    for(var i=0;i<=squares.length;i++){

      squares[i].style.backgroundColor=colors[i];
      
    }


    });

  for(var i=0;i<=squares.length;i++){ 
    //change square color
    squares[i].style.backgroundColor=colors[i];
    
    //add event listeners to squares
    squares[i].addEventListener("click",function(){

    clickedColor=this.style.backgroundColor;

        if(clickedColor===pickedColor){

          resetButton.textContent="Play Again!";
          H1Background.style.backgroundColor=clickedColor;
          tryAgain.textContent="Correct!";
          colorChanger(clickedColor);
          
        }else{

          this.style.backgroundColor="#232323";
          tryAgain.textContent="Try Again";
          
        }

    });


  }
  //schimbarea culorilor
  function colorChanger(colorPicked){

    for(var i=0;i<=squares.length;i++){
      squares[i].style.backgroundColor=colorPicked;
      
    }
  }

  //alegem un element random din array
  function pickColor(){

    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
    
  }

  //generam culorile din array
  function generateRandomColors(num){

    var arr=[];

    for(var i=0;i<=num;i++){
      arr.push(randomColor());
    }

      return arr;

  }

  //generam culori random in RGB
  function randomColor(){

    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
    
  }

  function hide(){
    
    for(var i=0; i< squares.length; i++){

          if(colors[i]){
              squares[i].style.backgroundColor=colors[i];
            
          }else{

            squares[i].style.display="none";
            
          }
    }
  }

}