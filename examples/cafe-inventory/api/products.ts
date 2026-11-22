import {
  Body, ConflictException, Controller, Delete, Get, HttpCode, NotFoundException,
  Param, ParseIntPipe, Patch, Post, UseGuards,
} from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsInt, IsString, Matches, Max, MaxLength, Min, MinLength } from 'class-validator';
import { RequireRole, RoleGuard, SessionGuard } from './auth';
import { Database } from './db';

class StockDto {
  @IsInt()
  @Min(0)
  @Max(1000000)
  quantity!: number;
}

class ProductDto extends StockDto {
  @Transform(({ value }) => typeof value === 'string' ? value.trim().toUpperCase() : value)
  @IsString()
  @Matches(/^[A-Z0-9][A-Z0-9-]{0,31}$/)
  sku!: string;

  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name!: string;
}

@Controller('products')
@UseGuards(SessionGuard, RoleGuard)
export class ProductsController {
  constructor(private readonly db: Database) {}

  @Get()
  async list() {
    const result = await this.db.pool.query('SELECT id, sku, name, quantity, updated_at FROM products ORDER BY sku');
    return result.rows;
  }

  @Post()
  @RequireRole('admin')
  async add(@Body() product: ProductDto) {
    const { rows } = await this.db.pool.query(`
      INSERT INTO products (sku, name, quantity) VALUES ($1, $2, $3)
      ON CONFLICT (sku) DO NOTHING
      RETURNING id, sku, name, quantity, updated_at
    `, [product.sku, product.name, product.quantity]);
    if (!rows.length) throw new ConflictException('That SKU already exists.');
    return rows[0];
  }

  @Patch(':id')
  @RequireRole('admin')
  async stock(@Param('id', ParseIntPipe) id: number, @Body() input: StockDto) {
    this.validateId(id);
    const { rows } = await this.db.pool.query(`
      UPDATE products SET quantity = $2, updated_at = now() WHERE id = $1
      RETURNING id, sku, name, quantity, updated_at
    `, [id, input.quantity]);
    if (!rows.length) throw new NotFoundException('Product not found.');
    return rows[0];
  }

  @Delete(':id')
  @RequireRole('admin')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: number) {
    this.validateId(id);
    const result = await this.db.pool.query('DELETE FROM products WHERE id = $1', [id]);
    if (!result.rowCount) throw new NotFoundException('Product not found.');
  }

  private validateId(id: number) {
    if (!Number.isInteger(id) || id < 1 || id > 2147483647) throw new NotFoundException('Product not found.');
  }
}
