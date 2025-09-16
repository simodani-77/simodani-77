const content_Choixutilisatuer=document.getElementById("choix_ytilisateur");
const content_Choixordinatuer=document.getElementById("choix_ordinatuer");
const content_resultat=document.getElementById("resultas");

let choixPossible=document.querySelectorAll("button");
let choixUtilisateur;

choixPossible.forEach(choixPossible=>choixPossible.addEventListener("click",(e)=>{
   choixUtilisateur= e.target.id;
   content_Choixutilisatuer.innerHTML=`"${choixUtilisateur}"`//ou  content_Choixutilisatuer.innerHTML=`"${e.target.id}"`
   generer_CHoixOrdinateur();
   gen_resultat();

}))

//fonction pour generer le choix d'utilisateur

function generer_CHoixOrdinateur(){
   let random=Math.floor(Math.random()*3)+1;
   if (random===1){
      content_Choixordinatuer.innerHTML="papier"
   } if(random===2){
      content_Choixordinatuer.innerHTML="piere"
   }if(random===3){
      content_Choixordinatuer.innerHTML="sizeaux"
   }

}
function gen_resultat() {
  let choixOrdi = content_Choixordinatuer.innerHTML;

  if (choixUtilisateur === choixOrdi) {
    content_resultat.innerText = "Égalité !";
  } else if (
    (choixUtilisateur === "piere" && choixOrdi === "sizeaux") ||
    (choixUtilisateur === "papier" && choixOrdi === "piere") ||
    (choixUtilisateur === "sizeaux" && choixOrdi === "papier")
  ) {
    content_resultat.innerText = "Tu as gagné ! 🎉";
  } else {
    content_resultat.innerText = "Tu as perdu ! 😢";
  }
}

