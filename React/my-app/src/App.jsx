import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// function App() {
//   const getStuff = () => {}

//   return (
//     <div>
//       <div className="ex-space">
//         <h4 className='ex-title'>Spot-check 1</h4 >
//         <div className="exercise" id="spotcheck-1">
//           {/* your code here */}
//         </div>
//       </div>
//     </div>
//   )
// }

// function App() {
//   const getStuff = () => "Wild function'ed text";

//   return (
//     <div>
//       <div className="ex-space">
//         <h4 className="ex-title">Spot-check 1</h4>
//         <div className="exercise" id="spotcheck-1">
//           <h1>Stuff: {getStuff()}</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const personContainer = (name, email) => {
//     let greatName = `The Great ${name}`;

//     return (
//       <div className="person">
//         <h4>{greatName}</h4>
//         <p>
//           Contact at: <a href={email}>email</a>
//         </p>
//       </div>
//     );
//   };

//   return personContainer("Louisa", "l@elo.com");
// }

// function App() {
//   const getMorningGreeting = () => <div>Good Morning</div>;
//   const getEveningGreeting = () => <div>Good Evening</div>;

//   let isMorning = new Date().getHours() < 12;

//   return (
//     <div className="ex-space">
//       <h4 className="ex-title">Spot-check 2</h4>
//       <div className="exercise" id="spotcheck-2">
//         {isMorning ? getMorningGreeting() : getEveningGreeting()}
//       </div>
//     </div>
//   );
// }
function App() {
  const getMorningGreeting = () => <div>Good Morning</div>;
  const getEveningGreeting = () => <div>Good Evening</div>;

  return [getMorningGreeting(), getEveningGreeting(), <p>some text</p>];
}

export default App;
