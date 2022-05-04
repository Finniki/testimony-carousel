"use strict";

const image = document.querySelector(".img-card");
const fullName = document.querySelector("#customer-name");
const comment = document.querySelector("#customer-text");
const btnPrev = document.querySelector(".prevBtn");
const btnNext = document.querySelector(".nextBtn");
const customers = [];
//Customer Constructor
function Customer(img, name, text) {
  this.img = img;
  this.name = name;
  this.text = text;
}

function createCustomer(img, name, text) {
  let image = `/img/customer-${img}.jpg`;
  let customer = new Customer(image, name, text);

  customers.push(customer);
}

createCustomer(
  0,
  "John",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?"
);
createCustomer(
  1,
  "Sandy",
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
);
createCustomer(
  2,
  "Amy",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
);
createCustomer(
  3,
  "Tyrell",
  "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
);
createCustomer(
  4,
  "Wanda",
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
);
console.log(customers);
let counter = 0;

const increment = function () {
  counter += 1;
  if (counter === customers.length) {
    counter = 0;
  }
  return counter;
};

const decrement = function () {
  counter -= 1;
  if (counter < 0) {
    counter = customers.length - 1;
  }
  return counter;
};
//event handlers
btnNext.addEventListener("click", function () {
  image.src = customers[increment()].img;
  fullName.textContent = customers[counter].name;
  comment.textContent = customers[counter].text;
});
btnPrev.addEventListener("click", function () {
  image.src = customers[decrement()].img;
  fullName.textContent = customers[counter].name;
  comment.textContent = customers[counter].text;
});
