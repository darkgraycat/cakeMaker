import Layer from "./Layer"

export default class Cake {

  private name: string
  private layers: Layer[]

  constructor(name: string) {
    this.name = name
    this.layers = []
  }

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }

  getRecipe(): string {
    const recipe: string[] = []
    this.layers.map((layer: Layer, i: number) => {
      recipe.push(`${i + 1}: ${layer.getFlavor()}`)
    })
    return `=== ${this.name} ===\n${recipe.join(', \n')}\n`
  }

  addLayer(layer: Layer): void {
    this.layers.push(layer)
  }

  removeLayer(): Layer | null {
    return this.layers.pop() || null
  }

}