import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/project-card'
import { TypingAnimation } from '@/components/typing-animation'
import { StatsCounter } from '@/components/stats-counter'
import { AIChat } from '@/components/ai-chat-simple'
import { projects, techStack, personalInfo } from '@/lib/data'
import { Download, ArrowRight, Code, Cloud, Brain, MessageCircle, Heart, Lightbulb, Users, Target, Bot } from 'lucide-react'

export default function HomePage() {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section - Clean Mobile Design */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-primary-50/20 dark:from-neutral-900 dark:via-neutral-800 dark:to-primary-900/10"></div>
        
        {/* Subtle floating elements - only on desktop */}
        <div className="hidden lg:block absolute top-20 left-10 w-20 h-20 bg-primary-200/10 dark:bg-primary-800/10 rounded-full blur-xl animate-float"></div>
        <div className="hidden lg:block absolute bottom-20 right-10 w-32 h-32 bg-accent-200/10 dark:bg-accent-800/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container-custom relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              
              {/* Left Column - Content */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
                {/* Greeting */}
                <div className="animate-fade-in-up">
                <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-3 tracking-wide uppercase">
                    Hello, I'm
                  </p>
              </div>
                
                {/* Name */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                    Josh{' '}
                    <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent animate-gradient">
                    M
                    </span>
                  </h1>
            </div>
                
                {/* Typing Animation */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="text-lg sm:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mb-6">
                    <span className="text-neutral-500 dark:text-neutral-500 mr-2">I'm a</span>
                    <TypingAnimation 
                      texts={[
                        'DevOps Engineer',
                        'Platform Engineering Specialist', 
                        'AWS Cloud Architect',
                        'Kubernetes Expert',
                        'Infrastructure Automation Lead',
                        'Observability Expert',
                        'CI/CD Specialist'
                      ]}
                      speed={100}
                      deleteSpeed={50}
                      pauseTime={2000}
                      className="font-semibold text-blue-600 dark:text-blue-400"
                    />
                  </div>
                </div>
                     
                {/* Description */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <p className="text-base sm:text-lg lg:text-xl text-neutral-500 dark:text-neutral-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Transforming organizations through scalable infrastructure solutions, 
                    delivering measurable business impact with modern DevOps practices.
                     </p>
                   </div>
                
                {/* CTA Buttons */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="group bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-base sm:text-lg font-medium">
                <Link href="/chat">
                      <Bot className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Ask Shua
                      <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
                  <Button variant="outline" size="lg" asChild className="group border-2 hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-base sm:text-lg font-medium">
                <a href="/menzies-resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
                  </div>
                
                {/* Mobile Chat Preview */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-up mt-8 lg:mt-0" style={{animationDelay: '0.5s'}}>
                <div className="relative group">
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
                  
                  {/* Profile Image */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                  {/* Default Image */}
                    <Image
                    src="/profile.jpg"
                    alt="Josh M"
                    width={600}
                    height={600}
                    className="w-full h-full rounded-full border-4 border-white/40 dark:border-neutral-600/60 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 object-cover object-center profile-image group-hover:opacity-0"
                      priority
                    quality={95}
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 600px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  
                  {/* Hover Image */}
                  <Image
                    src="/IMG_2884.webp"
                    alt="Josh M"
                    width={600}
                    height={600}
                    className="absolute inset-0 w-full h-full rounded-full border-4 border-white/40 dark:border-neutral-600/60 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 object-cover object-center profile-image opacity-0 group-hover:opacity-100"
                    quality={95}
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 600px"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    
                  {/* Floating Tech Icons - Only on desktop */}
                  <div className="hidden lg:flex absolute -top-6 -right-6 w-16 h-16 bg-white dark:bg-neutral-800 rounded-full shadow-lg items-center justify-center animate-float">
                    <Cloud className="h-8 w-8 text-primary-600" />
                    </div>
                  <div className="hidden lg:flex absolute -bottom-6 -left-6 w-16 h-16 bg-white dark:bg-neutral-800 rounded-full shadow-lg items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                    <Code className="h-8 w-8 text-accent-600" />
                    </div>
                  <div className="hidden lg:flex absolute top-1/2 -left-8 w-14 h-14 bg-white dark:bg-neutral-800 rounded-full shadow-lg items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                    <Brain className="h-7 w-7 text-primary-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section - Desktop Only */}
      <section className="hidden md:block py-12 sm:py-20 relative overflow-hidden bg-gradient-to-br from-primary-50/30 via-accent-50/20 to-primary-50/30 dark:from-primary-900/10 dark:via-accent-900/5 dark:to-primary-900/10">
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 sm:mb-12 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white mb-4 sm:mb-6 animate-pulse-slow">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                       Meet <span className="gradient-text">Shua</span>
                     </h2>
              <p className="text-sm sm:text-lg text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 animate-fade-in-up px-4 sm:px-0" style={{animationDelay: '0.4s'}}>
                       My AI assistant that knows everything about my platform engineering experience and some of my life!
                     </p>
            </div>
            <div className="animate-fade-in-up px-4 sm:px-0" style={{animationDelay: '0.6s'}}>
              <AIChat />
            </div>
          </div>
        </div>
      </section>


      {/* Tech Stack Section */}
      <section className="py-12 sm:py-16 section-bg">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4 animate-fade-in-up">
              Core Technical Expertise
            </h2>
            <p className="text-sm sm:text-lg text-neutral-600 dark:text-neutral-400 animate-fade-in-up px-4 sm:px-0" style={{animationDelay: '0.2s'}}>
              Proven proficiency in enterprise-grade technologies driving measurable business outcomes
            </p>
            
            {/* Tech Stack Counter */}
            <div className="mt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 rounded-full border border-primary-200 dark:border-primary-700">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                  <StatsCounter end={12} className="text-primary-600 dark:text-primary-400 font-bold" /> Core Technologies
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Primary Expertise - Most Important */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 h-full">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Cloud & Containerization</h3>
                </div>
                <div className="space-y-2">
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">AWS</span>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Kubernetes</span>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Docker</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure as Code */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 h-full">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Infrastructure as Code</h3>
                </div>
                <div className="space-y-2">
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Terraform</span>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Python</span>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Bash</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CI/CD & Automation */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 h-full">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">CI/CD & Automation</h3>
                </div>
                <div className="space-y-2">
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">GitLab CI</span>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Jenkins</span>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">GitHub Actions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Observability */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 h-full">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Observability</h3>
                </div>
                <div className="space-y-2">
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Datadog</span>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">OpenTelemetry</span>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Prometheus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 sm:py-16">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 animate-fade-in-up">
              Strategic Initiatives
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 animate-fade-in-up px-2 sm:px-0" style={{animationDelay: '0.2s'}}>
              High-impact platform engineering projects delivering measurable business value
            </p>
            
            {/* Projects Counter */}
            <div className="mt-6 sm:mt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-accent-100 to-primary-100 dark:from-accent-900/20 dark:to-primary-900/20 rounded-full border border-accent-200 dark:border-accent-700">
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-accent-700 dark:text-accent-300">
                  <StatsCounter end={3} className="text-accent-600 dark:text-accent-400 font-bold" /> Featured Projects
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug}
                className="animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  slug={project.slug}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Button variant="outline" size="lg" asChild className="group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 section-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 animate-fade-in-up">
              Core Competencies
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Strategic capabilities driving organizational transformation and engineering excellence
            </p>
            
            {/* Competencies Counter */}
            <div className="mt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-success-100 to-primary-100 dark:from-success-900/20 dark:to-primary-900/20 rounded-full border border-success-200 dark:border-success-700">
                <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-success-700 dark:text-success-300">
                  <StatsCounter end={3} className="text-success-600 dark:text-success-400 font-bold" /> Key Competencies
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            <div className="text-center animate-fade-in-left" style={{animationDelay: '0.4s'}}>
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Cloud className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600 dark:text-primary-400" />
                </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Platform Engineering Leadership
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Driving organizational transformation from traditional DevOps to Platform Engineering, delivering 20% faster deployments and enabling self-service capabilities that accelerate engineering velocity.
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600 dark:text-primary-400" />
                </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Enterprise Observability
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Implementing comprehensive observability solutions using OpenTelemetry, Datadog, and Kubernetes, reducing incident detection time by 40% and MTTR by 35%.
              </p>
            </div>
            <div className="text-center animate-fade-in-right" style={{animationDelay: '0.8s'}}>
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600 dark:text-primary-400" />
                </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Infrastructure Automation
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Building automated infrastructure solutions with Terraform, GitLab CI, and AWS services, achieving 25% reduction in manual processes and improving system reliability.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-12 sm:py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 rounded-2xl p-6 sm:p-12 text-center relative overflow-hidden animate-fade-in-up shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                Let's Build Something Amazing
              </h2>
              <p className="text-base sm:text-xl text-primary-100 mb-4 sm:mb-6 max-w-2xl mx-auto px-4 sm:px-0">
                Ready to discuss your next project? I'm always interested in new challenges and opportunities.
              </p>
              
              {/* Portfolio Summary Counter */}
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-white">
                        <StatsCounter end={20} className="text-white font-bold" />
                      </div>
                      <div className="text-xs text-primary-200">% Faster Deployments</div>
                    </div>
                    <div className="w-px h-6 sm:h-8 bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-white">
                        <StatsCounter end={12} className="text-white font-bold" />
                      </div>
                      <div className="text-xs text-primary-200">Technologies</div>
                    </div>
                    <div className="w-px h-6 sm:h-8 bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-white">
                        <StatsCounter end={3} className="text-white font-bold" />
                      </div>
                      <div className="text-xs text-primary-200">Major Projects</div>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="secondary" size="lg" asChild className="text-sm sm:text-base">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
