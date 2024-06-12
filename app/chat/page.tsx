import { ResizablePanelGroup } from "@/components/ui/resizable";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import SideBar from "./components/SideBar";
import MainBar from "./components/MainBar";

const ChatInterface = async() => {

  const { data } = await readUserSession();
  if(!data?.session){
    redirect("/auth-server-action");
  }

  return (
    <div className="w-screen h-screen">
      <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        <SideBar />
        <MainBar />
      </ResizablePanelGroup>
    </div>
  );
};

export default ChatInterface;