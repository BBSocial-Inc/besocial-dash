"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Input } from "@/components/ui/input";
import { DataTableRowActions } from "./data-table-row-actions";

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
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "email_admin",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("email_admin")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "username",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="username" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("username")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "how_hear_about_us",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Heard from" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("how_hear_about_us") ?? 'N/A'}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "auth_type_admin",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="auth_type" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("auth_type_admin")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "platform",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Plaform" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("platform")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="country" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("country")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("created_at")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "birthday_admin",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bithday" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("birthday_admin")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "numberOfContent",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No. of Contents" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("numberOfContent")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "numberOfHashtags",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No. of Hashtags" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("numberOfHashtags")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "viewsCOunt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Views Count" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("viewsCOunt")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "referredUsersCount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Referred Users" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("referredUsersCount")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "is_blocked",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Blocked" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("is_blocked") ? "YES" : "NO"}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "bs_pin",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Referral Link" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          {/* Replace the link with readyonly input */}
          {/* <a
            href={"https://joinb.social/refer/" + row.getValue("bs_pin")}
            className="max-w-[500px] truncate font-medium text-[blue]"
          >
            Link
          </a> */}

          <Input
            type="text"
            value={"https://joinb.social/refer/" + row.getValue("bs_pin")}
            className="cursor-pointer w-auto"
            title="Copy"
            readOnly={true}
            onClick={(event) => {
              event.preventDefault();
              // Copy the referral link upon clicking
              const pinValue = event.target.value;
              navigator.clipboard.writeText(pinValue)
            }}
          />
        </div>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
