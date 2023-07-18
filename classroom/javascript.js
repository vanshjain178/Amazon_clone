import {todayDeal} from "./todaydeals.js"

//console.log(todayDeal)
let slideBtnleft = document.getElementById("slide-btn-left")
let slideBtnright = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")



let startSlider = 0
let endSlider = (imgItem.length-1) *100;
slideBtnleft .addEventListener("click",handleleftbtn)
  function handleleftbtn()
{
    if(startSlider < 0){
        startSlider = startSlider + 100;
      }
      imgItem.forEach(element =>
        {
         element.style.transform = `translateX(${startSlider}%)`;
        })
  
}


slideBtnright .addEventListener("click",handlerightbtn)

  function handlerightbtn()
  {
      if(startSlider >= -endSlider+100){
        startSlider = startSlider - 100;
      }
      imgItem.forEach(element =>
        {
         element.style.transform = `translateX(${startSlider}%)`;
        })
  }
/**Render Automatic */

  function renderSlideAuto(){
      handlerightbtn()
      if(startSlider >= -endSlider+100){

      }
      else{
        startSlider=0
      }
  }

  setInterval(renderSlideAuto, 2000);

//todays deals


let todayDealListEl = document.querySelector(".today-deals-product-list")
console.log(todayDealListEl)

let todalDealProductHtML =""


let todayDealsLength = todayDeal.length

for(let i=0; i< todayDealsLength; i++)
{
 // console.log(todayDeal[i])

todalDealProductHtML = todalDealProductHtML +`
    <div class="today-deals-product-item ">
    
        <img src = ${todayDeal[i].img} />
          
        <div class="discount-container">
          <a href="#"> Up to ${todayDeal[i].discount} % off</a>
          <a href="#">${todayDeal[i].DealofDay} </a>
        </div>
        <p>${todayDeal[i].desc} </p>
    </div>
  `


}

todayDealListEl.innerHTML = todalDealProductHtML
//console.log(todalDealProductHtML)

let today_deals_btn_nextE1 = document.getElementById("today-deals-btn-next")

let today_deals_btn_prevEl = document.getElementById("today-deals-btn-prev")

let today_deals_product_itemEl = document.querySelectorAll(".today-deals-product-item")

let startProduct = 0; 

today_deals_btn_prevEl.addEventListener("click",()=>{
/*alert("prev")*/
  if(startProduct < 0)
  {
    startProduct += 500
  }
  if(startProduct > -2000)
  {
    today_deals_product_itemEl.forEach(e1 =>{
      e1.style.transform =`translateX(${startProduct}%)`
    })
  }
})

today_deals_btn_nextE1.addEventListener("click",()=>{
  /*alert("next")*/

  if(startProduct > -2000)
  {
    startProduct -= 500
  }
  today_deals_product_itemEl.forEach(e1 =>{
    e1.style.transform =`translateX(${startProduct}%)`
  })

})