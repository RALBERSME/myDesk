import React, { useState, useEffect } from "react";
import "./Job.css";
import axios from "axios";

const Job = ({ onCloseJob }) => {
  const [country, setCountry] = useState("usa");
  const [industry, setIndustry] = useState("marketing");
  const [jobTitle, setJobTitle] = useState("Chancellor of Germany");
  const [companyUrl, setCompanyUrl] = useState(
    "https://www.bundeskanzler.de/bk-de"
  );
  const [publishedDate, setPublishedDate] = useState("today");
  const [jobDescription, setJobDescription] = useState("");

  const onCountryChange = (e) => {
    let countryLower = e.target.value.toLowerCase();
    setCountry(countryLower);
  };
  const onIndustryChange = (e) => {
    let industryLower = e.target.value.toLowerCase();
    setIndustry(industryLower);
  };
  const fetchJobs = async () => {
    const url = `https://jobicy.com/api/v2/remote-jobs?count=20&geo=${country}&industry=${industry}&tag=seo`;
    const response = await axios.get(url);
    console.log("response", response.data);

    const jobTitle = response.data.jobs[0].jobTitle;
    const publishedDate = response.data.jobs[0].pubDate;
    const jobDescription = response.data.jobs[0].jobDescription;

    const jobTitleUpper = jobTitle.toUpperCase();
    const companyUrl = response.data.jobs[0].companyLogo;

    setJobTitle(jobTitleUpper);
    setCompanyUrl(companyUrl);
    setPublishedDate(publishedDate);
    setJobDescription(jobDescription);
    document.getElementById("outputJobDescription").innerHTML = jobDescription;
  };

  return (
    <>
      <div className="jobModule">
        <div className="jobContainer">
          <div className="options">
            <div className="country">
              <h2>Please select country:</h2>  <br />
              <br />
              <div className="item">
                <input
                  type="radio"
                  id="country1"
                  name="country"
                  value="usa"
                  // checked={country === usa}
                  onChange={onCountryChange}
                />
                  <label htmlForfor="usa">USA</label>
              </div>
              <div className="item">
                <input
                  type="radio"
                  id="country2"
                  name="country"
                  value="uk"
                  // checked={country === uk}
                  onChange={onCountryChange}
                />
                  <label htmlForfor="uk">UK</label>
              </div>
              <div className="item">
                <input
                  type="radio"
                  id="country3"
                  name="country"
                  value="europe"
                  // checked={country === europe}
                  onChange={onCountryChange}
                />
                  <label htmlForfor="europe">Europe</label>
              </div>
              <div className="item">
                <input
                  type="radio"
                  id="country4"
                  name="country"
                  value="emea"
                  // checked={country === emea}
                  onChange={onCountryChange}
                />
                  <label htmlForfor="emea">EMEA</label>
              </div>
            </div>
            <div className="industry">
              <h2>Please select industry:</h2>
              <br />
              <br />
              <div className="item">
                <input
                  type="radio"
                  id="industry1"
                  name="industry"
                  value="marketing"
                  // checked={industry === marketing}
                  onChange={onIndustryChange}
                />
                  <label htmlForfor="marketing">Marketing</label>
              </div>{" "}
              <div className="item">
                <input
                  type="radio"
                  id="industry2"
                  name="industry"
                  value="management"
                  // checked={industry === management}
                  onChange={onIndustryChange}
                />
                  <label htmlForfor="management">Management</label>
              </div>{" "}
              <div className="item">
                <input
                  type="radio"
                  id="industry3"
                  name="industry"
                  value="seller"
                  // checked={industry === seller}
                  onChange={onIndustryChange}
                />
                  <label htmlForfor="seller">Selling</label>
              </div>
            </div>
            <button type="button" id="searchJobBtn" onClick={fetchJobs}>
              click here to search job{" "}
            </button>
          </div>
          <div className="showJobs">
            <h1>
              <span className="jobDesign">Job Title: </span>
              {jobTitle}
            </h1>
            <br />
            <h2>
              <span className="jobDesign">
                Job description: <br />
              </span>{" "}
              You try to avoid making decisions with arrogance and bureaucratic
              jargon. General knowledge and education are not required. So that
              you can at least keep up with the residence of kings and tsars, we
              are currently rebuilding the Federal Chancellery for 777 million
              euros. The Federal Chancellor is the third highest state office in
              the Federal Republic of Germany. Of course, you can also apply for
              the highest position (Federal President).
            </h2>
            <br />
            <p id="outputJobDescription"></p>
            <br />
            <p>
              <span className="jobDesign">Company Url:</span> {companyUrl}
            </p>
            <br />
            <p>
              <span className="jobDesign">
                This job offer was published at:
              </span>{" "}
              {publishedDate}
            </p>
          </div>
        </div>
        <button id="leaveJobPage" onClick={onCloseJob}>
          x
        </button>
      </div>
    </>
  );
};

export default Job;
