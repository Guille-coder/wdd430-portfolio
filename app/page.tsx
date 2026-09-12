import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Paws & Homes Foundation",
    description:
      "A REST API for managing rescue animals, users, adoptions, and reports for an animal rescue organization.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Swagger",
      "OAuth",
    ],
    link: "https://github.com/Guille-coder/CSE-341",
  },
  {
    title: "SleepOutside",
    description:
      "A team e-commerce web application for browsing and purchasing outdoor products.",
    technologies: ["JavaScript", "HTML", "CSS", "Vite"],
    link: "https://github.com/matias18365/wdd330-team14",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>

        <p className="text-lg text-gray-700">
          I'm a software development student building web applications with
          modern technologies. Here are some of my recent projects.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}