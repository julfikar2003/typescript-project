

const Details = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Md Julfikar
        </h1>

        <p className="text-gray-700 text-lg mb-6 text-center">
          Passionate Full-Stack Web Developer with strong skills in front-end and back-end technologies. I love building interactive, user-friendly, and scalable web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
            <p><span className="font-medium">Name:</span> Md Julfikar</p>
            <p><span className="font-medium">Email:</span> rjulfikar30@gmail.com</p>
            <p><span className="font-medium">Location:</span> Dhaka, Bangladesh</p>
            <p><span className="font-medium">Languages:</span> Bangla, English</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800">Skills Overview</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>HTML, CSS, JavaScript, TypeScript</li>
              <li>React, Next.js, Tailwind CSS</li>
              <li>Node.js, Express.js, MongoDB</li>
              <li>Git, GitHub, REST APIs</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Experience Summary</h2>
          <p className="text-gray-700">
            Over 3 years of hands-on experience building modern web applications. I've worked on login systems, dashboards, portfolio websites, REST APIs, and full-stack applications using the MERN stack. I'm also familiar with responsive design, SEO practices, and team collaboration via Git and GitHub.
          </p>
        </div>

        <div className="mt-10 text-center">
        <a
  href="/Md_Julfikar_Resume.pdf"
  download="Md_Julfikar_Resume.pdf"
  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
>
  Download Resume
</a>

        </div>
      </div>
    </div>
  );
};

export default Details;
