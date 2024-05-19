REST
    Representational State Transfer
    flexible and lightweight
    architectural style defines how apps should communicate between network
    Key characteristic:
        requests through http to perform CRUD
        stateless client-server comms --> makes them scalable
        uniform interface between components --> complete information and API requests must looks similar

API gateway
    API management tools placed between client and a collection of backend services
    Why use gateway?
        protect, analyze usage, monetize, single point of contact, and seamless add and removal
    Benefit
        insulate client from implementation details
        provide unified access to API
        fewer requests to backend
        follows standard protocol to the outside world
    Drawback
        complex, single point of failure (kalo gateway fail, semua fail), extra step = longer response time
    Several example of API gateway:
        managed: IBM datapower, google Apigee, microsoft azure, amazon API
        open-source: kong, apache apisix, tyk, gloo

Create REST API
    basically, use Flask (Python) to create REST API
    
Swagger
    runs OpenAPI specification, describe its structure, build UI, adhere's to specs
    OpenAPI specs:
        standard, language agnostic interface for REST API
        supported operations
        API parameter input & output
        auth reqs
        ToS
        contacts
        license
    Flask
        python that functions as API, can describe and visualizes API. flask-swagger-ui

GraphQL
    a query language for API
    allows user to fetch what they need
    language agnostic
    terms:
        query, field, mutation
    example: netflix