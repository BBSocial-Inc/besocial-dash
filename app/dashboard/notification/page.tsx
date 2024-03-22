"use client";

import * as React from "react";

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ADMIN_USER, ADMIN_USER_COUNT } from "@/graphql";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TaskPage() {
  const [contentUrl, setContentUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const [notificationType, setNotificationType] = useState("marketing");

  const handleNotificationTypeChange = (value) => {
    setNotificationType(value);
  };

  const handleSendNotifications = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <Card className="w-full md:max-w-lg">
        <CardHeader>
          <CardTitle>Send Bulk Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          {/* For selecting the type of notification */}
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Notification Type</p>
            <Select
              value={notificationType}
              onValueChange={handleNotificationTypeChange}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select notification type" />
              </SelectTrigger>
              <SelectContent side="top">
                {['marketing', 'content'].map((notificationType) => (
                  <SelectItem key={notificationType} value={notificationType}>
                    {notificationType.charAt(0).toUpperCase() + notificationType.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Input
              id="title"
              placeholder="Title..."
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="mt-4"
            />
            <Input
              id="body"
              placeholder="Body..."
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              onChange={(e) => setBody(e.target.value)}
              value={body}
              className="mt-4"
            />
            {notificationType === "content" && (
              <Input
                id="content-url"
                placeholder="Content URL..."
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                onChange={(e) => setContentUrl(e.target.value)}
                value={contentUrl}
                className="mt-4"
              />
            )}
            <div className="mt-4 flex justify-end">
              <Button onClick={handleSendNotifications}>
                Send Notifications
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
