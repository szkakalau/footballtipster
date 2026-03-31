import Hero from "@/components/Hero";
import PerformancePanel from "@/components/PerformancePanel";
import Section from "@/components/Section";
import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="topline">
          <div className="mark">
            <span className="markDot" />
            <span>Independent research project</span>
          </div>
          <div className="pill">Weekly newsletter · experiments · tracking</div>
        </div>
      </div>

      <Hero />

      <Section
        id="why"
        eyebrow="Background"
        title="Why we built this"
        rightSlot={
          <div className="card">
            <div className="cardInner">
              <div className="sEyebrow">Notes</div>
              <ul className="bullets">
                <li>tracking</li>
                <li>research</li>
                <li>experiment</li>
              </ul>
            </div>
          </div>
        }
      >
        <div className="prose">
          <p>
            Football odds are set by massive market-makers. But markets
            aren&apos;t perfect.
          </p>
          <p>
            We started tracking thousands of matches to see if patterns exist.
          </p>
          <p>
            After 18 months and 30k+ tracked entries, we decided to open the
            research to the public.
          </p>
        </div>
      </Section>

      <Section
        id="free"
        eyebrow="Free"
        title="What you get for free"
        rightSlot={
          <div className="card">
            <div className="cardInner">
              <div className="sEyebrow">Join</div>
              <div style={{ marginTop: 8, fontSize: 22, lineHeight: 1.15 }}>
                3,200 football nerds
              </div>
              <div style={{ marginTop: 10, color: "rgba(18,17,15,.62)" }}>
                Weekly email · zero fluff · just the experiment log
              </div>
            </div>
          </div>
        }
      >
        <div className="card">
          <div className="cardInner">
            <div className="twoCol">
              <ul className="bullets">
                <li>Weekly picks newsletter</li>
                <li>Data insights</li>
                <li>Match breakdowns</li>
                <li>Performance tracking</li>
              </ul>
              <div>
                <div className="sEyebrow">Get Free Picks</div>
                <div style={{ marginTop: 10 }}>
                  <SubscribeForm />
                </div>
                <div className="status" style={{ opacity: 0.85 }}>
                  No hype. Just a weekly research note you can read in 3–5
                  minutes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="performance"
        eyebrow="Results"
        title="Model Performance"
        rightSlot={
          <div className="card">
            <div className="cardInner">
              <div className="sEyebrow">Interpretation</div>
              <div className="prose" style={{ marginTop: 10 }}>
                We summarize outcomes using research-style metrics. No revenue
                claims. No hype.
              </div>
            </div>
          </div>
        }
      >
        <PerformancePanel
          winRate="54.8%"
          clv="+1.7%"
          sample="30,412"
          period="Last 18 months"
        />
      </Section>

      <Section
        id="support"
        eyebrow="Optional"
        title="Some members choose to support the project"
        rightSlot={
          <div className="card">
            <div className="cardInner">
              <div className="sEyebrow">Support</div>
              <div className="prose" style={{ marginTop: 10 }}>
                Support helps keep the tracking infrastructure running and
                unlocks full daily picks.
              </div>
              <div className="ctaRow" style={{ marginTop: 14 }}>
                <a className="btn" href="#free" aria-label="Learn about membership">
                  <span>Learn about membership</span>
                </a>
              </div>
            </div>
          </div>
        }
      >
        <div className="card">
          <div className="cardInner">
            <div className="prose">
              <p>
                The newsletter is free. If you like the work, you&apos;ll see an
                optional support link inside the weekly email.
              </p>
              <p>
                This page is just the public research log and the free weekly
                picks.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <div className="container">
        <div className="footer">
          <div>
            Independent research newsletter. For informational purposes only.
          </div>
          <div style={{ marginTop: 8 }}>
            No transactions or gaming services on this site.
          </div>
        </div>
      </div>
    </main>
  );
}
