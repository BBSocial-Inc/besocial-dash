"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";
import axiosInstance from "@/lib/axios";
import { Button } from "@/components/ui/button";

export default function BillingPage() {
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const router = useRouter();

  const { user } = useUser();

  const cancelSubscription = () => {
    axiosInstance
      .post(`/api/subscription/cancel/${user.id}`)
      .then((response) => {
        setSubscription(null);
        // alert("Subscription cancelled successfully");

        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="mb-5">Billing</h1>
      {user?.subscriptionStatus === "active" ? (
        <div>
          <p>Current Plan: PRO</p>
          <Button className="mt-3" onClick={cancelSubscription}>
            Cancel Subscription
          </Button>
        </div>
      ) : (
        <>
          <p>You do not have an active subscription.</p>
          <Button
            className="mt-3"
            onClick={() => {
              router.push("/pricing");
            }}
          >
            Upgrade to Pro
          </Button>
        </>
      )}
    </div>
  );
}
