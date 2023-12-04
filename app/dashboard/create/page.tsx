"use client";

import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { taskSchema } from "./data/schema";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GET_CARDS, GET_CATEGORIES, GET_HASHTAGS, GET_TOPICS } from "@/graphql";
import { useQuery } from "@apollo/client";

// export const metadata: Metadata = {
//   title: "Creare",
//   description: "All Creates",
// };

// Simulate a database read for tasks.

export default function TaskPage() {
  const [categories, setcategories] = useState<any>([]);
  const [cards, setcards] = useState<any>([]);
  const [topics, settopics] = useState<any>([]);

  const _ = useQuery(GET_CATEGORIES, {
    onCompleted(data) {
      setcategories(data?.AllCategories);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 50,
      page: 0,
    },
  });

  const __ = useQuery(GET_CARDS, {
    onCompleted(data) {
      setcards(data?.GetCards);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 50,
      page: 0,
    },
  });

  const ___ = useQuery(GET_TOPICS, {
    onCompleted(data) {
      settopics(data?.GetTopics);
      console.log(data?.GetTopics);
    },
    onError(error) {
      console.log(error, "data");
    },
    variables: {
      limit: 50,
      page: 0,
      search: "",
    },
  });

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <Tabs defaultValue="categories">
          <TabsList>
            {/* <TabsTrigger value="cards">Cards</TabsTrigger> */}
            <TabsTrigger value="categories">Categories</TabsTrigger>
            {/* <TabsTrigger value="topics">Topics</TabsTrigger> */}
          </TabsList>

          <TabsContent
            defaultValue="categories"
            value="categories"
            className="space-y-4"
          >
            <DataTable data={categories} columns={columns} />
          </TabsContent>
          {/* <TabsContent value="topics" className="space-y-4">
            <DataTable data={topics} columns={columns} />
          </TabsContent> */}
        </Tabs>
      </div>
    </>
  );
}
