import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOutIcon } from "lucide-react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/Menubar";

export function ProfileMenu() {
  return (
    <Menubar className="bg-transparent">
      <MenubarMenu>
        <MenubarTrigger asChild>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                className="rounded-full"
                width={40}
                height={40}
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">John Doe</span>
              <span className="text-xs text-muted-foreground">
                johndoe@gmail.com
              </span>
            </div>
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Dados cadastrais</MenubarItem>
          <MenubarItem>Configurações</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Sair
            <MenubarShortcut>
              <LogOutIcon />
            </MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
