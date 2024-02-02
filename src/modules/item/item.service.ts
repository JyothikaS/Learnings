import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemService {
  private readonly itemlists: Item[] = [];

  create(item: Item) {
    console.log(item);
    this.itemlists.length = 0; //to clear the array after each post
    this.itemlists.push(item);
  }

  findAll(): Item[] {
    return this.itemlists;
  }

  getHello(): string {
    // throw new Error('An error occurred in getHello method'); //gave to see how error is shown
    return 'Helloo from item!';
  }

  getHi(): string {
    return 'Hiiii';
  }
}
