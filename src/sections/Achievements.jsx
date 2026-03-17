import { achievements } from "../constants";

const Achievements = () => {
  return (
    <section id="awards" className="c-space section-spacing-compact">
      <h2 className="text-heading">Achievements</h2>
      <div className="mt-10 grid grid-cols-1 gap-4">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f122d] to-[#0b0f24] p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-neutral-100 md:text-lg">
                {item.title}
              </h3>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-300">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
