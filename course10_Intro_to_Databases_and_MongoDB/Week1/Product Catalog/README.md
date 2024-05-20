An exercise for designing a database for a Product Catalog

Step 1. Identify objects and entities
- Catalog as entity
- Catalog have several categories of product.This make Category as an entity.
- Each categories have several products

Step 2. Identify attributes of each entities. The schema will be made into JSON format for each entities
1. Catalog:
- id: unique, string or integer, required
- name: unique, string, required

2. Category:
- 