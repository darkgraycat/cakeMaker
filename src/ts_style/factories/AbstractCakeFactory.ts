import Cake from "../Cake"
import Layer from "../Layer"

export default abstract class AbstractCakeFactory {

  protected flavors: string[] = []
  protected total: number = 0

  getTotal(): number {
    return this.total
  }

  getFlavors(): string[] {
    return this.flavors
  }

  getFlavorById(id: number): string {
    return this.flavors[id] || this.flavors[0] || 'empry'
  }

  createCake(name: string, pattern: number[]): Cake {
    const cake: Cake = new Cake(name)
    pattern.map((id: number) => {
      const flavor: string = this.getFlavorById(id)
      const layer: Layer = new Layer()
      layer.fill(flavor)
      cake.addLayer(layer)
    })
    this.total++
    return cake
  }

  createRandomCake(name: string, size: number): Cake {
    const max: number = this.flavors.length
    const pattern: number[] = [...Array(size)].map(() => ~~(Math.random() * max))
    return this.createCake(name, pattern)
  }

}