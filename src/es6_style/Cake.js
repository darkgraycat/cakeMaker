export default class Cake {

  constructor(name) {
    this._name = name
    this._layers = []
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  // ??? can we create getter without field ???
  get recipe() {
    const recipe = [] // ??? can we remove this temp array ???
    this._layers.map((layer, i) =>
      recipe.push(`${i + 1}: ${layer.flavor}`)
    )
    return `=== ${this._name} ===\n${recipe.join(', \n')}\n`
  }

  addLayer(layer) {
    this._layers.push(layer)
  }

  removeLayer() {
    return this._layers.pop()
  }

}





