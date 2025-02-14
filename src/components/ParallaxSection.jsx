// // src/components/effects/ParallaxSection.jsx
// import { useEffect, useState } from 'react';
// import '../styles/ParallaxSection.css';

// const ParallaxSection = ({ children, speed = 0.5 }) => {
//   const [offset, setOffset] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setOffset(window.pageYOffset);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       className="parallax-section"
//       style={{
//         transform: `translateY(${offset * speed}px)`,
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default ParallaxSection;