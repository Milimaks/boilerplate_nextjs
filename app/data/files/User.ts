export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export class UserImpl implements User {
  constructor(
    public id: string,
    public email: string,
    public name: string,
    public createdAt: Date
  ) {}
}
