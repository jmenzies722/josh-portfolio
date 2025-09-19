import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Search } from 'lucide-react'

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen py-16">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-neutral-400 dark:text-neutral-500 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Project Not Found
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              The project you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View All Projects
              </Link>
            </Button>
            <div>
              <Button variant="outline" asChild>
                <Link href="/">
                  Go Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
