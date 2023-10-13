import { createContext, useContext, useEffect, useState } from "react";
import { GroupItemType } from "../../../components/Type";
import { useAuthContext } from "../../auth/components/Auth";
import { getGroups } from "../../database/components/Database";

const CREATE_GROUP = "新しくグループを作成する";
const STRAGE_KEY_SELECTED_NAME = "selectedName";

type GroupContextType = {
  groups: GroupItemType[];
  currentGroup: GroupItemType;
  // グループ選択機能
  nameList: string[];
  selectedName: string;
  setSelectedName: (name: string) => void;
};

const GroupContext = createContext<GroupContextType>({
  groups: [],
  currentGroup: {} as GroupItemType,
  nameList: [],
  selectedName: "",
  setSelectedName: (name: string) => {},
});

export const useGroupContext = () => useContext(GroupContext);

// GroupProvider
type GroupProviderProps = {
  children: React.ReactNode;
};
export const GroupProvider: React.FC<GroupProviderProps> = ({ children }) => {
  const { currentUser } = useAuthContext();
  // グループ一覧
  const [groups, setGroups] = useState<GroupItemType[]>([]);
  // 選択中のグループ
  const [currentGroup, setCurrentGroup] = useState<GroupItemType>(
    {} as GroupItemType
  );
  // 選択中グループ名
  const [selectedName, setSelectedName] = useState(() => {
    const item = localStorage.getItem(STRAGE_KEY_SELECTED_NAME);
    return item ? item : CREATE_GROUP;
  });
  const [loading, setloading] = useState(true); // グループ一覧取得中

  // グループ一覧を取得
  useEffect(() => {
    if (loading && currentUser != null) {
      console.log("useEffect 1");
      getGroups(currentUser?.id as string, currentUser?.name as string)
        .then((docs) => {
          // グループ一覧
          setGroups(docs);
          setloading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loading, currentUser]);

  // 選択中リスト名が更新された際の、現在グループを更新、またはグループを作成する
  useEffect(() => {
    if (loading) return; // グループ一覧の取得が完了していない時は処理しない

    console.log("useEffect 2");
    if (selectedName === CREATE_GROUP) {
      // TODO: グループ作成処理
      //       グループ作成後、selectedName, currentGroupを作成したグループで更新する
      console.log("グループ作成処理");
    } else {
      // 現在のグループを更新する
      console.log(selectedName, " に現在のグループを変更する");
      const selectedGroup = groups.find((group) => group.name === selectedName);
      if (selectedGroup !== undefined) {
        setCurrentGroup(selectedGroup);
      }
      localStorage.setItem(STRAGE_KEY_SELECTED_NAME, selectedName);
    }
  }, [selectedName]);

  // グループ名選択リスト
  const nameList: string[] = groups.map((item) => {
    return item.name;
  });
  nameList.push(CREATE_GROUP);

  const value = {
    groups,
    currentGroup,
    nameList,
    selectedName,
    setSelectedName,
  };

  return (
    <GroupContext.Provider value={value}>
      {!loading && children}
    </GroupContext.Provider>
  );
};
