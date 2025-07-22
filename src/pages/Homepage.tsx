import { Link } from "react-router"


const Homepage = () => {
  
  return (
    <div>
       <div className='text-2xl font-bold text-blue-500 text-center'>
       This is the homepage
      <h2 className="animate-fade-in-out">Our Employees Details</h2>
    </div>

    <label className="flex cursor-pointer gap-2 float-end">
  
   {/* Light Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>

      {/* Toggle Button */}
      <input
        type="checkbox"
        className="toggle theme-controller"
        value="dark"
      />

      {/* Dark Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
</label>

{/* table */}
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>No
            {/* <input type="checkbox" className="checkbox" /> */}
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Details</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            1
            {/* <input type="checkbox" className="checkbox" /> */}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="my pic.jpg"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Md Julfikar</div>
              <div className="text-sm opacity-50">Bangladesh</div>
            </div>
          </div>
        </td>
        <td>
          Student
          <br />
          <span className="badge badge-ghost badge-sm">Fontend Developer</span>
        </td>
        <td>Black</td>
        <th>
          <button className="btn btn-link"><Link to="/details">details</Link></button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            2
            {/* <input type="checkbox" className="checkbox" /> */}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="man.jpg"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br />
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-link"><Link to="/details1">details</Link></button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            3
            {/* <input type="checkbox" className="checkbox" /> */}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="woman.jpg"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br />
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button className="btn btn-link"><Link to="/details2">details</Link></button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            4
            {/* <input type="checkbox" className="checkbox" /> */}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="woman1.jpg"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br />
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-link"><Link to="/details3">details</Link></button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
  </table>
</div>
    </div>
   
  )
}

export default Homepage
