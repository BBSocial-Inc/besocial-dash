"use client";

import * as React from "react";

import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { ADMIN_SEND_NOTIFICATIONS } from "@/graphql/mutations";
import { GET_CUSTOM_PRESIGNED_URL } from "@/graphql";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axios";
import { Icons } from "@/components/icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { notificationTypes } from "./data/data";
import { NotificationType } from "@/constants";

export default function TaskPage() {
  const { toast } = useToast();

  const [contentUrl, setContentUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [cfaTitle, setCfaTitle] = React.useState("");
  const [cfaBody, setCfaBody] = React.useState("");
  const [cfaImage, setCfaImage] = useState(null);
  const [cfaButtonLink, setCfaButtonLink] = React.useState("");
  const [cfaButtonText, setCfaButtonText] = React.useState("");
  const [notificationType, setNotificationType] = useState("marketing");

  const [sendToSingleUser, setSendToSingleUser] = useState(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleNotificationTypeChange = (value) => {
    setNotificationType(value);
  };

  const [AdminSendNotifications] = useMutation(ADMIN_SEND_NOTIFICATIONS);

  const [GetCustomPresignedUrl] = useLazyQuery(GET_CUSTOM_PRESIGNED_URL);

  const handleSingleUserCheckboxToggle = (e) => {
    setSendToSingleUser(!sendToSingleUser);
    setUsername(''); // Clearing the username field
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Set the object containing file data into state
      setCfaImage({
        name: file.name,
        content: new Blob([reader.result])
      });
    };

    if (file) {
      reader.readAsArrayBuffer(file);
    }
  };

  const handleSendNotifications = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let imageUrl = null;

      // Upload the image to s3 if it is added by the user
      if (cfaImage) {
        const presignUrls = await GetCustomPresignedUrl({
          variables: {
            fileNames: [`admin-notifications-images/${cfaImage.name}`]
          },
        });

        const { get, put } = presignUrls.data.GetCustomS3PreSignedUrls.urls[0];

        imageUrl = get;
        const response = await axiosInstance.put(put, cfaImage.content, {});
      }

      const { data } = await AdminSendNotifications({
        variables: {
          notificationType: notificationType,
          username: username,
          title: title,
          body: body,
          content: contentUrl,
          cfaTitle: cfaTitle,
          cfaBody: cfaBody,
          cfaButtonLink: cfaButtonLink,
          cfaButtonText: cfaButtonText,
          cfaImageUrl: imageUrl,
        },
      });

      toast({
        title: "Success",
        variant: "default",
        description: "Notification Sent Successfully",
      });
    } catch (error) {
      console.error("Error sending notifications:", error);
      toast({
        title: "Error",
        variant: "destructive",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <Card className="w-full md:max-w-lg">
        <CardHeader>
          <CardTitle>Create Notification</CardTitle>
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
                {notificationTypes.map((notificationType, index) => (
                  <SelectItem key={index} value={notificationType.value}>
                    {notificationType.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <p className="text-sm font-medium">Send to single user</p>
            <Checkbox
              checked={sendToSingleUser}
              onClick={handleSingleUserCheckboxToggle}
            />
          </div>
          <div>
            {sendToSingleUser && (
              <Input
                id="username-input"
                placeholder="Username..."
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="mt-4"
              />
            )}
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
            {notificationType === NotificationType.CONTENT && (
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
            {notificationType === NotificationType.CALL_FOR_ACTION && (
              <>
                <Input
                  id="cfa-title"
                  placeholder="CFA Title..."
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="off"
                  onChange={(e) => setCfaTitle(e.target.value)}
                  value={cfaTitle}
                  className="mt-4"
                />
                <Textarea
                  placeholder="CFA Body..."
                  className="mt-4"
                  onChange={(e) => setCfaBody(e.target.value)}
                  value={cfaBody}
                />
                <Input
                  id="cfa-image-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-4"
                />
                <Input
                  id="cfa-button-text"
                  placeholder="CFA Button Text..."
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="off"
                  onChange={(e) => setCfaButtonText(e.target.value)}
                  value={cfaButtonText}
                  className="mt-4"
                />
                <Input
                  id="cfa-button-link"
                  placeholder="CFA Button Link..."
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="off"
                  onChange={(e) => setCfaButtonLink(e.target.value)}
                  value={cfaButtonLink}
                  className="mt-4"
                />
              </>
            )}
            <div className="mt-4 flex justify-end">
              <Button onClick={handleSendNotifications}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Send
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
