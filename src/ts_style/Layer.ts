import ILayer from "./interfaces/ILayer"

export default class Layer implements ILayer {

  private flavor: string = 'empty'
  private filled: boolean = false

  getFlavor(): string {
    return this.flavor
  }

  isFilled(): boolean {
    return this.filled
  }

  fill(flavor: string): void {
    if (this.filled) return
    this.flavor = flavor
    this.filled = true
  }

}