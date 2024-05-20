IBM cloud code engine
    when deploying a python-based microservice, must choose gateway interface infrastructure:
        web server GI: gunicorn or uWSGI
        asynchronous server GI: daphne or hypercorn
    with code engine:
        just push the code
        fully managed serverless platform (function as PaaS and Container as a Service)
        runs workloads such as microservices and batch jobs
    main use case: deploy, build and deploy, run jobs
    benefit:
        code-focused, live in seconds, autoscale, control access, secure private network, integrates with other IBM cloud services
        
Terms in Code Engine
    project: provides grouping and namespace for app, build, job and certificate
    Application: runs your application and scale it as needed. can do http and websocket communication
    Build (image build): create container image. supports dockerfile and buildpack to build then deploy
    Job: one-time process