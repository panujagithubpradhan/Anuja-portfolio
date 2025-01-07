import React from 'react'
const education = [
    {
      degree: "Bachler Of Technology(B.Tech)",
      institution: "NM Institute Of Engineering And Technology , Bhubaneswar",
      year: "2020 - 2024",
      description: "Graduated with a strong foundation in critical thinking and problem-solving.",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary (11th-12th) ",
      institution: "Ganesh Institute Of Engineering And Technology  , Bhubaneswar",
      year: "2018 - 2020",
      description: "A +2 College provides higher secondary education (grades 11 and 12) and bridges school and university. ",
      icon: "🎓",
    },
    {
      degree: "Secondary (10th)",
      institution: "L.B High School , Hatina",
      year: "2018",
      description: "A high school is an educational institution for students typically aged 14 to 18, covering grades 9 to 12 in many countries.",
      icon: "🎓",
    },
  ];

  const experience = [
    {
      role: "MERN Stack Developer (Intern)",
      company: "Company Name",
      year: "2023",
      description: "Developed and optimized MERN stack applications, enhancing user experience.",
      icon: "💻",
    },
  ];

function Education() {
  return (
    <section id='education' className='bg-gradient-to-r bg-black py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Experience</h2>
        <div className='grid md:grid-cols-2 gap-12'>
            {/* Education section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className='flex items-start bg-black p-6 rounded-xl hover:transition-transform transform hover:-translate-y-2 mb-6 shadow-[0px_0px_3px_2px_rgba(0,0,0,0.3)] shadow-blue-500'>
                        <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                            <p className='text-gray-300'>{edu.institution}</p>
                            <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                            <p className='text-gray-300 mt-2'>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Experience Section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experience</h3>
                {experience.map((exp, index) => (
                    <div key={index} className='flex items-start bg-black p-6 rounded-xl hover:transition-transform transform hover:-translate-y-2 mb-6 shadow-[0px_0px_3px_2px_rgba(0,0,0,0.3)] shadow-green-500'>
                        <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                            <p className='text-gray-300'>{exp.company}</p>
                            <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                            <p className='text-gray-300 mt-2'>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Education