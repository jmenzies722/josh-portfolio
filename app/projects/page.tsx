'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { Tag } from '@/components/ui/tag'
import { projects } from '@/lib/data'
import { Search, Filter, Code, Zap, Target, Award } from 'lucide-react'

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('')

  // Get all unique tags from projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)))

  // Filter projects based on search term and selected tag
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = selectedTag === '' || project.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-neutral-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white mb-6 animate-pulse-slow">
              <Code className="h-10 w-10" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              My <span className="text-blue-600 dark:text-blue-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              A collection of projects showcasing my work in platform engineering, 
              cloud infrastructure, observability solutions, and innovative automation.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 card-hover">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Tag Filter */}
              <div className="lg:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">All Technologies</option>
                    {allTags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(searchTerm || selectedTag) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {searchTerm && (
                  <Tag variant="secondary">
                    Search: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm('')}
                      className="ml-2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                    >
                      ×
                    </button>
                  </Tag>
                )}
                {selectedTag && (
                  <Tag variant="secondary">
                    Technology: {selectedTag}
                    <button
                      onClick={() => setSelectedTag('')}
                      className="ml-2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                    >
                      ×
                    </button>
                  </Tag>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                slug={project.slug}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-neutral-400 dark:text-neutral-500 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              No projects found
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Try adjusting your search terms or filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedTag('')
              }}
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-8 card-hover">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {projects.length}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Total Projects
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {projects.filter(p => p.featured).length}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Featured Projects
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {allTags.length}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Technologies Used
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
