import React, { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthProviders";

const Inventory = () => {
  const { name } = useContext(AuthContext);
  return (
    <div>
      <div>Inventory</div>;{name && <span>Welcome</span>}
    </div>
  );
};

export default Inventory;
