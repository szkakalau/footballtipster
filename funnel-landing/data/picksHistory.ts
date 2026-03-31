/**
 * Sample pick log for transparency / proof stack.
 * Replace with your real export or CMS feed when available.
 */
export type PickRecord = {
  date: string;
  league: string;
  fixture: string;
  pick: string;
  /** Decimal odds at time of publication */
  price: string;
  outcome: "W" | "L" | "Push";
};

export const PICKS_HISTORY: PickRecord[] = [
  {
    date: "2026-02-28",
    league: "EPL",
    fixture: "Brighton vs Bournemouth",
    pick: "Over 2.5 goals",
    price: "1.92",
    outcome: "W",
  },
  {
    date: "2026-02-28",
    league: "La Liga",
    fixture: "Athletic vs Mallorca",
    pick: "Under 2.5 goals",
    price: "1.85",
    outcome: "L",
  },
  {
    date: "2026-02-27",
    league: "Serie A",
    fixture: "Atalanta vs Fiorentina",
    pick: "Home -1 Asian handicap",
    price: "1.98",
    outcome: "Push",
  },
  {
    date: "2026-02-27",
    league: "Bundesliga",
    fixture: "Wolfsburg vs Bochum",
    pick: "Both teams to score — Yes",
    price: "1.76",
    outcome: "W",
  },
  {
    date: "2026-02-26",
    league: "UEL",
    fixture: "Roma vs Porto",
    pick: "Under 2.5 goals",
    price: "1.88",
    outcome: "W",
  },
  {
    date: "2026-02-25",
    league: "UCL",
    fixture: "Inter vs Arsenal",
    pick: "Inter double chance",
    price: "1.62",
    outcome: "W",
  },
  {
    date: "2026-02-24",
    league: "UCL",
    fixture: "Bayern vs Celtic",
    pick: "Bayern -1.5 Asian handicap",
    price: "2.02",
    outcome: "L",
  },
  {
    date: "2026-02-23",
    league: "EPL",
    fixture: "West Ham vs Newcastle",
    pick: "Over 2.5 goals",
    price: "1.79",
    outcome: "W",
  },
  {
    date: "2026-02-22",
    league: "EPL",
    fixture: "Man City vs Liverpool",
    pick: "Over 1.5 first half goals",
    price: "1.91",
    outcome: "L",
  },
  {
    date: "2026-02-21",
    league: "La Liga",
    fixture: "Barcelona vs Getafe",
    pick: "Barcelona -1.5 Asian handicap",
    price: "1.95",
    outcome: "W",
  },
  {
    date: "2026-02-20",
    league: "Ligue 1",
    fixture: "Monaco vs Nantes",
    pick: "Monaco to win",
    price: "1.72",
    outcome: "W",
  },
  {
    date: "2026-02-19",
    league: "Europa Conf.",
    fixture: "Fiorentina vs Panathinaikos",
    pick: "Under 2.5 goals",
    price: "1.84",
    outcome: "W",
  },
  {
    date: "2026-02-18",
    league: "FAC",
    fixture: "Birmingham vs Newcastle",
    pick: "Newcastle to win",
    price: "1.68",
    outcome: "W",
  },
  {
    date: "2026-02-17",
    league: "UCL",
    fixture: "Benfica vs Juventus",
    pick: "Both teams to score — No",
    price: "2.08",
    outcome: "L",
  },
  {
    date: "2026-02-16",
    league: "EPL",
    fixture: "Everton vs Man Utd",
    pick: "Under 2.5 goals",
    price: "1.87",
    outcome: "W",
  },
  {
    date: "2026-02-15",
    league: "Serie A",
    fixture: "Juventus vs Inter",
    pick: "Under 2.5 goals",
    price: "1.73",
    outcome: "W",
  },
  {
    date: "2026-02-14",
    league: "Bundesliga",
    fixture: "Dortmund vs Stuttgart",
    pick: "Over 3.0 goals (Asian)",
    price: "1.94",
    outcome: "W",
  },
  {
    date: "2026-02-13",
    league: "La Liga",
    fixture: "Real Sociedad vs Espanyol",
    pick: "Real Sociedad to win",
    price: "1.81",
    outcome: "L",
  },
  {
    date: "2026-02-12",
    league: "EPL",
    fixture: "Chelsea vs Wolves",
    pick: "Chelsea -1 Asian handicap",
    price: "1.99",
    outcome: "W",
  },
  {
    date: "2026-02-11",
    league: "UCL",
    fixture: "PSG vs Bayern",
    pick: "Over 2.5 goals",
    price: "1.77",
    outcome: "W",
  },
];
