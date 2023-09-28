// import { useState } from "react";
import React, { useState } from "react";
const useToggleItems = (pahelavalue, position = 0) => {
console.log(pahelavalue,"pahelavalue");
  const [abhikaindex, setabhikaindex] = useState(position);
console.log(abhikaindex,"abhikaindex")

  const Statekotoggle = () => {
    console.log(abhikaindex,"1abhikaindex inside toggle function")
    setabhikaindex((abhikaindex + 1) % pahelavalue.length);
    console.log(abhikaindex,"2abhikaindex inside toggle function")
  };

  return [ pahelavalue[abhikaindex] , Statekotoggle ];
};

export { useToggleItems };
