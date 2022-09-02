import useFetch from "../hooks/useFetch";
import { AnimatePresence, motion } from "framer-motion";
import Badge from "../components/Badge";
import InfoArticle from "../components/InfoArticle";
import List from "../components/List";
import ListOrder from "../components/ListOrder";

const UserInfo = ({ id }) => {
  const url = `http://localhost:3001/`;
  const { data } = useFetch(`${url}users?id=${id}`);
  const item = data[0];
  console.log(data, item);
  return (
    <>
      <div className="flex items-end justify-between">
        <AnimatePresence>
          {item && (
            <div key="img" className="relative w-32 h-32">
              <motion.img
                initial={{ scale: 0.5, opacity: 0, y: 0 }}
                animate={{
                  scale: 0.9,
                  opacity: 0.5,
                  y: 8,
                  transition: { duration: 0.5, delay: 0.25 },
                }}
                className="absolute h-32 w-32 rounded-full blur-lg"
                src={`${url}${item.image}`}
                alt=""
              />
              <motion.img
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                className="absolute w-32 h-32 rounded-full"
                src={`${url}${item.image}`}
                alt={item.name}
              />
            </div>
          )}
          {item?.badges && (
            <ul key="badges" className="flex flex-row-reverse">
              {item.badges.map((badge, index) => (
                <Badge key={index} badge={badge} index={index} />
              ))}
            </ul>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-end gap-2">
          <motion.h1
            initial={{ opacity: 0, lineHeight: "0px", y: 40 }}
            animate={{
              y: 0,
              opacity: 1,
              lineHeight: "40px",
              transition: { duration: 0.75, damping: 10 },
            }}
            className="block text-2xl font-extrabold text-slate-800 overflow-hidden"
          >
            {item && item.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.25 },
            }}
            className="block text-sm font-semibold text-slate-600"
          >
            #{item && item.id}
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.75,
              duration: 0.25,
            },
          }}
          className="block text-sm font-semibold text-slate-600"
        >
          {item && item.email}
        </motion.p>
      </div>
      {item && (
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.75 },
          }}
        >
          <div className="grid grid-cols-2 gap-4 my-4">
            <InfoArticle
              title="Kundeoplysninger"
              content={[item.name, item.email, `+45${item.phone}`]}
            />
            <InfoArticle
              title="Leveringsoplysninger"
              content={[
                item.address.street,
                item.address.city,
                item.address.zip,
              ]}
            />
          </div>
          <List>
            {item.orders_id.map((id) => (
              <ListOrder key={id} id={id} />
            ))}
            {item.orders_id.length === 0 && (
              <p className="m-4 font-semibold text-slate-400">Ingen ordrer</p>
            )}
          </List>
        </motion.section>
      )}
    </>
  );
};

export default UserInfo;
