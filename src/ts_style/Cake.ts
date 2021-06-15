import ICake from "./interfaces/ICake"
import ILayer from "./interfaces/ILayer"

export default class Cake implements ICake {

  private name: string
  private layers: ILayer[]

  constructor(name: string) {
    this.name = name
    this.layers = []
  }

  getName(): string {
    return this.name
  }

  getRecipe(): string {
    const recipe: string[] = []
    this.layers.map((layer: ILayer, i: number) => {
      recipe.push(`${i + 1}: ${layer.getFlavor()}`)
    })
    return `=== ${this.name} ===\n${recipe.join(', \n')}\n`
  }

  addLayer(layer: ILayer): void {
    this.layers.push(layer)
  }

  removeLayer(): ILayer {
    const layer = this.layers.pop()
    if (layer) {
      return layer
    } else {
      throw new Error('No layers')
    }
  }

}