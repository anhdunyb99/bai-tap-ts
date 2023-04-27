export default interface IRegisterDto {
    email: string,
    firstName: string,
    lastName: string,
    username: string,
    password: string
}

export default interface ILoginDto {
    username: string,
    password: string
}

function getBook<T>(book : T) : T  {
    return book
}

let data = getBook<number>(5)
let data1 = getBook<string>('5')


interface IData <T> {
    name : T,
    age : T
}

const data2 : IData<string> = {
    name : '123',
    age : ''
}