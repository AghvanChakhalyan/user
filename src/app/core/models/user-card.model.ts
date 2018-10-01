export interface UserCardModel {
  id: number;
  name: string;
  surname: string;
  age: number;
  image: string | null;
  gender: string;
  isOnline: boolean;
  hasLeft: Date;
  buttonDelete: string;

}
