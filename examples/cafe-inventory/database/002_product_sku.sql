ALTER TABLE products ADD COLUMN sku text;
UPDATE products SET sku = 'SKU-' || id;
ALTER TABLE products ALTER COLUMN sku SET NOT NULL;
ALTER TABLE products ADD CONSTRAINT products_sku_key UNIQUE (sku);
