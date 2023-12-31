'use client'
import React, { useState, useEffect } from 'react';

interface JobsProps {
  searchQuery: string;
}

const Jobs: React.FC<JobsProps> = ({ searchQuery }) => {
  const jobsData = [
    {
      title: 'UI/UX Designer',
      location: 'New York, NY',
      updatedTime: '2023-10-10T12:34:56Z',
      description: 'UI UX designers create the user interface for an app, website, or other interactive media. Their work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using the storyboards.',
      applyLink: 'https://cutshort.io/jobs/ux-designer-jobs',
    },
    {
      title: 'Frontend Developer',
      location: 'San Francisco, CA',
      updatedTime: '2023-10-16T12:34:56Z',
      description: 'A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages. What makes a good Front End Web Developer?',
      applyLink: 'https://cutshort.io/jobs/frontend-developer-jobs',
    },
    {
      title: 'Backend Developer',
      location: 'Seattle, WA',
      updatedTime: '2023-09-10T12:34:56Z',
      description: 'Backend developer responsibilities include creating, maintaining, testing, and debugging the entire back end of an application or system. This includes the core application logic, databases, data and application integration, API, and other processes taking place behind the scenes.',
      applyLink: 'https://cutshort.io/jobs/backend-developer-jobs',
    },
    {
      title: 'DevOps Engineer',
      location: 'Austin, TX',
      updatedTime: '2023-10-18T12:34:56Z',
      description: 'DevOps (development operations) is a series of practices and processes that help organisations speed up and automate aspects of developing, testing, releasing, and updating software. DevOps engineers are responsible for facilitating this by combining technical expertise with project management and communication skills.',
      applyLink: 'https://cutshort.io/jobs/devops-jobs',
    },
  ];

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-3">
      <div className="flex flex-col md:flex-row py-4 space-y-4 md:space-y-0 md:space-x-4">
        {filteredJobs.map((job, index) => (
          <div key={index} className="bg-[#121212] w-full md:w-1/4 rounded-lg p-4 text-white">
            <div>
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{job.location}</p>
              <p className="mt-6 text-sm lg:text-justify md:text-center text-justify" style={{ height: '12rem', overflow: 'hidden' }}>
                {job.description}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center mt-auto">
            <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                <button className="py-4 px-10 rounded-lg border-none bg-[#242121] hover:bg-[#282727] transition-transform transform hover:scale-105 active:scale-95">
                  Apply Now
                </button>
              </a>
              <div className="text-gray-500 text-sm mt-2">
                Updated {formatTime(job.updatedTime, currentTime)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const formatTime = (updatedTime: string, currentTime: Date) => {
  const jobUpdateTime = new Date(updatedTime);
  const timeDiff = Math.floor((currentTime.getTime() - jobUpdateTime.getTime()) / 1000);
  if (timeDiff < 60) {
    return `${timeDiff} seconds ago`;
  } else if (timeDiff < 3600) {
    return `${Math.floor(timeDiff / 60)} minutes ago`;
  } else if (timeDiff < 86400) {
    return `${Math.floor(timeDiff / 3600)} hours ago`;
  } else {
    return `${Math.floor(timeDiff / 86400)} days ago`;
  }
};

export default Jobs;
