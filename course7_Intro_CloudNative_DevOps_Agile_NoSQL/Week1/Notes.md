what is cloud development?
    cloud computing: penyampaian kebutuhan komputasi secara on-demand (sesuai permintaan) melalui media internet yang dibayar menggunakan metode pay-for-use (bayar yang dipakai saja)
    Lima karakteristik cloud:
    - on-demand self-service: tidak perlu ada perantara manusia (istilahnya tinggal klik)
    - broad network access: mudah diakses melalui platform digital apa saja, seperti handphone dan komputer, selama terkoneksi dengan internet
    - Resource pooling: skala kebutuhan komputasi berkembang/menyusut sesuai kebutuhan kustomer, sehingga lebih hemat bagi kedua pihak.
        (pengguna hanya bayar yang dipakai saja, pemilik bisa sewakan ke orang lain)
    - Rapid Elasticity: resource mudah meningkat dan menyusut sesuai kebutuhan
    - Measured Service: bayar hanya yang kau pesan/pakai

Deployment model:
    - public: menggunakan cloud service yang disediakan pihak ketiga. Infra dan hardware yang digunakan akan disharing dengan orang/perusahaan lain
    - private: punya server sendiri atau sewa eksklusif dari pihak ketiga.
    - hybrid: gabungan public dan private. Punya sendiri dan jika butuh lebih tinggal sewa dari public
    - community: cloud service yang dipakai dan diurus oleh dua atau lebih komunitas/perusahaan.
    
Service models:
    - Infrastructure as Service (IaaS): akses ke infrastruktur seperti server, network server dan data center
    - Platform as a Service (Paas): akses ke platform seperti hardware & software tools. Biasanya untuk pengembangan aplikasi di internet
    - Software as a Service (SaaS): akses ke software atau aplikasi melalui pay-on-use


Cloud Native App
Monolithic vs. Cloud
    Monolithic:
        - Semua service pada aplikasi dikumpulkan di satu infrastruktur, sehingga berisiko besar jika terjadi masalah pada infrastruktur dan sulit di-scale
    Cloud:
        - aplikasi dibagi menjadi microservice yang masing" berdiri sendiri dalam sebuah container, sehingga lebih tahan dan reliabel serta mudah di-scale masing"
        - 12 factor dalam dev SaaS: https://12factor.net/
    
Cloud Native Stack
    - Infra layer: define environment dari deployment model
    - Schedule and Ochestra: mengenai control plane seperti kubernetes, Knative dan Istio
        (docker adalah platform utk melakukan containerization, kubernetes untuk ngatur container. Jadi simpelnya kubernetes ngatur docker)
    - Application & data service layer: integrasi suatu service dengan service lain (entah di cloud atau on-premise)
    - Application runtime: middleware
    - Application code: lokasi aplikasi
    Pengembangan aplikasi di Cloud harus ikuti aturan cloud app design. Hal ini menjadi benefit karena system sudah standardized sehingga bisnis hanya perlu fokus pada aplikasi.
    
    
Cloud Native Computing Foundation (CNCF)
    Sejarah
        - Badan netral yang membuat guide mengenai development dari cloud native computing tech.
        - dibentuk setelah rilis kubernetes tahun 2015
        - Perusahaan besar terlibat sebagai founding member, antara lain IBM, RedHat, Google, Twitter, Intel, Cisco Docker VMWare
    Misi:
        make cloud computing ubiquitous and cloud computing innovations accessible for everyone
    Responsibilities:
        - Stewardship
        - Fostering growth and evolution
        - promoting tech
        - Making tech accessible and reliable
    Projects:
        setiap perusahaan anggota mengirimkan produk/project yang akan direview oleh TOC, kemudian melalui tahap proses sebelum dipasarkan. Proses salah satunya integrasi dengan projek yang sudah ada.
    CNCF trail map: membantu perusahaan menavigasi tech cloud native
        https://www.cncf.io/blog/2018/03/08/introducing-the-cloud-native-landscape-2-0-interactive-edition/


Hybrid Cloud
    Concerned topics:
        - Platform & Infrastructure
        - Security
        - Databases & Client App
        

App Modernization
    Proses perpindahan kode dari legacy & on-premise code menjadi cloud native model code.
    
    Practices & Approaches:
        Test Driven Dev
        Behavior Driven Dev
        CI/CD
        Agile
        Scrum
        Microservices Architecture
        Containers
        
    Benefit:
        Build app more quickly
        Improve operational efficiency
        Lowering cost
        
    Pattern dalam mengubah legacy code menjadi cloud native cloud:
        - Strangle the monolith: ubah seluruh kode monolith menjadi kode microservice
        - New capabilities as microservices: biarin kode monolith, tapi fitur baru jadi microservice
        - Refactor: mirip strangle, tapi disini hanya sebagian kode saja
        - Expose API: pasang API di antara monolith dengan client
        - move monolith to cloud runtime: dilakukan kalau kode bisa langsung dipindah ke cloud. Artinya sudah mengikuti langkah" dev untuk cloud computing