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
import { ADMIN_CONTENTS } from "@/graphql";

// export const metadata: Metadata = {
//   title: "Creare",
//   description: "All Creates",
// };

// Simulate a database read for tasks.

export default function TaskPage() {
  const [contents, setcontents] = useState<any>([]);

  const trendingU = useQuery(ADMIN_CONTENTS, {
    onCompleted(data) {
      if (data?.AdminGetAllContents?.data) {
        console.log(data?.AdminGetAllContents);
        setcontents(data?.AdminGetAllContents?.data);
      }
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 50,
      page: 0,
    },
  });

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={contents} columns={columns} />
      </div>
    </>
  );
}
