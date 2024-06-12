import { CornerDownLeft } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip"; // Import TooltipProvider
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const TextArea = () => {
  return (
    <TooltipProvider>
      {" "}
      <form className="w-4/5 flex p-2 items-center justify-center relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center p-3 pt-0">
          <Button type="submit" size="sm" className="ml-auto gap-1.5">
            <CornerDownLeft size={12}/>
          </Button>
        </div>
      </form>
    </TooltipProvider>
  );
};

export default TextArea;