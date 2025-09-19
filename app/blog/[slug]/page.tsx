import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Calendar, Clock, Share2, Code, Zap, Target, CheckCircle } from 'lucide-react'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Blog posts data - in a real app, this would come from a CMS or file system
const blogPosts = [
  {
    slug: 'platform-engineering-transformation',
    title: 'Leading Platform Engineering Transformation: A DevOps Engineer\'s Journey',
    excerpt: 'How I led the complete organizational shift from traditional DevOps to Platform Engineering, delivering 20% faster deployments and 25% reduction in manual processes.',
    content: `
# Leading Platform Engineering Transformation: A DevOps Engineer's Journey

Platform Engineering represents a fundamental shift in how organizations approach infrastructure and developer productivity. In this article, I'll share my experience leading this transformation at Nectar Services Corp and the lessons learned along the way.

## The Challenge: Traditional DevOps Bottlenecks

Our traditional DevOps model was creating significant bottlenecks:

- **Manual deployment processes** taking hours instead of minutes
- **Inconsistent environments** between development and production
- **Limited self-service capabilities** forcing developers to wait for DevOps team
- **Fragmented tooling** across different teams and projects
- **Poor visibility** into infrastructure health and performance

## The Vision: Platform Engineering

Platform Engineering focuses on building internal platforms that enable development teams to be more productive and autonomous. The key principles include:

### 1. Self-Service Capabilities

Developers should be able to deploy, scale, and manage their applications without waiting for the DevOps team.

### 2. Golden Paths

Provide standardized, opinionated ways to accomplish common tasks while maintaining flexibility for edge cases.

### 3. Developer Experience

Prioritize developer productivity and satisfaction in all platform decisions.

## Implementation Strategy

### Phase 1: Assessment and Planning

We started with a comprehensive assessment:

1. **Current State Analysis**: Documented existing processes and pain points
2. **Stakeholder Interviews**: Gathered feedback from development teams
3. **Technology Audit**: Evaluated current tools and infrastructure
4. **Success Metrics**: Defined measurable outcomes for the transformation

### Phase 2: Platform Architecture Design

Designed a platform architecture centered around:

- **Container Orchestration**: Kubernetes as the foundation
- **Infrastructure as Code**: Terraform for all infrastructure provisioning
- **CI/CD Pipelines**: GitLab CI for automated deployments
- **Service Mesh**: Istio for service-to-service communication
- **Monitoring Stack**: Prometheus, Grafana, and Jaeger for observability

### Phase 3: Golden Path Development

Created standardized deployment patterns:

\`\`\`yaml
# Example: Standard Application Deployment
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: {{ .Values.appName }}
spec:
  source:
    repoURL: {{ .Values.repoURL }}
    targetRevision: HEAD
    path: k8s/overlays/production
  destination:
    server: https://kubernetes.default.svc
    namespace: {{ .Values.namespace }}
\`\`\`

## Key Results

The transformation delivered significant business value:

- **20% faster deployments** through automated CI/CD pipelines
- **25% reduction in manual processes** via self-service platforms
- **40% improvement in developer satisfaction** scores
- **Zero downtime** during the transition period
- **100% of applications** migrated to the new platform

## Lessons Learned

### 1. Cultural Change is Critical

Technical implementation is only half the battle. Success requires:

- **Executive sponsorship** and clear communication of benefits
- **Change management** to address resistance and concerns
- **Gradual adoption** rather than big-bang deployment
- **Continuous feedback** and iteration based on user input

### 2. Developer Experience Matters

Platform adoption depends heavily on developer experience:

- **Intuitive interfaces** reduce learning curve
- **Comprehensive documentation** accelerates adoption
- **Responsive support** builds confidence and trust
- **Regular training** ensures teams stay current

## Conclusion

Platform Engineering transformation is a journey that requires both technical excellence and organizational change management. By focusing on developer experience, maintaining clear communication, and measuring progress continuously, organizations can successfully transition from traditional DevOps to modern platform-centric approaches.
    `,
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Platform Engineering', 'DevOps', 'Kubernetes', 'Transformation']
  },
  {
    slug: 'observability-best-practices',
    title: 'Building Comprehensive Observability: OpenTelemetry, Datadog, and Beyond',
    excerpt: 'Implementing enterprise-grade observability solutions that reduced incident detection time by 40% and MTTR by 35%.',
    content: `
# Building Comprehensive Observability: OpenTelemetry, Datadog, and Beyond

Observability is the cornerstone of reliable, performant applications. In this comprehensive guide, I'll share how we built an enterprise-grade observability platform that transformed our incident response capabilities.

## The Observability Challenge

Modern applications are complex distributed systems that require comprehensive monitoring:

- **Multiple services** communicating across networks
- **Dynamic infrastructure** with auto-scaling and container orchestration
- **High transaction volumes** requiring real-time insights
- **Complex dependencies** making root cause analysis difficult

## The Three Pillars of Observability

### 1. Metrics: What's Happening

Metrics provide quantitative data about system behavior:

\`\`\`yaml
# Prometheus metrics configuration
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
    scrape_configs:
    - job_name: 'kubernetes-pods'
      kubernetes_sd_configs:
      - role: pod
\`\`\`

### 2. Logs: What Happened

Centralized logging provides detailed event information:

\`\`\`yaml
# ELK Stack configuration
apiVersion: apps/v1
kind: Deployment
metadata:
  name: elasticsearch
spec:
  template:
spec:
  containers:
      - name: elasticsearch
        image: elasticsearch:7.15.0
        env:
        - name: discovery.type
          value: single-node
\`\`\`

### 3. Traces: How It Happened

Distributed tracing shows request flow across services:

\`\`\`go
// OpenTelemetry instrumentation example
package main

import (
    "go.opentelemetry.io/otel"
    "go.opentelemetry.io/otel/trace"
)

func main() {
    tracer := otel.Tracer("my-service")
    ctx, span := tracer.Start(context.Background(), "operation")
    defer span.End()
    
    // Your application logic here
}
\`\`\`

## Results and Impact

Our observability implementation delivered:

- **40% faster incident detection** through proactive monitoring
- **35% reduction in MTTR** with better root cause analysis
- **99.9% uptime** maintained across all services
- **Real-time performance monitoring** and alerting
- **Centralized logging** and distributed tracing

## Best Practices

### 1. Start with Business Metrics

Focus on metrics that matter to business outcomes:

- **User experience** metrics (response time, error rate)
- **Business process** metrics (transaction volume, conversion rate)
- **Infrastructure** metrics (resource utilization, cost)

### 2. Implement Progressive Enhancement

Build observability incrementally:

1. **Basic metrics** collection and alerting
2. **Centralized logging** for debugging
3. **Distributed tracing** for complex workflows
4. **Advanced analytics** and machine learning insights

## Conclusion

Building comprehensive observability requires careful planning, the right tools, and ongoing optimization. By implementing the three pillars of observability with modern tools like OpenTelemetry and Datadog, organizations can achieve unprecedented visibility into their systems.
    `,
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Observability', 'OpenTelemetry', 'Datadog', 'Monitoring']
  },
  {
    slug: 'kubernetes-production-lessons',
    title: 'Kubernetes in Production: Lessons Learned from OKD Deployments',
    excerpt: 'Real-world insights from managing Kubernetes clusters, optimizing resource utilization, and ensuring high availability.',
    content: `
# Kubernetes in Production: Lessons Learned from OKD Deployments

Running Kubernetes in production environments presents unique challenges and opportunities. In this article, I'll share practical insights from managing OKD (OpenShift Kubernetes Distribution) clusters in production.

## The Production Kubernetes Landscape

Production Kubernetes environments differ significantly from development setups:

- **High availability** requirements with zero-downtime deployments
- **Resource optimization** to control costs while maintaining performance
- **Security hardening** to meet compliance requirements
- **Operational complexity** requiring robust monitoring and alerting

## OKD vs. Standard Kubernetes

OKD provides enterprise-grade features out of the box:

### Built-in Security

\`\`\`yaml
# Security Context Constraints (SCC) example
apiVersion: security.openshift.io/v1
kind: SecurityContextConstraints
metadata:
  name: restricted
allowHostDirVolumePlugin: false
allowHostIPC: false
allowHostNetwork: false
allowHostPID: false
allowPrivilegedContainer: false
runAsUser:
  type: MustRunAsRange
\`\`\`

### Resource Management Best Practices

Always set appropriate resource requests and limits:

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
      - name: app
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
\`\`\`

## Lessons Learned

### 1. Start Small, Scale Gradually

Begin with non-critical workloads to learn operational patterns.

### 2. Invest in Monitoring Early

Comprehensive monitoring is essential for production success.

### 3. Automate Everything

Automation reduces human error and improves consistency.

### 4. Plan for Failure

Design systems with failure scenarios in mind.

## Conclusion

Running Kubernetes in production requires careful planning, ongoing optimization, and continuous learning. OKD provides enterprise-grade features that simplify many operational challenges, but success still depends on following best practices for resource management, security, and operational excellence.
    `,
    date: '2024-01-05',
    readTime: '5 min read',
    tags: ['Kubernetes', 'OKD', 'Production', 'DevOps']
  },
  {
    slug: 'aws-cost-optimization',
    title: 'AWS Cost Optimization: Saving 10% Through Smart Automation',
    excerpt: 'How I automated infrastructure provisioning and achieved significant cost savings while improving performance.',
    content: `
# AWS Cost Optimization: Saving 10% Through Smart Automation

Cloud cost optimization is a critical concern for organizations scaling their infrastructure. In this article, I'll share how we achieved 10% cost savings through intelligent automation and resource optimization strategies.

## The Cost Optimization Challenge

Cloud costs can quickly spiral out of control without proper management:

- **Over-provisioned resources** running 24/7 regardless of demand
- **Unused or underutilized** instances consuming budget
- **Manual processes** leading to inconsistent resource sizing
- **Lack of visibility** into cost drivers and optimization opportunities

## Our Cost Optimization Strategy

### 1. Automated Resource Right-Sizing

Implemented intelligent resource sizing based on actual usage patterns:

\`\`\`python
# AWS Cost Optimization Script
import boto3
import json

def analyze_instance_utilization():
    cloudwatch = boto3.client('cloudwatch')
    ec2 = boto3.client('ec2')
    
    # Get all running instances
    instances = ec2.describe_instances(
        Filters=[{'Name': 'instance-state-name', 'Values': ['running']}]
    )
    
    recommendations = []
    
    for reservation in instances['Reservations']:
        for instance in reservation['Instances']:
            instance_id = instance['InstanceId']
            instance_type = instance['InstanceType']
            
            # Get CPU utilization metrics
            cpu_metrics = cloudwatch.get_metric_statistics(
                Namespace='AWS/EC2',
                MetricName='CPUUtilization',
                Dimensions=[{'Name': 'InstanceId', 'Value': instance_id}],
                StartTime=datetime.now() - timedelta(days=30),
                EndTime=datetime.now(),
                Period=3600,
                Statistics=['Average']
            )
            
            avg_cpu = calculate_average_cpu(cpu_metrics)
            
            if avg_cpu < 20:
                recommendations.append({
                    'instance_id': instance_id,
                    'current_type': instance_type,
                    'recommended_type': get_smaller_instance_type(instance_type),
                    'potential_savings': calculate_savings(instance_type, avg_cpu)
                })
    
    return recommendations
\`\`\`

### 2. Scheduled Scaling

Implemented automated scaling based on business patterns:

\`\`\`yaml
# Auto Scaling Group with Scheduled Actions
apiVersion: autoscaling.aws.crossplane.io/v1alpha1
kind: AutoScalingGroup
metadata:
  name: production-asg
spec:
  forProvider:
    minSize: 2
    maxSize: 10
    desiredCapacity: 4
    launchTemplate:
      launchTemplateName: production-template
    scheduledActions:
    - scheduledActionName: scale-up-morning
      schedule: "0 8 * * MON-FRI"
      desiredCapacity: 8
    - scheduledActionName: scale-down-evening
      schedule: "0 18 * * MON-FRI"
      desiredCapacity: 2
\`\`\`

## Results and Impact

Our cost optimization efforts delivered:

- **10% overall cost reduction** through automated optimization
- **25% reduction** in unused resource costs
- **40% improvement** in resource utilization efficiency
- **Automated scaling** reducing manual intervention
- **Proactive cost monitoring** preventing budget overruns

## Best Practices for Cost Optimization

### 1. Start with Visibility

Implement comprehensive cost monitoring before optimization:

- **Cost allocation tags** for accurate cost attribution
- **Resource utilization** monitoring and alerting
- **Cost anomaly detection** for unexpected spikes

### 2. Automate Everything

Automation reduces human error and ensures consistency:

- **Infrastructure as Code** for reproducible deployments
- **Automated scaling** based on demand patterns
- **Scheduled actions** for predictable workloads

## Conclusion

AWS cost optimization requires a systematic approach combining automation, monitoring, and continuous optimization. By implementing intelligent resource management, automated scaling, and comprehensive cost monitoring, organizations can achieve significant savings while maintaining performance and reliability.
    `,
    date: '2024-01-01',
    readTime: '7 min read',
    tags: ['AWS', 'Cost Optimization', 'Automation', 'Cloud']
  }
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Josh M Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {post.excerpt}
              </p>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <Card className="border-2 border-gray-200 dark:border-gray-700">
            <CardContent className="p-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
              </div>
            </CardContent>
          </Card>

          {/* Author Bio */}
          <div className="mt-12">
            <Card className="border-2 border-blue-200 dark:border-blue-700">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                      J
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                      Josh M
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Strategic Platform Engineer passionate about building scalable cloud infrastructure 
                      and intelligent systems. Follow me on{' '}
                      <a href="https://linkedin.com/in/joshmenzies" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                        LinkedIn
                      </a>{' '}
                      and{' '}
                      <a href="https://github.com/joshmenzies" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                        GitHub
                      </a>.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact">
                        Get In Touch
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    Coming Soon: Microservices Architecture Patterns
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Explore best practices for designing scalable microservices architectures.
                  </p>
                  <Button variant="outline" size="sm" disabled>
                    Read More
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    Coming Soon: Cloud Cost Optimization Strategies
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Learn how to optimize your cloud infrastructure costs without sacrificing performance.
                  </p>
                  <Button variant="outline" size="sm" disabled>
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}