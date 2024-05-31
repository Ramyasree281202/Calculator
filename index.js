let str="";
let btns = document.querySelectorAll('.btn');
Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
       if(e.target.innerHTML=='='){
            str=eval(str);
            document.querySelector('input').value=str;
       }
       else if(e.target.innerHTML=='AC'){
        str="";
        document.querySelector('input').value=str;
       }
       else if(e.target.innerHTML=='DEL'){
        str=str.substring(0,str.length-1);
        document.querySelector('input').value=str;
       }
       else{
        console.log(e.target);
        str=str+e.target.innerHTML;
        document.querySelector('input').value=str;
       }
    })
})  