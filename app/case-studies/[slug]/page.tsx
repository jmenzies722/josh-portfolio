import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Target, TrendingUp, Clock, Users, CheckCircle, Code, Zap } from 'lucide-react'

const caseStudies = [
  {
    slug: 'platform-engineering-transformation',
    title: 'Platform Engineering Transformation at Nectar Services Corp',
    challenge: 'Traditional DevOps model was creating bottlenecks and slowing down development teams. Manual processes, inconsistent environments, and lack of self-service capabilities were hindering developer productivity and creating deployment delays.',
    solution: 'Led complete organizational shift to Platform Engineering with self-service capabilities, golden paths for application deployment, and developer-friendly APIs. Built internal platforms that abstracted away infrastructure complexity while maintaining security and compliance.',
    results: [
      '20% faster deployments through automated CI/CD pipelines',
      '25% reduction in manual processes via self-service platforms',
      '40% improvement in developer satisfaction scores',
      'Zero downtime during transition period',
      '100% of applications migrated to new platform'
    ],
    technologies: ['Kubernetes', 'Terraform', 'GitLab CI', 'AWS', 'Docker', 'Helm', 'ArgoCD'],
    duration: '3 months',
    teamSize: '15 engineers',
    impact: 'High',
    featured: true,
    description: 'This case study details the complete transformation from traditional DevOps to Platform Engineering at Nectar Services Corp, showcasing how strategic infrastructure automation can drive organizational change and developer productivity.',
    methodology: [
      'Conducted comprehensive assessment of current DevOps practices',
      'Designed platform architecture with self-service capabilities',
      'Implemented golden paths for common deployment patterns',
      'Built developer-friendly APIs and documentation',
      'Conducted training sessions and knowledge transfer',
      'Monitored adoption metrics and iterated based on feedback'
    ],
    lessonsLearned: [
      'Cultural change is as important as technical implementation',
      'Developer buy-in is crucial for platform adoption',
      'Documentation and training accelerate adoption',
      'Gradual migration reduces risk and resistance',
      'Metrics and feedback loops drive continuous improvement'
    ]
  },
  {
    slug: 'observability-platform',
    title: 'Advanced Observability Platform Implementation',
    challenge: 'Limited visibility into application performance and infrastructure health was causing delayed incident detection and longer resolution times. Teams lacked comprehensive monitoring and alerting capabilities.',
    solution: 'Built comprehensive observability stack with OpenTelemetry for distributed tracing, Datadog for APM and RUM, Prometheus and Grafana for metrics, and centralized logging with ELK Stack. Implemented intelligent alerting and automated incident response.',
    results: [
      '40% faster incident detection through proactive monitoring',
      '35% reduction in Mean Time To Resolution (MTTR)',
      '99.9% uptime maintained across all services',
      'Real-time performance monitoring and alerting',
      'Centralized logging and distributed tracing'
    ],
    technologies: ['OpenTelemetry', 'Datadog', 'Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'Kubernetes'],
    duration: '2 months',
    teamSize: '8 engineers',
    impact: 'High',
    featured: true,
    description: 'This case study explores the implementation of a comprehensive observability platform that transformed how the organization monitors, detects, and resolves incidents.',
    methodology: [
      'Assessed current monitoring gaps and requirements',
      'Designed observability architecture with multiple data sources',
      'Implemented distributed tracing with OpenTelemetry',
      'Set up APM and RUM monitoring with Datadog',
      'Configured Prometheus metrics collection and Grafana dashboards',
      'Established centralized logging with ELK Stack',
      'Created intelligent alerting rules and escalation procedures'
    ],
    lessonsLearned: [
      'Multiple observability signals provide comprehensive coverage',
      'Automated alerting reduces manual monitoring overhead',
      'Dashboards should be tailored to different user personas',
      'Distributed tracing is essential for microservices architectures',
      'Regular review of metrics and alerts prevents alert fatigue'
    ]
  },
  {
    slug: 'secure-software-distribution',
    title: 'Secure Software Distribution Platform',
    challenge: 'Manual software distribution process was taking hours and prone to human errors. Security scanning was inconsistent, and the process didn\'t scale with growing development teams.',
    solution: 'Engineered automated distribution platform on AWS with integrated security scanning, artifact management, and deployment automation. Built CI/CD pipeline integration and comprehensive audit trails.',
    results: [
      'Distribution time reduced from hours to minutes',
      '100% automated security scanning and validation',
      'Zero manual errors in distribution process',
      '10% AWS cost savings through optimized resource usage',
      'Complete audit trail for compliance requirements'
    ],
    technologies: ['AWS', 'Lambda', 'S3', 'CloudFormation', 'Python', 'Docker', 'ECR'],
    duration: '1.5 months',
    teamSize: '5 engineers',
    impact: 'Medium',
    featured: false,
    description: 'This case study details the automation of software distribution processes, showcasing how infrastructure automation can eliminate manual errors and accelerate delivery.',
    methodology: [
      'Analyzed current distribution workflow and pain points',
      'Designed automated pipeline architecture on AWS',
      'Implemented security scanning integration',
      'Built artifact management and versioning system',
      'Created deployment automation and rollback capabilities',
      'Established monitoring and alerting for distribution pipeline'
    ],
    lessonsLearned: [
      'Automation eliminates human error and accelerates processes',
      'Security scanning should be integrated, not bolted on',
      'Audit trails are essential for compliance and debugging',
      'Cost optimization can be achieved through efficient resource usage',
      'Gradual rollout reduces risk and allows for feedback'
    ]
  }
]

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find(study => study.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-neutral-900">
      <div className="container-custom">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/case-studies"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
              {caseStudy.impact} Impact
            </span>
            {caseStudy.featured && (
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                Featured
              </span>
            )}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl">
            {caseStudy.description}
          </p>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold text-black dark:text-white">Duration</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{caseStudy.duration}</p>
          </div>
          <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold text-black dark:text-white">Team Size</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{caseStudy.teamSize}</p>
          </div>
          <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold text-black dark:text-white">Impact Level</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{caseStudy.impact}</p>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <Target className="h-5 w-5" />
                Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <TrendingUp className="h-5 w-5" />
                Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {caseStudy.solution}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6 flex items-center gap-3">
            <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            Key Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 dark:bg-neutral-800 rounded-xl p-4">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 dark:text-gray-400">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6 flex items-center gap-3">
            <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {caseStudy.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6 flex items-center gap-3">
            <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            Methodology
          </h2>
          <div className="space-y-4">
            {caseStudy.methodology.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 dark:bg-neutral-800 rounded-xl p-4">
                <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Lessons Learned
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.lessonsLearned.map((lesson, index) => (
              <div key={index} className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 dark:text-gray-400">{lesson}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Case Studies */}
        <div className="text-center">
          <Link 
            href="/case-studies"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            View All Case Studies
          </Link>
        </div>
      </div>
    </div>
  )
}
