// Desc: This is the OurTech component. It is used to display the editing software we use.

import premiere from '../assets/premiere.png';

const software = [
  {
    name: 'AI image generation tools',
    description: 'AI-powered tools for generating images, videos, using chatGPT DALL-E , MidJourney and more. ',
    icon: <img className='w-16 h-16' src='https://cdn-icons-png.flaticon.com/512/5278/5278402.png' alt="adobe photoshop icons"></img>,
  },
  {
    name: 'Adobe Premiere',
    description: 'Industry-leading video editing software for film, TV, and the web.',
    icon: <img className='w-16 h-16' src={premiere} alt="Premiere icons"></img>,
  },
  {
    name: 'CapCut',
    description: 'Easy-to-use video editing software for creating stunning videos.',
    icon: <img className='w-16 h-16' src="https://static.vecteezy.com/system/resources/previews/013/948/546/original/capcut-logo-on-transparent-white-background-free-vector.jpg" alt="CapCut icons"></img>,
  },
];

const OurTech = () => {
  return (
    <div className="py-12 w-fit mx-auto rounded-lg bg-white/30 backdrop-filter  backdrop-blur-lg shadow-md border-gray-100 ">
      <div className="max-w-7xl px-4 sm:px-6 ">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-secondary font-semibold tracking-wide uppercase">Our Technology</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold font-heading tracking-tight text-gray-900 sm:text-4xl">
            Editing Software We Use
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {software.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-500 hover:scale-105"
            >
              <div className="flex justify-center items-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold font-secondary text-gray-900">{item.name}</h3>
              <p className="mt-2 font-body text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTech;