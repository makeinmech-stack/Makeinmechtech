export default function About() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Revolutionizing Drone Parts Manufacturing in India
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            MakeInMech Technology Private Limited is a premier mechanical design and manufacturing service provider based in Salem, Tamil Nadu. We are dedicated to supporting the growing drone ecosystem in India by providing reliable mechanical components.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Our ideology is simple: to empower drone manufacturers with the best-in-class mechanical parts that enhance performance, durability, and efficiency. From landing gears to custom frames, we bring your aerial visions to life with engineering excellence.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="rounded-xl border-2 border-accent bg-accent/5 px-8 py-4 text-center">
            <p className="text-3xl font-bold text-accent">100%</p>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-700">Made in India</p>
          </div>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-8">
            <h3 className="text-xl font-semibold text-slate-900">Innovative Design</h3>
            <p className="mt-4 text-slate-600">
              Our design team focuses on weight-to-strength optimization, critical for drone efficiency.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-8">
            <h3 className="text-xl font-semibold text-slate-900">Bespoke Solutions</h3>
            <p className="mt-4 text-slate-600">
              We provide custom mechanical solutions tailored to specific mission requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
