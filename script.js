const menu = document.getElementById("menu")
const options = document.getElementById("menu-options")

menu.addEventListener("click",function(){
    if(options.style.display === "none" || options.style.display === "")
    {
        options.style.display = "block"

        
        setTimeout(hid, 5000)
    }
    else
        options.style.display = "none"

})

function hid(){options.style.display = "none"}


