
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import styles from "../../../styles/global.module.scss";
import { Link } from "react-router-dom";
import HeroComponent from ".././../Hero";

// export default function Hero() {
//     return (
//         <section className={styles.hero}>
//             <div className="flex min-h-[55dvh] flex-col justify-center py-12 md:min-h-[60dvh] md:py-16">
//                 <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center">
//                     <span className="mb-6 rounded-full border border-cherry/30 bg-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cherry backdrop-blur-sm">
//                         Cherryville Academy
//                     </span>

//                     <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl md:leading-[1.15]">
//                         <span className="text-cherry">Start</span> where you are.
//                         <span className="text-cherry"> Train</span> for a
//                         <span className="text-cherry"> job you can name.</span>
//                     </h1>

//                     <p className="mx-auto mb-8 mt-6 max-w-2xl text-base font-normal leading-relaxed text-white/80 sm:text-lg">
//                         Cherryville Academy runs courses for individuals at
//                         three levels. You do not need a technical background
//                         to begin — you only need to know what kind of work
//                         interests you.
//                     </p>

//                     <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
//                         <button
//                             type="button"
//                             onClick={() =>
//                                 document.getElementById("course-finder")?.scrollIntoView({
//                                     behavior: "smooth",
//                                     block: "start",
//                                 })
//                             }
//                             className="accent-button mt-0 w-full sm:w-auto"
//                         >
//                             Help me choose
//                             <FontAwesomeIcon icon={faArrowRight} />
//                         </button>

//                         <Link
//                             to="/academy/courses"
//                             className="outline-button mt-0 w-full border-white/50 text-white hover:border-accent sm:w-auto"
//                         >
//                             Browse all courses
//                         </Link>
//                     </div>
//                 </main>
//             </div>
//         </section>
//     );
// }

export default function Hero(){}