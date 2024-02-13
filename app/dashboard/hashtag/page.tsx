"use client";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useState } from "react";
import { GET_HASHTAGS } from "@/graphql";
import { useQuery } from "@apollo/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter, useSearchParams } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Creare",
//   description: "All Creates",
// };

// Simulate a database read for tasks.

export default function TaskPage() {
  const [filter, setFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageSize: 10,
    pageIndex: 0,
  });
  const [pageCount, setPageCount] = useState<number>(100);
  const [hashtag, sethashtag] = useState<any>([]);
  const [totalHashtags, setTotalHashtags] = useState<any>(0);

  const { loading, error, data } = useQuery(GET_HASHTAGS, {
    onCompleted(data) {
      sethashtag(data?.AdminGetAllHashtags);
      let pageCount = Math.ceil(data?.AdminGetAllHashtags?.total / pagination.pageSize);
      pageCount = pageCount == 0 ? 1 : pageCount;
      setPageCount(pageCount);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: pagination.pageSize,
      page: pagination.pageIndex,
      search: filter
    },
  });

  const _ = useQuery(GET_HASHTAGS, {
    onCompleted(data) {
      setTotalHashtags(data?.AdminGetAllHashtags?.total)
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {},
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
              <div className="text-2xl font-bold">{totalHashtags}</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>
        </div>
        {hashtag?.data ? (
          <DataTable data={hashtag?.data} columns={columns}  pagination={pagination} onPaginationChange={setPagination} pageCount={pageCount} filter={filter} onGlobalFilterChange={setFilter} loading={loading}/>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
