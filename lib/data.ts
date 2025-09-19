export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  problem: string
  solution: string
  challenges: string[]
  results: string[]
  architecture?: string
}

export const projects: Project[] = [
  {
    slug: 'platform-engineering-transformation',
    title: 'Platform Engineering Transformation',
    description: 'Transformed engineering organization from traditional DevOps to Platform Engineering model, delivering 20% faster deployments and 40% faster incident detection through self-service capabilities.',
    longDescription: 'Championed the transition from traditional DevOps practices to a Platform Engineering model at Nectar Services Corp, significantly enhancing developer experience through streamlined workflows and self-service capabilities.',
    tags: ['Kubernetes', 'AWS', 'Terraform', 'GitLab CI', 'Python', 'Docker'],
    featured: true,
    problem: 'Development teams were experiencing bottlenecks due to manual infrastructure processes, inconsistent environments, and lack of self-service capabilities.',
    solution: 'Engineered a comprehensive platform that provides developers with self-service infrastructure, automated CI/CD pipelines, and standardized deployment processes.',
    challenges: [
      'Managing organizational change and adoption of new practices',
      'Creating intuitive self-service interfaces for developers',
      'Ensuring security and compliance in automated workflows',
      'Balancing standardization with team autonomy'
    ],
    results: [
      'Reduced deployment times by 20% through optimized CI/CD pipelines',
      'Decreased incident detection time by 40% with advanced monitoring',
      'Achieved 25% reduction in manual setup time with Terraform automation',
      'Enabled 15% improvement in process efficiency through automation'
    ]
  },
  {
    slug: 'observability-platform',
    title: 'Advanced Observability Platform',
    description: 'Built enterprise-grade observability platform reducing incident detection time by 40% and MTTR by 35% through OpenTelemetry, Datadog, and Kubernetes integration.',
    longDescription: 'Built an advanced observability platform integrating OpenTelemetry, Datadog RUM/synthetic monitoring, and Kubernetes orchestration to provide deep insights into application performance and user experience.',
    tags: ['OpenTelemetry', 'Datadog', 'Kubernetes', 'Prometheus', 'Grafana', 'Python'],
    featured: true,
    problem: 'Limited visibility into application performance, user experience, and system health was causing delayed incident response and poor user satisfaction.',
    solution: 'Implemented a comprehensive observability stack with real-time monitoring, synthetic testing, and distributed tracing to provide actionable insights.',
    challenges: [
      'Integrating multiple monitoring tools into a cohesive platform',
      'Implementing distributed tracing across microservices',
      'Creating meaningful dashboards and alerting rules',
      'Ensuring minimal performance impact on applications'
    ],
    results: [
      'Decreased incident detection time by 40%',
      'Improved system reliability with proactive monitoring',
      'Enhanced developer productivity with better debugging tools',
      'Reduced mean time to resolution (MTTR) by 35%'
    ]
  },
  {
    slug: 'secure-distribution-platform',
    title: 'Secure Software Distribution Platform',
    description: 'Architected secure self-service software distribution platform eliminating manual processes and reducing distribution time from hours to minutes using AWS serverless technologies.',
    longDescription: 'Developed a secure, self-service software distribution platform enabling developers to securely access and distribute critical JAR/EXE files through AWS-native services.',
    tags: ['AWS Lambda', 'API Gateway', 'S3', 'IAM', 'Python', 'Terraform'],
    githubUrl: 'https://github.com/jmenzies722/secure-distribution-platform',
    featured: true,
    problem: 'Developers needed secure, auditable access to software artifacts but existing solutions were manual, insecure, and lacked proper access controls.',
    solution: 'Built a serverless platform using AWS services that provides secure, role-based access to software artifacts with comprehensive audit trails.',
    challenges: [
      'Implementing secure file storage and access controls',
      'Creating intuitive API interfaces for developers',
      'Ensuring compliance with security policies',
      'Managing large file uploads and downloads efficiently'
    ],
    results: [
      'Eliminated manual software distribution processes',
      'Improved security posture with role-based access controls',
      'Reduced distribution time from hours to minutes',
      'Enabled comprehensive audit trails for compliance'
    ]
  },
  {
    slug: 'voip-logging-system',
    title: 'Centralized VoIP Logging System',
    description: 'Designed centralized VoIP logging infrastructure reducing log management overhead by 60% and enabling comprehensive call analytics through rsyslog and AWS S3.',
    longDescription: 'Established a centralized logging system for VoIP infrastructure by configuring rsyslog to securely transmit call logs via TLS to AWS S3, enabling deeper insights into call performance and operational health.',
    tags: ['rsyslog', 'TLS', 'AWS S3', 'VoIP', 'Linux', 'PostgreSQL'],
    featured: false,
    problem: 'VoIP call logs were scattered across multiple systems, making it difficult to analyze call patterns, troubleshoot issues, and ensure compliance.',
    solution: 'Created a centralized logging pipeline that securely collects, processes, and stores VoIP call data for analysis and compliance.',
    challenges: [
      'Ensuring secure transmission of sensitive call data',
      'Handling high-volume log streams in real-time',
      'Implementing data retention and compliance policies',
      'Creating efficient querying and analytics capabilities'
    ],
    results: [
      'Centralized logging for all VoIP infrastructure',
      'Improved call analytics and troubleshooting capabilities',
      'Enhanced compliance with data retention policies',
      'Reduced log management overhead by 60%'
    ]
  },
  {
    slug: 'cost-optimization-automation',
    title: 'AWS Cost Optimization Automation',
    description: 'Engineered automated AWS cost optimization system delivering 10% cost savings and improved resource utilization through intelligent monitoring and scaling policies.',
    longDescription: 'Implemented automated cost optimization strategies for AWS infrastructure through continuous monitoring, resource right-sizing, and intelligent scaling policies.',
    tags: ['AWS', 'Python', 'CloudWatch', 'Lambda', 'Cost Optimization', 'Terraform'],
    featured: false,
    problem: 'AWS costs were increasing without clear visibility into resource utilization and optimization opportunities.',
    solution: 'Created automated systems to monitor resource usage, identify optimization opportunities, and implement cost-saving measures.',
    challenges: [
      'Analyzing complex AWS billing and usage patterns',
      'Implementing automated scaling and optimization policies',
      'Balancing cost savings with performance requirements',
      'Creating actionable cost optimization recommendations'
    ],
    results: [
      'Achieved 10% cost savings through automated optimization',
      'Improved resource utilization efficiency',
      'Reduced manual cost management overhead',
      'Enhanced visibility into AWS spending patterns'
    ]
  }
]

export const techStack = [
  'AWS', 'Kubernetes', 'Terraform', 'Docker', 'GitLab CI', 'Python',
  'OpenTelemetry', 'Datadog', 'Prometheus', 'Grafana', 'PostgreSQL', 'MySQL',
  'Linux', 'Bash', 'Go', 'rsyslog', 'CloudFormation', 'Lambda',
  'Helm', 'ArgoCD', 'Istio', 'Envoy', 'Consul', 'Vault',
  'Jenkins', 'GitHub Actions', 'CircleCI', 'Spinnaker', 'Tekton',
  'Ansible', 'Pulumi', 'Crossplane', 'Flux', 'Kustomize',
  'ELK Stack', 'Jaeger', 'Zipkin', 'New Relic', 'Splunk',
  'Redis', 'MongoDB', 'RabbitMQ', 'Kafka', 'Nginx', 'HAProxy'
]

export const timeline = [
  {
    year: 'Feb 2024 - Present',
    role: 'DevOps Engineer',
    company: 'Nectar Services Corp',
    description: 'Leading platform engineering transformation, optimizing CI/CD pipelines, and implementing advanced observability solutions. Reduced deployment times by 20% and incident detection by 40%.'
  },
  {
    year: 'Nov 2023 - Feb 2024',
    role: 'System Support Engineer',
    company: 'Nectar Services Corp',
    description: 'Provided backend support for VoIP platforms, maintained 99.9% uptime, and collaborated on DevOps automation initiatives. Resolved 95% of incidents within SLA.'
  },
  {
    year: '2023',
    role: 'Computer Science Student',
    company: 'University of Hartford',
    description: 'Completed Bachelor of Science in Computer Engineering with major emphasis on Computer Science and Computer Science minor. Focused on software engineering, algorithms, data structures, and cloud technologies.'
  }
]

export const personalInfo = {
  bio: "Beyond technical implementation, I bring strategic thinking and collaborative leadership to every project. My approach combines deep technical expertise with business acumen, enabling me to drive organizational transformation while delivering measurable business impact. I'm committed to continuous learning, knowledge sharing, and building high-performing engineering teams.",
  interests: [
    {
      title: "Strategic Technology Leadership",
      description: "Leading organizational transformation through platform engineering, driving adoption of modern DevOps practices, and enabling engineering teams to deliver faster."
    },
    {
      title: "Technical Mentorship & Knowledge Sharing",
      description: "Actively mentoring team members, contributing to technical communities, and creating comprehensive documentation that accelerates team productivity."
    },
    {
      title: "Innovation & Problem Solving",
      description: "Specializing in solving complex infrastructure challenges with elegant, scalable solutions that improve system reliability and reduce operational overhead."
    },
    {
      title: "Continuous Professional Development",
      description: "Committed to staying current with emerging technologies, pursuing advanced certifications, and applying industry best practices to drive business value."
    }
  ],
  values: [
    "Technical Excellence & Innovation",
    "Collaborative Leadership", 
    "Business Impact Focus",
    "Continuous Learning & Growth"
  ]
}
