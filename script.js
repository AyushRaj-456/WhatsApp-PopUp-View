          const logo = document.querySelector(".logo");
          const main = document.querySelector(".main");
          const cross = document.querySelector("#cross");
          const head = document.querySelector(".head");
          const one = document.querySelector(".one");
          const two = document.querySelector(".two");
          const sata = document.querySelector(".sata");
/*          const crosss = document.querySelector("#crosss");*/
          const z = document.querySelector(".z");
          const thr = document.querySelector(".thr");
          
          
          one.onclick = function()
          {
              sata.style.width ="0px"
              
              sata.style.border="0px solid grey"
          }
          z.onclick = function(){
              sata.style.width ="0px"
              
              sata.style.border="0px solid grey"
          }
          thr.onclick = function(){
              sata.style.width ="0px"
              
              sata.style.border="0px solid grey"
          }
          
          two.onclick = function(){
              sata.style.width ="300px"
           /*   crosss.style.display="inline-block"*/
              sata.style.border="1px solid grey"
              
          }
        /*  crosss.onclick = function(){
              sata.style.width = "0px"
              crosss.style.display="none"
              sata.style.border="0px solid grey"
          }*/
          
          
          logo.onclick = function(){
          main.style.width="300px"
          main.style.height="450px"
          cross.style.display="inline-block"
          main.style.border="1px solid grey"
            }
            
          cross.onclick = function(){
            main.style.width="0px"
            main.style.height="0px"
            sata.style.width ="0px"
            sata.style.border="0px solid grey"
        /*   head.style.background="rgba(255,255,255,.8)"*/
            cross.style.display="none"
            main.style.border="0px solid grey"
          }
          
          
          function forsearch(){
              alert("This is not available yet!");
          }