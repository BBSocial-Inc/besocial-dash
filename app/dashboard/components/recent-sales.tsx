"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NEW_USERS,
  POPULAR_USERS,
  RECENT_USERS,
  TRENDING_USERS,
} from "@/graphql";
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
      limit: 10,
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

export function RecentUser() {
  const [trendingUsers, settrendingUsers] = useState<any>([]);

  const trendingU = useQuery(RECENT_USERS, {
    onCompleted(data) {
      settrendingUsers(data?.GetRecentCreators);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 10,
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

export function NewUser() {
  const [trendingUsers, settrendingUsers] = useState<any>([]);

  const trendingU = useQuery(NEW_USERS, {
    onCompleted(data) {
      settrendingUsers(data?.GetNewCreators);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 10,
      page: 0,
    },
  });

  return (
    <div className="space-y-8">
      {trendingUsers?.map((item: any, index: any) => {
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
export function PopularUser() {
  const [trendingUsers, settrendingUsers] = useState<any>([]);

  const trendingU = useQuery(POPULAR_USERS, {
    onCompleted(data) {
      settrendingUsers(data?.AdminGetPopularCreators);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 10,
      page: 0,
    },
  });

  return (
    <div className="space-y-8">
      {trendingUsers?.map((item: any, index: any) => {
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
