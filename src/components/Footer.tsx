import SocialMedia from "@/components/SocialMediaButton";

const Footer = () => {
  return (
    <footer className="dark:bg-neutral-900 bg-neutral-100 border-t-2 border-neutral-400">
      <div className="container mx-auto px-4 lg:px-16 py-6 flex flex-col items-center space-y-5">
        <h1 className="text-2xl lg:text-3xl font-bold text-brand-500 text-center">
          Deren Tanaphan
        </h1>
        <p className="text-sm lg:text-lg font-bold dark:text-neutral-100 text-neutral-900 text-center">
          Software Engineer | Blockchain | Cybersecurity | Machine Learning
        </p>
        <SocialMedia />
        <p className="text-xs text-neutral-500 text-center">
          © {new Date().getFullYear()} Deren Tanaphan. Buy me a coffee{" "}
          <a
            href="https://saweria.co/levireg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-700 hover:underline"
          >
            here
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
