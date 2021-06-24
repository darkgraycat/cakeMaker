import ICakeFactory from "../interfaces/ICakeFactory"
import ICake from "../interfaces/ICake"
import ILayer from "../interfaces/ILayer"
import Cake from "../Cake"
import Layer from "../Layer"



// const f = new AbstractCakeFactory<Cake>()

export default abstract class AbstractCakeFactory implements ICakeFactory {

  protected flavors: string[] = []
  protected total: number = 0
  // protected type: new () => T

  public constructor() { }

  // public constructor(type: new () => T) {
  // ???
  // this.type = type
  // }


  public getTotal(): number {
    return this.total
  }

  public getFlavors(): string[] {
    return this.flavors
  }

  public getFlavorById(id: number): string {
    return this.flavors[id] || this.flavors[0] || 'empty'
  }

  // public createCake2(type: new () => T, name: string, pattern: number[]): T {
  // }
  // const cake = f.createCake2(Cake, 'name', [1,2,3,4])

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