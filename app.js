let barbtn = document.querySelector("#barbtn");
let toolbar = document.querySelector("#toolbar");

barbtn.addEventListener("click", () => {
    toolbar.classList.toggle("hidden");
    toolbar.classList.toggle("flex");
});


//TASK 1
//Mahsulotlarni arrayda object sifatida saqlang va htmlga arrayni map qilish orqali qo'shing.
//QILOLMADIM


//TASK 2
//Korzinka iconkasi bosilganda Setda o'sha bosilgan mahsulotning id si saqlansin va u Set dagi idlar ham html da biror qismida ko'rinib tursin.

const cartSet = new Set();
const buttons = document.querySelectorAll(".add-to-cart");
const savedIdsDiv = document.querySelector("#saved-ids");


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    cartSet.add(id); 

    savedIdsDiv.innerHTML = `<p>🛒 Saqlangan IDlar: ${Array.from(cartSet).join(", ")}</p>`;
  });
});

