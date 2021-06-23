import ICakeFactory from "../interfaces/ICakeFactory"
import ICake from "../interfaces/ICake"
import ILayer from "../interfaces/ILayer"
import Cake from "../Cake"
import Layer from "../Layer"

export default abstract class AbstractCakeFactory implements ICakeFactory {

  protected flavors: string[] = []
  protected total: number = 0

  public constructor() { }

  public getTotal(): number {
    return this.total
  }

  public getFlavors(): string[] {
    return this.flavors
  }

  public getFlavorById(id: number): string {
    return this.flavors[id] || this.flavors[0] || 'empty'
  }

  public createCake(name: string, pattern: number[]): ICake {
    const cake: ICake = new Cake(name)
    pattern.map((id: number) => {
      const flavor: string = this.getFlavorById(id)
      const layer: ILayer = new Layer()
      layer.fill(flavor)
      cake.addLayer(layer)
    })
    this.total++
    return cake
  }

  public createRandomCake(name: string, size: number): ICake {
    const max: number = this.flavors.length
    const pattern: number[] = [...Array(size)].map(() => ~~(Math.random() * max))
    return this.createCake(name, pattern)
  }

}