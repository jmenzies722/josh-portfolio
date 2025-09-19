import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const blogPosts = [
  {
    slug: 'platform-engineering-transformation',
    title: 'Platform Engineering Transformation: From DevOps to Developer Experience',
    description: 'How I transformed a traditional DevOps team into a modern platform engineering organization, delivering 20% faster deployments and enabling self-service capabilities.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Platform Engineering', 'DevOps', 'Transformation']
  },
  {
    slug: 'observability-best-practices',
    title: 'Observability Best Practices: Building Reliable Systems',
    description: 'Comprehensive guide to implementing observability in production environments using OpenTelemetry, Datadog, and Kubernetes.',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Observability', 'Monitoring', 'Kubernetes']
  },
  {
    slug: 'kubernetes-production-lessons',
    title: 'Kubernetes Production Lessons: Scaling Infrastructure',
    description: 'Key lessons learned from running Kubernetes in production, including scaling strategies, resource optimization, and incident management.',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['Kubernetes', 'Production', 'Scaling']
  },
  {
    slug: 'aws-cost-optimization',
    title: 'AWS Cost Optimization: Reducing Infrastructure Spend',
    description: 'Practical strategies for optimizing AWS costs while maintaining performance and reliability in production environments.',
    date: '2024-01-01',
    readTime: '7 min read',
    tags: ['AWS', 'Cost Optimization', 'Cloud']
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Platform Engineering Blog
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto px-4 sm:px-0">
            Insights, lessons learned, and best practices from my journey in platform engineering and DevOps transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.slug} className="group card-hover cursor-pointer border-gradient">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 text-lg sm:text-xl leading-tight">
                    {post.title}
                  </CardTitle>
                </div>
                <CardDescription className="group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-200 text-sm sm:text-base leading-relaxed">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200 inline-flex items-center"
                >
                  Read more
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
