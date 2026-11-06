const white = (...slugs) => ({ slugs, color: 'white' })

const icons = {
  // Cloud & DevSecOps
  Azure: 'microsoftazure',
  'Azure AKS': 'microsoftazure',
  OpenStack: 'openstack',
  Docker: 'docker',
  Kubernetes: 'kubernetes',
  Helm: white('helm'),
  Jenkins: 'jenkins',
  'GitHub Actions': 'githubactions',
  Ansible: 'ansible',
  SonarQube: ['sonarqubeserver', 'sonarqube'],
  'OWASP Dependency-Check': white('owasp'),
  Trivy: ['trivy', 'aquasecurity'],

  // Monitoring & SIEM
  Prometheus: 'prometheus',
  Grafana: 'grafana',
  Wazuh: 'wazuh',
  'ELK Stack': ['elasticstack', 'elasticsearch'],

  // Security & network
  'Kali Linux': 'kalilinux',
  Wireshark: 'wireshark',
  'Burp Suite': 'burpsuite',
  pfSense: 'pfsense',
  'Cisco IOS': 'cisco',
  Zabbix: 'zabbix',
  MQTT: 'mqtt',

  // AI & MLOps
  Python: 'python',
  PySpark: 'apachespark',
  'Scikit-learn': 'scikitlearn',
  XGBoost: 'xgboost',
  MLflow: 'mlflow',
  Airflow: 'apacheairflow',
  FastAPI: 'fastapi',

  // Languages & development
  Java: ['openjdk', 'java'],
  JavaScript: 'javascript',
  'C/C++': 'cplusplus',
  'C++': 'cplusplus',
  'React.js': 'react',
  'Node.js': 'nodedotjs',
  'Spring Boot': 'springboot',
  Symfony: white('symfony'),
  Flutter: 'flutter',
  'Tailwind CSS': 'tailwindcss',
  Maven: 'apachemaven',

  // Databases
  PostgreSQL: 'postgresql',
  MySQL: 'mysql',
  Firebase: 'firebase',

  // Tools & embedded
  Git: 'git',
  GitHub: white('github'),
  JIRA: 'jira',
  'VS Code': ['visualstudiocode', 'vscode'],
  'IntelliJ IDEA': white('intellijidea'),
  ESP32: 'espressif',
  'Arduino IDE': 'arduino',
}

export default icons