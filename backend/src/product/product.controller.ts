import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    try {
      const product = await this.productService.create(createProductDto);
      return { success: true, data: product };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const allProducts = await this.productService.findAll();
      return { success: true, data: allProducts };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const product = await this.productService.findOne(id);
      return { success: true, data: product };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      const product = await this.productService.update(id, updateProductDto);
      return { success: true, data: product };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
