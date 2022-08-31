import Charts from "../components/Charts";
import Input from "../components/subcomponents/Input";
import Wrapper from "../templates/Wrapper";
import useFetch from "../hooks/useFetch";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Bestillinger = () => {
  const d = new Date();
  const date = d.toLocaleDateString();
  const pastDate = d.setDate(d.getDate() - 30);
  const past = new Date(pastDate).toLocaleDateString();
  const [fromDate, setFromDate] = useState(past);
  const [toDate, setToDate] = useState(date);
  // console.log(`date: ${date} past:${past}`);

  const [collapsed, setCollapsed] = useState(true);
  const [customerId, setCustomerId] = useState("");

  const { data: users } = useFetch("http://localhost:3001/users");
  const { data } = useFetch("http://localhost:3001/orders");
  console.log(data);
  console.log(users);

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
              <h3 className="text-slate-600 font-bold text-2xl">
                Bestillinger
              </h3>
              <div className="pt-4">
                <h3 className="text-slate-500 font-semibold text-xl pb-2">
                  Filter
                </h3>
                <div className="flex">
                  {/* <search></search> */}
                  <button></button>
                </div>
                <div className="flex">
                  <Input
                    type="date"
                    label="Fra dato"
                    value={fromDate}
                    setValue={setFromDate}
                    id="from"
                  />
                  <Input
                    type="date"
                    label="Til dato"
                    value={toDate}
                    setValue={setToDate}
                    id="to"
                  />
                </div>
              </div>
              <div>
                {data &&
                  data.map(function (order) {
                    return (
                      <div
                        key={order.id}
                        onClick={() => setCustomerId(order.id)}
                        className="flex justify-between py-2"
                      >
                        <div>
                          <h2 className="text-slate-800 font-bold">
                            {order.id}
                          </h2>
                          <p className="text-slate-400 font-semibold">
                            {order.date}
                          </p>
                          <span className="text-slate-400">{order.time}</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <button className="justify-self-end bg-slate-200 w-8 h-8 rounded-full"></button>
                          <div className="flex">
                            <p>#{order.customer_id}</p>
                            <img src={users.image} alt={users.name} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {collapsed && (
          <motion.div className="bg-slate-800 w-screen fixed bottom-0 h-32 rounded-t-md">
            <h2 className="text-white">Ordre {customerId}</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Bestillinger;
