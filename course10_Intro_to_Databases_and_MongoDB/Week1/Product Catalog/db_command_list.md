These are the commands that were run for "Implement Product Catalog on MongoDB" exercise

## Setup
connect to local database (port 27017)
> mongosh mongodb://localhost:27017

check db version
> db.version()
7.0.9

check all available databases
> show dbs

access (or create, if not exist) a specific database called "productCatalogDB"
> use productCatalogDB
switched to db productCatalogDB

create collection with name "catalog"
> db.createCollection("catalog")
{ ok:1 }

show all collections in "productCatalogDB"
> show collections
catalog

## Data Insertion
create a catalog
> db.catalog.insertOne({"id":"clog1", "name":"product catalog"})
{ acknowledged: true, insertID: ... }

create new collection called "category"
> db.createCollection("category")
{ ok:1 }

insert new category
> db.category.insertOne({"category_name":"Smart Phone", "child_categories":[], "parent_categories":[]})
{ acknowledged: true, insertID: ... }

insert several categories
> db.category.insertMany([{"category_name":"Apple Products", "child_categories":[], "parent_categories":[]}, {"category_name":"Apple Phones", "child_categories":[], "parent_categories":["ct001", "ct002"]}])
{ acknowledged: true, insertID: {'0': ..., '1': ...}}

count number of categories
> db.category.countDocuments()
3

list all documents in category collection
> db.category.find()
[ all documents are listed inside an array ]

find particular documents, in this case document with category name "Apple Products"
> db.category.find({category_name:"Apple Products"})
[ show documents that matches the query in an array ]

exit the db
> exit