'use client'
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import ProjectModal from "./ProjectModal";

interface WorkProps {
  isDarkMode: boolean;
}

interface GitHubProject {
  id: number;
  name: string;
  fullName: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  createdAt: string;
  topics: string[];
  isPrivate: boolean;
}

const Work: React.FC<WorkProps> = ({ isDarkMode }) => {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<GitHubProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterLanguage, setFilterLanguage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Get unique languages from projects
  const languages = useMemo(() => {
    const langSet = new Set<string>();
    projects.forEach((project) => {
      if (project.language) {
        langSet.add(project.language);
      }
    });
    return Array.from(langSet).sort();
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLanguage = !filterLanguage || project.language === filterLanguage;
      return matchesSearch && matchesLanguage;
    });
  }, [projects, searchQuery, filterLanguage]);

  // Display projects (limit to 4 initially)
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  const handleProjectClick = (project: GitHubProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      Java: '#ed8b00',
      'C++': '#00599c',
      HTML: '#e34c26',
      CSS: '#1572b6',
    };
    return colors[language || ''] || '#6b7280';
  };

  const getProjectBackground = (project: GitHubProject, index: number) => {
    // Language-based gradient backgrounds
    const gradients: Record<string, string> = {
      JavaScript: 'linear-gradient(135deg, #f7df1e 0%, #f0c929 50%, #e8b413 100%)',
      TypeScript: 'linear-gradient(135deg, #3178c6 0%, #235a97 50%, #1a3d6b 100%)',
      Python: 'linear-gradient(135deg, #3776ab 0%, #2d5f8a 50%, #234869 100%)',
      Java: 'linear-gradient(135deg, #ed8b00 0%, #c77500 50%, #a15f00 100%)',
      'C++': 'linear-gradient(135deg, #00599c 0%, #004780 50%, #003564 100%)',
      HTML: 'linear-gradient(135deg, #e34c26 0%, #c0392b 50%, #a93226 100%)',
      CSS: 'linear-gradient(135deg, #1572b6 0%, #125a94 50%, #0f4272 100%)',
      React: 'linear-gradient(135deg, #61dafb 0%, #4fa8c5 50%, #3d768f 100%)',
      Vue: 'linear-gradient(135deg, #4fc08d 0%, #3fa075 50%, #2f805d 100%)',
      Node: 'linear-gradient(135deg, #339933 0%, #2d7a2d 50%, #275b27 100%)',
    };

    // If language has a gradient, use it
    if (project.language && gradients[project.language]) {
      return gradients[project.language];
    }

    // Fallback: Use project name hash for consistent colors
    const hash = project.name.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);

    // Generate color from hash
    const hue = Math.abs(hash) % 360;
    const saturation = 60 + (Math.abs(hash) % 20); // 60-80%
    const lightness = isDarkMode ? 35 + (Math.abs(hash) % 15) : 50 + (Math.abs(hash) % 20); // 35-50% dark, 50-70% light

    return `linear-gradient(135deg, 
      hsl(${hue}, ${saturation}%, ${lightness}%) 0%, 
      hsl(${hue + 20}, ${saturation - 10}%, ${lightness - 10}%) 50%, 
      hsl(${hue + 40}, ${saturation - 20}%, ${lightness - 20}%) 100%
    )`;
  };

  if (loading) {
    return (
      <section id="work" className='w-full px-[12%] py-6 scroll-mt-20' aria-labelledby="work-heading">
        <h4 className="text-center mb-2 text-lg text-gray-600 dark:text-gray-400">My portfolio</h4>
        <h2 id="work-heading" className="text-center text-5xl text-gray-900 dark:text-white">My latest work</h2>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="work" className='w-full px-[12%] py-6 scroll-mt-20' aria-labelledby="work-heading">
        <h4 className="text-center mb-2 text-lg text-gray-600 dark:text-gray-400">My portfolio</h4>
        <h2 id="work-heading" className="text-center text-5xl text-gray-900 dark:text-white">My latest work</h2>
        <div className="text-center py-12">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="work" className='w-full px-[12%] py-6 scroll-mt-20' aria-labelledby="work-heading">
        <h4 className="text-center mb-2 text-lg text-gray-600 dark:text-gray-400">My portfolio</h4>
        <h2 id="work-heading" className="text-center text-5xl text-gray-900 dark:text-white">My latest work</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-6 text-gray-600 dark:text-gray-300'>
          Explore my GitHub repositories. Projects are automatically synced from my GitHub profile.
        </p>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
              aria-label="Search projects"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {languages.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setFilterLanguage(null)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filterLanguage === null
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All
              </button>
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setFilterLanguage(lang)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors flex items-center gap-2 ${
                    filterLanguage === lang
                      ? 'bg-black dark:bg-white text-white dark:text-black'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: getLanguageColor(lang) }}
                    aria-hidden="true"
                  ></span>
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        {displayedProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No projects found matching your search.</p>
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-6 gap-5' role="list">
              {displayedProjects.map((project, index) => (
                <article
                  key={project.id}
                  className='aspect-square rounded-lg 
                      relative cursor-pointer group hover:scale-105 transition-transform duration-300
                      focus-within:ring-2 focus-within:ring-gray-400 dark:focus-within:ring-gray-500
                      overflow-hidden shadow-lg'
                  style={{ 
                    background: getProjectBackground(project, index),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onClick={() => handleProjectClick(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleProjectClick(project);
                    }
                  }}
                  tabIndex={0}
                  role="listitem"
                  aria-label={`${project.name} - ${project.description}`}
                >
                  {/* Language icon pattern overlay */}
                  {project.language && (
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white select-none">
                        {project.language === 'JavaScript' && 'JS'}
                        {project.language === 'TypeScript' && 'TS'}
                        {project.language === 'Python' && 'PY'}
                        {project.language === 'Java' && 'J'}
                        {project.language === 'C++' && 'C++'}
                        {project.language === 'HTML' && '</>'}
                        {project.language === 'CSS' && '{}'}
                        {project.language === 'React' && '⚛'}
                        {!['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'HTML', 'CSS', 'React'].includes(project.language) && project.language.substring(0, 2).toUpperCase()}
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className='bg-white dark:bg-gray-800 w-10/12 rounded-md absolute bottom-5
                  left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                  justify-between duration-500 group-hover:bottom-7 shadow-lg z-10'>
                    <div className="flex-1 min-w-0">
                      <h3 className='font-semibold text-gray-900 dark:text-white truncate'>{project.name}</h3>
                      <p className='text-sm text-grey-700 dark:text-gray-400 truncate'>{project.description}</p>
                      {project.language && (
                        <div className="flex items-center gap-1 mt-1">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: getLanguageColor(project.language) }}
                            aria-hidden="true"
                          ></span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{project.language}</span>
                        </div>
                      )}
                    </div>
                    <div className='border rounded-full border-black dark:border-white w-9
                    aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] 
                    group-hover:bg-lime-300 dark:group-hover:bg-lime-400 transition-colors duration-300 ml-2 flex-shrink-0'
                    aria-hidden="true">
                      <Image 
                        src={assets.send_icon} 
                        alt="" 
                        className="w-5"
                        width={20}
                        height={20}
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Show More/Less Button */}
            {filteredProjects.length > 4 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className='w-max flex items-center justify-center gap-1.5 
                text-sm text-grey-700 dark:text-gray-300 border-[0.5px] border-grey-700 dark:border-gray-400 rounded-full py-2 px-6 mx-auto
                my-6 hover:bg-lightHover dark:hover:bg-gray-800 duration-500 transition-colors
                focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:ring-offset-2'
                aria-label={showAll ? "Show fewer projects" : "Show more projects"}
              >
                {showAll ? "Show less" : `Show more (${filteredProjects.length - 4} more)`}
                <Image 
                  src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} 
                  alt="" 
                  className={`w-3 transition-transform ${showAll ? 'rotate-180' : ''}`}
                  width={12}
                  height={12}
                  style={{ width: 'auto', height: 'auto' }}
                  aria-hidden="true"
                />
              </button>
            )}
          </>
        )}
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
        isDarkMode={isDarkMode}
      />
    </>
  );
};

export default Work;
