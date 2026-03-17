import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { certifications } from "../constants";

const firstRow = certifications.slice(0, certifications.length / 2);
const secondRow = certifications.slice(certifications.length / 2);

const CertCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-48 w-80 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] hover-animation group"
      )}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${img})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col">
            <figcaption className="text-sm font-bold text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-white/70">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-xs text-white/90 line-clamp-3">
          {body}
        </blockquote>
      </div>
    </figure>
  );
};

export default function Certifications() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <div className="flex justify-between items-end">
        <h2 className="text-heading">Certifications & Achievements</h2>
        <a 
          href="YOUR_DRIVE_OR_FOLDER_LINK" 
          target="_blank" 
          className="text-white/50 hover:text-white text-sm underline mb-2"
        >
          View All Certificates
        </a>
      </div>
      
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((cert, index) => (
            <CertCard key={`row1-${index}`} {...cert} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((cert, index) => (
            <CertCard key={`row2-${index}`} {...cert} />
          ))}
        </Marquee>

        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}