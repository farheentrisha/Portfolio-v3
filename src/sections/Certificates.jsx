import { certificates } from "../constants";

const Certificates = () => {
  return (
    <section id="certificates" className="c-space section-spacing-compact">
      <h2 className="text-heading">Certificates</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {certificates.map((group, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f122d] to-[#0b0f24] p-6"
          >
            <h3 className="text-lg font-semibold text-neutral-100">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
