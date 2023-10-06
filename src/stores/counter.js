import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'เมนูผัดกระเพรา ', img: 'https://s359.kapook.com//pagebuilder/2cc482f6-9e80-488f-9e0a-87103f16b40d.jpg', price: 60 },
    { name: ' เมนูผัดพริกแกง ', img: 'https://s359.kapook.com//pagebuilder/9dbc7505-3b39-4b7f-85b4-1c88c2a01e7f.jpg', price: 50 },
    { name: ' เมนูผัดผัก    ', img: 'https://s359.kapook.com//pagebuilder/6ef91549-ce57-47d6-88db-3ca0c16d1b9e.jpg', price: 50 },
    { name: 'เมนูผัดผงกะหรี่ ', img: 'https://s359.kapook.com//pagebuilder/efa12ebe-add1-4348-bbae-0adf4f4766c7.jpg', price: 60 },
    { name: ' เมนูผัดกระเทียม / ทอดกระเทียม ', img: 'https://s359.kapook.com//pagebuilder/7d2111b0-1a61-4196-a0fe-f77eb122612f.jpg', price: 50 },


  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
