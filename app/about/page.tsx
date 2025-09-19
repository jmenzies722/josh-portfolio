import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { timeline } from '@/lib/data'
import { Download, Calendar, Building, MapPin, Code, Cloud, Zap, Target, Award, Users, TrendingUp, Globe, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 section-bg">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-12 animate-fade-in-up">
              <div className="relative w-64 h-64 mx-auto mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <Image
                  src="/profile.webp"
                  alt="Josh Menzies"
                  width={256}
                  height={256}
                  className="relative w-full h-full rounded-full border-4 border-primary-200 dark:border-primary-700 shadow-2xl object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 200px, 256px"
                />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Hi, I'm <span className="gradient-text">Josh</span>
            </h1>
            <p className="text-2xl text-neutral-600 dark:text-neutral-400 mb-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Strategic Platform Engineer
            </p>
            <p className="text-lg text-neutral-500 dark:text-neutral-500 mb-8 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              Transforming organizations through infrastructure automation, developer enablement, and scalable platform solutions. 
              Delivering measurable business impact with 20% faster deployments, 40% faster incident detection, and 25% reduction in manual processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <Button size="lg" asChild>
              <a href="/menzies-resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Let's Connect
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <TrendingUp className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">20%</div>
                <div className="text-neutral-600 dark:text-neutral-400">Faster Deployments</div>
              </div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <Zap className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">40%</div>
                <div className="text-neutral-600 dark:text-neutral-400">Faster Incident Detection</div>
              </div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <Target className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">25%</div>
                <div className="text-neutral-600 dark:text-neutral-400">Reduction in Manual Processes</div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                  My Story
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    I'm a <span className="font-semibold text-primary-600 dark:text-primary-400">Strategic Platform Engineer</span> who 
                    thrives on transforming organizations through infrastructure automation and developer enablement. 
                    My progression from System Support Engineer to DevOps Engineer demonstrates my technical depth 
                    and ability to deliver impactful solutions.
                  </p>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    At <span className="font-semibold text-primary-600 dark:text-primary-400">Nectar Services Corp</span>, I've led 
                    the complete transformation from traditional DevOps to Platform Engineering, building self-service capabilities 
                    that empower development teams to move faster and more reliably.
                  </p>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Beyond technical implementation, I'm passionate about <span className="font-semibold text-primary-600 dark:text-primary-400">knowledge sharing</span>, 
                    mentoring team members, and staying current with emerging cloud technologies. My approach combines 
                    technical depth with strategic thinking to deliver solutions that drive both immediate impact and long-term value.
                  </p>
                </div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg rounded-2xl p-8 border border-primary-200/50 dark:border-primary-700/50">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3">
                          <Award className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Rapid Career Growth</h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">System Support → DevOps Engineer in 3 months</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3">
                          <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Team Enablement</h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">Built self-service platforms for developers</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3">
                          <Globe className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Global Impact</h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">99.9% uptime for VoIP platforms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 animate-fade-in-up">
                Professional Journey
            </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Strategic platform engineering with measurable business impact
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-accent-200 dark:from-primary-700 dark:to-accent-700"></div>
              <div className="space-y-12">
              {timeline.map((item, index) => (
                  <div key={index} className="relative animate-fade-in-up" style={{animationDelay: `${0.3 + index * 0.2}s`}}>
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 relative z-10">
                        <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-full p-4 shadow-lg">
                          <Building className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg rounded-2xl p-6 border border-primary-200/50 dark:border-primary-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center space-x-2 mb-3">
                          <Calendar className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {item.role}
                      </h3>
                        <p className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">
                        {item.company}
                      </p>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 animate-fade-in-up">
                Expertise & Focus Areas
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Comprehensive technical skills and strategic focus areas
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg rounded-2xl p-8 border border-primary-200/50 dark:border-primary-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-full p-3">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  Technical Skills
                </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="group">
                      <div className="flex items-center gap-2 mb-3">
                        <Cloud className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Cloud & Infrastructure</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['AWS', 'Kubernetes', 'Terraform', 'Docker'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="group">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">CI/CD & Monitoring</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['GitLab CI', 'Datadog', 'OpenTelemetry', 'Prometheus'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="group">
                      <div className="flex items-center gap-2 mb-3">
                        <Code className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Programming</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'Bash', 'Go', 'SQL'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                  </div>
                  </div>
                  </div>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg rounded-2xl p-8 border border-primary-200/50 dark:border-primary-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-full p-3">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      Focus Areas
                </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="group">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Platform Engineering</h4>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      Leading organizational transformation to platform-centric infrastructure
                    </p>
                  </div>
                    <div className="group">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Observability</h4>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      Implementing comprehensive monitoring and alerting solutions
                    </p>
                  </div>
                    <div className="group">
                      <div className="flex items-center gap-2 mb-3">
                        <Cloud className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Infrastructure Automation</h4>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      Building automated CI/CD pipelines and infrastructure provisioning
                    </p>
                  </div>
                    <div className="group">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Cost Optimization</h4>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      Optimizing cloud resources and reducing operational costs
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  Let's Connect
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  Ready to transform your engineering organization? I specialize in driving platform engineering transformations, 
                  leading technical initiatives, and accelerating engineering velocity for innovative teams. 
                  Let's discuss how my proven expertise can deliver measurable results for your organization.
                </p>
                <Button asChild>
                  <Link href="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
