import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useItemStore = defineStore('activeItem', () => {
  const activeItem = ref({'type': 'Letter', 'value': 's'});

  function setActive(type: string, value: string) {
    activeItem.value.type = type;
    activeItem.value.value = value;
  }  

  return { activeItem, setActive }
})