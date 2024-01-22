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
  const [reports, setreports] = useState<any>([]);

  const trendingU = useQuery(GET_REPORTS, {
    onCompleted(data) {
      setreports(data?.ListReport);
      console.log(data.ListReport);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 100,
      page: 0,
    },
  });

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={reports} columns={columns} />
      </div>
    </>
  );
}
