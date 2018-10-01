import {UserCardModel} from '../core/models/user-card.model';

const currentDate = new Date();

export const users: Array<UserCardModel> = [
  {
    id: 1,
    name: 'Pit',
    surname: 'Piters',
    age: 46,
    image: 'user3.jpeg',
    gender: 'male',
    isOnline: false,
    hasLeft: new Date(currentDate.setDate(currentDate.getDate() - 1)),
    buttonDelete: 'X'
  },
  {
    id: 2,
    name: 'Alan',
    surname: 'Sherer',
    age: 19,
    image: 'user1.png',
    gender: 'male',
    isOnline: true,
    hasLeft: null,
    buttonDelete: 'X'
  },
  {
    id: 3,
    name: 'Angelina',
    surname: 'Walker',
    age: 24,
    image: 'user2.jpg',
    gender: 'female',
    isOnline: true,
    hasLeft: null,
    buttonDelete: 'X'
  },
  {
    id: 4,
    name: 'Conor',
    surname: 'McGregor',
    age: 22,
    image: null,
    gender: 'female',
    isOnline: false,
    hasLeft: new Date(currentDate.setDate(currentDate.getDate() - 2)),
    buttonDelete: 'X'
  }, {
    id: 5,
    name: 'Ara',
    surname: 'Martirosyan',
    age: 24,
    image: 'user4.jpg',
    gender: 'male',
    isOnline: true,
    hasLeft: null,
    buttonDelete: 'X'
  },
  {
    id: 6,
    name: 'Joe',
    surname: 'Parker',
    age: 21,
    image: null,
    gender: 'male',
    isOnline: false,
    hasLeft: new Date(currentDate.setDate(currentDate.getDate() - 7)),
    buttonDelete: 'X'
  },
  {
    id: 7,
    name: 'Vardishagh',
    surname: 'Yesayan',
    age: 19,
    image: null,
    gender: 'female',
    isOnline: false,
    hasLeft: new Date(currentDate.setDate(currentDate.getDate() - 6)),
    buttonDelete: 'X'
  }
];
