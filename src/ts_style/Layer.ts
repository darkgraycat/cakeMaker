import ILayer from "./interfaces/ILayer"

export default class Layer implements ILayer {

  // private flavor: string = 'empty'
  // private filled: boolean = false

  private flavor: string
  private filled: boolean

  public constructor() {
    this.flavor = 'empty'
    this.filled = false
  }

  public getFlavor(): string {
    return this.flavor
  }

  public isFilled(): boolean {
    return this.filled
  }

  public fill(flavor: string): void {
    if (this.filled) return
    this.flavor = flavor
    this.filled = true
  }

}