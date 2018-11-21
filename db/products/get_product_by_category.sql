SELECT * FROM products
WHERE category ILIKE '%' || $1 || '%';