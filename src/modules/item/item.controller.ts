/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, HttpException, HttpStatus  } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}
 
  @Post()
  async create(@Body() createItemDto: CreateItemDto){
    console.log('create', createItemDto);
    this.itemService.create(createItemDto)
  }

//   @Get()
//   findAll(): string {
//     return 'returns all items';
//   }

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }
//just hardcoded to know how it works
//   @Get('hello')
//   getHello(): string {
//     throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
//     // return this.itemService.getHello();
//   }

  @Get('hello')
  async getHello(){
    try {
        return await this.itemService.getHello();
        // await this.itemService.getHello(); //wont work coz no return given
    } catch (error) {
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message!!!',
          }, HttpStatus.FORBIDDEN, {
            cause: error
          });
    }
  }

  @Get('hi')
  getHi(): string {
    return this.itemService.getHi();
  }
}
