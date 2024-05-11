# Software Architecture and Design
## Software Architecture
Is the organization of the system that takes place during the design phase in SDLC. It serves as the blueprint to the devs and comprised of fundamental structures and behavior
Software Architecture is important because:
- Serves as basis for communication between stakeholder and devs (and also between devs)
- Represents earliest design decision
- Allows flexibility on changes
- Increases software lifespan
- Guides tech stacks choices because it contains non-functional requirements

Documents produced during architectural design are called artifacts. Some artifacts are:
- Software Design Document (SDD): contains collection of tech specs regarding design implementation, such as assumptions, dependencies, constraints, objectives, etc
- Architectural Diagram: displays components, interactions, constraints, confines, architect patterns
- UML Diagram: Visual-based communication on structures and behavior

## Software Design and Modeling
A process to document:
- structural components: breaks down software problem into well-organized solution
- behavioral attributes: describe the behavior of the system

Models are expressed using:
- UML diagram
- state transition diagram

## Object Oriented Analysis & Design
- Used for system that modeled by interacting with objects
- Allows devs to work on different aspects of the same app at the same time

A UML diagram can be used to show static structure and dynamic behavior, ie. class diagram

# Software Architecture Pattern and Deployment Topologies
## Approaches to App Architecture
Components: reusable, independent, replacable, extensible, encapsulated, non-context specific
Services are made of components, whereas components are made of objects

Component-based Architecture: decomposition of system into logical independent components

Service-Oriented Architecture: loosely-coupled service that interfaced with each other via communication protocol over a network

Distributed System: multiple services on different machines and appears on end-user as a single, coherent app

## Architectural Pattern
1. Two-Tier: client communicates to server directly. Example: messaging apps
2. Three-Tier: divided into presentation tier (user interface), application tier (business logic), and data tier (storage). Each tier only communicates with direct connection (presentation <-> application <-> data). Example: web apps
3. Peer-to-Peer: Decentralized network where each machines are both client and server at the same time. Example: cryptocurrency
4. Event-driven: focus on producer and consumer (producer listen and reacts to trigger while consumers process events). Example: ride sharing
5. Microservices: An approach to build an app that breaks down its functionality into modular components called services. Example: social media

## Deployment Environments
Application environments includes:
- App code/executables
- Software stacks
- Network infrastructure
- Hardware
Pre-Production: Development, QA, Staging
Production: Entire solution stack, load balancing, non-functional reqs, for all users
Deployment platform: On-premise or cloud (private, public or hybrid)

## Production Deployment Components
From user to storage:
- Presentation: user application
- Web: web load balancer with several web servers (a firewall between presentation and web tier)
- App: App load balancer (proxy) with several app servers
- Data: Database with a high-availability DB replica

Firewall: security device that monitors traffic between networks
Load Balancer: distribute network traffic among servers
Web Server: deliver web content
App Server: provides business logic
Database Server: stores and controls data through DBMS