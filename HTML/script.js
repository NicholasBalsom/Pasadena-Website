var menu=document.getElementById("menu");

    menu.style.maxHeight ="0px";

    function togglemenu(x) {

        x.classList.toggle("change");

        if(menu.style.maxHeight == "0px")
          {
             menu.style.maxHeight="180px";
          }
        else
          {
            menu.style.maxHeight="0px";
          }
    }