import {
   LOADED,
   ADDED,
   ALLCOMPLETED,
   CLEARCOMPLETED,
   COLORSELECTED,
   DELETED,
   TOGGLED,
} from "./actionTypes";

export const loaded = (todos) => {
   return {
      type: LOADED,
      payload: todos,
   };
};

export const added = (todoText) => {
   return {
      type: ADDED,
      payload: todoText,
   };
};

export const toggled = (id) => {
   return {
      type: TOGGLED,
      payload: id,
   };
};

export const colorSelected = (id, color) => {
   return {
      type: COLORSELECTED,
      payload: {
         id,
         color,
      },
   };
};

export const deleted = (id) => {
   return {
      type: DELETED,
      payload: id,
   };
};

export const allCompleted = () => {
   return {
      type: ALLCOMPLETED,
   };
};

export const clearCompleted = () => {
   return {
      type: CLEARCOMPLETED,
   };
};
