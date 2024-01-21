"use client";

import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { taskSchema } from "./data/schema";
import { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { ADMIN_CONTENTS } from "@/graphql";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDateRangePicker } from "../components/date-range-picker";
import { Button } from "@/components/ui/button";

// export const metadata: Metadata = {
//   title: "Creare",
//   description: "All Creates",
// };

// Simulate a database read for tasks.

export default function TaskPage() {
  const [contents, setcontents] = useState<any>({});
  const [date, setdate] = useState<any>();

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
      limit: 10000,
      page: 0,
    },
  });

  const [trendingUx, q] = useLazyQuery(ADMIN_CONTENTS, {
    onCompleted(data) {
      if (data?.AdminGetAllContents) {
        setcontents(data?.AdminGetAllContents);
      }
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 10000,
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
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker
            onChange={(x: any) => {
              setdate(x);
              console.log(x);
            }}
          />
          <Button
            disabled={q.loading}
            onClick={() => {
              let start = new Date(date.from);
              let end = new Date(date.to);

              trendingUx({
                variables: {
                  limit: 50,
                  page: 0,
                  from: start.toISOString(),
                  to: end.toISOString(),
                },
              });
            }}
          >
            {q.loading ? "Loading..." : "Apply"}
          </Button>
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
