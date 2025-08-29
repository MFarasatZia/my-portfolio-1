export const projectsData = [
    {
        id: 1,
        name: 'eXiqtive (Kish & Partners)',
        description: "I design and implement efficient DevOps solutions, deploying applications to AWS ECS (Fargate) via robust CI/CD pipelines and managing infrastructure with Terraform using a GitOps workflow (Atlantis). I've optimized AWS costs by refining VPC architecture, built CI/CD pipelines from scratch with Bitbucket Pipelines, and boosted build speed through self-hosted Bitbucket runners. My work spans containerizing applications with Docker, deploying frontends on S3 with CloudFront CDN, and integrating quality/security tools like SonarQube and OWASP Dependency Check. I automate workflows in Jira, integrate LaunchDarkly, set up Sentry alerts, and create CloudWatch dashboards for proactive monitoring all backed by clear, high-level documentation.",
        tools: ['Bitbucket', 'ECS', 'ECR', 'S3', 'Terraform', 'Atlantis', 'Sentry', 'LaunchDarkly', 'JIRA', 'Confluence', 'Docker', 'Sonarqube', 'Cloudwatch', 'Linux', 'Lambda', 'RDS', 'Chime'],
        role: 'DevOps Engineer',
        code: '',
        demo: 'https://account.exiqtive.com/login',
    },
    {
        id: 2,
        name: 'Bkwire',
        description: 'I build and manage end-to-end DevOps workflows, from creating CI/CD pipelines in GitLab to deploying serverless applications on AWS Lambda and API Gateway. Skilled in provisioning infrastructure with Terraform, containerizing applications with Docker, and delivering frontends via S3 and CloudFront CDN, I ensure smooth, scalable deployments. My expertise includes AWS infrastructure management, automated builds using NPX and Pip, and integrating quality tools like SonarQube. I also implement robust rollback strategies for both front-end and back-end applications, ensuring reliability and minimal downtime.',
        tools: ['AWS', 'Terraform', 'Redis', 'Lambda', 'Gitlab', 'RDS', 'API-Gateway', 'Terraform-Cloud', 'ECR'],
        role: 'DevOps Engineer',
        code: '',
        demo: 'https://bkwire.com/',
    },
    {
        id: 3,
        name: 'Cheddarmedia',
        description: 'Implemented robust security hardening measures by removing default server headers (Apache, Nginx, X-Powered-By) to prevent version disclosure and reduce attack surface. Enforced a strict Content Security Policy (CSP) to mitigate XSS, data injection, and clickjacking, allowing only trusted content and blocking unauthorized inline scripts/styles. Conducted a comprehensive vulnerability assessment using Nessus to detect misconfigurations, exposed services, and known CVEs, followed by prioritizing and remediating identified risks. Delivered detailed client documentation outlining all security enhancements and protective measures implemented.',
        tools: ['AWS Light-sale', 'Nessus', 'Wordpress'],
        code: '',
        role: 'DevOps Engineer',
        demo: 'https://hkia.cheddarmedia.hk/',
    },
    {
        id: 4,
        name: 'Haraz Dental Group',
        description: 'Designed and implemented a secure, scalable AWS VPC architecture from the ground up, deploying applications on EC2 instances with an Application Load Balancer for high availability and performance. Configured Nginx as a reverse proxy and integrated SSL certificates via AWS Certificate Manager to ensure secure HTTPS communication. Provisioned and optimized an AWS RDS PostgreSQL database with robust backup and maintenance settings. Built CI/CD pipelines using GitHub Actions to automate testing and deployments, streamlining the development lifecycle. Deployed Prometheus and Grafana with Docker Compose for real-time monitoring and visualization, and utilized PM2 to efficiently manage and monitor Node.js processes, ensuring stability and resilience.',
        tools: ['AWS VPC', 'Amazon EC2', 'AWS Application Load Balancer', 'AWS Certificate Manager', 'AWS RDS (PostgreSQL)', 'Nginx', 'Node.js', 'PM2', 'GitHub Actions', 'Docker Compose', 'Prometheus', 'Grafana'],
        code: '',
        demo: 'https://www.harazdentalgroup.com/',
        role: 'DevOps Engineer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },