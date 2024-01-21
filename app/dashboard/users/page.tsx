"use client";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ADMIN_USER } from "@/graphql";

// export const metadata: Metadata = {
//   title: "Users",
//   description: "All users",
// };

// Simulate a database read for tasks.

export default function TaskPage() {
  const [tasks, settasks] = useState<any>([]);

  const countries = [];

  const trendingU = useQuery(ADMIN_USER, {
    onCompleted(data) {
      // alert(data?.AdminGetUsers);
      settasks(data?.AdminGetUsers);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 10000,
      page: 0,
    },
  });

  useEffect(() => {
    console.log(tasks);

    tasks?.map((x) => {
      if (x.country) {
        countries.push(x.country);
      }
    });

    let elementCounts = {};
    countries.forEach((element) => {
      if (elementCounts[element]) {
        elementCounts[element] += 1;
      } else {
        elementCounts[element] = 1;
      }
    });

    // Print the result
    for (let element in elementCounts) {
      console.log(
        `The element ${element} appears ${elementCounts[element]} times in the array.`
      );
    }
  }, [tasks]);

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div>{countries && countries.length}dd</div>
      {tasks && <DataTable data={tasks} columns={columns} />}
    </div>
  );
}
