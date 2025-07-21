import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";

interface ProjectsProps {
  projects: ProjectCardProps[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <motion.section
      id="projects"
      className="flex flex-col items-center justify-center space-y-5 lg:space-y-8 py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col items-center justify-center space-y-2 lg:space-y-3">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center dark:text-neutral-100">
          Projects
        </h1>
        <p className="text-base lg:text-lg font-medium text-center dark:text-neutral-400 text-neutral-600">
          Projects where I turn ideas into systems — crafted with care and
          purpose.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
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
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              href={project.href}
              technologies={project.technologies}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  technologies: string[];
}

const ProjectCard = ({
  title,
  description,
  href,
  technologies,
}: ProjectCardProps) => {
  return (
    <article
      className="h-full"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <Card className="h-full">
        <CardHeader>
          <h2 className="text-lg lg:text-xl font-bold text-neutral-900 dark:text-neutral-100">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:underline"
                itemProp="name"
                aria-label={`Visit ${title} project`}
              >
                {title}
                <ArrowSquareOutIcon weight="bold" className="shrink-0"/>
              </a>
            ) : (
              <span itemProp="name">{title}</span>
            )}
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-neutral-500" itemProp="description">
            {description}
          </p>
        </CardContent>
        <CardFooter className="mt-auto">
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs"
                itemProp="techStack"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </article>
  );
};

export default Projects;
