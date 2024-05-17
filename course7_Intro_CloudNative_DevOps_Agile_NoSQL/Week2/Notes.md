DevOps
    a recognition that dev and ops must work together by following lean and agile development process
    requires:
        change in culture
        new app design (tidak ubah aplikasi besar sering"an, tapi ubah jadi kecil" agar mudah diubah)
        automation
        programmable platform (environment tersedia 24/7)
    
    Agile supported by:
        container
        microservices
        devops
    
    TDD: NOOOOOOOOOOOOOOOOOOOOOOO
        saves time on developing
        code faster with confidence
        ensures code is working and no future updates disturb the code
    
    BDD:
        fokus pada perilaku kode dari luar kode (penting dalam integrasi dgn kode lain)
        sintaks mudah dikenali programmer dan stakeholder
    
    
CI/CD
    Continuous Integration: selalu integrasikan kode dengan main branch
        dilakukan secara otomatis
        cocok untuk kolaborasi
        mempermudah menemukan bug pada integrasi kode
        terdiri dari proses planning hingga testing
    Continuous Delivery: deploy kode terintegrasi tersebut ke suatu tempat, biasanya untuk di-build di lokasi rilis
        dilakukan setelah CI
        terdiri dari rilis hingga update
    Continuous Deployment: hanya digunakan jika sudah push ke production
    
    Benefit:
        faster reaction time
        mengurangi risiko integrasi kode
        higher code quality
        tahu kalau kode berfungsi di version control
        less deployment time
        
DevOps Tools
    Version Control: Git
    CI/CD: Jenkins, Tekton, Gitlab
    Config Manage: Ansible, Chef, Saltstack
    Container & Container Manager: Docker, Kubernetes
    Monitor & Logging: Prometheus, Grafana, ELK Stack
    Collab: Slack, MTeams, Jira