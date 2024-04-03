"use client";

import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { taskSchema } from "./data/schema";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { ADMIN_GET_REFERRED_USERS } from "@/graphql";

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
  const [pageCount, setPageCount] = useState<number>(null);
  const [refers, setrefers] = useState<any>([]);
  const { loading, error, data } = useQuery(ADMIN_GET_REFERRED_USERS, {
    onCompleted(data) {
      setrefers(data?.AdminGetReferredUsers?.users);
      let pageCount = Math.ceil(data?.AdminGetReferredUsers?.totalRows / pagination.pageSize);
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

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={refers} columns={columns}  pagination={pagination} onPaginationChange={setPagination} pageCount={pageCount} filter={filter} onGlobalFilterChange={setFilter} loading={loading}/>
      </div>
    </>
  );
}
