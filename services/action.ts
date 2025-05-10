import { UserActionInput } from "./dto/user-acton.dto";
import { axiosInstance } from "./instance";

export const addAction = async (values: UserActionInput) => {
  return (await axiosInstance.post("/action", values)).data;
};
