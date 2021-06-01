export default class Cake {

  constructor(name) {
    this._name = name
    this._layers = []
  }

  getName() {
    return this._name
  }

  getRecipe() {
    const recipe = []
    const res = this._layers.map((layer, i) =>
      recipe.push(`${i + 1}: ${layer.getFlavor()}`)
    )
    console.log('TETET', res)
    return `=== ${this._name} ===\n${recipe.join(', \n')}\n`
  }

  addLayer(layer) {
    this._layers.push(layer)
  }

  removeLayer() {
    return this._layers.pop()
  }

}





