import ICake from "./ICake";

export default interface ICakeFactory {
  getTotal(): number
  getFlavors(): string[]
  getFlavorById(id: number): string
  createCake(name: string, pattern: number[]): ICake
  createRandomCake(name: string, size: number): ICake
}