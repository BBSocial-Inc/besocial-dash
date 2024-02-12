"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { authType, deviceType, priorities, statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";
import DebouncedInput from "@/components/DebouncedInput";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  globalFilter: any;
  onGlobalFilterChange: any;
}

export function DataTableToolbar<TData>({
  table,
  globalFilter,
  onGlobalFilterChange
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <DebouncedInput
          placeholder="search report..."
          value={globalFilter}
          onChange={(event) =>
            onGlobalFilterChange(event)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        <DataTableFacetedFilter
          column={table.getColumn("report_type")}
          title="Type"
          options={[
            {
              label: "app",
              value: "app",
            },
            {
              label: "content",
              value: "content",
            },
            {
              label: "user",
              value: "user",
            },
            {
              label: "hashtag",
              value: "hashtag",
            },
          ]}
        />

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
