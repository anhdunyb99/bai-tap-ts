import express from 'express';

export const Compare = async (req: express.Request, res: express.Response) => {
    let array: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 0]
    const biggestNumber: number = Math.max.apply(null, array)
    const smallestNumber: number = Math.min.apply(null, array)
    try {
        res.json({
            success: true,
            message: "Success",
            biggestNumber: biggestNumber,
            smallestNumber: smallestNumber
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const compareNumber = async (req: express.Request, res: express.Response) => {
    let array: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 0]
    const biggestIndex: number = array.indexOf(Math.max.apply(null, array))
    const smallestIndex: number = array.indexOf(Math.min.apply(null, array))
    try {
        res.json({
            success: true,
            message: "Success",
            biggestIndex: biggestIndex,
            smallestIndex: smallestIndex
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const averageRain = async (req: express.Request, res: express.Response) => {
    const arraySize: number = 3
    let array: number[] = [1, 2, 3]

    function averageRain(array: number[]): any {
        let sum: number = 0
        for (let i in array) {
            sum += array[i]
        }
        return sum / array.length
    }
    let result: any = averageRain(array)

    try {
        res.json({
            success: true,
            message: "Success",
            result: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const ObjectData = async (req: express.Request, res: express.Response) => {
    const people: { Ana: number, Alex: Number, John: number } = {
        Ana: 25,
        Alex: 28,
        John: 27,
    }
    const arrayName: any = Object.keys(people)
    const arrayAge: any = Object.values(people)

    const highestAge: number = Math.max.apply(null, arrayAge)
    const indexArrayAge: number = arrayAge.indexOf(highestAge)
    let result: any = arrayName[indexArrayAge]
    try {
        res.json({
            success: true,
            message: "Success",
            result: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const printObject = async (req: express.Request, res: express.Response) => {
    const object1: { fullName: string, occupation: string, age: number, website: string } = {
        fullName: 'Anoystick',
        occupation: 'Software developer',
        age: 31,
        website: 'https://annonystick.com'
    }

    const object2: { fullName: string, occupation: string, age: number, website: string } = {
        fullName: 'Anoystick',
        occupation: 'Software developer',
        age: 31,
        website: 'https://annonystick.com'
    }
    //convert obj to array

    const arrayKey: any = Object.keys(object1)
    const arrayValue: any = Object.values(object1)

    const array = arrayKey.concat(arrayValue)

    let printLine: any
    //in tren tung dong
    for (let i of array) {
        console.log(i);

        printLine += i + " "
    }
    const result: any = printLine
    try {
        res.json({
            success: true,
            message: "Success",
            result: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const objectExecrise = async (req: express.Request, res: express.Response) => {
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
    try {
        res.json({
            success: true,
            message: "Success",
            width: width,
            height: height,
            item1: item1,
            item2: item2
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const interfaceExecrise = async (req: express.Request, res: express.Response) => {
    interface SinhVien {
        Ho: string,
        Ten: string,
        Tuoi: number,
        Diachi: string,
        TrangThai: string
    }
    function printInfomation(pt: SinhVien) {
        if (pt.TrangThai === 'Di Hoc' && pt.Ten === 'Dung') {
            console.log('Di hoc toan');
        } else if (
            pt.TrangThai === 'Di Hoc' && pt.Ten === 'Hai'
        ) {
            console.log('Di hoc van');
        }


    }
    printInfomation({ Ho: 'Nguyen', Ten: 'Dung', Tuoi: 24, Diachi: 'Tran thai tong', TrangThai: 'Di Hoc' })
    printInfomation({ Ho: 'Nguyen', Ten: 'Hai', Tuoi: 22, Diachi: 'Xuan thuy', TrangThai: 'Di Hoc' })
    try {
        res.json({
            success: true,
            message: "Success",

        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const classExecrise = async (req: express.Request, res: express.Response) => {
    class Circle {
        public radious: any = 1.0
        public color: string = 'red'

        constructor(radious: any, color: string) {
            this.radious = radious
            this.color = color
        }
        getRadious(): any {
            return this.radious
        }

        setRadious(x: any): any {
            this.radious = x
            return this.radious
        }

        getColor(): any {
            return this.color
        }

        setColor(x: any): any {
            this.color = x
            return this.color
        }
    }
    let a = new Circle(2, 'blue')
    console.log(a.getRadious());
    console.log(a.setRadious(3));
    console.log(a.getColor());
    console.log(a.setColor('green'));
    console.log(a.radious.toString());
    console.log(a.color.toString());
    try {
        res.json({
            success: true,
            message: "Success",

        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};