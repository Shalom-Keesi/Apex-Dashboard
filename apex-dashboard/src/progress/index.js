// import "./index.css";
// import { CiViewList } from "react-icons/ci";
// import { IoPerson } from "react-icons/io5";
// import { GiTwirlCenter } from "react-icons/gi";
// import { GiHourglass } from "react-icons/gi";
// import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const data = [
//   { name: 'Braille', course1: 30 },
//   { name: 'TextToSpeech', course2: 80 },
//   { name: 'Screen Reader', course3: 60 },
// ];

// const Progress = () => {
//   const [selectedTerm] = useState('course1');

//   // Define colors for each course
//   const courseColors = {
//     course1: '#0CFE16', // Green for Braille
//     course2: '#1976D2', // Blue for Text-to-speech
//     course3: '#FFC107', // Yellow for Screen Reader
//   };

//   const renderCustomBarLabel = ({ x, y, width, height, value, index }) => {
//     const courseLabels = ['Braille', 'Text-to-speech', 'Screen Reader'];

//     return (
//       <g>
//         {courseLabels.map((label, i) => (
//           <text
//             key={i}
//             x={x + width / 2} // Center the text horizontally
//             y={y + height / 2 + (i - 1) * 20} // Position each label vertically
//             fill={courseColors[`course${i + 1}`]} // Set the color based on the course index
//             textAnchor="middle" // Center the text
//             dominantBaseline="middle" // Align text vertically
//             style={{ fontSize: '16px', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }} // Rotate text
//           >
//             {label}
//           </text>
//         ))}
//       </g>
//     );
//   };

//   return (
//     <div className='apex-dashboard'>
//       <div className='sidebar'>
//         <div className='Logo'>
//           <img src='/course-images/logo.png' alt='' className='logo'></img>
//         </div>
//         <hr />
//         <div className='details'>
//           <p className='icon'><CiViewList size='5rem' color='white' /></p>
//           <p className='overview-sidebar'>Overview</p>
//         </div>
//         <hr />

//         <div className='details'>
//           <p className='icon'><IoPerson size='5rem' color='white' /></p>
//           <p className='sidebar-texts'>Registered Teachers</p>
//         </div>
//         <hr />

//         <div className='details'>
//           <p className='icon'><GiTwirlCenter size='5rem' color='white' /></p>
//           <p className='courses'>Courses</p>
//         </div>
//         <hr />

//         <div className='details'>
//           <p className='icon'><GiHourglass size='5rem' color='white' /></p>
//           <p className='sidebar-texts'>Teachers' Progress</p>
//         </div>
//       </div>

//       <div id="course-progress" style={{ flex: 1, padding: '10px', marginLeft: '200px' }}>
//         <h1>Courses</h1>

//         <h2 style={{ marginBottom: '50px', color: 'white', fontSize: '20px' }}>Courses Performance</h2>
//         <BarChart width={1000} height={600} data={data} style={{ borderRadius: '20px', padding: '15px' }}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="course1" fill={courseColors.course1} label={renderCustomBarLabel} />
//           <Bar dataKey="course2" fill={courseColors.course2} label={renderCustomBarLabel} />
//           <Bar dataKey="course3" fill={courseColors.course3} label={renderCustomBarLabel} />
//         </BarChart>
//       </div>
//     </div>
//   );
// };

// export default Progress;

import "./index.css";
import { CiViewList } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { GiTwirlCenter } from "react-icons/gi";
import { GiHourglass } from "react-icons/gi";
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Braille', braille: 30 },
  { name: 'TextToSpeech', textToSpeech: 80 },
  { name: 'Screen Reader', screenReader: 60 },
];

const Progress = () => {
  const [selectedTerm] = useState('braille');

  // Define colors for each course
  const courseColors = {
    braille: '#0CFE16', // Green for Braille
    textToSpeech: '#1976D2', // Blue for Text-to-speech
    screenReader: '#FFC107', // Yellow for Screen Reader
  };

  return (
    <div className='apex-dashboard'>
      <div className='sidebar'>
        <div className='Logo'>
          <img src='/course-images/logo.png' alt='' className='logo'></img>
        </div>
        <hr />
        <div className='details'>
          <p className='icon'><CiViewList size='5rem' color='white' /></p>
          <p className='overview-sidebar'>Overview</p>
        </div>
        <hr />

        <div className='details'>
          <p className='icon'><IoPerson size='5rem' color='white' /></p>
          <p className='sidebar-texts'>Registered Teachers</p>
        </div>
        <hr />

        <div className='details'>
          <p className='icon'><GiTwirlCenter size='5rem' color='white' /></p>
          <p className='courses'>Courses</p>
        </div>
        <hr />

        <div className='details'>
          <p className='icon'><GiHourglass size='5rem' color='white' /></p>
          <p className='sidebar-texts'>Teachers' Progress</p>
        </div>
      </div>

      <div id="course-progress" style={{ flex: 1, padding: '10px', marginLeft: '200px' }}>
        <h1>Courses</h1>

        <h2 style={{ marginBottom: '10px', color: 'white', fontSize: '20px' }}>Courses Performance</h2>
        
        <BarChart width={1000} height={600} data={data} style={{ borderRadius: '20px', padding: '15px' }}>
          <XAxis 
            dataKey="name" 
            label={{ value: "Courses", position: "insideBottom", offset: -10, fill: 'black', style: { fontSize: '20px' } }} 
            tick={{ fill: 'black' }}
          />
          <YAxis 
            label={{ value: "Progress in Percentage", angle: -90, position: "insideLeft", fill: 'black', style: { fontSize: '20px' }, dy: -10 }} 
            tick={{ fill: 'black' }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="braille" fill={courseColors.braille} />
          <Bar dataKey="textToSpeech" fill={courseColors.textToSpeech} />
          <Bar dataKey="screenReader" fill={courseColors.screenReader} />
        </BarChart>
        
        <h3 style={{ marginTop: '20px', color: 'white', fontSize: '18px' }}>Courses</h3>
      </div>
    </div>
  );
};

export default Progress;
