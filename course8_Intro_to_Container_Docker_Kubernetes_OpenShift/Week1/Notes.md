Container
    Mengapa pakai kontainer? (kelebihan dibanding on-premise)
        melakukan isolasi (untuk uji coba code) dan alokasi space
        tidak terikat OS
        Utilisasi server yang lebih optimal
        Kebutuhan dan cost yang sesuai pemakaian
        performa dapat dioptimalkan sesuai kebutuhan (tidak terbatas server fisik)
        mudah dipindahkan (tidak terikat environment workplace)
        resilien atau memiliki daya tahan
        mudah di-scale
        mudah dilakukan otomatisasi
    
    Karakteristik
        engine container melakukan virtualisasi OS
        ringan, cepat, terisolasi, portable dan aman
        pemakaian memori lebih rendah
        bin dan lib bisa jalan dalam ruang container
        1 mesin bisa pasang beberapa container
    
    Tantangan
        keamanan terancam jika OS terkena masalah
        jika sudah sampai ribuan sulit dimanage
        sulit memindahkan legacy menjadi container-based
        sulit mengatur kondisi kontainer
        
Docker
    simple architecture, massive scale, ease of portability
    Uses Golang and Linux kernel
    Benefit:
        konsisten
        fast redeploy
        repeatable
        support agile and CI/CD
        support versioning
        easy portability
    Challenges:
        not suited for high performance or security app, monolith-based, rich GUI and standard desktop operation

Docker Objects
    terdiri dari dockerfile, image, container, network, storage, plugins/addons
    
    Dockerfile
        textfile berisi instruksi untuk membuat image
        instruksi dalam dockerfile:
            FROM: base untuk membuat image
            RUN: perintah yang dieksekusi
            CMD: default command yang dijalankan. Hanya bisa jalankan 1 CMD, pilih yang paling terakhir (paling bawah)
    DockerImage
        read-only template untuk membuat container
        di-build menggunakan instruksi dari dockerfile
        menambahkan container layer yang dapat melakukan read-write setelah image dijalankan
    Container image naming:
        hostname/repository:tag ==> docker.io/ubuntu:18.04
        hostname: siapa yang bikin image. kalo docker, disini jadi docker.io
        repo: pakai repo keluaran siapa
        tag: biasanya versi
    Containers:
        runnable instance of image
        terisolasi dari container lain
        bisa connect ke bbrp network dan bikin image baru dari current state

Docker Infrastructure
    Terdiri dari client, host, dan registry
    Proses:
        client kirim perintah lewat CLI ke host
        host, menggunakan daemon bernama dockerd, jalankan proses yg dikirim client
        daemon build, run dan daftarkan container ke registry utk disimpan
    Komunikasi dilakukan melalui koneksi langsung (sistem sama) atau remote
    Registry simpan docker image, yg disimpan di cloud service (IBM Cloud) atau server pribadi