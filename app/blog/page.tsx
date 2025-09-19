import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    slug: 'platform-engineering-transformation',
    title: 'Leading Platform Engineering Transformation: A DevOps Engineer\'s Journey',
    excerpt: 'How I led the complete organizational shift from traditional DevOps to Platform Engineering, delivering 20% faster deployments and 25% reduction in manual processes.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Platform Engineering',
    featured: true
  },
  {
    slug: 'observability-best-practices',
    title: 'Building Comprehensive Observability: OpenTelemetry, Datadog, and Beyond',
    excerpt: 'Implementing enterprise-grade observability solutions that reduced incident detection time by 40% and MTTR by 35%.',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Observability',
    featured: true
  },
  {
    slug: 'kubernetes-production-lessons',
    title: 'Kubernetes in Production: Lessons Learned from OKD Deployments',
    excerpt: 'Real-world insights from managing Kubernetes clusters, optimizing resource utilization, and ensuring high availability.',
    date: '2024-01-05',
    readTime: '5 min read',
    category: 'Kubernetes',
    featured: false
  },
  {
    slug: 'aws-cost-optimization',
    title: 'AWS Cost Optimization: Saving 10% Through Smart Automation',
    excerpt: 'How I automated infrastructure provisioning and achieved significant cost savings while improving performance.',
    date: '2024-01-01',
    readTime: '7 min read',
    category: 'AWS',
    featured: false
  }
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen py-16 section-bg">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Technical <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Insights, lessons learned, and best practices from my journey in Platform Engineering, 
            DevOps, and infrastructure automation.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.slug} className="card-hover group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="px-2 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group-hover:gap-2 transition-all duration-200"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="card-hover group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-2 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm group-hover:gap-2 transition-all duration-200"
                    >
                      Read
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}