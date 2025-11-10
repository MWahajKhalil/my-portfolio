import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-600 mt-1">{p.description}</p>

            <div className="mt-2 flex flex-wrap gap-2">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-200 px-2 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
