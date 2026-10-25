import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, PROJECTS } from "../../constants";

const ProjectLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="link font-mono text-sm text-indigo-light hover:text-white hover:underline underline-offset-4"
  >
    {children} ↗
  </a>
);

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
          <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PROJECTS.map(({ name, description, tech, github, live }) => (
              <li
                key={name}
                className="staggered-reveal flex flex-col rounded-2xl bg-gray-dark-4 p-6 outline outline-1 outline-gray-dark-1 transition-[transform,outline-color] duration-300 hover:-translate-y-1 hover:outline-indigo-light"
              >
                <h3 className="text-2xl font-medium text-white">{name}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-gray-light-3">
                  {description}
                </p>
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
                <div className="mt-5 flex gap-5">
                  {github && <ProjectLink href={github}>GitHub</ProjectLink>}
                  {live && <ProjectLink href={live}>Live</ProjectLink>}
                </div>
              </li>
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
