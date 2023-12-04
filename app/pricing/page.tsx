"use client";

import { cn, constants } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";
import axiosInstance from "@/lib/axios";
import { CheckIcon } from "@heroicons/react/20/solid";
import Nav from "@/components/Nav";
// import { RocketIcon } from "@radix-ui/react-icons";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const includedFeatures = [
  "Full Access",
  "24/7 Support & Onboarding",
  "Webhook Notifications",
  "Analytics & Insights",
];

export default function AuthenticationPage() {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const { user } = useUser();

  const createSubscription = async () => {
    const response = await axiosInstance.post(
      constants.API_URL + "/create-flutterwave-payment",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
      }
    );

    const data = await response?.data;
    router.push(data.link);
  };

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    }
  }, [user]);

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <Nav selected="Pricing" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-gilroy-bold tracking-tight text-gray-900 sm:text-4xl">
              7 Days Free Trial
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unlock premium features and exclusive content with our
              subscription plans. Join us today and elevate your experience!
            </p>
          </div>
          {/* <Alert className="mt-10 w-fit">
            <RocketIcon className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              All pro features are FREE right now so you don&apos;t need to
              subscribe. <br />
              Remember to give use feedback on the product
            </AlertDescription>
          </Alert> */}
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-15 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-gilroy-bold tracking-tight text-gray-900">
                BeSocial Pro
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Upgrade to Pro for even more benefits and enhanced access.
                Elevate your subscription and take your experience to the next
                level!
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-black">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Monthly
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold text-gray-900 tracking-normal ">
                      $15.00
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <div
                    onClick={() => {
                      if (isAuthenticated) {
                        setLoading(true);
                        createSubscription();
                      } else {
                        router.push("/auth");
                      }
                    }}
                    className="cursor-pointer mt-10 block w-full rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#4d4d4d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </div>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Enjoy 7 days free trial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
}
