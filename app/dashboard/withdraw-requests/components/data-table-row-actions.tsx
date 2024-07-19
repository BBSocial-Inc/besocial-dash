"use client";

import * as React from "react";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
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
import { useToast } from "@/components/ui/use-toast";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const { toast } = useToast();
  const data: any = row.original;

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [areButtonsHidden, setAreButtonsHidden] = React.useState<boolean>(false);
  const [reason, setReason] = React.useState<string>('');

  const [changeStatus, changeStatusq] = useMutation<any>(CHANGE_WITHDRAW_REQUEST_STATUS, {
    onCompleted(data) {
      setIsLoading(false);
      toast({
        title: "Status Update Successfull.",
        variant: "default",
        description: data?.AdminUpdateWithdrawStatus.message,
      });
    },
    onError(error) {
      setIsLoading(false);
      toast({
        title: "Status Update Unsuccessfull.",
        variant: "destructive",
        description: error.message,
      });
      console.log("Error: ", error);
    },
  });

  return (
    <>
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
        </DialogContent>
      </Dialog>

      {data.status === 'in_progress' && (
        <DialogFooter>
          {!areButtonsHidden && (
            <>
              <Button
                variant="default"
                onClick={() => {
                  setAreButtonsHidden(true);
                  setIsLoading(true);
                  changeStatus({
                    variables: {
                      withdrawId: data?._id,
                      status: "completed",
                    },
                  });
                }}
              >
                Approve
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="default"
                  >
                    Invalid
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Invalidate the request</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="invalid-reason" className="text-right">
                        Reason
                      </Label>
                      <Input
                        id="invalid-reason"
                        className="col-span-3"
                        onChange={(e) => setReason(e.target.value)}
                        value={reason}
                      />
                    </div>
                  </div>

                  <Button
                    variant="default"
                    onClick={() => {
                      setAreButtonsHidden(true);
                      setIsLoading(true);
                      changeStatus({
                        variables: {
                          withdrawId: data?._id,
                          status: "rejected",
                          reason
                        },
                      });
                    }}
                  >
                    Mark this request as Invalid
                  </Button>
                </DialogContent>
              </Dialog>
            </>
          )}

          {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
        </DialogFooter>
      )}
    </>
  );
}
