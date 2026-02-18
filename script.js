function toggleMode() {
    const body = document.body

    body.classList.toggle("light")

    updateThemeColor()

}

function updateThemeColor() {
  const meta = document.querySelector('meta[name="theme-color"]')
  const isLight = document.body.classList.contains("light")

  if (isLight) {
    meta.setAttribute("content", "#ffffff")
  } else {
    meta.setAttribute("content", "#000000")
  }
}