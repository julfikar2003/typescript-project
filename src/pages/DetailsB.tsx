

const DetailsB = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Brice Swyre
        </h1>

        <p className="text-gray-700 text-lg mb-6 text-center">
          Detail-oriented tax accountant with 5 years of experience in corporate finance and compliance. Skilled in accounting software and client communication.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
            <p><span className="font-medium">Name:</span> Brice Swyre</p>
            <p><span className="font-medium">Email:</span> brice.swyre@example.com</p>
            <p><span className="font-medium">Location:</span> Shanghai, China</p>
            <p><span className="font-medium">Languages:</span> English, Chinese</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800">Skills Overview</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Accounting, Auditing, Tax Preparation</li>
              <li>Corporate Finance, Compliance</li>
              <li>QuickBooks, SAP, Excel Advanced</li>
              <li>Client Communication, Problem Solving</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Experience Summary</h2>
          <p className="text-gray-700">
            Over 5 years of professional experience as a tax accountant working with multinational companies. Expertise in tax planning, financial analysis, and compliance with regulations. Proven track record of reducing tax liabilities and streamlining accounting processes.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/Brice_Swyre_Resume.pdf"
            download="Brice_Swyre_Resume.pdf"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailsB;
