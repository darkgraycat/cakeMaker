export default function Cake(name) {
  this._name = name
  this._layers = []
}

Cake.prototype.getName = function () {
  return this._name
}

Cake.prototype.getRecipe = function () {
  var recipe = []
  this._layers.map(function (layer, i) {
    recipe.push((i + 1) + ': ' + layer.getFlavor())
  })
  return '=== ' + this._name + ' ===\n' + recipe.join(', \n') + '\n'
}

Cake.prototype.addLayer = function (layer) {
  this._layers.push(layer)
}

Cake.prototype.removeLayer = function () {
  return this._layers.pop()
}
