import { ResizablePanel } from "@/components/ui/resizable";
import TextArea from "./textarea";

const MainBar = () => {
  return (
    <ResizablePanel
      defaultSize={75}
      className={"flex justify-center items-center"}
    >
      <div className="flex flex-col w-4/5 h-full items-center justify-between py-10">
        <span className="font-semibold">Main content</span>
        <TextArea />
      </div>
    </ResizablePanel>
  );
};

export default MainBar;
