import { createContext } from "react";


const PriceContext = createContext({'price': 0});
PriceContext.displayName = "SecPrice";

export default PriceContext;
