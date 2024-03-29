// dependencies
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// files
import { UserContext } from "../../Context";
const Content = (singleJob) => {
  const [id, setId] = useState(null);
  function singleJobPage(e) {
    setId(e.target.getAttribute("data-name"));
  }
  if (id) {
    return <Navigate to={"/dashboard/" + id} />
  }
  return (
    <main>
      <article>
        <h3>{singleJob?.title}</h3>
        <div className="like_unlike_edit_delete_btns">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>

        </div>

        <button className="btn_edit_profile_1" data-name={singleJob?._id} onClick={singleJobPage}>View Job</button>
        <div id="budget_experience_level">
          <div>
            <h4>$<span>{singleJob?.price}</span>per hour</h4>
            <p>Budget</p>
          </div>
          <div>
            <h4>{singleJob?.experience}</h4>
            <p>Experience level</p>
          </div>
        </div>

        <div id="job_description_main_page">
          <p>{singleJob?.description}</p>
        </div>

        <div>
          {singleJob?.skills.map((item, index) => {
            return (
              <button className="skills_btn" disabled={true} key={index}>{item}</button>
            )
          })}
        </div>
        <div className="border"></div>

      </article>
    </main>
  )
}

const HomePage = () => {
  const { allJobs, setRefreshAllJobs } = useContext(UserContext);
  useEffect(() => {
    setRefreshAllJobs(true);
  }, [])
  return (
    <main id="home_page_content_main">
      <header>
        <h2>Jobs you might like</h2>
        <nav>
          <button className="btn_edit_profile_1">Best matches</button>
          <button className="btn_edit_profile_1">Most recent</button>
          <button className="btn_edit_profile_1">Saved jobs</button>
        </nav>
        <p>Browse jobs that match your experience to a client's hiring preferences</p>
      </header>
      {allJobs?.map((singleJob, index) => {
        return (
          <Content {...singleJob} key = {index} />
        )
      })}

    </main>
  )
}
export default HomePage;
