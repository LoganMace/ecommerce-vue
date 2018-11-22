SELECT * FROM products
WHERE category ILIKE '%' || $1 || '%'
ORDER BY name ASC;