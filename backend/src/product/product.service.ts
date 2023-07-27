/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productModel.create(createProductDto);
    return newProduct.save();
  }

  async findAll() {
    const allProducts = await this.productModel.find().exec();
    return allProducts;
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec();
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const updatedProduct = this.productModel
      .findByIdAndUpdate(id, updateProductDto)
      .exec();
    const newUpdatedProduct = this.productModel.findById(id).exec();
    return newUpdatedProduct;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
