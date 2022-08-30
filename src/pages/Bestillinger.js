import Charts from "../components/Charts";
import Search from "../components/Search";
import Input from "../components/subcomponents/Input";
import Wrapper from "../templates/Wrapper";
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
          <div className="px-4">
            <Wrapper>
              <h3>Bestillinger</h3>
              <div>
                <h3>Filter</h3>
                <div className="flex">
                  <search></search>
                  <button></button>
                </div>
                <div className="flex">
                  <Input
                    type="date"
                    label=""
                    value
                    setValue=""
                    error
                    id="from"
                  />
                  <Input type="date" label="" value setValue error id="to" />
                </div>
              </div>
              <div></div>
            </Wrapper>
          </div>
        </div>
        <div className="bg-slate-100"></div>
      </div>
      <div></div>
    </section>
  );
};

export default Bestillinger;
