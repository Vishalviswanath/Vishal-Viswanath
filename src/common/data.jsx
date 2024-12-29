export const navPages = [
  { path: '/', label: '' },
  { path: 'aboutme', label: 'About' },
  { path: 'projects', label: 'Projects' },
  { path: 'contactme', label: 'Contact' },
  // { path: 'techbee', label: 'TechBee' },
];

export const pages = [
  {
    label: '',
    path: '/',
    description: [
      <>
        <img src='' alt='' />
      </>,
      'I am a Full-Stack developer',
      "Here you'll find general info.",
    ],
  },
  {
    label: 'about',
    path: 'aboutme',
    description: [
      <>
        <p>
          I am a passionate and dedicated Full Stack Developer with a strong
          drive to explore new technologies and stay updated with the latest
          advancements in the field. I thrive on solving complex challenges and
          continuously enhancing my skill set to deliver innovative and
          efficient solutions.
        </p>
        <p>
          With expertise in modern web development, I specialize in building
          robust and scalable applications using the latest tools and
          frameworks. My technical skills include: ReactJS, Redux, RestAPIs,
          GitHub, Express.js, MongoDB, Tailwind CSS, Material UI I am committed
          to creating seamless user experiences and efficient back-end
          solutions, making me a versatile developer ready to tackle any
          project. Let’s build something incredible together!.
        </p>
      </>,
    ],
  },
  {
    label: 'projects',
    path: 'projects',
    description: ['My Projects', "Here's a list of my projects."],
  },
  {
    label: 'contact',
    path: 'contactme',
    description: [
      'Contact Me',
      'You can contact me here.',
      <>
        <div>
          <label className=''>Email</label>
          <input placeholder='Email' className='' />
          <label className=''>Subject</label>
          <input placeholder='subject' className='' />
          <label className=''>Discription</label>
          <textarea placeholder='Email' className='' />
        </div>
      </>,
      <>
        <div className='google-maps'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30437.65703178784!2d78.35557808624752!3d17.521488561694785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8dff28839e11%3A0x30e1ac4d7d83c8af!2sNizampet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1718812993540!5m2!1sen!2sin'
            style={{
              border: 0,
              maxWidth: '100%',
              // width: '320px',
              // height: '380px',
              borderRadius: '20px',
            }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy=''
          ></iframe>
        </div>
      </>,
    ],
  },
  {
    label: 'techbee',
    path: 'techbee',
    description: ['Contact Me', 'You can contact me here.'],
  },
];
