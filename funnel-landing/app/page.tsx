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
              <div>
                <p className="listLead">Every week you&apos;ll receive:</p>
                <ul className="bullets bulletsConcrete">
                  <li>3–5 football picks</li>
                  <li>Short match breakdowns</li>
                  <li>Performance update</li>
                </ul>
              </div>
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
        id="membership"
        eyebrow="Membership"
        title="After the free email: the full experiment"
        rightSlot={
          <div className="card cardMember">
            <div className="cardInner">
              <div className="sEyebrow">Member value</div>
              <p className="memberTeaser">
                Paid members fund the tracking stack and get everything we
                publish — <strong>full daily picks</strong>, not just the weekly
                free digest.
              </p>
              <p className="listLead" style={{ marginTop: 14 }}>
                You upgrade when you want:
              </p>
              <ul className="bullets bulletsConcrete">
                <li>Every pick, every day</li>
                <li>Richer match notes &amp; edge cases</li>
                <li>Member-only performance views</li>
              </ul>
              <div className="ctaRow" style={{ marginTop: 16 }}>
                <a
                  className="btn btnPrimary"
                  href="/membership"
                  aria-label="Open membership page with benefits and entry"
                >
                  <span className="btnIcon" aria-hidden="true" />
                  <span>Membership &amp; pricing</span>
                </a>
              </div>
            </div>
          </div>
        }
      >
        <div className="card">
          <div className="cardInner">
            <div className="twoCol">
              <div>
                <p className="listLead">The funnel we actually run</p>
                <ol className="funnelSteps">
                  <li>
                    <span className="funnelStepsMark">1</span>
                    <span>
                      You join the <strong>free</strong> weekly email — 3–5
                      picks, short notes, performance snapshot.
                    </span>
                  </li>
                  <li>
                    <span className="funnelStepsMark">2</span>
                    <span>
                      If the research fits how you bet, you&apos;ll see a{" "}
                      <strong>member link</strong> in the same newsletter.
                    </span>
                  </li>
                  <li>
                    <span className="funnelStepsMark">3</span>
                    <span>
                      <strong>Members</strong> unlock full daily picks, deeper
                      breakdowns, and the full tracking layer.
                    </span>
                  </li>
                </ol>
              </div>
              <div>
                <div className="prose">
                  <p>
                    We don&apos;t hide that there&apos;s a paid tier. The free
                    letter is the on-ramp; membership is for people who want the
                    complete signal.
                  </p>
                  <p>
                    No pressure in the signup flow — but you should know what
                    comes next.
                  </p>
                </div>
                <div className="ctaRow" style={{ marginTop: 8 }}>
                  <a className="btn btnPrimary" href="/membership">
                    <span>See what members get</span>
                  </a>
                </div>
              </div>
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
