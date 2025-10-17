
export enum ClientStatus {
  Active = 'active',
  Paused = 'paused',
  Completed = 'completed',
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  goal: string;
  startDate: string;
  currentWeight: number;
  targetWeight: number;
  status: ClientStatus;
  notes?: string;
}
