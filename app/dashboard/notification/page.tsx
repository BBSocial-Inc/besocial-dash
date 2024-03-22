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

export default function TaskPage() {
  const [contentUrl, setContentUrl] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [notificationType, setNotificationType] = useState("marketing");

  const handleNotificationTypeChange = (value) => {
    setNotificationType(value);
  };

  const handleSendNotifications = (e) => {
    e.preventDefault();
  }

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      {/* For selecting the type of notification */}
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Notificatiion Type</p>
        <Select
          value={notificationType}
          onValueChange={handleNotificationTypeChange}
        >
          <SelectTrigger className="h-8 w-[100px]">
            <SelectValue placeholder="Select notification type" />
          </SelectTrigger>
          <SelectContent side="top">
            {['marketing', 'content'].map((notificationType) => (
              <SelectItem key={notificationType} value={notificationType}>
                {notificationType.charAt(0).toLocaleUpperCase() + notificationType.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        {notificationType === "content" && (
          <Input
            id="content-url"
            placeholder="content url ..."
            type="text"
            autoCapitalize="none"
            autoCorrect="off"
            // disabled={loading}
            onChange={(e) => setContentUrl(e.target.value)}
            value={contentUrl}
          />
        )}
        <Input
          id="message"
          placeholder="message ..."
          type="text"
          autoCapitalize="none"
          autoCorrect="off"
          // disabled={loading}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Button
          // disabled={loading}
          onClick={handleSendNotifications}
        >
          Send Notifications
        </Button>
      </div>
    </div>
  );
}
