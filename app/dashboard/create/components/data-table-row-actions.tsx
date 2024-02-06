"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CornerDialog, toaster } from "evergreen-ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CAT, DELETE_CAT } from "@/graphql/mutation";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const data = row.original;
  const [isShown, setIsShown] = useState({
    state: false,
    action: () => {},
  });

  const [payload, setpayload] = useState({
    text: "",
  });

  const [add, addq] = useMutation<any>(ADD_CAT, {
    onCompleted(data) {
      // alert(data?.AdminGetUsers);
      toaster.notify("Successful");
      window.location.reload();
    },
    onError(error) {
      toaster.danger("Error");
      console.log(error, "data");
    },
    variables: {
      limit: 20,
      page: 0,
    },
  });
  const [deletec, deletecq] = useMutation<any>(DELETE_CAT, {
    onCompleted(data) {
      // alert(data?.AdminGetUsers);
      toaster.notify("Successful");
      window.location.reload();
    },
    onError(error) {
      toaster.danger("Error");
      console.log(error, "data");
    },
    variables: {
      limit: 20,
      page: 0,
    },
  });
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DialogTrigger asChild>
            <DropdownMenuItem>Add item</DropdownMenuItem>
          </DialogTrigger>

          {/* <DropdownMenuItem>Send notification</DropdownMenuItem> */}
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() =>
              setIsShown({
                ...isShown,
                state: true,
                action: () => {},
              })
            }
          >
            Delete Item
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>

        <CornerDialog
          title="Confirm"
          confirmLabel={addq.loading ? "loading" : "Yes"}
          intent="danger"
          isShown={isShown.state}
          onCloseComplete={() =>
            setIsShown({
              ...isShown,
              state: false,
            })
          }
          onConfirm={() => {
            deletec({
              variables: {
                name: data?.name,
              },
            });
          }}
        >
          Are your sure you want to perform this action
        </CornerDialog>
      </DropdownMenu>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add item</DialogTitle>
          <DialogDescription>Add new item</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="type new name"
              className="col-span-3"
              onChange={(v: any) =>
                setpayload({
                  ...payload,
                  text: v.target.value,
                })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            onClick={() => {
              add({
                variables: {
                  name: payload?.text,
                },
              });
            }}
          >
            {addq.loading ? "loading" : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
