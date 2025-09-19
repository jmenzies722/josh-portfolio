import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Target, TrendingUp, Clock, Users } from 'lucide-react'

const caseStudies = [
  {
    slug: 'platform-engineering-transformation',
    title: 'Platform Engineering Transformation at Nectar Services Corp',
    challenge: 'Traditional DevOps model was creating bottlenecks and slowing down development teams',
    solution: 'Led complete organizational shift to Platform Engineering with self-service capabilities',
    results: [
      '20% faster deployments',
      '25% reduction in manual processes',
      '40% improvement in developer satisfaction',
      'Zero downtime during transition'
    ],
    technologies: ['Kubernetes', 'Terraform', 'GitLab CI', 'AWS', 'Docker'],
    duration: '3 months',
    teamSize: '15 engineers',
    impact: 'High',
    featured: true
  },
  {
    slug: 'observability-platform',
    title: 'Advanced Observability Platform Implementation',
    challenge: 'Limited visibility into application performance and infrastructure health',
    solution: 'Built comprehensive observability stack with OpenTelemetry, Datadog, and custom dashboards',
    results: [
      '40% faster incident detection',
      '35% reduction in MTTR',
      '99.9% uptime maintained',
      'Real-time performance monitoring'
    ],
    technologies: ['OpenTelemetry', 'Datadog', 'Prometheus', 'Grafana', 'ELK Stack'],
    duration: '2 months',
    teamSize: '8 engineers',
    impact: 'High',
    featured: true
  },
  {
    slug: 'secure-software-distribution',
    title: 'Secure Software Distribution Platform',
    challenge: 'Manual software distribution process taking hours and prone to errors',
    solution: 'Engineered automated distribution platform on AWS with security scanning',
    results: [
      'Distribution time: hours → minutes',
      '100% automated security scanning',
      'Zero manual errors',
      '10% AWS cost savings'
    ],
    technologies: ['AWS', 'Lambda', 'S3', 'CloudFormation', 'Python'],
    duration: '1.5 months',
    teamSize: '5 engineers',
    impact: 'Medium',
    featured: false
  }
]

export default function CaseStudiesPage() {
  const featuredStudies = caseStudies.filter(study => study.featured)
  const regularStudies = caseStudies.filter(study => !study.featured)

  return (
    <div className="min-h-screen py-16 section-bg">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Detailed breakdowns of major projects, challenges overcome, and measurable business impact 
            delivered through strategic platform engineering initiatives.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
            Featured Projects
          </h2>
          <div className="space-y-8">
            {featuredStudies.map((study) => (
              <Card key={study.slug} className="card-hover group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                      {study.impact} Impact
                    </span>
                    <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Challenge */}
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-red-500" />
                        Challenge
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-500" />
                        Solution
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {study.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-500" />
                        Results
                      </h3>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="text-neutral-600 dark:text-neutral-400 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        Duration: {study.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        Team: {study.teamSize}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        Impact: {study.impact}
                      </span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group-hover:gap-3 transition-all duration-200"
                  >
                    Read Full Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Case Studies */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
            All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularStudies.map((study) => (
              <Card key={study.slug} className="card-hover group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                      {study.impact} Impact
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                    {study.challenge}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                      <span>{study.duration}</span>
                      <span>{study.teamSize}</span>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {study.results.length} key results
                    </span>
                  </div>
                  <Link 
                    href={`/case-studies/${study.slug}`}
                    className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm group-hover:gap-2 transition-all duration-200"
                  >
                    Read Case Study
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

