export default interface ICreateUser {
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

export default interface IUpdateUser {
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