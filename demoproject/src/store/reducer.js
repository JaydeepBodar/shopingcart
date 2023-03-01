import { createSlice } from "@reduxjs/toolkit";
const cartitems = createSlice({
  name: "cart",
  initialState: {
    Items: [],
    totalquantity: 0,
    totalprice:0,
  },
  reducers: {
    addItem(state, action) {
      const newitem = action.payload;
      let carts=state.Items
      const existingitems = state.Items.find(
        (item) => item.id === newitem.id
      );
      console.log('existingitems',existingitems)
      state.totalquantity++;
      if (!existingitems) {
        let cartdata=carts.concat({
          id: newitem.id,
          price: newitem.price,
          quantity: 1,
          total: newitem.price,
          thumbnail:newitem.thumbnail,
          title: newitem.title,
        });
        console.log('qeqeqeqe',cartdata)
        state.Items=cartdata;
      } 
      else {
        // let cartupdate = [];
        // console.log('carts', carts)
        // let cartdata=carts.concat({
        //   id: newitem.id,
        //   price: newitem.price,
        //   quantity: 1,
        //   totalprice: newitem.price,
        //   title: newitem.title,
        // });
        // state.Items=cartupdate;
        existingitems.quantity++;
        existingitems.total = existingitems.total + newitem.price;
      }
      state.totalprice=newitem.price+state.totalprice;
    },
    RemoveItem(state, action) {
      const id = action.payload;
      let carts=state.Items
      const existingitems = carts.find((item) => item.id === id);
      state.totalquantity--
      if (existingitems.quantity === 1) {
        carts = carts.filter((item) => item.id !== id);
        state.Items=carts
        console.log(carts)
      } else {
        existingitems.quantity--;
        // if(data === 0){
        //   return{Items :[],totalquantity:0};
        // }
        existingitems.total=existingitems.total-existingitems.price;
      }
      state.totalprice=state.totalprice-existingitems.price; 
    },
    DeleteItem(state,action){
      const deleteitem=action.payload;
      const filterdelete=state.Items.filter((newitem)=>newitem.id !== deleteitem)
      const existingitems = state.Items.find((item) => item.id === deleteitem);
      state.Items=filterdelete
      state.totalquantity=state.totalquantity-existingitems.quantity
      state.totalprice=state.totalprice-existingitems.total
    }
  },
});
export default cartitems;
export const cartActions = cartitems.actions;
