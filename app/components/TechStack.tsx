import React from 'react';

interface TechStackProps {
  isDarkMode: boolean;
}

const TechStack: React.FC<TechStackProps> = ({ isDarkMode }) => {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Firebase', 'MongoDB', 'MySQL']
    },
    {
      category: 'Languages',
      technologies: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL']
    },
    {
      category: 'Data & AI/ML',
      technologies: ['Data Analytics', 'TensorFlow', 'OpenCV', 'Pandas', 'NumPy', 'Machine Learning']
    },
    {
      category: 'Tools & Others',
      technologies: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Docker', 'AWS']
    }
  ];

  return (
    <div className='mt-8 max-w-2xl'>
      <h4 className='mb-4 text-gray-700 dark:text-gray-300 font-semibold'>Tech Stack</h4>
      <div className='space-y-6'>
        {techCategories.map((category, index) => (
          <div key={index}>
            <h5 className='text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2'>
              {category.category}
            </h5>
            <div className='flex flex-wrap gap-2'>
              {category.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className='px-3 py-1.5 text-xs rounded-lg bg-gray-100 dark:bg-gray-800 
                  text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700
                  hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

