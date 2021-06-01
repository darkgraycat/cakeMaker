import Cake from '../Cake'
import Layer from '../Layer'

export default function AbstractCakeFactory() {
  this._flavors = []
  this._total = 0
}

AbstractCakeFactory.prototype.getTotal = function () {
  return this._total
}

AbstractCakeFactory.prototype.getFlavors = function () {
  return this._flavors
}

AbstractCakeFactory.prototype.createCake = function (name, pattern) {
  var cake = new Cake(name)
  pattern.map(function (id) {
    var flavor = this._flavors[id] || this._flavors[0]
    var layer = new Layer()
    layer.fill(flavor)
    cake.addLayer(layer)
  }, this)
  this._total++
  return cake
}

AbstractCakeFactory.prototype.createRandomCake = function (name, size) {
  var randomPattern = []
  for (var i = 0, max = this._flavors.length; i < size; i++) {
    randomPattern[i] = Math.floor(Math.random() * max)
  }
  return this.createCake(name, randomPattern)
}