let XObtn=document.querySelectorAll(".bouttonOption");
let btn1=document.getElementById("btn");
let btn2=document.getElementById("btn2");
let popupRef=document.querySelector(".popup.hide");
let resulta=document.getElementById("message")


let winParcour=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

let xTurn=true;
let count=0;

XObtn.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(xTurn){
            xTurn=false;
            e.innerHTML="X";
            e.disabled=true;
        }else{
            xTurn=true;
            e.innerHTML="O";
            e.disabled=true;
        }
        count++;
        if(count==='9'){
            //draw
            draw();
        }
        winnerCheck();
    })
})

let winnerCheck=()=>{
    for(let i of winParcour){
        let [e1,e2,e3]=[
            XObtn[i[0]].innerHTML,
            XObtn[i[1]].innerHTML,
            XObtn[i[2]].innerHTML
        ];
        if(e1 != "" && e2 != "" && e3 != ""){
            if(e1==e2&&e2==e3){
                winResultas(e1);
            }
        }
    }

}
//fonction pour l'egalité;
let draw=()=>{
    desactiver();
    resulta.innerHTML="draaaaaaaw"
}

//fonction pour savoir le gagnant X ou O
let winResultas=(letter)=>{
//desactiver tout les boutton
desactiver();
if(letter==='X'){
    resulta.innerHTML="X win"
}else{
    resulta.innerHTML="O win"
}

}

//focntion pour desactiver les boutton
function desactiver(){
XObtn.forEach((e)=>(e.disabled=true));

popupRef.classList.remove("hide");
};

let enabledBTN=()=>{
    XObtn.forEach(e=>{
        e.innerHTML="";
        e.disabled=false;
    });

    popupRef.classList.add("hide");
}

btn2.addEventListener("click",()=>{
    count=0;
    enabledBTN();
})

btn1.addEventListener("click",()=>{
    count=0;
    enabledBTN();
})