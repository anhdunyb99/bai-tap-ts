export default interface ICreateBookDto {
  name: string;
  price: number;
  category: string;
  description: string;
  outdate: string;
}

export default interface IUpdateBookDto {
  name: string;
  price: number;
  category: string;
  description: string;
  outdate: string;
}

export default interface IRentBookDto {
  start_time: string;
  end_time: string
}