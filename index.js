// Récupere la case "masquer les paroles"
let hr = document.querySelector('hr');
const checkboxParoles = document.getElementById('masquer-paroles'); // à compléter, ce code ne fonctionne pas
// Récupère le div contenant les paroles
const divParoles = document.getElementById('paroles'); //

// Attache une fonction à l'évènement "click" sur checkboxParoles
checkboxParoles.addEventListener('click', function (event) {
  // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles
  
  // event.target contient l'élément cliqué (ici checkboxParoles dans notre cas)
  if (event.target.checked) {
    paroles.style.display ='none';
    hr.style.display ='none';
    checkboxParoles.nextSibling.data = 'Afficher les paroles';
    

  } else {
    // la case vient d'être decochée
    paroles.style.display ='block';
    hr.style.display ='block';
    checkboxParoles.nextSibling.data = 'Masquer les paroles';
  }
});
//------------------------------------------------------------------------------
let refrain = document.getElementsByClassName('refrain');
let remplacant = document.getElementsByClassName('definition');
let contenant = document.getElementsByClassName('contenu');
const checkboxRefrains = document.getElementById('masquer-refrains');

checkboxRefrains.addEventListener('click',  (event) =>{
  for (let i = 1; i < refrain.length; i++) {
    if (event.target.checked) {
      contenant[i].style.display = 'none';
      remplacant[i].style.display='block';

      remplacant[i].addEventListener('mouseenter', (e) => {
        contenant[i].style.display = 'block';
        remplacant[i].style.display='none';
      })
      remplacant[i].addEventListener('mouseleave', (e) => {
        contenant[i].style.display = 'none';
         remplacant[i].style.display='block';
      })
    } else {
      contenant[i].style.display = 'block';
      remplacant[i].style.display='none';
    }
    
  }
})

//------------------------------------------------------------------------------
const paragraphe = document.querySelectorAll('p')
paragraphe.forEach(element => {
  element.style.margin = '0';
});


