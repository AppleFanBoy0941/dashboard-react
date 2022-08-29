import Charts from "../components/Charts";

const Bestillinger = () => {
  return (
    <section className="flex flex-col lg:flex-row pt-24">
      <div>
        <div>
          <h2 className="text-xl font-bold text-slate-600">
            Overblik over bestillinger
          </h2>
          <div>
            <Charts />
          </div>
        </div>
        <div className="bg-slate-100"></div>
      </div>
      <div></div>
    </section>
  );
};

export default Bestillinger;
