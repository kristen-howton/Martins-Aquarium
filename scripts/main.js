// import intializeDetailButtonEvents from "./dialog.js"
import { useFish } from './fishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}


const arrayOfTheFishObjects = useFish()

for (const fishObject of arrayOfTheFishObjects) {
    console.log(fishObject)
}
