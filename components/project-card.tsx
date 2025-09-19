import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tag } from '@/components/ui/tag'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  slug: string
}

export function ProjectCard({ title, description, tags, githubUrl, liveUrl, slug }: ProjectCardProps) {
  return (
    <Card className="group card-hover cursor-pointer border-gradient h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <CardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 text-lg sm:text-xl leading-tight">
            {title}
          </CardTitle>
          <div className="flex space-x-2 ml-2">
            {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 p-1"
                >
                  <span className="sr-only">View on GitHub</span>
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 p-1"
              >
                <span className="sr-only">View live site</span>
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            )}
          </div>
        </div>
        <CardDescription className="group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-200 text-sm sm:text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Tag
              key={tag}
              variant="secondary"
              style={{animationDelay: `${index * 0.1}s`}}
              className="text-xs sm:text-sm"
            >
              {tag}
            </Tag>
          ))}
        </div>
        <Link
          href={`/projects/${slug}`}
          className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200 inline-flex items-center"
        >
          View details
          <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </CardContent>
    </Card>
  )
}
