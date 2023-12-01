"use client";
import { Separator } from "@/components/ui/separator";
import { AccountForm } from "@/app/dashboard/settings/campaign/account-form";
import { Badge } from "@/components/ui/badge";
import { useData } from "@/context/DataContext";

export default function SettingsAccountPage() {
  const { activeCampaign } = useData();
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Campaign</h3>
        <p className="text-sm text-muted-foreground">
          Update your campaign settings. Get your API Key and set your webhook
        </p>
      </div>
      <Separator />
      <h6 className="text-sm font-medium">API Key</h6>
      <p className="text-sm text-muted-foreground">
        <Badge>Private</Badge> {activeCampaign?.apiKey}
      </p>
      <Separator />
      <AccountForm />
    </div>
  );
}
