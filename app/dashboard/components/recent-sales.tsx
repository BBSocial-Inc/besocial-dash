"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TRENDING_USERS } from "@/graphql";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export function RecentSales() {
  const [trendingUsers, settrendingUsers] = useState<any>([]);

  const trendingU = useQuery(TRENDING_USERS, {
    onCompleted(data) {
      settrendingUsers(data?.TrendingUser);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 5,
      page: 0,
    },
  });

  return (
    <div className="space-y-8">
      {trendingUsers.map((item: any, index: any) => {
        return (
          <div key={index} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={item?.profile_picture} alt="Avatar" />
              <AvatarFallback>BS</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{item?.name}</p>
              <p className="text-sm text-muted-foreground">@{item?.username}</p>
            </div>
            <div className="ml-auto font-medium"></div>
          </div>
        );
      })}
    </div>
  );
}
