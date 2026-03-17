import { Timeline } from "../components/Timeline";
import { education } from "../constants";

const Education = () => {
  return (
    <section id="education" className="w-full">
      <Timeline
        data={education}
        title="My Education"
        containerClassName="c-space section-spacing-compact"
      />
    </section>
  );
};

export default Education;
