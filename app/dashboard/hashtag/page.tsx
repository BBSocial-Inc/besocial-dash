"use client";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useState } from "react";
import { GET_HASHTAGS } from "@/graphql";
import { useQuery } from "@apollo/client";

// export const metadata: Metadata = {
//   title: "Creare",
//   description: "All Creates",
// };

// Simulate a database read for tasks.

export default function TaskPage() {
  const [hashtag, sethashtag] = useState<any>([]);

  const trendingU = useQuery(GET_HASHTAGS, {
    onCompleted(data) {
      sethashtag(data?.AllHashtags);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 50,
      page: 0,
      sortBy: "trending",
    },
  });

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={hashtag} columns={columns} />
      </div>
    </>
  );
}
