import express from 'express';

export const bai1 = async (req: express.Request, res: express.Response) => {
    const a: number = 1
    const b: number = 2
    const sum: number = a + b
    try {
        res.json({
            success: true,
            message: "Success",
            sum: sum
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const bai2 = async (req: express.Request, res: express.Response) => {
    const a: number = 1
    const b: number = 2
    const sum: number = a + b
    const hieuSo: number = a - b
    const tich: number = a * b
    const thuong: any = a / b

    try {
        res.json({
            success: true,
            message: "Success",
            sum: sum,
            hieuSo: hieuSo,
            tich: tich,
            thuong: thuong
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const bai3 = async (req: express.Request, res: express.Response) => {
    const a: number = 3

    const b: number = a ** 2
    const c: number = a ** 3
    const d: number = a ** 4

    try {
        res.json({
            success: true,
            message: "Success",
            b: b,
            c: c,
            d: d
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const bai4 = async (req: express.Request, res: express.Response) => {
    const a: number = 3
    const b: number = 4
    const chuvi: number = a + b
    const dientich: number = a * b

    try {
        res.json({
            success: true,
            message: "Success",
            chuvi: chuvi,
            dientich: dientich
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const bai5 = async (req: express.Request, res: express.Response) => {
    const a: number = 3
    const b: number = 4
    const dientich: number = 4 * (a ** 2) * Math.PI
    const thetich: number = (4 / 3) * Math.PI * (a ** 3)

    try {
        res.json({
            success: true,
            message: "Success",
            dientich: dientich,
            thetich: thetich
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const bai6 = async (req: express.Request, res: express.Response) => {
    const a: number = 3
    const b: number = 4
    const c: number = 5
    const dientich: number = 4 * (a ** 2) * Math.PI
    const thetich: number = (4 / 3) * Math.PI * (a ** 3)
    let date: any

    if (a > 0 && a < 10 && b > 0 && b < 10) {
        date = '0' + a + '/' + '0' + b + '/' + c
    } else if (
        a > 9 && a <= 31 && b > 9 && b <= 12
    ) {
        date = a + '/' + b + '/' + c
    } else if (
        (a > 0 && a < 10 && b > 9 && b <= 12)
    ) {
        date = '0' + a + '/' + b + '/' + c
    } else if (
        date = a > 9 && a <= 31 && b > 0 && b
    ) {
        date = a + '/' + '0' + b + '/' + c
    } else {
        date = 'So ban nhap khong hop le'

    }
    try {
        res.json({
            success: true,
            message: "Success",
            date: date
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const bai7 = async (req: express.Request, res: express.Response) => {
    const a: number = 1000
    const time: any = new Date(a * 1000).toISOString().slice(11, 19)

    try {
        res.json({
            success: true,
            message: "Success",
            time: time
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const bai8 = async (req: express.Request, res: express.Response) => {
    const a: number = 1000;
    const b: number = 100
    const biggestNumber: number = Math.max(a, b)
    try {
        res.json({
            success: true,
            message: "Success",
            biggestNumber: biggestNumber
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}


export const bai9 = async (req: express.Request, res: express.Response) => {
    const a: number = 1000;
    const b: number = 100
    const c: number = 200
    const biggestNumber: number = Math.max(a, b, c)
    try {
        res.json({
            success: true,
            message: "Success",
            biggestNumber: biggestNumber
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const bai10 = async (req: express.Request, res: express.Response) => {
    const a: number = 1000;
    const b: number = 100
    const c: number = 200
    let result: string = ''
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        result = "a,b,c la canh cua tam giac";
    } else {
        result = 'No'
    }
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
}

export const bai11 = async (req: express.Request, res: express.Response) => {
    const a: number = 12
    let result: string = ''
    if (a >= 1 || a <= 12) {
        switch (a) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                result = '31 ngay'
                break;
            case 2:
                result = '29 ngay'
                break;
            case 4: case 6: case 9: case 11:
                result = '30 ngay'
                break;
        }
    }
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
}

export const bai12 = async (req: express.Request, res: express.Response) => {
    let sophut: number = 600;
    let tongtien: number
    const phi: number = 25000;
    if (sophut > 200) {
        tongtien = (sophut - 200) * 200 + 150 * 400 + 50 * 600
    } else if (sophut > 50) {
        tongtien = (sophut - 50) * 400 + 50 * 600
    } else {
        tongtien = sophut * 600
    }
    try {
        res.json({
            success: true,
            message: "Success",
            tongtien: tongtien
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const bai13 = async (req: express.Request, res: express.Response) => {
    let n: number = 10
    function Fibonacci(x: number): number {
        if (x == 1 || x == 2) {
            return 1
        }
        return Fibonacci(x - 1) + Fibonacci(x - 2)
    }
    let fibonaci = Fibonacci(n)
    try {
        res.json({
            success: true,
            message: "Success",
            fibonaci: fibonaci
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const bai14 = async (req: express.Request, res: express.Response) => {
    let a: number = 11;
    let result: number = 0;
    while (a > 0) {
        let rightmost = a % 10;
        result = result * 10 + rightmost;
        a = Math.floor(a / 10)
    }

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
}

export const bai15 = async (req: express.Request, res: express.Response) => {
    let a: number = 11;
    let result: number = 0;
    while (a > 0) {
        let rightmost = a % 10;
        result = result * 10 + rightmost;
        a = Math.floor(a / 10)
    }

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
}

export const bai16 = async (req: express.Request, res: express.Response) => {
    const a: number = 100;
    let string = a.toString()
    let array = string.split('')
    let biggestNumber: any
    biggestNumber = Math.max.apply(null, array)

    try {
        res.json({
            success: true,
            message: "Success",
            biggestNumber: biggestNumber
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const bai17 = async (req: express.Request, res: express.Response) => {
    let array: number[] = [1, 2, 8, 4, 5]
    const biggestNumber: number = Math.max.apply(null, array)
    const smallestNumber: number = Math.min.apply(null, array)
    const arrayLength: number = array.length

    try {
        res.json({
            success: true,
            message: "Success",
            biggestNumber: biggestNumber,
            smallestNumber: smallestNumber,
            arrayLength: arrayLength
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const bai18 = async (req: express.Request, res: express.Response) => {
    const a: number = 100
    let result: any
    function isPrime(x: number) {

        if (x <= 1)
            return false;

        for (let i = 2; i < x; i++)
            if (x % i == 0)
                return false;

        return true;
    }
    function printPrime(y: number) {
        for (let i = 2; i <= y; i++) {
            if (isPrime(i)) {
                result.push()
            }
        }
    }

    printPrime(a)

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
}

export const bai19 = async (req: express.Request, res: express.Response) => {

    let a: number = 100;
    function isPrime(x: number) {

        if (x <= 1)
            return false;

        for (let i = 2; i < x; i++)
            if (x % i == 0)
                return false;

        return true;
    }
    function printPrime(y: number) {
        let sum = 0;
        let count = 0;
        for (let i = 2; i <= y; i++) {
            if (isPrime(i)) {
                sum += i
                count++
            }

        }
        return sum / count
    }
    let result: any = printPrime(a)
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
}

export const bai20 = async (req: express.Request, res: express.Response) => {
    let a: number = 100;

    function isPrime(x: number) {

        if (x <= 1)
            return false;

        for (let i = 2; i < x; i++)
            if (x % i == 0)
                return false;

        return true;
    }
    function printPrime(y: number) {
        for (let i = 2; i <= y; i++) {
            if (isPrime(i)) {
                console.log(i)
            }
        }
    }

    let result : any = printPrime(a)
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
}