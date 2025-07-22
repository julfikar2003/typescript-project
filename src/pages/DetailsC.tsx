

const DetailsC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Marjy Ferencz
        </h1>

        <p className="text-gray-700 text-lg mb-6 text-center">
          Experienced marketing strategist with a passion for data-driven campaigns and brand development. Skilled in digital marketing, content creation, and client relations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
            <p><span className="font-medium">Name:</span> Marjy Ferencz</p>
            <p><span className="font-medium">Email:</span> marjy.ferencz@example.com</p>
            <p><span className="font-medium">Location:</span> Budapest, Hungary</p>
            <p><span className="font-medium">Languages:</span> English, Hungarian</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800">Skills Overview</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Digital Marketing & SEO</li>
              <li>Content Strategy & Creation</li>
              <li>Social Media Management</li>
              <li>Data Analysis & Campaign Optimization</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Experience Summary</h2>
          <p className="text-gray-700">
            Over 6 years of experience leading successful marketing campaigns for startups and established brands. Proven ability to increase brand visibility and customer engagement through innovative strategies and data analysis.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/Marjy_Ferencz_Resume.pdf"
            download="Marjy_Ferencz_Resume.pdf"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailsC;
