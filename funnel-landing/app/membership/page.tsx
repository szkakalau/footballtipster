import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Support the project. Unlock deeper research — full model picks, early access, and extended analysis.",
  openGraph: {
    title: "Membership",
    description:
      "Support the project. Unlock deeper research — full model picks, early access, and extended analysis.",
    type: "website",
  },
};

export default function MembershipPage() {
  return (
    <main>
      <section className="hero membershipHero">
        <div className="container">
          <div className="heroCard membershipHeroCard">
            <div className="stamp">Member access</div>
            <div className="heroInner membershipHeroInner">
              <div className="membershipHeroGrid">
                <div>
                  <div className="sEyebrow">Membership</div>
                  <h1 className="hTitle membershipH1">
                    Support the project. Unlock deeper research.
                  </h1>
                  <p className="hSub">
                    Get full model picks, early access, and extended analysis.
                    This paid tier helps keep the free newsletter running and ad-free.
                  </p>
                  <div className="ctaRow">
                    <a className="btn btnPrimary" href="#pricing">
                      <span className="btnIcon" aria-hidden="true" />
                      <span>View Membership</span>
                    </a>
                    <a className="btn" href="#faq">
                      <span style={{ fontWeight: 600 }}>Read the FAQ</span>
                    </a>
                  </div>
                  <p className="membershipCtaFine">
                    Cancel anytime · No long-term commitment
                  </p>
                </div>

                <aside className="membershipHeroAside" aria-label="What changes with membership">
                  <div className="membershipAsideCard">
                    <div className="membershipAsideTop">
                      <div className="membershipAsideEyebrow">Free = overview</div>
                      <div className="membershipAsideDivider" aria-hidden="true" />
                      <div className="membershipAsideEyebrow membershipAsideEyebrowStrong">
                        Member = full research access
                      </div>
                    </div>
                    <ul className="membershipAsideList">
                      <li>
                        <span className="membershipAsideDot" aria-hidden="true" />
                        <span>
                          <strong>Full weekly pick list</strong> (not just highlights)
                        </span>
                      </li>
                      <li>
                        <span className="membershipAsideDot" aria-hidden="true" />
                        <span>
                          <strong>Earlier access</strong> than the free email
                        </span>
                      </li>
                      <li>
                        <span className="membershipAsideDot" aria-hidden="true" />
                        <span>
                          <strong>Extended reasoning</strong> + model notes
                        </span>
                      </li>
                      <li>
                        <span className="membershipAsideDot" aria-hidden="true" />
                        <span>
                          <strong>Extra stats</strong> & tracking insights
                        </span>
                      </li>
                    </ul>
                    <div className="membershipAsideFootnote">
                      No promises. No hype. Just data and tracking.
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="why">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sEyebrow">WHY THERE IS A PAID TIER</div>
              <h2 className="sTitle">Why a paid membership exists</h2>
            </div>
          </div>

          <div className="twoCol">
            <div className="prose">
              <p>This project is run independently by one data nerd.</p>
              <p>
                The free newsletter will always exist. The paid tier simply helps fund
                the time, data, and infrastructure required to keep the research public.
              </p>
              <p className="membershipLines">
                <span>No syndicates.</span>
                <span>No tipping service.</span>
                <span>Just transparent tracking and analysis.</span>
              </p>
            </div>

            <div className="founderVoice">
              <div className="founderVoiceInner">
                <p className="founderVoiceEyebrow">The principle</p>
                <p className="founderQuote">
                  “If it can’t be tracked, it can’t be trusted.”
                </p>
                <p className="founderVoiceNote">
                  Membership keeps the research ad-free and lets me spend more time on the boring,
                  expensive parts: data, infra, and honest accounting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="comparison">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sEyebrow">FREE vs MEMBER COMPARISON</div>
              <h2 className="sTitle">Free vs Member Access</h2>
            </div>
            <div className="pill membershipPill">Simple idea: Free = overview · Member = full research access</div>
          </div>

          <div className="membershipCompareWrap" role="region" aria-label="Free vs member comparison table">
            <table className="membershipCompare">
              <thead>
                <tr>
                  <th scope="col" className="membershipCompareTh">Free Newsletter</th>
                  <th scope="col" className="membershipCompareTh membershipCompareThMember">Member Access</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3–5 weekly picks</td>
                  <td className="membershipCompareMemberCell">Full weekly pick list</td>
                </tr>
                <tr>
                  <td>Short notes</td>
                  <td className="membershipCompareMemberCell">Detailed reasoning &amp; model notes</td>
                </tr>
                <tr>
                  <td>Picks released weekly</td>
                  <td className="membershipCompareMemberCell">Earlier access to picks</td>
                </tr>
                <tr>
                  <td>Public performance tracking</td>
                  <td className="membershipCompareMemberCell">Additional stats &amp; insights</td>
                </tr>
                <tr>
                  <td>Support link in emails</td>
                  <td className="membershipCompareMemberCell">Directly support the project</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="what-you-get">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sEyebrow">WHAT MEMBERS GET</div>
              <h2 className="sTitle">What members receive each week</h2>
            </div>
          </div>

          <div className="card cardMember">
            <div className="cardInner">
              <p className="listLead">Members get full access to the weekly research workflow:</p>
              <ul className="bullets bulletsConcrete membershipBullets">
                <li>Full model pick list</li>
                <li>Picks released earlier than the free email</li>
                <li>Extended reasoning and context</li>
                <li>Extra performance metrics and tracking</li>
                <li>Occasional behind-the-scenes research notes</li>
              </ul>

              <div className="membershipDivider" />

              <p className="membershipNotService">
                This is <strong>not</strong> a betting service. It is deeper access to the research behind the newsletter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="positioning">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sEyebrow">POSITIONING</div>
              <h2 className="sTitle">What this membership is (and isn’t)</h2>
            </div>
          </div>

          <div className="membershipIsNot">
            <div className="membershipIs card">
              <div className="cardInner">
                <p className="membershipIsLead">This is:</p>
                <ul className="membershipTicks" aria-label="What this is">
                  <li>A research product</li>
                  <li>A transparency project</li>
                  <li>A way to support independent work</li>
                </ul>
              </div>
            </div>

            <div className="membershipIsnt card membershipIsntCard">
              <div className="cardInner">
                <p className="membershipIsLead">This is NOT:</p>
                <ul className="membershipXs" aria-label="What this is not">
                  <li>A “guaranteed profit” service</li>
                  <li>A betting syndicate</li>
                  <li>Financial advice</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="membershipNoHype">
            <span>No promises.</span>
            <span>No hype.</span>
            <span>Just data and tracking.</span>
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sEyebrow">PRICING</div>
              <h2 className="sTitle">Simple pricing</h2>
            </div>
          </div>

          <div className="membershipPricingGrid">
            <div className="card membershipPricingCard">
              <div className="cardInner membershipPricingInner">
                <div className="membershipPlanName">Member Access</div>
                <div className="membershipPrice">
                  <span className="membershipPriceNum">$15</span>
                  <span className="membershipPriceUnit">/ month</span>
                </div>
                <p className="memberTeaser">Includes everything listed above.</p>
                <p className="memberTeaser" style={{ marginTop: 10 }}>
                  Cancel anytime. No contracts.
                </p>

                <div className="ctaRow" style={{ marginTop: 16 }}>
                  <a className="btn btnPrimary" href="#final-cta">
                    <span className="btnIcon" aria-hidden="true" />
                    <span>Become a Member</span>
                  </a>
                  <a className="btn btnGhost" href="#comparison">
                    Compare first
                  </a>
                </div>

                <p className="membershipReassure">You can downgrade or cancel in seconds.</p>
                <p className="status membershipBillingNote">
                  This site doesn&apos;t process payments. Checkout or billing happens through the secure link we send members — not on this page.
                </p>
              </div>
            </div>

            <div className="membershipRiskCard">
              <div className="card membershipRiskCardInner">
                <div className="cardInner">
                  <div className="sEyebrow">RISK REDUCTION</div>
                  <h3 className="membershipRiskTitle">No risk, no pressure</h3>
                  <ul className="membershipRiskList">
                    <li>You can stay on the free newsletter forever.</li>
                    <li>Membership is optional — for readers who want deeper access and want to support the project.</li>
                    <li>There is no long-term commitment.</li>
                    <li>There are no guarantees of profit.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sEyebrow">FAQ</div>
              <h2 className="sTitle">Frequently Asked Questions</h2>
            </div>
          </div>

          <div className="membershipFaq" role="list">
            <details className="membershipFaqItem" role="listitem">
              <summary className="membershipFaqSummary">Is this gambling advice?</summary>
              <div className="membershipFaqBody">
                No. This is a research newsletter sharing model outputs and tracking results publicly.
              </div>
            </details>
            <details className="membershipFaqItem" role="listitem">
              <summary className="membershipFaqSummary">Why is there a paid tier?</summary>
              <div className="membershipFaqBody">
                The paid tier funds data, tools, and time required to run the project and keep the free newsletter alive.
              </div>
            </details>
            <details className="membershipFaqItem" role="listitem">
              <summary className="membershipFaqSummary">Do you guarantee profits?</summary>
              <div className="membershipFaqBody">
                No. There are no guarantees. This is research and analysis, not financial advice.
              </div>
            </details>
            <details className="membershipFaqItem" role="listitem">
              <summary className="membershipFaqSummary">Can I cancel anytime?</summary>
              <div className="membershipFaqBody">
                Yes. Membership can be cancelled at any time with no penalties.
              </div>
            </details>
            <details className="membershipFaqItem" role="listitem">
              <summary className="membershipFaqSummary">Will the free newsletter remain free?</summary>
              <div className="membershipFaqBody">
                Yes. The free newsletter is the core of the project and will continue to exist.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="section membershipFinalCta" id="final-cta">
        <div className="container">
          <div className="card membershipFinalCard">
            <div className="cardInner membershipFinalInner">
              <div className="sEyebrow">FINAL CTA</div>
              <h2 className="sTitle" style={{ marginTop: 8 }}>
                Support the project
              </h2>
              <p className="membershipFinalLead">
                If you enjoy the free newsletter and want deeper access, membership helps keep this project running.
              </p>
              <div className="ctaRow">
                <a className="btn btnPrimary" href="#pricing">
                  <span className="btnIcon" aria-hidden="true" />
                  <span>Become a Member</span>
                </a>
                <a className="btn" href="/#free">
                  Stay on the free newsletter
                </a>
              </div>
              <div className="note" aria-label="Reassurances">
                <span className="noteTag">Cancel anytime</span>
                <span className="noteTag">No pressure</span>
                <span className="noteTag">No guarantees</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
