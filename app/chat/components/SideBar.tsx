import { ResizablePanel} from "@/components/ui/resizable";
import { SignOut } from "./SignOut";
import { PreviousChats } from "./previousChats";
import { Button } from "@/components/ui/button";
import { FiEdit } from 'react-icons/fi';

const SideBar = () => {
  return (
    <ResizablePanel defaultSize={25}>
      <div className="flex flex-col h-full items-center justify-center p-6">
        <Button className="w-4/5 flex justify-between">
          New Chat
          <FiEdit  />
        </Button>
        <span className="w-full h-4/5 m-8 font-semibold">
          <PreviousChats />
        </span>
        <SignOut />
      </div>
    </ResizablePanel>
  );
};

export default SideBar;
