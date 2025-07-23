import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";

interface WorkExperienceProps {
  experiences: ExperienceProps[];
}

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <motion.section
      id="workexperience"
      className="flex flex-col items-center justify-center space-y-5 lg:space-y-8 py-8 lg:py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center dark:text-neutral-100">
        Work Experience
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
              company={exp.company}
              position={exp.position}
              date={exp.date}
              description={exp.description}
              href={exp.href}
              type={exp.type}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

interface ExperienceProps {
  company: string;
  position: string;
  date: string;
  description: string;
  href?: string;
  type: string;
}

const Experience = ({
  company,
  position,
  date,
  description,
  href,
  type,
}: ExperienceProps) => {
  return (
    <article
      className="w-full flex flex-col justify-center items-center lg:items-start space-y-2"
      itemScope
      itemType="https://schema.org/WorkExperience"
    >
      <div className="w-full flex lg:flex-row flex-col justify-between items-center space-y-2 lg:space-y-0">
        <div className="flex lg:flex-row flex-col items-center space-y-2 lg:space-y-0 lg:space-x-4">
          <h2
            className="text-lg lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100"
            itemProp="worksFor"
            itemScope
            itemType="https://schema.org/Organization"
          >
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:underline"
                itemProp="name"
                aria-label={`Visit ${company} website`}
              >
                {company}
                <ArrowSquareOutIcon weight="bold" className="flex-shrink-0" />
              </a>
            ) : (
              <span itemProp="name">{company}</span>
            )}
          </h2>
          <Badge variant="default" itemProp="employmentType">
            {type}
          </Badge>
        </div>
        <time
          className="text-xs lg:text-sm font-medium text-center dark:text-neutral-300 text-neutral-700"
          itemProp="datePublished"
        >
          {date}
        </time>
      </div>
      <h3
        className="text-sm lg:text-base font-medium text-center dark:text-neutral-300 text-neutral-700"
        itemProp="jobTitle"
      >
        {position}
      </h3>
      <p
        className="text-xs lg:text-sm text-center lg:text-left dark:text-neutral-400 text-neutral-600"
        itemProp="description"
      >
        {description}
      </p>
    </article>
  );
};

export default WorkExperience;
