function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/avatar-light.png",
      "alt",
      "Foto de Beto Mori, com barba por fazer e camiseta laranja e óculos"
    )
  } else {
    img.setAttribute(
      "src",
      "./assets/avatar.png",
      "alt",
      "Foto de Beto Mori, com a mão no rosto, usando camiseta preta e óculos"
    )
  }
}
