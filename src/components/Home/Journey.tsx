import { motion } from "motion/react";

interface JourneyProps {
  journeyData: Journey[];
}

const Journey = ({ journeyData }: JourneyProps) => {
  return (
    <motion.section
      id="journey"
      className="flex flex-col items-center justify-center space-y-5 lg:space-y-8 py-8 lg:py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col items-center justify-center space-y-2 lg:space-y-3">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center dark:text-neutral-100 text-neutral-900">
          Journey
        </h1>
        <p className="text-base lg:text-lg font-medium text-center dark:text-neutral-400 text-neutral-600">
          This section is a curated timeline of milestones, updates, and
          personal highlights throughout my journey.
        </p>
      </div>

      <div className="w-full">
        {journeyData.map((journey, index) => (
          <MyJourney
            key={index}
            title={journey.title}
            description={journey.description}
            date={journey.date}
            isLast={index === journeyData.length - 1}
          />
        ))}
      </div>
    </motion.section>
  );
};

interface Journey {
  title: string;
  description: string;
  date: string;
}

interface MyJourneyProps extends Journey {
  isLast: boolean;
}

const MyJourney = ({ title, description, date, isLast }: MyJourneyProps) => {
  return (
    <motion.article
      className="flex flex-row space-x-2 lg:space-x-5"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-brand-500 shadow-sm z-10 flex-shrink-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        />

        {!isLast && (
          <motion.div
            className="w-0.5 h-full bg-neutral-900 dark:bg-neutral-100"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
          />
        )}
      </div>

      <motion.div
        className="w-full flex flex-col space-y-2 pb-4 lg:pb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <time className="text-sm lg:text-lg font-medium text-brand-600 dark:text-brand-400">
          {date}
        </time>
        <h2 className="text-lg lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>
        <p className="text-xs dark:text-neutral-400 text-neutral-600">
          {description}
        </p>
      </motion.div>
    </motion.article>
  );
};

export default Journey;
