function handleSubmit(e) {
  e.preventDefault()
  const userInput = document.getElementById('user-input').value

  const ident = new Identicon(userInput)
  console.log(ident)
  console.log(ident.hashIdenticon())
  ident.cssRenderer()
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})


// const rowIdx = 0
// const columnIdx = 4
// const blockColor = "rgb(16, 244, 68)"
// document.getElementById(`${rowIdx}-${colIdx}`).style.backgroundColor = blockColor
