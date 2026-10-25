import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, PROJECTS } from "../../constants";
import LottiePlayer from "@/components/LottiePlayer/LottiePlayer";

const ProjectLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="link rounded-full bg-snow/15 px-4 py-1.5 font-mono text-sm text-snow hover:bg-snow/25"
  >
    {children} ↗
  </a>
);

// Flip card: front = number, name, tagline, tech; back = description and links.
// Flips on hover and keyboard focus (desktop) or tap (touch).
const ProjectCard = ({ project, index }) => {
  const { name, tagline, description, tech, github, live } = project;
  const [flipped, setFlipped] = useState(false);

  return (
    <li className="project-card h-[20rem] [transform-style:preserve-3d]">
      <div
        tabIndex={0}
        // Touch screens flip on tap; mouse users flip on hover
        onClick={() =>
          window.matchMedia("(hover: none)").matches && setFlipped((f) => !f)
        }
        onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
        className={`link group relative h-full w-full rounded-2xl outline-none transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] [transform-style:preserve-3d] motion-reduce:transition-none lg:hover:[transform:rotateY(180deg)] [&:focus-visible]:[transform:rotateY(180deg)] [&:has(:focus-visible)]:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-dark-4 p-6 outline outline-1 outline-gray-dark-1 [backface-visibility:hidden]">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-dark/20 blur-3xl" />
          <span className="font-mono text-5xl font-bold text-gray-dark-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-3xl font-medium text-white">{name}</h3>
            <p className="mt-1 text-gradient w-fit font-medium">{tagline}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {tech.map((item) => (
                <li
                  key={item}
                  className="rounded-full px-3 py-1 font-mono text-xs text-gray-light-2 outline outline-1 outline-gray-dark-1"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-xs text-gray-light-4">
              <span className="hidden lg:inline">Hover</span>
              <span className="lg:hidden">Tap</span> to flip ↻
            </p>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-indigo-dark/90 to-purple/80 p-6 text-snow [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <h3 className="text-2xl font-medium">{name}</h3>
            <p className="mt-3 text-base leading-relaxed text-snow/90">
              {description}
            </p>
          </div>
          <div className="flex gap-5" onClick={(e) => e.stopPropagation()}>
            {github && <ProjectLink href={github}>GitHub</ProjectLink>}
            {live && <ProjectLink href={live}>Live</ProjectLink>}
          </div>
        </div>
      </div>
    </li>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);

  // useEffect (not useLayoutEffect) so this trigger is created after the pinned
  // Certifications section above it; otherwise its start/end ignore the pin spacing.
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".projects-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.from(sectionRef.current.querySelectorAll(".project-card"), {
          rotateY: -80,
          opacity: 0,
          y: 40,
          transformOrigin: "left center",
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current.querySelector(".project-grid"),
            start: "top 85%",
            once: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[3].ref}
      className="w-full relative select-none mt-40"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col projects-wrapper">
          <div className="flex items-end justify-between gap-10">
            <div className="flex flex-col">
              <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
                PROJECTS
              </p>
              <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
                Things I&apos;ve Built
              </h1>
              <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
                Infrastructure, observability and the odd AI side project.
              </h2>
            </div>
            <LottiePlayer
              src="/lottie/rocket-deploy.json"
              className="hidden md:block h-56 w-56 shrink-0 xl:mr-[8%] staggered-reveal"
            />
          </div>
          <ul className="project-grid mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 [perspective:1600px]">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </ul>
          <p className="mt-8 text-gray-light-3 staggered-reveal">
            More on{" "}
            <a
              href="https://github.com/VedantDomadiya"
              target="_blank"
              rel="noreferrer"
              className="link text-white underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
