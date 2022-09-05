// Code here



document.addEventListener("DOMContentLoaded", () => {

  fetchData();
  

});
//fetch beers
function fetchData() {
  fetch("http://localhost:3000/beers")
    .then((resp) => resp.json())
    .then((data) => listBeers(data));
}

const beerUl = document.querySelector("#beer-list");
let beerName = document.getElementById("beer-name");
let beerImage = document.getElementById("beer-image");
let beerDescription = document.getElementById("beer-description");
let beerReviews =document.getElementById("review-list")
function listBeers(data) {
  data.forEach((data) => {
    const list = document.createElement("li");
    list.innerText = data.name;

    beerUl.appendChild(list);
    list.addEventListener("click", () => {
      beerName.textContent = data.name;
      beerImage.setAttribute("src", data.image_url);
      beerDescription.textContent = data.description;
      beerReviews.textContent = data.reviews;
    });
  });
}

fetch('http://localhost:3000/beers/1')
.then(res => res.json())
.then (data =>
  {  const beerDescription = document.querySelector('#beer-description').textContent = data.description
     const beerName = document.querySelector("#beer-name").innerHTML = data.name
     const beerImage = document.querySelector("#beer-image").setAttribute("src", data.image_url)
     const beerReviews = document.querySelector("#review-list").innerText = data.reviews
})

document.querySelector("#review-form").addEventListener('Submit',handleSubmit)

function handleSubmit(e){
  e.preventDefault();
  let reviewData={
    reviews:e.target.reviews.value
  }
  getReview(reviewData)
}


function getReview(reviewData){
  fetch("http://localhost:3000/beers",{
    method:"post",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(reviewData)
  })
  .then(res=> res.json)
  .then(reviews => console.log(reviews))
}
