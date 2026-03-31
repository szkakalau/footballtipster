/** Curated examples for the landing page — illustrative of newsletter format */
export type ExamplePick = {
  fixture: string;
  modelEdge: string;
  pick: string;
  price: string;
  closing: string;
  result: "Win" | "Loss" | "Push";
};

export const EXAMPLE_PICKS: ExamplePick[] = [
  {
    fixture: "Liverpool vs Brighton",
    modelEdge: "+6.2%",
    pick: "Liverpool ML",
    price: "1.83",
    closing: "1.72",
    result: "Win",
  },
  {
    fixture: "Inter vs Atalanta",
    modelEdge: "+3.1%",
    pick: "Under 2.5 goals",
    price: "1.91",
    closing: "1.88",
    result: "Win",
  },
  {
    fixture: "Dortmund vs Stuttgart",
    modelEdge: "+4.8%",
    pick: "Both teams to score — Yes",
    price: "1.76",
    closing: "1.74",
    result: "Loss",
  },
  {
    fixture: "Real Sociedad vs Valencia",
    modelEdge: "+2.4%",
    pick: "Real Sociedad -0.5 Asian",
    price: "1.98",
    closing: "1.95",
    result: "Push",
  },
];
