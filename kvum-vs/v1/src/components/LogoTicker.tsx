import Image from 'next/image';

const PARTNER_IDS = [1, 2, 3, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

function LogoGroup({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="ticker__group" aria-hidden={ariaHidden}>
      {PARTNER_IDS.map(id => (
        <Image
          key={id}
          src={`/images/partners/${id}.png`}
          alt=""
          className="ticker__logo"
          width={220}
          height={48}
          loading="lazy"
        />
      ))}
    </div>
  );
}

export function LogoTicker() {
  return (
    <section className="ticker ticker--logos" id="next-event" aria-label="Partners">
      <div className="ticker__track">
        <LogoGroup />
        <LogoGroup ariaHidden />
      </div>
    </section>
  );
}
