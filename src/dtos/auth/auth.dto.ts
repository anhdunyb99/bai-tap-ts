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