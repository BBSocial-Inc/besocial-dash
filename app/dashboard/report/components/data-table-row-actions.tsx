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
import { useLazyQuery, useMutation } from "@apollo/client";
import { REPORT_ACTION } from "@/graphql/mutation";

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

  const [action, actionq] = useMutation<any>(REPORT_ACTION, {
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
      limit: 50,
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
            <DropdownMenuItem>Add report</DropdownMenuItem>
          </DialogTrigger>

          <DropdownMenuItem
            onClick={() => {
              console.log(data);
              data?.report_type == "hashtag"
                ? window.open("/dashboard/hashtag?id=" + data?.report_id)
                : "";
              data?.report_type == "content"
                ? window.open("/dashboard/hashtag?id=" + data?.report_id)
                : "";
              data?.report_type == "user"
                ? window.open("/dashboard/hashtag?id=" + data?.report_id)
                : "";
            }}
          >
            View Item
          </DropdownMenuItem>

          {/* <DropdownMenuItem>Send notification</DropdownMenuItem> */}
          {/* <DropdownMenuSeparator />
          <DropdownMenuSeparator /> */}
          {/* <DropdownMenuItem
            onClick={() =>
              setIsShown({
                ...isShown,
                state: true,
                action: () => {},
              })
            }
          >
            Block User
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem> */}
        </DropdownMenuContent>

        {/* <CornerDialog
          title="Confirm"
          confirmLabel="Yes"
          intent="danger"
          isShown={isShown.state}
          onCloseComplete={() =>
            setIsShown({
              ...isShown,
              state: false,
            })
          }
          onConfirm={() => {}}
        >
          Are your sure you want to perform this action
        </CornerDialog> */}
      </DropdownMenu>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Report</DialogTitle>
          <DialogDescription>Deatils for this report</DialogDescription>
        </DialogHeader>
        {/* <div className="w-[180px] h-[250px] bg-[#eee]"></div>
        <a className="text-[blue] cursor-pointer"></a> */}
        <div className="grid gap-4 py-4">
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Status
            </Label>
            <Input
              id="name"
              defaultValue="content, tip, hashtag, comment, all"
              className="col-span-3"
            />
          </div> */}
          <div className="grid grid-cols-4 items-center gap-4 flex flex-col">
            <Label htmlFor="username" className="text-right">
              Action
            </Label>
            <Input
              id="username"
              // defaultValue="content policy violation"
              placeholder="Type in action taken on this report"
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
              action({
                variables: {
                  reportId: data?._id,
                  action: payload?.text,
                },
              });
            }}
          >
            {actionq.loading ? "Loading" : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
