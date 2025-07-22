

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  experience: string;
}

const Portfoilo = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "HTML",
      description: "Expertise in semantic HTML5 structure and accessibility.",
      experience: "1 years",
    },
    {
      id: 2,
      title: "CSS",
      description: "Skilled in responsive layouts, Flexbox, Grid, and Tailwind CSS.",
      experience: "1 years",
    },
    {
      id: 3,
      title: "JavaScript",
      description: "Strong foundation in ES6+, DOM manipulation, and API handling.",
      experience: "6 months",
    },
    {
      id: 4,
      title: "React",
      description: "Built multiple SPA projects using hooks, router, and component-based architecture.",
      experience: "6 months",
    },
    {
      id: 5,
      title: "TypeScript",
      description: "Used in modern React projects for type safety and scalability.",
      experience: "3 months",
    },
    {
      id: 6,
      title: "Node.js",
      description: "Experience in building REST APIs and server-side apps with Express.",
      experience: "1 year",
    },
    {
      id: 7,
      title: "GitHub",
      description: "Version control, collaboration, and CI/CD with GitHub Actions.",
      experience: "6 months",
    },
  ];

  return (
    
    <div className=" min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
    
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10  animate-fade-in-out">
          Md Julfikar's Tech Portfolio
        </h1>
  
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 pb-10">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
              <span className="text-sm font-medium text-gray-500">
                Experience: {item.experience}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfoilo;
