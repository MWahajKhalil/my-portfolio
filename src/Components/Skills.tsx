export default function Skills() {
  const skills = {
    Web: ["Next.js","React","Tailwind","Node","Express","PostgreSQL"],
    AI_ML: ["Python","Pandas","scikit-learn","PyTorch","HuggingFace"],
    Tools: ["Git","Docker","Vercel","AWS Basics"],
  };
  return (
    <section className="max-w-6xl mx-auto px-6 py-16" id="skills">
      <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([k, v]) => (
          <div key={k} className="rounded-2xl border p-5">
            <h3 className="font-semibold">{k.replace("_"," & ")}</h3>
            <ul className="mt-2 space-y-1">{v.map(s => <li key={s} className="opacity-80">{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
