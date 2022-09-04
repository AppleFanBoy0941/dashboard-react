import Charts from "../components/Charts";
import Input from "../components/subcomponents/Input";
import Wrapper from "../templates/Wrapper";
import useFetch from "../hooks/useFetch";

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UserOrders from "../components/UserOrders";
const Bestillinger = () => {
  const d = new Date();
  const date = d.toLocaleDateString();
  const pastDate = d.setDate(d.getDate() - 30);
  const past = new Date(pastDate).toLocaleDateString();
  const [fromDate, setFromDate] = useState(past);
  const [toDate, setToDate] = useState(date);
  const { id, customerId } = useParams();

  const { data } = useFetch("http://localhost:3001/orders");
  const { data: users } = useFetch("http://localhost:3001/users");
  console.log(data);
  console.log(data);

  return (
    <section className="flex flex-col lg:flex-row">
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
                      <Link key={order.id} to={`/bestillinger/${order.id}`}>
                        <div className="flex justify-between py-2">
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
                              <p className="text-slate-400">
                                #{order.customer_id}
                              </p>
                              <img src={users.image} alt={users.name} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
      <motion.div className="bg-slate-800 w-screen fixed bottom-0 h-32 rounded-t-md">
        <UserOrders id={id} customerId={customerId} />
      </motion.div>
    </section>
  );
};

export default Bestillinger;
