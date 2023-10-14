import { router } from "/src/js/main"
import { getMainTitle } from "/src/js/components/mainTitle/mainTitle"
import { getDesc } from "/src/js/components/desc/desc"

// Страница корзины
export function getBasketPage() {
  const page = document.createElement("div")
  page.classList.add("page", "basket-page")

  const mainTitle = getMainTitle("Козина")
  const desc = getDesc("Страница в разработке")

  // Ссылка оформления заказа
  let linkOrder = document.createElement("a")
  linkOrder.href = "/order"
  linkOrder.classList.add("btn")
  linkOrder.textContent = "Оформление заказа"

  linkOrder.addEventListener("click", function (event) {
    event.preventDefault()
    router.navigate('/order');
  })

  page.append(mainTitle, desc, linkOrder)
  return page
}