import { ArrowUpRight } from "lucide-react"; // Optional: Install lucide-react for icons
import { publications } from "../constants";

const Publications = () => {
  return (
    <section id="papers" className="c-space section-spacing-compact">
      <h2 className="text-heading">Publications</h2>
      
      <div className="mt-12 grid grid-cols-1 gap-8">
        {publications.map((item, index) => (
          <article
            key={index}
            className="group relative rounded-3xl border border-white/10 bg-[#0E0E10] p-8 transition-all duration-500 hover:border-royal/50 hover:shadow-[0_0_30px_rgba(65,105,225,0.15)]"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-royal to-indigo opacity-0 blur transition duration-500 group-hover:opacity-20" />

            <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                {/* Conference Tag */}
                <span className="inline-block px-3 py-1 mb-4 text-[10px] uppercase tracking-widest font-bold text-royal bg-royal/10 border border-royal/20 rounded-full">
                  {item.venue.split(',')[0]}
                </span>

                <h3 className="text-2xl font-bold text-white leading-tight md:text-3xl group-hover:text-royal transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-medium text-neutral-400 italic">
                  {item.authors}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <div className="text-xs font-mono text-neutral-500 border-l border-white/20 pl-4">
                    DOI: {item.doi}
                  </div>
                  <div className="text-xs font-mono text-neutral-500 border-l border-white/20 pl-4">
                    {item.venue.split(',').slice(1).join(',')}
                  </div>
                </div>
              </div>

              {/* Innovative Action Button */}
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm transition-all duration-300 hover:bg-royal hover:text-white active:scale-95 self-start"
              >
                Read Paper
                <ArrowUpRight size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Publications;