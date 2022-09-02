import { useState } from "react";
import FeatherIcons from "feather-icons-react";
import useFetch from "../hooks/useFetch";

const UserOrders = ({ id, customerId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, error } = useFetch(
    `http://localhost:3001/orders?id=${id}`
  );
  console.log(data);
  const { data: customerData } = useFetch(
    `http://localhost:3001/users/${customerId}`
  );
  let item = data[0];
  console.log(item);

  return (
    <div className="py-5 px-5 ">
      <div className="flex justify-between">
        <span className="text-slate-400">Ordre: {item.id}</span>
        <button>
          <FeatherIcons icon="chevron-up" />
        </button>
      </div>
      <h2 className="text-white text-2xl">{item.date}</h2>
    </div>
  );
};

export default UserOrders;
