import { ref } from 'vue';
import { defineStore } from 'pinia';
import { commonService } from '@/services';


export const useAreasStore = defineStore('areas', () => {
  const areas = ref([{"strArea" : ""}]);

  async function getAreas() {
    const data = await commonService.getAreas()
    areas.value = data
  }

  return { areas, getAreas }
})