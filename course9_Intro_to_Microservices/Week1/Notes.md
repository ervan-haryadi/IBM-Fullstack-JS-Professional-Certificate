Twelve Factor App Method
    sering dipakai saat membuat microservice
    dikelompokkan menjadi tiga bagian yaitu Code, deploy dan operate
    Kedua belas factor dikelompokkan per bagian:
    Code	
        1. codebase:
            Track code using version control system
            A single app must be contained in a single codebase (one-on-one relation)
            An app can have multiple instance (can be deployed several times)
            There must be different version of codebase on each deployed
        5. Build, release, run:
            ubah codebase menjadi executable dinamakan build
            gabungkan build bersama config file agar bisa di-execute (release)
            jalankan executable (run)
        10. Dev/prod parity
            kurangi perbedaan antara dev dan prod environment
            pakai backend service yang sama di seluruh environment
        2. Dependencies
            an app only as reliable as its least reliable dependency
            explicitly declare dependency
    Deploy
        3. Config
            Keep everything that varies (creds, backend service location) in config file
            keep config separated from code
            store config variables in environment variables
        4. Backend Services
            don't distinguish between local and third-party services
            access ALL services by URL and creds to make swapping easier
        6. Process
            stateless and share nothing
            no memory or filesystems sharing, make persistent data stored in backend
            store data centrally
        7. Port binding
            export service by port binding
            export http and other services
            declare web server library dependency
            become backend service for other app
    Operate
        8. Concurrency
            Scale app
            stateless process can be spun up without creating dependencies on other process
        9. Disposability
            minimal process start time and graceful termination
            quick to deploy code or config change
            easily scale app
        11. Logs
            doesnt concern storing logs
            treat logs as event stream
            execution environment capture, aggravate, routes logs to destination
        12. Admin process
            enable one-off app management process
            run against release, using same config and release
            part of app code
            
Microservices
    approach to create a single app composed of many loosely coupled, independently deployed, smaller services
    Characteristic:
        have own stack
        components communicate with each other
        functional segregation
    benefit:
        no interdependency = easy updates
        different stack = varied expertise
        smaller components = scale independently
    microservices are usually:
        use horizontal scaling (increase instance)
        precise scaling (only scale needed components)
        event driven (broadcast state change to help decide when to scale)

Comparison
    Monolith
        all or most functionality in a single process
        managed in internal layers
        interconnected
        interdependent
        benefit:
            simple and less cross cutting
        drawback:
            more complex with growth, less flexible when dealing with new tech
        example: Windows Form Application
            
    Service-Oriented App (SOA)
        designed and built in a service provider and consumer approach
        provide seamless and reusable services
        comprises of interface, contract and implementation
        benefit:
            increase reliability and support paralel development
        drawback
            complex design and expensive investment
        example: banking system
    
    Microservices
        loosely coupled, reusable and specialized independent components
        data are not shareable between microservices, making them scalable and tech independent
        benefit:
            ease of development, flexible to add new tech
        drawback
            security requirement, challenge in debugging
        example: e-commerce
    
Microservice Pattern
    Several patterns are single page app, backend for frontend, strangler, service discovery
    
    SPA
        enabled by powerful browser, faster network and client-side language
        loads 1 interface that never reload
        updates dynamically using calls to backend REST service
        simplify front end experience
        need greater performance from backend service
    BFF
        superior support than generic backend
        insert layer between UX and resources
        able to customize UX for different channel (ie. different size for computer and smartphone)
        support one backend type per UI
    Strangler
        manages refactoring monolith into microservices in stages
        split functional domains
        replaces each domain with new microservices
        enables two app exists side-by-side
        steps:
            transform: create new paralel site
            coexist: both existing and new app are running, but slowly redirect functionality to new app
            eliminate: remove old app
    Service discovery
        helps app and services discover each other
        provide flexibility (service instance could change dynamically)
        could be used by load balancer to perform health check and rebalance traffic
    Entity and aggregate patterns
        mostly used by ecommerce site
    adapter
        help translate relationship between incompatible objects
        example: integration with third party API