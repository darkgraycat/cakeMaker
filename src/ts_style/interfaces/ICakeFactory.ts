import Cake from "../Cake";

export default interface ICakeFactory {
  getTotal(): number
  getFlavors(): string[]
  getFlavorById(id: number): string
  createCake(name: string, pattern: number[]): Cake
  createRandomCake(name: string, size: number): Cake
}