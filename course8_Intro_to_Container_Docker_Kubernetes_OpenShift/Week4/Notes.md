OpenShift by RedHat
    deskripsi:
        enterprise-ready Kubernetes
        consistent app platform to manage hybrid cloud, multicloud and edge deployment
        built on Linux
        full-stack automation & self-service provision for eficient dev & deploy
        additional tool for complete lifecycle
    Openshift adalah ekstensi dari kubernetes
    Platform archi: runs on top kubernetes cluster, object data stored in etcd key-value store
    Kelebihan dari Kubernetes dan Docker
        source code management (git), build, deploy
        manage and promote images
        app management at scale
        team & user tracking management for large organization
        network infrastructure
    Komponen (urutan architect dari bawah):
        RedHat Enterprise -> Kubernetes -> CLuster service, platform service, app service, dev service
        Openshift juga punya CLI, dan lebih lengkap/extensive dibanding kubectl
        
Build
    proses transformasi input menjadi objek output -> source code menjadi image
    Contoh source (input) build (terurut prioritas):
        inline dockerfile; content dari imagefile; git repo; binary input; input secrets; external artifact
    imagestream:
        abstraksi untuk referensi container image di OpenShift
        continuously create and update container image and contains only pointer
    can be triggered automatically by using BuildConfig
    Source-to-Image (S2I) -> for building reproducible container image without using dockerfile
    
Operator
    otomasi cluster task dan berfungsi sebagai custom controller untuk ekstensi kube API
        berjalan dalam pod, interaksi dengan API server
        package, manage and deploy kube app
        automate app creation
    benefit:
        repeatable install & upgrade
        regular full-system health check
        over-the-air updates
        comm tools
        integration
    Custom Resource Definitions (CRD)
        store and retrieve object in kube API
        extends kube API
        make kube API modular and flexible
        can install in clusters
        can be accessed using kubectl
    Custom Controller => mengatur kondisi cluster dengan memonitor CRD
        pola kerja CRD dengan custom controller membentuk declarative API, dinamakan Operator Pattern
    
    Operator framework
        SDK: helps build, test and package operator
        Lifecycle Manager: control, install, upgrade dan RBAC
        Registry: store CRD, CSV dan operator metadata
        OperatorHub: lets cluster admin find and install Operator
        
    Operator Maturity Model diurutkan berdasar level, yaitu:
        level 1: basic install, otomasi app provision & config manage
        level 2: seamless upgrade, patch & minor version upgrade
        level 3: full lifecycle, app and backup lifecycle (run, backup, fail recovery)
        level 4: deep insights, metric, alerts, log process & workload analysis
        level 5: Auto Pilot, horizon/vertikal scale, auto-config tune, abnormal detection
        
    Several examples of Operator:	deploy app to OpenShift cluster; scaling App using multi replica; auto backup & restore; integration
    ada OperatorHub untuk instal Operator
    
Istio
    Service mesh: dedicated infra layer to add capabilities to app without additional code
        services included traffic management, security, observability
        helps service-to-service comms faster, secure and reliable
    Istio adalah salah satu service mesh yang sering dipakai bersama Kubernetes
        Konsep pelayanan istio:
            connection to control traffic: between service, A/B test, etc
            secure services: using authentication, authorization, and encryption
            enforce policies
            observes traffic flow, trace call flow, enables viewing metrics (such as latency or error)
            
    Feature
        ISL encrypted comms
        load balance traffic
        granular config of traffic flow
        API support access control, rate limits and quotas
        auto monitoring, logging and tracking
    
    How it works
        punya 2 component, control plane dan data plane
            data plane utk komunikasi antar service
            komunikasi antar service harus pakai service mesh (identifikasi jenis data, sumber dan tujuan)
            network traffic diintercept oleh envoy proxy yang oleh service mesh.
            control plane mengatur konfigurasi service mesh untuk menyesuaikan diri dengan environment
            
    Penggunaan Microservice dengan Istio
        memakai pendekatan clloud-native architecture
        app terdiri dari loosely coupled and independent service
        API mudah digunakan
        benefit:
            mudah update kode, different tech stack utk komponen beda, component bisa di-scale sendiri"
        Challenges:
            traffic encryption, canary deployment, A/B testing, Cascading fail