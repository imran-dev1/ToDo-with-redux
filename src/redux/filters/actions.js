import { SELECTEDCOLORS, SELECTEDSTATUS } from "./actionTypes";

export const selectedStatus = (status) => {
   return {
      type: SELECTEDSTATUS,
      payload: status,
   };
};

export const selectedColors = (color, changeType) => {
   return {
      type: SELECTEDCOLORS,
      payload: {
         color,
         changeType,
      },
   };
};
