"use client";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ADMIN_USER, ADMIN_USER_COUNT } from "@/graphql";

// export const metadata: Metadata = {
//   title: "Users",
//   description: "All users",
// };

// Simulate a database read for tasks.

export default function TaskPage() {
  const [filter, setFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageSize: 10,
    pageIndex: 0,
  });
  const [tasks, settasks] = useState<any>([]);
  const [usersCount, setUsersCount] = useState<number>(null);

  const countries = [];

  const { loading, error, data } = useQuery(ADMIN_USER, {
    onCompleted(data) {
      // alert(data?.AdminGetUsers);
      settasks(data?.AdminGetUsers.users);

      let pageCount = Math.ceil(data?.AdminGetUsers?.count / pagination.pageSize);
      pageCount = pageCount == 0 ? 1 : pageCount;
      setUsersCount(pageCount);
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

  useEffect(() => {
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
      {tasks && <DataTable data={tasks} columns={columns} pagination={pagination} onPaginationChange={setPagination} pageCount={usersCount} filter={filter} onGlobalFilterChange={setFilter} loading={loading}/>}
    </div>
  );
}
