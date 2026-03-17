import { publications } from "../constants";

const Publications = () => {
  return (
    <section id="papers" className="c-space section-spacing-compact">
      <h2 className="text-heading">Publications</h2>
      <div className="mt-10 grid grid-cols-1 gap-6">
        {publications.map((item, index) => (
          <article
            key={index}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-storm to-indigo p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >
            <h3 className="text-xl font-semibold text-neutral-100 md:text-2xl">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-neutral-300 md:text-base">
              {item.authors}
            </p>
            <p className="mt-2 text-sm text-neutral-400 md:text-base">
              {item.venue}
            </p>
            <div className="mt-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-200">
              DOI: {item.doi}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Publications;
