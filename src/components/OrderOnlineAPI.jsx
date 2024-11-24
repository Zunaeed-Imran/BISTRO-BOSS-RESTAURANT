import { useEffect, useState } from "react"


function OrderOnlineAPI() {

  const [menu, setMenu] = useState([]);

  const getMenu = async () => {
    const response = await axios.get('/OurSHop.json');
    setMenu(response.data.User);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div>
      {menu.map(user => {
        return (
          <article key={user.id}>
            <h2>{user.name}</h2>
            <img src={user.image} alt={`${user.name}'s image`} />
            <h2>{user.email}</h2>
          </article>
        );
      })}
    </div>
  );
}

export default OrderOnlineAPI
