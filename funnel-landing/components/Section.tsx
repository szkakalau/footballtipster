import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  rightSlot,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  rightSlot?: ReactNode;
}) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="sectionHead">
          <div>
            <div className="sEyebrow">{eyebrow}</div>
            <h2 className="sTitle">{title}</h2>
          </div>
          {rightSlot ? <div style={{ maxWidth: 420, width: "100%" }}>{rightSlot}</div> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

