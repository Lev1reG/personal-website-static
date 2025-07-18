import { Button } from "@/components/ui/button";
import SocialMedia from "@/components/SocialMediaButton";
import { motion } from "motion/react";
import TypewriterCycle from "@/components/TypeWriterCycle";

interface HeroProps {
  phrases: string[];
  description: string;
}

const Hero = ({ phrases, description }: HeroProps) => {
  return (
    <motion.section
      id="hero"
      className="flex flex-col xl:flex-row items-center justify-center xl:justify-between space-y-5 pt-28 pb-20 lg:pt-36 lg:pb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      itemScope
      itemType="http://schema.org/Person"
    >
      <div className="xl:max-w-xl flex flex-col items-center xl:items-start space-y-5">
        <img
          src="/profile-picture.png"
          alt="Deren Tanaphan - Profile Picture"
          className="w-36 h-36 rounded-full border border-brand-300"
          loading="eager"
          width={144}
          height={144}
          itemProp="image"
        />
        <h1
          className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center xl:text-left dark:text-neutral-100 text-neutral-900"
          itemProp="name"
        >
          <span className="text-brand-500">Hi, I'm Deren</span> - I Build Things
          That <span className="text-brand-500">Work </span> and{" "}
          <span className="text-brand-500">Last.</span>
        </h1>
      </div>
      <div className="xl:max-w-xl flex flex-col items-center xl:items-start space-y-5">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-center xl:text-left dark:text-neutral-100 text-neutral-900 min-h-[2.5rem]">
          <TypewriterCycle
            phrases={phrases}
            typingSpeed={100}
            deletingSpeed={50}
            pauseDuration={3000}
          />
        </h2>
        <p
          className="font-medium text-base lg:text-lg text-center xl:text-left leading-snug dark:text-neutral-400 text-neutral-600"
          itemProp="description"
        >
          {description}
        </p>
        <div className="flex flex-col xl:flex-row items-center space-y-5 xl:space-y-0 xl:space-x-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              variant="defaultCustom"
              size="lg"
              className="font-bold text-lg xl:text-xl"
            >
              <motion.a
                href="https://saweria.co/levireg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(var(--brand-500), 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 4px 15px rgba(var(--brand-500), 0.2)",
                    "0 6px 20px rgba(var(--brand-500), 0.4)",
                    "0 4px 15px rgba(var(--brand-500), 0.2)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: { duration: 0.2 },
                }}
                aria-label="Support Deren Tanaphan by buying a coffee"
              >
                Buy Me a Coffee
              </motion.a>
            </Button>
          </motion.div>
          <SocialMedia />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
