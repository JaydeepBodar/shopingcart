import { configureStore } from "@reduxjs/toolkit";
import cardshow from "./cardreducer";
import cartitems from "./reducer";
const datastore = configureStore({
  reducer: { cart: cartitems.reducer, cartshow: cardshow.reducer },
});
export default datastore;
