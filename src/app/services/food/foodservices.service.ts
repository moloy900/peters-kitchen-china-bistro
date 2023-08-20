import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodservicesService {
  constructor() {}

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Brown Pasta Plate',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 1.5,
        imageUrl: '/assets/food-1.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 3.0,
        imageUrl: '/assets/food-2.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 3,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 4.0,
        imageUrl: '/assets/food-3.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 4,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 4.0,
        imageUrl: '/assets/food-4.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 5,
        name: 'Kung Pao Chicken',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 4.0,
        imageUrl: '/assets/food-5.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 4.0,
        imageUrl: '/assets/food-6.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 4.0,
        imageUrl: '/assets/food-7.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 8,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 4.0,
        imageUrl: '/assets/food-8.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 9,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 4.0,
        imageUrl: '/assets/food-9.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 10,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 4.0,
        imageUrl: '/assets/food-10.jpg',
        tag: ['FastFood',  'Lunch'],
      },
      {
        id: 11,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 4.0,
        imageUrl: '/assets/food-11.jpg',
        tag: ['FastFood',  'Lunch'],
      },
      {
        id: 12,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 4.0,
        imageUrl: '/assets/food-12.jpg',
        tag: ['FastFood',  'Lunch'],
      },
      {
        id: 13,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 4.0,
        imageUrl: '/assets/food-13.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 14,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 4.0,
        imageUrl: '/assets/food-14.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 15,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 4.0,
        imageUrl: '/assets/food-15.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 16,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Chinese'],
        star: 3.0,
        imageUrl: '/assets/food-7.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }

  getAllFoodByTag(tag: string): Foods[] {
    // if (tag == 'all') {
    //   return this.getAll();
    // } else {
    //   return this.getAll().filter((food) => food.tag?.includes(tag));
    // }

    return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tag?.includes(tag));

  }

  getAllTag():Tag[]{
    return[
      {name:'All', count:14},
      {name:'FastFood', count:4},
      {name:'Pizza', count:2},
      {name:'Lunch', count:3},
      {name:'SlowFood', count:2},
      {name:'Hamburger', count:1},
      {name:'Fry', count:1},
      {name:'Soup', count:1},
    ]
  }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
  }
}
