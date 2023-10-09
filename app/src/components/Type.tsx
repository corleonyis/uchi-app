import { Timestamp } from "firebase/firestore";

export type ShoppingListType = {
  id: number;
  title: string;
  done: boolean;
};

export type UserType = {
  id: string;
  name: string | null;
  photoURL: string | null;
  created_at: Timestamp;
};

export type SimpleUserType = {
  id: string | undefined;
  name: string | undefined | null;
};

export type GroupItemType = {
  id: string;
  name: string;
  owner: SimpleUserType;
  members: SimpleUserType[];
};
