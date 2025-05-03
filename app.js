let barbtn = document.querySelector("#barbtn");
let toolbar = document.querySelector("#toolbar");

barbtn.addEventListener("click", () => {
    toolbar.classList.toggle("hidden");
    toolbar.classList.toggle("flex");
});

const $ = (e) => document.querySelector(e)
const $$ = (es) => document.querySelectorAll(es)



let productsWrap = document.querySelector(".products")

let products = [
  {
  id: 1,
  image: "./scuter.png",
  title : "Kungo Kirin M4",
  battery: "2000 mAh",
  speed:"60 km/h",
  power: "1.2 l.s",
  powerHours: " 5 hours",
  price: "30 000 rub",
  type: "xit"
},
{
  id: 2,
  image: "./scuter.png",
  title : "Kungo Kirin M4",
  battery: "2000 mAh",
  speed:"60 km/h",
  power: "1.2 l.s",
  powerHours: " 5 hours",
  price: "24 000 rub",
  type: "xit"
},
{
  id: 3,
  image: "./scuter.png",
  title : "Kungo Kirin M4",
  battery: "2000 mAh",
  speed:"60 km/h",
  power: "1.2 l.s",
  powerHours: " 5 hours",
  price: "33 000 rub",
  type: "xit"
},
{
  id: 4,
  image: "./scuter.png",
  title : "Kungo Kirin M4",
  battery: "2500 mAh",
  speed:"100 km/h",
  power: "1.2 l.s",
  powerHours: " 5 hours",
  price: "50 000 rub",
  type: "xit"
}
,{
  id: 1,
  image: "./scuter.png",
  title : "Kungo Kirin M4",
  battery: "2000 mAh",
  speed:"60 km/h",
  power: "1.2 l.s",
  powerHours: " 5 hours",
  price: "30 000 rub",
  type: "xit"
},
{
  id: 2,
  image: "./scuter.png",
  title : "Kungo Kirin M4",
  battery: "2000 mAh",
  speed:"60 km/h",
  power: "1.2 l.s",
  powerHours: " 5 hours",
  price: "24 000 rub",
  type: "xit"
},
{
  id: 3,
  image: "./scuter.png",
  title : "Kungo Kirin M4",
  battery: "2000 mAh",
  speed:"60 km/h",
  power: "1.2 l.s",
  powerHours: " 5 hours",
  price: "33 000 rub",
  type: "xit"
},
{
  id: 4,
  image: "./scuter.png",
  title : "Kungo Kirin M4",
  battery: "2500 mAh",
  speed:"100 km/h",
  power: "1.2 l.s",
  powerHours: " 5 hours",
  price: "50 000 rub",
  type: "xit"
}
]

if (localStorage.getItem("products")) {
  products = JSON.parse(localStorage.getItem("products"));
}

let print = () => {
  productsWrap.innerHTML = ""
  products.map(p => {
    productsWrap.innerHTML += `<div id="${p.id}" class="product  w-70 h-[520px]  rounded-xl border border-[#EAEBED] hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
                    <div class="flex justify-between rounded-t-xl items-start py-3 px-2 bg-center bg-[#F0F1F5] bg-[url(./src/images/samakat.png)] bg-no-repeat h-50">
                        <button class="bg-[${p.type = "xit" ? "#EE685F" : "#75D14A"}] text-white rounded-md px-1">${p.type}</button>
                        
                        <i class="fas fa-balance-scale"></i>
                    </div>
                    <div class="p-4">
                        <h1 class="text-xl font-bold">${p.title}</h1>
                        <div class="flex justify-between items-center gap-2 pt-5 ">
                            <div class="">
                                <div class="flex gap-2 pb-4">
                                    <img src="./src/images/acumlator.svg" alt="">
                                    <h3>${p.battery}</h3>
                                </div>
                                <div class="flex gap-2">
                                    <img src="./src/images/charmoq.svg" alt="">
                                    <h3>${p.power}</h3>
                                </div>
                            </div>
                            <div>
                                <div class="flex gap-2 pb-4">
                                    <img src="./src/images/speedometer 1.svg" alt="">
                                    <h3>${p.speed}</h3>
                                </div>
                                <div class="flex gap-2">
                                    <img src="./src/images/timer 1.svg" alt="">
                                    <h3>${p.powerHours}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 flex justify-between items-center">
                        <div>
                            
                            <h2 class="text-xl font-bold">${p.price}</h2>
                        </div>
                        <div>
                            <span class="border border-gray-300 rounded-[100%] p-3"><i class=" fas  fa-shopping-basket fa-xl"></i></span>
                            <span class="border border-gray-300 rounded-[100%] p-3"><i class=" far fa-heart fa-xl"></i></span>
                        </div>
                    </div>
                    <button data-id="product-1" class="bg-blue-500 add-to-cart py-3 mx-4.5 my-3 cursor-pointer text-white w-60 rounded-xl border-1 hover:border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all">Купить в 1 клик</button>
                </div>`
  })
}
print()

let id = $("#id")
let nom = $("#nom")
let battery = $("#battery")
let tezlik = $("#tezlik")
let time = $("#time")
let narx = $("#narx")

let addbtn = $(".addBtn")


addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  products.push({
    id: id.value,
    title: nom.value,
    battery: battery.value,
    speed: tezlik.value,
    power: "1.2 l.s",
    powerHours: time.value,
    price: narx.value,
    type: "new",
    image: "./scuter.png"
  });

  localStorage.setItem("products", JSON.stringify(products));

  print();
  form.reset(); 
});





