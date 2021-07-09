 
 canvas =document.getElementById("myCanvas");
 ctx =canvas.getContext("2d");
 var mouseEvent ="empty";
 color ="red";
 
 canvas.addEventListener("mousedown",
                         mymousedown);
 
 function mymousedown(e) {
   mouseEvent="mouseDown";
 }
 canvas.addEventListener("mouseleave",mymouseleave);
 function mymouseleave(e){
    mouseEvent="mouseleave";
 }
 canvas.addEventListener("mouseup",mymouseup);
 function mymouseup(e){
    mouseEvent ="mouseUP";
 }
 canvas.addEventListener("mousemove",mymousemove);
 function mymousemove(e){
   current_x = e.clientX-canvas.offsetLeft;
   current_y = e.clientY-canvas.offsetTop;
       if (mouseEvent =="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle =color;
        ctx.lineWidth = 1;
       ctx.arc(current_x,current_y,20,0,
               2*Math.PI);
       
        ctx.stroke(); 
     }
    
 }

                    canvas.addEventListener("mouseup", my_mouseup);
                     function my_mouseup(e) 
                     { mouseEvent = "mouseUP"; }
                     
                     canvas.addEventListener("mouseleave", my_mouseleave);
                      function my_mouseleave(e) 
                      { mouseEvent = "mouseleave"; }

                       function clearArea() {
                            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }