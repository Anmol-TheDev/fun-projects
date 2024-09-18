  const Button = document.getElementById("noBtn");
  
  

  Button.addEventListener("click",()=>{
    let style = {
        top:Math.floor(Math.random()*window.innerHeight)+"px",
        left:Math.floor(Math.random()*window.innerWidth)+"px"
    }
    Object.assign(Button.style,style)
  })