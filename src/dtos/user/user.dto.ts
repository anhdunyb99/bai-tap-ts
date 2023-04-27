export default interface ICreateUserDto {
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  roleId : number,
  birthday : Date,
  status : string,
  codeId : string,
}

export default interface IUpdateUserDto {
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  roleId : number,
  birthday : Date,
  status : string,
  codeId : string,
}