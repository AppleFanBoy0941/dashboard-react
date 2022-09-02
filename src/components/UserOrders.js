import useFetch from "../hooks/useFetch";

const UserOrders = ({ data, userObj, customerId }) => {
  const user = userObj.map((obj) => obj.id === customerId);
  console.log(user);

  const { data: users } = useFetch(
    `http://localhost:3001/users/`
    // ${data.customer_id}
  );
  console.log(users);
  return (
    <div>
      {/* {users &&
        users.map((u) => {
          <div key={u.id}>
            <h2 className="text-white">Ordre {u.id}</h2>
          </div>;
        })} */}
    </div>
  );
};

export default UserOrders;
