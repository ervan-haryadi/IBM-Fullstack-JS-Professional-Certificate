Container Orchestration
    manages lifecycle of containers
    important for Security, Orchestration, Automation, and Response (SOAR) reqs in company
    
    Features:
        defines container image and registry
        improve provision and deployment
        secure network
        ensure availability & performance
        scalable & load balance
        resource allocation and scheduling
        rolling updates and rollback
        health check on system
    Functions:
        file config using YAML or JSON
        deployment scheduling and finding correct host
        manages container lifecycle
        scaling and productivity
    Software for container orchestration: Marathon, Nomad, Docker Swarm, Kubernetes
    Benefit:
        production up, fast deploy, reduce cost, strong secure, ease scale, fast recover
    
Kubernetes
    open-source container orchestration platform
    Concepts:
        pods & workload: smallest deployable compute object & higher-level abstraction to run workloads
        services: exposes app that runs on pods
        storage: support persistent and temp storage for pods
        config: resource for configuring pods
        security: security for cloud native workload
        policies: policies to run a/a group of pods
        scheduling: run or terminates pods for node
        preemption: terminate lower priority pods for higher priority pods
        admin: management for kubernetes cluster
    Features:
        automated rollout and rollback
        storage orchestration
        horizontal scaling
        automated bin packing (resource util diefisienkan agar cost rendah)
        secret and config management (simpan & update cred rahasia tanpa rebuild image)
        Batch execution (manages CI workload)
        self-heal (check if a pod unresponsive and kill/restart it, only expose healthy pod to client)
        service discovery (discover pods from DNS or IP, load balances)
        designed for extensibility
        
    Kubernetes ecosystem:
        public cloud: ibm, google
        opensource framework: redhat, docker, vmware
        management: digital ocean, techtonic
        tools: mesh, aspen, bitnami
        monitor & log: sumalogic, new relic
        security: guardcore, blackduck, twistlock
        load balancing: nginx
        

Kubernetes Architecture
    kubernetes control plane mengatur semua kubernetes work nodes, dan tiap work nodes bisa punya beberapa pods
        API server:
            sebagai front-end yang expose kubernetes ke client
            scale horizontal
        etcd:
            high available, distributed key-value contains all cluster data
            simpan deployment config data & desired state, lalu control plane coba capai etcd
        kubernetes scheduler:
            assign new pods to nodes/worker
            select optimal nodes
        kubernetes control manager:
            control process inside control state
            ensure actual state matches the desired state
        cloud control manager:
            interacts with cloud provider
            link cluster to cloud API
    Nodes:
        worker, isinya pods dan lain"
        kubelet:
            communicate with API
            ensure pods are running
            monitor health
        container runtime:
            download image and run containers
            is an interface so pluggable
        kube-proxy:
            network proxy, maintain rules and comms to pods

Kubernetes Object
    defined as persistent entities, such as pods, namespaces, replicasets, deployment
    consists of:
        object specs -> desired state
        status -> current state
    
    Label/selector
        key-value pair attached to objects
    namespaces
        mechanism for isolating group of resource to a cluster
        scope for object names
    pods
        process that runs inside the cluster
        replicated for horizontal scaling
        encapsulate one or more container
    Replicaset
        horizontally scaled pods
        config file contains:
            kind
            number of replica
            pod template
            selector (for ID)
            
    Service
        logical abstraction for pods in a cluster
        acts as load balancer between pods
        assigned unique IP
        properties:
            multiple protocol (TCP, UDP)
            multiple port definition
            can have optional selector
        why needed?
            pods are volatile (bisa di-terminate kapan saja), pakai service biar bisa track IP pods yang baru
            pakai selector untuk cari pods yang baru
        tipe service:
            ClusterIP: default, given cluster-internal IP so service only reachable within the cluster
            NodePort: extension of ClusterIP, create and routes incoming request to service
            LoadBalancer: extension of NodePort, creates nodeport and clusterIP automatically & directs traffic from provider's LoadBalancer to NodePort
            External Name: maps to a DNS name, maps service to contents in externalName, usually used to create service that represents storage
            Ingress: API object, provides routing rules for users to access multiple services. expose app to port 80 and port 443
            DaemonSet: makes sure pods are running inside nodes. collecting garbage pods, and for storage and monitors nodes
            StatefulSet: object manage stateful app, provide guarantee on uniqueness of pods, provides persistent storage
            
Kubectl
    Command Tool Line for deploy app, monitor cluster resources, etc
    command structure: kubectl [command] [type] [name] [flag] ==> type mengacu resource type (pod, replica, deployset), name mengacu ke nama resource (kalau ada)
    bisa pakai imperative command, tapi kurang bagus dipakai jika ada lebih dari 1 developer karena:
        dev lain sulit mengakses karena tidak tahu file confignya
        jika terjadi update pada container tapi lupa update config, dev lain akan pakai versi lama
    Dengan declarative command:
        operasi ditentukan kubectl
        config define desired state
        ideal untuk produksi
        contoh command:
            get: listing objects dan resources
            apply: create resources using .YAML or .JSON file
            scale: for increase/decrease number of replica