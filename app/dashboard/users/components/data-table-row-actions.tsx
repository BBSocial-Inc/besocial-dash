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
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { ADMIN_BLOCK, ADMIN_WARN, GET_WARNING } from "@/graphql/mutation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const data: any = row.original;
  const [isShown, setIsShown] = useState({
    state: false,
    action: () => {},
  });
  const [payload, setpayload] = useState({
    type: "",
    reason: "",
  });

  const [warn, warnq] = useMutation<any>(ADMIN_WARN, {
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
  const [block, blockq] = useMutation<any>(ADMIN_BLOCK, {
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
  const [warnings, setwarnings] = useState([]);
  const [strike, setstrike] = useState("");

  const [getw, getWarning] = useLazyQuery<any>(GET_WARNING, {
    onCompleted(data) {
      // alert(data?.AdminGetUsers);
      console.log(data?.GetUserWarningStrikes);
      setwarnings(data?.GetUserWarningStrikes);
    },
    onError(error) {
      toaster.danger("Error");
      console.log(error, "data");
    },
  });

  useEffect(() => {
    getw({
      variables: {
        limit: 50,
        page: 0,
        userId: data?._id,
      },
    });
  }, [data?._id, data]);
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
            <DropdownMenuItem>Warn user</DropdownMenuItem>
          </DialogTrigger>

          <DropdownMenuItem disabled>Edit user</DropdownMenuItem>

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
            Block User
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>

        <CornerDialog
          title={"Confirm Block"}
          confirmLabel={blockq.loading ? "loading" : "Yes"}
          intent="danger"
          isShown={isShown.state}
          onCloseComplete={() => {
            if (!strike) return;
            setIsShown({
              ...isShown,
              state: false,
            });
          }}
          onConfirm={() => {
            // console.log({
            //   userId: data?._id,
            //   warningStrikeId: strike,
            // });
            block({
              variables: {
                userId: data?._id,
                warningStrikeId: strike,
              },
            });
          }}
        >
          Are your sure you want to perform this action
          <br />
          <br />
          <Label htmlFor="name" className="text-right mt-5">
            Select Warning Strike
          </Label>
          <Select
            onValueChange={(val) => {
              setstrike(val);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Warning Strike" />
            </SelectTrigger>
            <SelectContent>
              {getWarning.loading ? (
                <SelectItem value="" disabled>
                  Loading...
                </SelectItem>
              ) : warnings.length < 1 ? (
                <SelectItem value="" disabled>
                  No Data
                </SelectItem>
              ) : (
                warnings.map((item, index) => {
                  return (
                    <SelectItem key={index} value={item?._id}>
                      {item.reason}
                    </SelectItem>
                  );
                })
              )}
              {/* <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem> */}
            </SelectContent>
          </Select>
        </CornerDialog>
      </DropdownMenu>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Warn user</DialogTitle>
          <DialogDescription>Warn this user</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Type
            </Label>
            <Input
              id="name"
              defaultValue="content, tip, hashtag, comment, all"
              className="col-span-3"
              onChange={(v: any) =>
                setpayload({
                  ...payload,
                  type: v.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Reason
            </Label>
            <Input
              id="username"
              defaultValue="content policy"
              className="col-span-3"
              onChange={(v: any) =>
                setpayload({
                  ...payload,
                  reason: v.target.value,
                })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            onClick={() => {
              // console.log(data?._id);
              warn({
                variables: {
                  userId: data?._id,
                  reason: payload.reason,
                  type: payload.type,
                },
              });
            }}
          >
            {warnq.loading ? "Loading" : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
