import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'สินค้า1 ', img: '', price: 120 },
    { name: ' สินค้า2 ', img: '', price: 80 },
    { name: ' สินค้า3 ', img: '', price: 60 },
    { name: 'สินค้า4 ', img: '', price: 40 },
    { name: ' สินค้า5 ', img: '', price: 90 },


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
