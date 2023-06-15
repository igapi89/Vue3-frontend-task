import { defineStore } from "pinia";
import { getItems, clearItems, insertItem, deleteItem } from "@/api";

export const useStoreDishes = defineStore("dishes", {
  state: () => ({
    baseURL: "http://localhost:9000",
    dishes: [],
  }),
  actions: {
    async getItems() {
      try {
        const { data } = await getItems();
        this.dishes = data.data;
      } catch (error) {
        console.error(error);
      }
    },
    async clearItems() {
      try {
        await clearItems();
        this.getItems();
      } catch (error) {
        console.error(error);
      }
    },
    async insertItem(payload) {
      try {
        await insertItem(payload);
        this.getItems();
      } catch (error) {
        console.error(error);
      }
    },
    async deleteItem(itemId) {
      try {
        await deleteItem(itemId);
        this.getItems();
      } catch (error) {
        console.error(error);
      }
    },
  },
});
