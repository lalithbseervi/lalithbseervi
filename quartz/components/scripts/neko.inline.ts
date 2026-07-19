(window as Window & { NekoType: string }).NekoType = "white"

window.NekoType = "white"

const script = document.createElement("script")
script.src = "https://webneko.net/n20171213.js"
script.async = true
document.body.appendChild(script)

let nekoWrapper: HTMLElement | null = null

document.addEventListener("prenav", () => {
  const layer = document.getElementById("layerNeko0")
  if (!layer) return

  nekoWrapper = layer.parentElement as HTMLElement
  nekoWrapper.remove()
})

document.addEventListener("nav", () => {
  if (nekoWrapper && !document.body.contains(nekoWrapper)) {
    document.body.appendChild(nekoWrapper)
  }
})