import { router } from "/src/js/main"
import "./basketBtn.css"
import basketSVG from "bundle-text:/src/assets/img/basket.svg"

// Кнопка корзины
export function getBasketBtn() {
  const basketBtn = document.createElement("a")
  basketBtn.href = "/basket"
  basketBtn.classList.add("basket-btn")
  basketBtn.innerHTML = basketSVG
  basketBtn.addEventListener("click", function (event) {
    event.preventDefault()
    router.navigate("/basket");
  })
  return basketBtn
}