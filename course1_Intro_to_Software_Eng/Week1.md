# Overview of Software Engineering

## What is Software Engineering
Software Engineering is a systematic approach to design and develop software
Software Engineer responsibilities are including:
- Design, build, and maintain software systems
- Writes and tests codes
- Consults with stakeholders, third party vendors, security specialists, and other team members

Software Engineers are different with Software Developers in scope, where SoftEng build systems while SoftDev implements specific functionalities

## Software Development Life Cycle (SDLC)
SDLC provides systematic process for software development
SDLC is developed because of a need for systematic approach
- mainly caused by the increasingly complex system and bigger demands while projects are mostly unsystematically prepared (thus, starting the Software Crisis in 1960's)
SDLC advantages include:
- Risk reduction and improved efficiency
- Facilitates communication
- Team members know their responsibilities
- Iteration allows changing requirements

## Phases of SDLC
1. Planning
    Do requirements gathering
    Write requirements in Software Requirement Specifications (SRS)
    Sometimes create Prototype to make requirements more clear. Prototype then discussed with stakeholder to achieve mutual understanding on requirements
2. Design
    Develop the system architecture and create Design Document
3. Development
    Team start coding using Design Document as guide
4. Testing
    Test codes to ensure stability, security and meeting requirements in SRS while also identifying and fixing bugs
5. Deployment
    Release the code to the environment, get user acceptance from stakeholder and do production deployment
6. Maintenance
    Stakeholder gave feedback on production product, code enhancements, bugs identification and fixing

## Common SoftEng Processes in Building High-Quality Software
1. Requirement Gathering
    Gathers a set of requirements needed to create the software
2. Design
    Transforms requirements into a structure that developers can understand and use to make software
3. Coding for Quality
    Use a set of coding practices (such as follow coding standard and uses linter to check errors) during development
4. Testing
    Verifies the software matches established requirements and is free of bugs
5. Releases
    Include alpha, beta, and general releases
    Alpha: a preview of functioning software and only select stakeholders can use
    Beta: meets all the requirements and all stakeholders can use. This phase usually used for user testing
    General release: stable software where all users can use
6. Documenting
    Creates a text or video that explains the software to technical and non-technical users

## Requirements Gathering
Six (reduced to four) steps in requirements gathering:
1. identify stakeholders
2. establish goals and objectives
3. elicit, document and confirm requirements
4. prioritize documents

Three documents created as results from Req Gathering:
- Software Requirements Specification (SRS) contains functional, external, system, and non-functional requirements
- User Requirements Specification (URS) contains user stories
- System Requirements Specification (SyRS) contains system capabilities, acceptance criteria, policy, regulation, performance, security, and hardware requirements

# Software Building Process and Associated Roles

## Software Development Method
1. Waterfall
    Sequential model where requirements are stated in-front (at planning stage) and no change may occurs during the development stage. It makes the job clear for developer and makes budgeting easy, but it is inflexible and hard to change requirements.
2. V-Model
    Another sequential model that incorporates testing plan in the model. It is easy to use and planned testing can save more time, but it is rigid and does not accomodate to change because the test have been made during planning
3. Agile
    An iterative model that cycles back towards planning after coding to accomodate time for stakeholder feedback. Requirements changing are easy to accomodate, but budgeting and resource allocation are hard to determine because the scope are usually not clearly defined.

## Software Versions
Versioning helps in determine the history changes, updates and patches
Version numbers are usually written in 4 parts separated by a period (ie. 1.03.01.01)
Versioning can help to overcome compatibility problem faced by older hardware on newer software

## Testing
Testing can be divided into three categories:
- Functional: an input-output test using blackbox method to check the code's usability and accessibility
- Non-functional: checks performance, security, scalability and availability of the software
- Regression: done to check if any changes in codes did not break the application. Tests chosen in this category are tests that check if there are frequent defects, complex cases, edge cases, recently changed feature, and random success case

Testing levels:
1. Unit testing: test a module of code to eliminate errors before integrated to other modules
2. Integration testing: Identify errors after two or more modules are combined
3. System testing: checks the applications compliance with SRS, system validation, functional and non-functional tests, and the staging environment
4. Acceptance testing: checked and accepted by users, customers and stakeholders

## Documentation
Documentation can be written, as a video or in graphical format
A process documentation describes on how to complete a task
A product documentation relates on how a product functions. Can be divided into requirements, design, technical, QA and user documentation