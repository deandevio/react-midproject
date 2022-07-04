import { Search } from "./Search";
import { Users } from "./Users";

export const LeftSide = (props) => {
  const { users } = props;
  return (
    <div className=" mx-auto border-2 border-red-600 rounded-full flex flex-col h-1/6 w-1/2 px-2 overflow-y-scroll scrollbar-thin space-y-0">
      <Search />
      <Users users={users} />
    </div>
  );
};
