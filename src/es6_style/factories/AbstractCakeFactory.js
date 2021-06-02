import Cake from '../Cake'
import Layer from '../Layer'

export default class AbstractCakeFactory {

  constructor() {
    this._flavors = []
    this._total = 0
  }

  get total() {
    return this._total
  }

  get flavors() {
    return this._flavors
  }

  getFlavorById(id) {
    return this._flavors[id] || this._flavors[0] || null
  }

  createCake(name, pattern) {
    const cake = new Cake(name)
    pattern.map(id => {
      const flavor = this.getFlavorById(id)
      const layer = new Layer()
      layer.fill(flavor)
      cake.addLayer(layer)
    })
    this._total++
    return cake
  }

  createRandomCake(name, size) {
    const max = this._flavors.length
    const pattern = [...new Array(size)].map(() => ~~(Math.random() * max))
    return this.createCake(name, pattern)
  }
}




