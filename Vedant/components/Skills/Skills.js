import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";
import LottiePlayer from "@/components/LottiePlayer/LottiePlayer";

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
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
      id={MENULINKS[1].ref}
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col">
              <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
                SKILLS
              </p>
              <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
                My Skills
              </h1>
              <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
                I build and run cloud infrastructure across AWS, Google Cloud and Azure, with Kubernetes, Terraform, CI/CD and observability doing the heavy lifting.
              </h2>
            </div>
            <LottiePlayer
              src="/lottie/cloud-sync.json"
              className="hidden lg:block h-64 w-48 shrink-0 mr-[12%] staggered-reveal"
            />
          </div>
          <div className="mt-12 grid gap-x-16 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
            {SKILLS.map(({ title, items }) => (
              <div key={title} className="staggered-reveal">
                <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                  {title}
                </h3>
                <ul className="flex flex-wrap gap-x-5 gap-y-4">
                  {items.map(({ icon, name }) => (
                    <li
                      key={icon}
                      className="flex w-16 flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-1"
                    >
                      <Image
                        src={`/skills/${icon}.svg`}
                        alt=""
                        width={44}
                        height={44}
                        className="skill-icon h-11 w-11 object-contain"
                      />
                      <span className="text-center text-xs leading-tight text-gray-light-3">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;