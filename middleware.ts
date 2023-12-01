import { useUser } from "@/context/userContext";
import { NextRequest, NextResponse } from "next/server";
import { constants } from "./lib/utils";

export async function middleware(req: NextRequest) {
  const cookies = req.cookies.get("authToken");

  if (!cookies) {
    return NextResponse.next();
  }

  const user = await getUserSubscriptionStatus(cookies?.value);
  if (user?.subscriptionStatus !== "active") {
    const isInTrialMode = isUserInTrialMode(user);
    if (isInTrialMode) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/pricing", req.url));
    }
  }

  return NextResponse.next();
}

async function getUserSubscriptionStatus(token: string) {
  try {
    const response = await fetch(constants.API_URL + "/user", {
      headers: {
        Authorization: token,
      },
    });

    const data = await response.json();
    let user = data;
    return user?.user;
  } catch (error) {
    // console.log(error);
    return "inactive";
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};

export function isUserInTrialMode(user: any) {
  // Assuming the user object has 'trialStartDate' and 'trialEndDate' fields
  const currentDate = new Date();

  // Check if 'trialStartDate' and 'trialEndDate' are defined in the user object
  if (user?.trialStartDate && user?.trialEndDate) {
    const trialStartDate = new Date(user.trialStartDate);
    const trialEndDate = new Date(user.trialEndDate);

    return currentDate >= trialStartDate && currentDate <= trialEndDate;
  }

  // If 'trialStartDate' or 'trialEndDate' is not defined, the user is not in trial mode
  return false;
}
