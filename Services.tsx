const services = [
  {
    title: "Mechanical Design",
    description:
      "Expert CAD modeling and structural analysis for robust drone frameworks and mechanical systems.",
  },
  {
    title: "Precision Manufacturing",
    description:
      "High-accuracy CNC machining and fabrication services with strict tolerance controls.",
  },
  {
    title: "Drone Component Design",
    description:
      "Specialized engineering for landing gears, arm mounts, and motor mounts tailored for drone efficiency.",
  },
  {
    title: "Rapid Prototyping",
    description:
      "Quick turnaround for functional prototypes using advanced manufacturing techniques.",
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous testing and inspection to ensure every part meets international aerospace standards.",
  },
  {
    title: "Consultancy Services",
    description:
      "Expert guidance on material selection and manufacturing processes for drone startups.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Comprehensive mechanical solutions tailored for the evolving drone industry.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
