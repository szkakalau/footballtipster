import type { Metadata } from "next";
import Link from "next/link";
import PicksHistoryTable from "@/components/PicksHistoryTable";
import { PICKS_HISTORY } from "@/data/picksHistory";

export const metadata: Metadata = {
  title: "Pick history",
  description:
    "Dated picks with published odds and settled results — transparency log for our football model.",
  openGraph: {
    title: "Pick history",
    description:
      "Dated picks with published odds and settled results — transparency log for our football model.",
    type: "website",
  },
};

export default function PicksHistoryPage() {
  return (
    <main>
      <section className="section sectionTightTop">
        <div className="container">
          <div className="sEyebrow">Proof stack</div>
          <h1 className="sTitle">Pick history</h1>
          <p className="membershipLead">
            Tipster sites live or die on trust. This table is a{" "}
            <strong>dated, line-in-the-sand log</strong>: what we published, at
            which decimal price, and how it settled. It exists so you can sanity
            — check us against your own records — not to promise future profits.
          </p>
          <p className="proofMeta">
            Showing <strong>{PICKS_HISTORY.length}</strong> recent settled
            selections. Replace this sample with your live export when ready.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <PicksHistoryTable />
          <div className="proofStackActions">
            <Link href="/#free" className="btn btnPrimary">
              <span className="btnIcon" aria-hidden="true" />
              <span>Get free weekly picks by email</span>
            </Link>
            <Link href="/#how" className="btn btnGhost">
              How the model works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
