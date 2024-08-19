export interface SampleBus {
  title: string;
  status: "open" | "closed" | "full" | "approaching";
  gameTitle: string;
  username: string;
  date: string;
}
