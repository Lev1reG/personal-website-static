import { motion } from "framer-motion";

const Education = ({ experiences }: { experiences: ExperienceProps[] }) => {
  return (
    <motion.section
      id="education"
      className="flex flex-col items-center justify-center space-y-5 lg:space-y-8 py-8 lg:py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center dark:text-neutral-100">
        Education
      </h1>
      <motion.div
        className="w-full space-y-4"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Experience
              university={exp.university}
              degree={exp.degree}
              date={exp.date}
              href={exp.href}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

interface ExperienceProps {
  university: string;
  degree: string;
  date: string;
  href?: string;
}

const Experience = ({ university, degree, date, href }: ExperienceProps) => {
  return (
    <article
      className="flex flex-col justify-center items-center lg:items-start space-y-2"
      itemScope
      itemType="http://schema.org/EducationalOrganization"
    >
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center space-y-2 lg:space-y-0">
        <h2 className="text-lg lg:text-2xl font-bold text-center text-neutral-900 dark:text-neutral-100">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-100 hover:underline"
              itemProp="educationCredentialAwarded"
              aria-label={`Visit ${university} website`}
            >
              {university}
            </a>
          ) : (
            <span itemProp="educationalCredentialAwarded">{university}</span>
          )}
        </h2>
        <time
          className="text-xs lg:text-sm font-medium dark:text-neutral-400 text-neutral-600 text-center"
          itemProp="dateCreated"
        >
          {date}
        </time>
      </div>
      <p
        className="text-sm lg:text-base font-medium dark:text-neutral-300 text-neutral-700 text-center"
        itemProp="competencyRequired"
      >
        {degree}
      </p>
    </article>
  );
};

export default Education;
