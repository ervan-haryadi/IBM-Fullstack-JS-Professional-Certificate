Serverless
    definisi: the concept of building and running an app or a service that did not require server management
    merupakan gabungan FaaS dan BaaS
        Function as a Service: untuk menjalankan function
        Backend as a Service: berfungsi sebagai backend service, seperti database, object store, message queue
    Evolved from traditional server, virtualization, containers, then serverless
    Concepts:
        Abstract infrastructure
        code runs in cloud platform
        cloud provider manages the hardware and software setup
        billed by usage
        dev only needs to focus on app and code
    characteristic:
        hostless (no need to maintain server)
        elastic (auto scale)
        load balanced
        stateless (faster performance, high scale)
        event-driven (function triggers on event)
        high availability
        usage-based
        
Serverless Pros and Cons
    benefit:
        reduce cost (no server maintenance)
        high available and fault tolerance
        increased dev productivity
        code only runs when triggered
        fast runtime
        included in IDE
        usage based payment
        language independent
        3rd party auth
        faster time to market
        green computing
    Drawback
        unsuitable for long-running process
        vendor lock-in risk
        cold start -> increase runtime
        latency often unsuitable for time-critical apps
        security concerns
        complex debugging and monitoring
        language support dependencies
        server optimization loss (cannot manage server)
        no state persistence
    Vs Container
        better:
            cost - low vs high container
            scaling - from provider, container must scale manually
            maintenance - diurus cloud provider
            deploy time - miliseconds vs seconds container
            speed to market - langsung vs diurus marketing internal
        worse:
            testing - hard to test vs easy container
            portability - container are port agnostic, so easy to port
            latency - cold start challenge vs low latency
            batch jobs - not ideal for long-running apps (function time limit)
            app control - can only control cpu and memory vs control everything
            language support - popular programming vs any language
    Vs Traditional
        better:
            architecture - cloud computing vs monolith
            cost - on run vs all time
            scale - easy to scale vs limited scale ability
            integration - available on app vs limited to third party
        worse:
            data control - located in other place vs within organization
            networking - require setting private IP vs regular IP
            security - vulnerable to wider attacks vs attacks from organizations perimeter
            vendor lock-in - affected by vendor vs your own control
    
FaaS Model
    function as a service, a cloud computing without complex infrastructure
    characteristic:
        subset of serverless computing
        create app as a function
        can be deployed as hybrid or on-premise
        stateless
        includes function that execute in miliseconds and scalable
        lightweight and decoupled
        billed on time
    benefit:
        divide server into functions
        pay what you use
        functions are stateless small, independent code
        inherent high availability
    serverless components in action:
        event from client actions incoming -> intercepted by API gateway -> forwarded to FaaS -> FaaS process requests, if needed then forwarded to BaaS -> BaaS execute requests, sends response to FaaS -> FaaS sends response to API gateway who deliver to client
    FaaS principles:
        each function only do one action (must be efficient, lightweight and executes quickly)
        avoid function chain (too many process)
        limit dependencies on third-party libraries (slows down function)
    FaaS providers:
        AWS lambda, google cloud functions, azure functions, ibm cloud functions, openshift cloud functions
        fission, Fn project, Knative, openFaaS

Serverless Framework
    free and open source web framework written using node.js
    concepts:
        functions: the code, independent unit of execution or deploy
        events: triggers function
        resources: infra components used by functions
        services: framework's unit of organization; where to define functions, events and resources

Serverless Reference Architecture
    Serverless Web App Architecture
        front end: static content generated by frontend framework
        back end: host logic in lambda functions, enables access via API gateway, store data in storage (DynamoDB)
        user registration and auth: restrict access to registered user
    common use cases:
        event streaming, post-processing and multi-language