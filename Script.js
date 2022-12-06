const mainContainer = document.getElementById("main_container");
const Search = document.getElementById("Search")

function getData(){
  fetch(`https://rickandmortyapi.com/api/character/?name=${Search.value}`)
  .then((response) => response.json())
  .then((data)=> {
    const { results } = data;
    results.map((item)=> {
        card(item);
    });
})
  .catch((err) => console.error(err));
}

Search.addEventListener("keyup",(e)=>{
  
  mainContainer.innerHTML=""
  getData();

})



function card(data){
  const cardAnimation = document.createElement("div");
  const contAnimation = document.createElement("div");
  const boxImage = document.createElement("div");
  const box_body = document.createElement("div");
  const cardBody = document.createElement("div");
  const nameAnimation = document.createElement("h2");
  const speciesAnimation = document.createElement("p");
  const genderAnimation = document.createElement("p");
  const img = document.createElement("img");

  cardAnimation.classList.add("card");
  contAnimation.classList.add("row");
  boxImage.classList.add("boxImage");
  box_body.classList.add("box_body")

  nameAnimation.textContent = data.name;
  speciesAnimation.textContent = data.species;
  genderAnimation.textContent = data.gender;
  img.setAttribute("src", data.image);
  img.setAttribute("alt", data.name);
  
  cardAnimation.appendChild(contAnimation);
  contAnimation.appendChild(boxImage);
  contAnimation.appendChild(box_body);
  box_body.appendChild(cardBody);
  cardBody.appendChild(nameAnimation);
  cardBody.appendChild(speciesAnimation);
  cardBody.appendChild(genderAnimation);
  boxImage.appendChild(img);

  mainContainer.appendChild(cardAnimation);
}
getData()


  