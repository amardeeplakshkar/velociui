'use client';
import { PanelsTopLeft, ScanLine, } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "../core/sheet";
import DocsSidebar from "./sidebar";
import { useState } from "react";

const Topnav = () => {
  const [open, setOpen] = useState<boolean>(false);

    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };
  return (  
    <Sheet open={open} onOpenChange={setOpen}>
        <button onClick={toggleOpen}  className="lg:hidden">
          <PanelsTopLeft />
        </button>
        <SheetContent className="w-[15rem]" side="left">
          <DocsSidebar closeSheet={() => setOpen(false)}/>
        </SheetContent>
      </Sheet>
    );
}

export default Topnav;