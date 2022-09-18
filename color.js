var letters = "0123456789ABCDEF";
document
document.querySelector(".myBtn").addEventListener("click",function(){
    var color1='#';
    var color2='#';
    for(i=0;i<6;i++)
    {
       color1+=letters[Math.floor(Math.random()*16)];
       color2+=letters[Math.floor(Math.random()*16)];
    }
    document.querySelector('#hexColor1').innerHTML=color1;
    document.querySelector('#hexColor2').innerHTML=color2;
    document.getElementsByTagName("body")[0].style.backgroundImage='linear-gradient(to right,'+color1+','+color2+')';
    
    //  ;
   });
  

// function changeColor()
// {   
//     alert('h')
   

// }

