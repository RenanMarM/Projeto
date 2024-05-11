<<<<<<< HEAD
function toggleMode() {
  const hmtl = document.documentElement
  hmtl.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (hmtl.classList.contains("light")){
    img.setAttribute("src", "./assets/renan-light.png")
  }

  else{
    img.setAttribute("src", "./assets/renan.png")
  }

}
=======
function toggleMode() {
  const hmtl = document.documentElement
  hmtl.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (hmtl.classList.contains("light")){
    img.setAttribute("src", "./assets/renan-light.png")
  }

  else{
    img.setAttribute("src", "./assets/renan.png")
  }

}
>>>>>>> d797c6f77a079a49a28c98229b74513f63e2c6eb
