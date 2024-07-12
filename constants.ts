export const AppConstants = {
  // API_URL: "https://staging.joinb.social/graphql",
  // API_URL: "https://prod.joinb.social/graphql",
  API_URL: "https://prod.joinb.social/graphql",
  WEB_SOCKET_URL: "wss://prod-api.playcandor.com/graphql",
  STRIPE_PUBLISHABLE_KEY:
    "pk_test_51MldA2B5aZ5gNVV7LSExO15WDl7AVRyr01THDxmUhCgyqHa8328KQe1aS5dnr8WPEyK2fLOh13FdFHBO4gAINKKm00LiHVC6OQ",
};

export enum GlobalVars {
  ACCES_TOKEN = "accessToken",
  FIRST_TIMER = "@firstTimer",
  CONTACTS_ADDED = "@contactsAdded",
  USER_PROFILE = "@userProfile",
  NOTIFICATION = "@notification",
  LOGOUT = "@notification",
  TEMP_USER = "@tempUser",
}

export enum NotificationType {
  MARKETING = "marketing",
  CONTENT = "content",
  CALL_FOR_ACTION = "call_for_action"
}