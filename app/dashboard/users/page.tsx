"use client";

import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import { taskSchema } from "./data/schema";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { ADMIN_USER } from "@/graphql";

// export const metadata: Metadata = {
//   title: "Users",
//   description: "All users",
// };

// Simulate a database read for tasks.

export default function TaskPage() {
  const [tasks, settasks] = useState<any>([]);

  const trendingU = useQuery(ADMIN_USER, {
    onCompleted(data) {
      // alert(data?.AdminGetUsers);
      settasks(data?.AdminGetUsers);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 400,
      page: 0,
    },
  });

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <DataTable data={tasks} columns={columns} />
    </div>
  );
}
