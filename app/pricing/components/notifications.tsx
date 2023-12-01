import { CheckCircledIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function DemoNotifications({ onPress, loading }: any) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>
          $18 <text className="text-[#969696] text-lg">per month</text>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="grid gap-1">
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
          <CheckCircledIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              Unlimited campaign
            </p>
            <p className="text-sm text-muted-foreground">
              Create unlimited campaigns for all your application.
            </p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
          <CheckCircledIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">All integration</p>
            <p className="text-sm text-muted-foreground">
              Connect with your favorite tools and platforms.
            </p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
          <CheckCircledIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Webhooks</p>
            <p className="text-sm text-muted-foreground">
              Enable real-time updates via Webhooks.
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button onClick={onPress} disabled={loading} className="w-full">
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
}
