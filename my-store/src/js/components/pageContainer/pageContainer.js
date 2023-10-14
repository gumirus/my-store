import "./pageConatiner.css"

/* Контейнер для страниц */
export function getPageContainer() {
  const main = document.createElement("main")
  main.classList.add("page-container", "container")

  return main
}