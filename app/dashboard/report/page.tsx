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
import { GET_REPORTS } from "@/graphql";
import { useQuery } from "@apollo/client";

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
  const [usersCount, setUsersCount] = useState<number>(null);
  const [reports, setreports] = useState<any>([]);

  const { loading, error, data } = useQuery(GET_REPORTS, {
    onCompleted(data) {
      setreports(data?.ListReport?.reports);
      let pageCount = Math.ceil(data?.ListReport?.totalRows / pagination.pageSize);
      pageCount = pageCount == 0 ? 1 : pageCount;
      setUsersCount(pageCount);
      console.log(data.ListReport);
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
        <DataTable data={reports} columns={columns}  pagination={pagination} onPaginationChange={setPagination} pageCount={usersCount} filter={filter} onGlobalFilterChange={setFilter} loading={loading}/>
      </div>
    </>
  );
}
