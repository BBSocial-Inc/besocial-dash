"use client";

import * as React from "react";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toaster } from "evergreen-ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMutation, } from "@apollo/client";
import { CHANGE_WITHDRAW_REQUEST_STATUS } from "@/graphql/mutation";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const data: any = row.original;

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [changeStatus, changeStatusq] = useMutation<any>(CHANGE_WITHDRAW_REQUEST_STATUS, {
    onCompleted(data) {
      // alert(data?.AdminGetUsers);
      setIsLoading(false);
      toaster.notify("Successful");
      // window.location.reload();
    },
    onError(error) {
      setIsLoading(false);
      toaster.danger("Error");
      console.log(error, "data");
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">View Request</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Withdraw Request</DialogTitle>
          {/* <DialogDescription>Warn this user</DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              ID
            </Label>
            <Input
              id="id"
              defaultValue={data._id}
              className="col-span-3"
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue={data.username}
              className="col-span-3"
              readOnly
            />
          </div>
          {Object.entries(data.account_details || {}).map(([key, value]) => (
            <div key={key} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={key} className="text-right">
                {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Label>
              <Input
                id={key}
                defaultValue={value}
                className="col-span-3"
                readOnly
              />
            </div>
          ))}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stars" className="text-right">
              Stars
            </Label>
            <Input
              id="stars"
              defaultValue={data.stars}
              className="col-span-3"
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="data-requested" className="text-right">
              Dated
            </Label>
            <Input
              id="data-requested"
              defaultValue={data.created_at}
              className="col-span-3"
              readOnly
            />
          </div>
        </div>
        {data.status != 'in_progress' ?? (<DialogFooter>
          <Button
            type="button"
            onClick={() => {
              setIsLoading(true);
              changeStatus({
                variables: {
                  withdrawId: data?._id,
                  status: "completed",
                },
              });

            }}
          >
            {changeStatusq.loading ? "Loading" : "Approve"}
          </Button>
          <Button
            type="button"
            onClick={() => {
              setIsLoading(true);
              changeStatus({
                variables: {
                  withdrawId: data?._id,
                  status: "rejected",
                },
              });
            }}
          >
            {changeStatusq.loading ? "Loading" : "Reject"}
          </Button>
        </DialogFooter>)}
      </DialogContent>
    </Dialog>
  );
}
