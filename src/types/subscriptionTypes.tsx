export interface SubscriptionType {
  email: string;
  enabled: boolean;
  subscribed: boolean;
}

export interface UpdateSubscriptionInput {
  id: number;
  field: "enabled" | "subscribed";
  newValue: boolean;
}
