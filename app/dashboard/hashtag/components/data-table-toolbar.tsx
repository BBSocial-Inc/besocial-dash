"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { authType, deviceType, priorities, statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const router = useSearchParams();
  let searchParams = router.get("id");

  console.log(searchParams);

  if (searchParams) {
    table.getColumn("_id")?.setFilterValue(searchParams);
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="search hashtag..."
          value={(table.getColumn("text")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.getColumn("text")?.setFilterValue(event.target.value);
          }}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("country") && (
          <DataTableFacetedFilter
            column={table.getColumn("country")}
            title="Country"
            options={statuses}
          />
        )}
        {table.getColumn("device") && (
          <DataTableFacetedFilter
            column={table.getColumn("device")}
            title="Device"
            options={deviceType}
          />
        )}
        {table.getColumn("auth_type") && (
          <DataTableFacetedFilter
            column={table.getColumn("auth_type")}
            title="Auth Type"
            options={authType}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div>
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
