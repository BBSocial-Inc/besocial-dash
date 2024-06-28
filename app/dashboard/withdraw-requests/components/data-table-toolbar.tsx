"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { authType, deviceType, priorities, statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";
import { useSearchParams } from "next/navigation";
import DebouncedInput from "@/components/DebouncedInput";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  globalFilter: any,
  onGlobalFilterChange: any
}

export function DataTableToolbar<TData>({
  table,
  globalFilter,
  onGlobalFilterChange
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
        <DebouncedInput
          placeholder="search users..."
          value={
            // (table.getColumn("name")?.getFilterValue() as string) ?? ""
            globalFilter
          }
          onChange={(event) =>{
            // table.getColumn("name")?.setFilterValue(event.target.value)
            onGlobalFilterChange(event)
          }}
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <div>
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
