import { Check } from "lucide-react";

export function PricingCards({ tiers, className = "", containerClassName = "", cardClassName = "", sectionClassName = "" }) {
  return (
    <section className={`pricing-cards ${sectionClassName}`.trim()} aria-label="Pricing plans">
      <div className={`pricing-cards__container ${containerClassName}`.trim()}>
        <div className={`pricing-cards__grid ${className}`.trim()}>
          {tiers.map((tier) => (
            <article
              className={`pricing-card${tier.highlight ? " pricing-card--highlight" : ""} ${cardClassName}`.trim()}
              key={tier.id}
            >
              <div className="pricing-card__body">
                <header className="pricing-card__header">
                  <h3>{tier.name}</h3>
                  <div className="pricing-card__price">
                    <span className="pricing-card__currency">{tier.currency}</span>
                    <span className="pricing-card__amount">{tier.price}</span>
                    <span className="pricing-card__interval">{tier.interval}</span>
                  </div>
                  <p>{tier.description}</p>
                </header>

                <div className="pricing-card__features">
                  {tier.features.map((feature) => (
                    <div className={`pricing-card__feature${feature.included ? "" : " pricing-card__feature--muted"}`} key={feature.id}>
                      <span className="pricing-card__check" aria-hidden="true"><Check size={15} strokeWidth={2.2} /></span>
                      <span>{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingCards;
