"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import Link from "next/link";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[50px] truncate">{row.getValue("_id")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "creator",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Creator" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("creator")?.username}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "likes",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Likes" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("likes")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "views",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="views" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("views")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "number_of_comments",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="comments" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("number_of_comments")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "number_of_comments",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="comments" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("number_of_comments")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "hashtags",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Hashtags" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] truncate font-medium">
            {row.getValue("hashtags").map((item, index) => {
              return <text key={index}>{item.text},</text>;
            })}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "thumbnail_url",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Content" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <img
            src={row.getValue("thumbnail_url")}
            className=" max-h-[50px] bg-[#eee] truncate font-medium cursor-pointer"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Content" />
    ),
    cell: ({ row }) => {
      return <div className="flex space-x-2">{row.getValue("created_at")}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
