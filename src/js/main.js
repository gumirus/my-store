import Navigo from "navigo" // Импорт navigo

import { getHeader } from "/src/js/components/header/header.js"
import { getPageContainer } from "/src/js/components/pageContainer/pageContainer.js"

const app = document.getElementById("app")

// Создание роутера
export const router = new Navigo('/');

const header = getHeader()
const pageContainer = getPageContainer()

// Главная страница
router.on('/', async () => {
  pageContainer.innerHTML = ""
  const moduleMain = await import("/src/js/pages/main.js")
  const mainPage = moduleMain.getMainPage()
  pageContainer.append(mainPage)
  header.setActiveLink("home")
});

// Страница каталог
router.on('/catalog', async () => {
  pageContainer.innerHTML = ""
  const moduleCatalog = await import("/src/js/pages/catalog.js")
  const catalogPage = moduleCatalog.getCatalogPage()
  pageContainer.append(catalogPage)
  header.setActiveLink("catalog")
});

// Страница продукта
router.on('/product/:title', async ({ data }) => {
  pageContainer.innerHTML = ""
  const moduleProduct = await import("/src/js/pages/product.js")
  const productPage = moduleProduct.getProductPage(data.title)
  pageContainer.append(productPage)
  header.setActiveLink()
});

// Корзина
router.on('/basket', async () => {
  pageContainer.innerHTML = ""
  const moduleBasket = await import("/src/js/pages/basket.js")
  const basketPage = moduleBasket.getBasketPage()
  pageContainer.append(basketPage)
  header.setActiveLink("basket")
});

// Оформление заказа
router.on('/order', async () => {

  if (true) {
    router.navigate('/');
    return
  }

  pageContainer.innerHTML = ""
  const moduleOrder = await import("/src/js/pages/order.js")
  const orderPage = moduleOrder.getOrderPage()
  pageContainer.append(orderPage)
  header.setActiveLink()
});

// Страница не найдена
router.notFound(async () => {
  pageContainer.innerHTML = ""
  const moduleNotFound = await import("/src/js/pages/notFound.js")
  const notFoundPage = moduleNotFound.getNotFoundPage()
  pageContainer.append(notFoundPage)
  header.setActiveLink()
})

router.resolve();

app.append(header.header, pageContainer)