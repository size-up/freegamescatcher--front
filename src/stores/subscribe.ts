import type { ReceiverInterface } from "@/interfaces/receiver.interface";
import { defineStore } from "pinia";
import { AxiosConfig } from "@/configs/axios.config";

export const useSubscribeStore = defineStore("sbuscribe", {
  state() {
    return {
      isLoading: false,
    };
  },
  actions: {
    async onSbuscribe(datas: ReceiverInterface) {
      console.log("================");
      console.log(datas);
      console.log("================");
      return AxiosConfig.getConfig().post("/receivers", datas);
    },
  },
});
