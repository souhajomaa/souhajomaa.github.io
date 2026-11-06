const projects = [
  {
    title: 'Private Datacenter Design & Simulation',
    date: '2026',
    summary: 'Private datacenter simulated with network segmentation, firewall, storage and monitoring.',
    details: [
      'Designed and simulated a private datacenter with VLAN-based network segmentation',
      'Set up a pfSense firewall, iSCSI storage and an Active Directory directory',
      'Monitored the infrastructure with Zabbix and integrated MQTT messaging',
    ],
    tech: ['GNS3', 'pfSense', 'Cisco IOS', 'VLANs', 'iSCSI', 'Active Directory', 'Zabbix', 'MQTT'],
    github: 'https://github.com/souhajomaa/datacenter-assurance.git',
    video: null,
  },
  {
    title: 'DevSecOps CI/CD Pipeline on Azure',
    date: '2026',
    summary: 'Secure Jenkins pipeline with quality and vulnerability scans, deployed on Kubernetes with Ansible.',
    details: [
      'Built a secure CI/CD pipeline with Jenkins integrating code quality analysis (SonarQube) and vulnerability scanning (OWASP Dependency-Check, Trivy)',
      'Deployed containerized workloads with Docker and Kubernetes orchestration on Azure AKS using Ansible',
      'Set up monitoring with Prometheus and Grafana',
    ],
    tech: ['Jenkins', 'SonarQube', 'OWASP Dependency-Check', 'Trivy', 'Docker', 'Kubernetes', 'Ansible', 'Azure AKS', 'Prometheus', 'Grafana'],
    github: 'https://github.com/souhajomaa/spring-petclinic.git', 
    video: null,
  },
  {
    title: 'Secure Cloud-Based Military Recruitment Platform',
    date: '2025 – 2026',
    summary: 'Secure cloud recruitment platform on simulated OpenStack, with Wazuh security monitoring.',
    details: [
      'Designed a secure cloud-based military recruitment platform with a React.js frontend and a Spring Boot backend',
      'Deployed on a simulated OpenStack infrastructure with GNS3, containerized with Docker and Kubernetes',
      'Set up security monitoring with Wazuh and infrastructure monitoring with Grafana, with data stored in PostgreSQL',
    ],
    tech: ['OpenStack', 'GNS3', 'Docker', 'Kubernetes', 'React.js', 'Spring Boot', 'PostgreSQL', 'Wazuh', 'Grafana'],
    github: 'https://github.com/souhajomaa/MilitaryRecruitmentPlatform.git',
    video: 'https://drive.google.com/file/d/13yZSsv-DSrZ86axF1DjDsesrqHyJz6c2/view?usp=sharing',
  },
  {
    title: 'ConnectSphere',
    date: '2024 – 2025',
    summary: 'Desktop application for managing and participating in events.',
    details: [
      'Developed a desktop application with JavaFX and a Symfony backend connected to MySQL',
      'Managed versioning and builds with Maven and Git/GitHub',
    ],
    tech: ['JavaFX', 'Symfony', 'MySQL', 'Maven', 'Git', 'GitHub'],
    github: 'https://github.com/souhajomaa/ConnectSphere-JavaFX.git',
    github:'https://github.com/souhajomaa/Connect-Sphere-Symfony.git',
  },
]

export default projects