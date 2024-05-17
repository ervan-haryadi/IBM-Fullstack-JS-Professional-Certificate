MongoDB
    document & noSQL database, structured in non-relational way
    Document: a single document or JSON file contains information of a specific object. Example student "A"
    Collection: a group of document with similar properties. Example "Students" Collection includes student "A" and other students

Advantages
    Flexible (doesnt use schema)
    code first approach
    evolving schema
    native high-availability

Use Cases
    Many-Sources-One-View
        no more data silos
        easy data ingestion
        consolidate different data
        flexible schema
    IoT
        Billions IoT devices around the world
        Vast amount of data
        Scale
        Expressive querying
    E-Commerce
        Products have Different attributes
        Optimized for read
        Dynamic Schema
    Real-time Analytics
        Quick response to changes
        Simplified ETL
        Real time, along with Operational Data
    Gaming
        Globally scalable
        No downtime
        Supporting rapid development
    Finance
        Security
        Speed
        Reliability

MongoDB CRUD
    MongoShell
        command line tool to help interact with mongoDB
    
    Several most used commands in MongoDB
        mongosh             => connect to the mongoDB cluster
        show dbs            => show all databases
        use [db_name]       => switch working database to [db_name]
        show collections    => show collections in selected database

        Create:
            db.[collection_name].insertOne([key-value pair arguments]) => insert a data into the collection
            Can also make a list of objects (datas that want to be inserted), then insert them using insertMany command
        
        Read:
            [collection].findOne()              => find the first document in natural order
            [collection].findOne({[parameter]}) => find first document that matches the parameter
            [collection].find({[parameter]})    => find all documents that matches the parameter
            [collection].count({[parameter]})   => count all occurences of documents that matches the parameter

        Replace:
            keep the document on a variable using findOne({[parameter]}), updates the value, then use db.[collection].replaceOne({[parameter]}, [variable])

        Update:
            use updateOne({[parameter]}, [variable]) or updateMany({[parameter]})

        Delete:
            use deleteOne({[parameter]}) (usually unique ID), or deleteMany({[parameter]})
