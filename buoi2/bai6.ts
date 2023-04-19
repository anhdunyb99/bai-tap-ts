//de bai
let options = {
    size: {
        width: 100,
        height: 200,
    },
    items: ["Cake", "Donut"],
    extra: true
}

const width: number = options.size.width
const height: number = options.size.height
const item1: string = options.items[0]
const item2: string = options.items[1]

console.log(width,height,item1,item2);
