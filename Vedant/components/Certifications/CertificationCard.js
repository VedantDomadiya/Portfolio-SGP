import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";

const tiltOptions = {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const CertificationCard = ({ certification, classes = "" }) => {
  const { name, issuer, year, badge, url } = certification;
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    VanillaTilt.init(card, tiltOptions);
    return () => card.vanillaTilt?.destroy();
  }, []);

  return (
    <a
      href={url}
      ref={cardRef}
      target="_blank"
      rel="noreferrer"
      className={`link group flex h-[23rem] w-[17rem] shrink-0 flex-col items-center justify-between rounded-3xl bg-gray-dark-4 p-6 text-center outline outline-1 outline-gray-dark-1 transition-[outline-color] duration-300 hover:outline-indigo-light ${classes}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Image
        src={badge}
        alt=""
        width={150}
        height={150}
        className="mt-2 h-[9.5rem] w-[9.5rem] object-contain transform-gpu"
        style={{ transform: "translateZ(2rem)" }}
      />
      <div className="transform-gpu" style={{ transform: "translateZ(1rem)" }}>
        <p className="text-xs uppercase tracking-widest text-gray-light-3">
          {issuer} · {year}
        </p>
        <h3 className="mt-2 text-xl font-medium leading-snug text-white">
          {name}
        </h3>
      </div>
      <span className="font-mono text-sm text-indigo-light group-hover:underline">
        Verify ↗
      </span>
    </a>
  );
};

export default CertificationCard;
