ReplicaSet
    Solusi dari keterbatasan single pod
        single pod tak bisa atasi demand tinggi, power outage dan downtime yang tinggi (waktu tunggu proses service) serta tidak bisa auto-restart
    Fungsi replicaset:
        add/delete pod, tergantung kebutuhan scaling
        add/delete pod untuk maintain desired state
        supersede ReplicaController
    Berdiri independen, tidak memiliki pod tapi akses melalui pod label
    Otomatis dibuat oleh kubernetes saat deployment
    Bikin dari awal: buat di YAML dengan kind: ReplicaSet. NOT RECOMMENDED
    
    Desired state ditentukan dengan command scale. Add atau delete pod akan mengubah sementara dari desired state, kemudian replicaset akan mencoba kembali ke desired state.
    
Autoscaling
    enables scaling as needed
    Bergerak di level cluster/node dan pod
    Jenis autoscaler:
        horizontal pod autoscaler (HPA): atur jumlah replica dengan ubah jumlah pods
        vertikal PA: pembatasan jumlah resource request dengan mengubah ukuran dan kecepatan pods
        cluster autoscaler (CA): adjust nodes when pods fail and adjust cluster according to node's capacity
        
        beda HPA dan VPA = HPA tambah pod, VPA tambah kapasitas pod. Ibarat HPA tambah jumlah karyawan, VPA ganti karyawan yang lebih efektif. Bisa dipakai barengan tapi jangan ke compute resource.
        CA mirip HPA, tapi yang diatur cluster

Rolling Updates
    automated updates yang dilakukan secara teratur jadwal, berfungsi untuk pod templates, dan bisa rollback
    Langkahnya:
        add liveness dan readiness probes di deployment
        add rolling updates strategy di YAML
        build, tag dan upload image baru ke docker hub
        execute command rollout
    ada all-at-once updates, dan once-at-time updates
    
ConfigMap
    deskripsi:
        file berisi non-secret variables untuk mempermudah programmer mengakses variabel.
        berupa API object dengan key-value pair
        biasanya dipakai untuk config deployment dan pods
        dibatasi 1MB data, kalau kurang gedein volume atau bikin file baru
        nama ConfigMap harus DNS name yang valid
    capabilities:
        reusable di berbagai deployment berbeda
        bisa dibuat melalui beberapa cara: string literal, key-value file, configfile YAML
        beberapa cara untuk referensi dari pod: sebagai env variable atau mount as volume
        
Seving Binding
    deskripsi:
        proses yang perlu dilakukan sebelum menggunakan external service atau backing service
        manage config dan creds untuk backend sekaligus proteksi sensitive data
        service creds available sebagai secret
        pakai service dengan cara binding aplikasi ke deployment
        pakai creds dari hasil binding untuk panggil service