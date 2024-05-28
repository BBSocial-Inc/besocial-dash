"use client";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ADMIN_GET_WITHDRAW_REQUESTS } from "@/graphql";

export default function TaskPage() {
  const [filter, setFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageSize: 10,
    pageIndex: 0,
  });
  const [requests, setRequests] = useState<any>([]);
  const [requestsCount, setRequestsCount] = useState<number>(null);

  const countries = [];

  const { loading, error, data } = useQuery(ADMIN_GET_WITHDRAW_REQUESTS, {
    onCompleted(data) {
      const reqs = data?.AdminGetWithdrawRequests?.withdraw_requests ?? [];
      const formattedRequests = reqs.map(req => ({ ...req, username: req.user?.username ?? null }));
      setRequests(formattedRequests);

      let pageCount = Math.ceil(data?.AdminGetWithdrawRequests?.count / pagination.pageSize);
      pageCount = pageCount == 0 ? 1 : pageCount;
      setRequestsCount(pageCount);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: pagination.pageSize,
      page: pagination.pageIndex,
    },
  });

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      {requests && <DataTable data={requests} columns={columns} pagination={pagination} onPaginationChange={setPagination} pageCount={requestsCount} filter={filter} onGlobalFilterChange={setFilter} loading={loading} />}
    </div>
  );
}
