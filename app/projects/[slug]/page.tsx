import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tag } from '@/components/ui/tag'
import { projects } from '@/lib/data'
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Users } from 'lucide-react'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Josh [Last Name]`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Tag key={tag} variant="secondary">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                {project.githubUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Project Image/Architecture */}
          {project.architecture && (
            <div className="mb-12">
              <Card>
                <CardContent className="p-8">
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 text-center">
                    <div className="text-neutral-500 dark:text-neutral-400 mb-4">
                      <Calendar className="h-12 w-12 mx-auto" />
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Architecture diagram placeholder for {project.title}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                      Replace with actual architecture SVG or image
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Problem */}
            <Card>
              <CardHeader>
                <CardTitle>Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {project.problem}
                </p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card>
              <CardHeader>
                <CardTitle>Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {project.solution}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Challenges */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Key Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full" />
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {challenge}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Results & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full" />
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {result}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Technical Details */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Technical Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      className="bg-neutral-100 dark:bg-neutral-700 rounded-lg p-3 text-center"
                    >
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Stats */}
          <div className="mb-12">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                      3-6 months
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                      Development Time
                    </div>
                  </div>
                  <div>
                    <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                      2-5
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                      Team Size
                    </div>
                  </div>
                  <div>
                    <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                      2023
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                      Year Completed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  Interested in this project?
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  Let's discuss how similar solutions could benefit your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/contact">
                      Get In Touch
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/projects">
                      View More Projects
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
