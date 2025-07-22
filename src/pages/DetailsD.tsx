

const DetailsD = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Yancy Tear
        </h1>

        <p className="text-gray-700 text-lg mb-6 text-center">
          Skilled software engineer with expertise in full-stack development, cloud computing, and scalable web applications. Passionate about writing clean, efficient code and learning new technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
            <p><span className="font-medium">Name:</span> Yancy Tear</p>
            <p><span className="font-medium">Email:</span> yancy.tear@example.com</p>
            <p><span className="font-medium">Location:</span> San Francisco, USA</p>
            <p><span className="font-medium">Languages:</span> English, Spanish</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800">Skills Overview</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>JavaScript, TypeScript, React</li>
              <li>Node.js, Express, MongoDB</li>
              <li>AWS, Docker, Kubernetes</li>
              <li>CI/CD, Unit Testing, Agile Methodologies</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Experience Summary</h2>
          <p className="text-gray-700">
            7+ years of experience in software development across multiple industries. Developed high-performance web apps and cloud-native solutions with a focus on reliability and scalability.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/Yancy_Tear_Resume.pdf"
            download="Yancy_Tear_Resume.pdf"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailsD;
