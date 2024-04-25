import {mangas} from './libros.js'
const cardContainer = document.getElementById('card-container');


const createComicCard = (mangas)=>{
  const {name , escritor , precio , sprite1 , url} = mangas;

  const card = document.createElement("div");
  card.classList.add("col", "col-xl-4","col-lg-4","col-md-6", "col-xs-12", "col-sm-12" ,"mt-5" ,"mb-5");

  const cardInner = document.createElement("div");
  cardInner.classList.add("card");

  const link = document.createElement("a"); 
  link.setAttribute("href", url); 
  

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.setAttribute("src", sprite1)
  img.setAttribute("alt" , name)

  link.appendChild(img);

  const cardBody = document.createElement("div"); 
  cardBody.classList.add("card-title", "text-center");
  
  const title = document.createElement("h3");
  title.classList.add("card-title" , "mt-3");
  title.textContent=name;

  const escritorN = document.createElement("p");
  escritorN.classList.add("card-text");
  escritorN.textContent = `Escritor : ${escritor}`;

  const precioInfo = document.createElement("h5");
  precioInfo.classList.add("card-text" ,"mb-4");
  precioInfo.textContent = `Precio : ${precio}`;



  cardBody.appendChild(title);
  cardBody.appendChild(escritorN);
  cardBody.appendChild(precioInfo);

  link.appendChild(cardBody); 

  cardInner.appendChild(link); 
  card.appendChild(cardInner);

  return card; 



}


const getManga = (mangas)=>{
  const comicCards = mangas.map(createComicCard);
    comicCards.forEach ((card)=>{
      cardContainer.appendChild(card);
  });
}

getManga(mangas);