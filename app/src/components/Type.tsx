export type ShoppingListType = {
  id: number;
  title: string;
  done: boolean;
};

export type UserType = {
  name: string | undefined | null;
  id: string | undefined;
};

export type GroupItemType = {
  name: string;
  owner: UserType;
  member: UserType[];
};
