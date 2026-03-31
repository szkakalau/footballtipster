export default function FounderVoice() {
  return (
    <div className="founderVoice">
      <div className="founderVoiceInner">
        <p className="founderVoiceEyebrow">Who&apos;s behind this</p>
        <blockquote className="founderQuote">
          Built by an independent data nerd. No company. No syndicate. Just
          obsessive tracking, published odds, and results you can verify in the
          open log.
        </blockquote>
        <p className="founderVoiceNote">
          We&apos;re not anonymous to dodge accountability — we&apos;re small by
          choice so the product stays about the numbers, not a fake cast of
          &ldquo;experts.&rdquo;{" "}
          <a href="/about" className="founderVoiceLink">
            Read the longer version →
          </a>
        </p>
      </div>
    </div>
  );
}
