// subscription
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

// email
export interface EmailType {
  subject: string;
  message: string;
}

export interface ContactEmailType extends EmailType {
  email: string;
}
