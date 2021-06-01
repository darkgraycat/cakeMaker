import StrawberryCakeFactory from './factories/StrawberryCakeFactory'
import GingerCakeFactory from './factories/GingerCakeFactory'
import print from '../print'

export default () => {

  const TIME_FACTOR = 500

  const asyncBake = async (cakes, factory) => {
    const size = ~~(2 + Math.random() * 4)
    const name = `ClassCake N${~~(Math.random() * 1000)}S${size}`

    print(`At[${performance.now().toFixed(2)}]: `, '#8f8')
    print(`Start baking ${name} with size ${size}\n`)

    // im write this. but cant understand =(
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        cakes.push(factory.createRandomCake(name, size))
        print(`End baking ${name}\n`, '#8f8')
        resolve()
      }, size * TIME_FACTOR)

    })
  }

  const sfactory = new StrawberryCakeFactory()
  const gfactory = new GingerCakeFactory()

  const cakes = []

  print(`Start baking some class-cakes\n\n`, '#4f4')

  asyncBake(cakes, sfactory)
    .then(() => asyncBake(cakes, gfactory))
    .then(() => asyncBake(cakes, sfactory))
    .then(() => asyncBake(cakes, gfactory))
    .then(() => {
      print(`Stop baking cakes\n\n`, '#4f4')
      print(JSON.stringify(cakes, '', 2) + '\n', '#4f4')
      console.log(cakes)
    })

}