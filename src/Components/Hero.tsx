export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-sm uppercase tracking-wider opacity-70">Hi, I’m</p>
      <h1 className="mt-2 text-4xl md:text-6xl font-bold">
        Hassan Tahir Khan — <span className="opacity-80">Web & AI/ML</span> Developer
      </h1>
      <p className="mt-4 max-w-2xl text-lg opacity-80">
        I build modern web apps (Next.js, Tailwind) and ML projects (Python, scikit-learn, PyTorch).
      </p>
      <div className="mt-6 flex gap-3">
        <a href="/resume.pdf" className="rounded-xl px-5 py-3 border">Download CV</a>
        <a href="mailto:you@email.com" className="rounded-xl px-5 py-3 bg-black text-white">Contact</a>
      </div>
    </section>
  );
}
