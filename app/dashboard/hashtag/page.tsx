"use client";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useState } from "react";
import { GET_HASHTAGS } from "@/graphql";
import { useQuery } from "@apollo/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// export const metadata: Metadata = {
//   title: "Creare",
//   description: "All Creates",
// };

// Simulate a database read for tasks.

export default function TaskPage() {
  const [hashtag, sethashtag] = useState<any>([]);

  const trendingU = useQuery(GET_HASHTAGS, {
    onCompleted(data) {
      sethashtag(data?.AdminGetAllHashtags);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 50,
      page: 0,
      sortBy: "trending",
    },
  });

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Hashtags
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{hashtag?.total}</div>
              <p className="text-xs text-muted-foreground">
                0% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        <DataTable data={hashtag?.data} columns={columns} />
      </div>
    </>
  );
}
