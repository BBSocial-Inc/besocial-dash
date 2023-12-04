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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// export const metadata: Metadata = {
//   title: "Creare",
//   description: "All Creates",
// };

// Simulate a database read for tasks.

export default function TaskPage() {
  const [contents, setcontents] = useState<any>({});

  const trendingU = useQuery(ADMIN_CONTENTS, {
    onCompleted(data) {
      if (data?.AdminGetAllContents) {
        setcontents(data?.AdminGetAllContents);
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contents?.total}</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>
        </div>
        {contents?.data ? (
          <DataTable data={contents?.data} columns={columns} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
