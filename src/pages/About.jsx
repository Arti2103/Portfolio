import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import CTA from "../Components/CTA";
import { experiences, skills } from "../Components/constants";
import celebalGif from '../assets/images/celebal.gif';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Arti
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          "Bringing Ideas to Life, Pixel by Pixel, Code by Code."
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Collaborated on Full Stack Development projects, gaining expertise in HTML, CSS, JavaScript, MongoDB, Express.js, and Node.js. Contributed to end-to-end website and application development, ensuring optimal functionality and user experience.
            Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}

            {/* New Experience Detail */}
            <VerticalTimelineElement
              date="Month Year - Month Year"
              iconStyle={{ background: "white" }}  // Replace with actual color or remove
              icon={
                <div className='flex justify-center items-center w-full h-full rounded-full overflow-hidden'>
                  <img
                    src={celebalGif}
                    alt="Celebal Technologies"
                    className='w-full h-full object-cover'
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: "#A3CEDC",  // Replace with actual color or remove
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className='text-black text-xl font-poppins font-semibold'>
                  SQL Developer
                </h3>
                <p
                  className='text-black-500 font-medium text-base'
                  style={{ margin: 0 }}
                >
                  Celebal Technologies
                </p>
              </div>

              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black-500/50 font-normal pl-1 text-sm'>
                  Developed, tested, and maintained SQL databases and applications.
                  Assisted in database design and implementation, ensuring data integrity and optimization.
                  Wrote complex SQL queries and stored procedures to support application development.
                  Collaborated with cross-functional teams to integrate database solutions with front-end applications.
                </li>
                <li className='text-black-500/50 font-normal pl-1 text-sm'>
                  Another point about the new role.
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;