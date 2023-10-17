import React from 'react';

const Jobs: React.FC = () => {
  const jobsData = [
    {
      title: 'UI/UX Designer',
      location: 'New York, NY',
      updatedTime: 'Updated 2 hours ago',
      description: 'UI UX designers create the user interface for an app, website, or other interactive media. Their work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards.',
      applyLink: '#apply1',
    },
    {
      title: 'Frontend Developer',
      location: 'San Francisco, CA',
      updatedTime: 'Updated 3 hours ago',
      description: 'A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages. What makes a good Front End Web Developer?',
      applyLink: '#apply2',
    },
    {
      title: 'Backend Developer',
      location: 'Seattle, WA',
      updatedTime: 'Updated 4 hours ago',
      description: 'Backend developer responsibilities include creating, maintaining, testing, and debugging the entire back end of an application or system. This includes the core application logic, databases, data and application integration, API, and other processes taking place behind the scenes.',
      applyLink: '#apply3',
    },
    {
      title: 'DevOps Engineer',
      location: 'Austin, TX',
      updatedTime: 'Updated 5 hours ago',
      description: 'DevOps (development operations) is a series of practices and processes that help organisations speed up and automate aspects of developing, testing, releasing, and updating software. DevOps engineers are responsible for facilitating this by combining technical expertise with project management and communication skills.',
      applyLink: '#apply4',
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-4 space-x-4">
        {jobsData.map((job, index) => (
          <div key={index} className="bg-[#121212] w-1/4 h-96 rounded-lg p-4 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{job.location}</p>
              <p className="my-6 text-sm text-justify">{job.description}</p>
            </div>
            <div className="flex flex-col justify-center mt-auto items-center">
              <button className="py-3 px-10 rounded-lg border-none bg-[#242121] hover:bg-[#282727] transition-transform transform hover:scale-105 active:scale-95">
                <a href={job.applyLink}>Apply Now</a>
              </button>
              <div className="text-gray-500 text-sm mt-2">{job.updatedTime}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
