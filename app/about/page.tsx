import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-10">
        <h1 className="mb-4 text-4xl font-bold">About Me</h1>

        <p className="text-lg text-gray-700">
          I am a software development student interested in building
          web applications and learning modern web technologies.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold">Technical Skills</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <SkillCard
            name="JavaScript"
            description="Used to create interactive web applications and work with APIs."
          />

          <SkillCard
            name="Node.js"
            description="Used to build server-side applications and REST APIs."
          />

          <SkillCard
            name="MongoDB"
            description="Used to store and manage data for web applications."
          />

          <SkillCard
            name="Next.js"
            description="Learning Next.js to build modern React web applications."
          />
        </div>
      </section>
    </main>
  );
}



