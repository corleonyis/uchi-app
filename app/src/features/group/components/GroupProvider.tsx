import { createContext, useContext, useEffect, useState } from "react";
import { GroupItemType } from "../../../components/Type";
import { useAuthContext } from "../../auth/components/Auth";
import { createGroup, getGroups } from "../../database/components/Database";
import { GroupModal } from "./GroupModal";
import { useDisclosure } from "@mantine/hooks";

const CREATE_GROUP = "新しくグループを作成する";
const STRAGE_KEY_SELECTED_NAME = "selectedName";

type GroupContextType = {
  groups: GroupItemType[];
  currentGroup: GroupItemType;
  // グループ選択機能
  nameList: string[];
  selectedName: string;
  onSelectedName: (name: string) => void;
};

const GroupContext = createContext<GroupContextType>({
  groups: [],
  currentGroup: {} as GroupItemType,
  nameList: [],
  selectedName: "",
  onSelectedName: (name: string) => {},
});

export const useGroupContext = () => useContext(GroupContext);

/**
 * GroupProvider
 */
type GroupProviderProps = {
  children: React.ReactNode;
};
export const GroupProvider: React.FC<GroupProviderProps> = ({ children }) => {
  // Modal
  const [opend, { open, close }] = useDisclosure(false);

  // Context
  const { currentUser } = useAuthContext();

  // State
  // グループ一覧 取得中
  const [loading, setloading] = useState(true);
  // グループ一覧
  const [groups, setGroups] = useState<GroupItemType[]>([]);
  // 選択中のグループ
  const [currentGroup, setCurrentGroup] = useState<GroupItemType>(
    {} as GroupItemType
  );
  // 選択中グループ名
  const [selectedName, setSelectedName] = useState(() => {
    const item = localStorage.getItem(STRAGE_KEY_SELECTED_NAME);
    return item ? item : "";
  });

  /**
   * 選択中グループ名を更新し、localStorageに保存する
   * @param name グループ名
   */
  const updateSelectedName = (name: string) => {
    localStorage.setItem(STRAGE_KEY_SELECTED_NAME, name);
    setSelectedName(name);
  };

  /**
   * グループ名の選択が変更された時、
   * - グループ一覧に存在する名前であれば選択中グループを更新する。
   * - CREATE_GROUPであればグループの新規作成を行う。
   *
   * @param name 選択されたグループ名 または CREATE_GROUP
   * @returns
   */
  const onSelectedName = (name: string) => {
    if (name === CREATE_GROUP) {
      // グループ作成モーダルを開く
      open();
      console.log("グループ作成処理");
    } else {
      // 現在のグループを更新する
      console.log(name, "に現在のグループを変更する");
      const selectedGroup = groups.find((group) => group.name === name);
      if (selectedGroup !== undefined) {
        updateSelectedName(name);
        setCurrentGroup(selectedGroup);
      }
    }
  };

  /**
   * グループを新規作成する
   * @param name グループ名
   */
  const createNewGroup = (name: string) => {
    try {
      createGroup(name, currentUser?.id, currentUser?.name);
      updateSelectedName(name);
      setloading(true);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect
  /**
   * グループ一覧の取得
   */
  useEffect(() => {
    if (loading && currentUser != null) {
      getGroups(currentUser?.id as string, currentUser?.name as string)
        .then((docs) => {
          setGroups(docs);
          setloading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loading, currentUser]);

  /**
   * グループ一覧更新後に選択中のグループを更新する
   */
  useEffect(() => {
    if (groups.length === 0) return;

    const item = localStorage.getItem(STRAGE_KEY_SELECTED_NAME);
    const selectedGroup = item
      ? groups.find((group) => group.name === item)
      : undefined;

    if (selectedGroup !== undefined) {
      setCurrentGroup(selectedGroup);
    } else {
      // localStorageにグループ名が保存されていないか、保存されているグループ名が存在しないとき
      // グループ一覧の先頭のアイテムを選択中にする。
      updateSelectedName(groups[0].name);
      setCurrentGroup(groups[0]);
    }
  }, [groups]);

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
    onSelectedName,
  };

  return (
    <GroupContext.Provider value={value}>
      <GroupModal opend={opend} close={close} createGroup={createNewGroup} />
      {!loading && children}
    </GroupContext.Provider>
  );
};
