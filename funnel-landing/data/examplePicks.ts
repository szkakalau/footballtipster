/** Curated examples for the landing page — illustrative of newsletter format */
export type ExamplePick = {
  fixture: string;
  modelEdge: string;
  pick: string;
  price: string;
  closing: string;
  result: "Win" | "Loss" | "Push";
  noteExcerpt: string;
};

export const EXAMPLE_PICKS: ExamplePick[] = [
  {
    fixture: "Tottenham vs Aston Villa",
    modelEdge: "+5.8%",
    pick: "Tottenham ML",
    price: "1.91",
    closing: "1.78",
    result: "Win",
    noteExcerpt: "Market overpriced Villa after Europa League match…",
  },
  {
    fixture: "Real Sociedad vs Valencia",
    modelEdge: "+3.0%",
    pick: "Under 2.5 goals",
    price: "1.88",
    closing: "1.81",
    result: "Win",
    noteExcerpt: "Low-tempo matchup + market leaned too hard on recent scorelines…",
  },
  {
    fixture: "Inter vs Atalanta",
    modelEdge: "+2.6%",
    pick: "Inter -0.5 Asian",
    price: "1.95",
    closing: "1.87",
    result: "Loss",
    noteExcerpt: "We liked the price pre-kick; late injury news flipped the game state…",
  },
];
