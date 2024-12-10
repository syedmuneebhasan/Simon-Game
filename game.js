/*$(".game-one").fadeIn();
    $(".game-one").fadeIn("slow");
    $(".game-one").fadeIn(3000);*/

   // $(".game-one").fadeOut("fast").fadeIn("fast").fadeOut("fast").fadeIn("fast");

   
   
   
   $(document).one('keydown', function(event) 
   {

     

    $("#mySound")[0].play();
   var index;
   var a;

   var n=1;
   var myArray=[];
   var score=0;
   
   //console.log(g[a]);
   function blink()
   {

  
   

    
            $(".main-heading").text(`Level ${n}`);


     let y = Math.random() * 4;
     a = Math.floor(y);
     var f=myArray.push(a);

     

       
    
  

     for (var i = 0; i < myArray.length; i++) {
        (function(i) {
            setTimeout(function() {

                $("button").eq(myArray[i]).fadeOut("fast").fadeIn("fast").fadeOut("fast").fadeIn("fast");
            }, i * 1000);  // Add a delay between button fades (1 second per button)
        })(i);
    }


    

    
 
   
    
   
   
     
   }
   var g= ["green", "red", "yellow", "blue"]
   var t=[];
   


 

   $("button").click(function() {
      var className = $(this).attr("class");
      index = g.indexOf(className);
      t.push(index);
game();
   });

   function game() {
    

    let u = t.length - 1; 
    if (t[u] !== myArray[u]) 
    
    {
        $("#wrong")[0].play();
        setTimeout(() => {
            $("#myPopup").css("display", "flex").show(); 
            $(".pop-score").text(`${score}`);
            $(".result").stop();
            $(".main").css("filter", "blur(9px)");
          
            $("#closePopup").click(function () {
                $("#myPopup").hide();
                location.reload(); 
            });
        }, 1000);
            
          return;
        }
        else
        {
            result();
          
        $("#correct")[0].play();
        }
    
        function result()
        {
           for (i=0; i<n; i++)
           {
            $(".result").css("display", "inline-flex").show();
            $(".result").fadeOut("fast").fadeIn("fast");
            score=score+5;
            
          
           }
           $(".score").text(`${score}`);

        }
       
   

    if (t.length === myArray.length) {
      
        n++;
       t = [];
    
        blink();
    }
}

   
  
   
      
       
     
   
   blink();

        
   

   });

