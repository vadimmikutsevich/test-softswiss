import Button from "./Button";

const OfferCard = ({ title, subtitle, bgImage, variant, className }) => {
  const classes = ["offer-card"];
  if (variant === "wide") classes.push("offer-card--wide");
  if (className) classes.push(className);

  return (
    <article
      className={classes.join(" ")}
      style={{
        "--bg-image": `url(${bgImage})`,
      }}
    >
      <div className="offer-card__content">
        <h3 className="offer-card__title">{title}</h3>
        <p className="offer-card__subtitle">{subtitle}</p>
        <Button className="offer-card__button" variant="outline">
          Learn more
        </Button>
      </div>
    </article>
  );
};

export default OfferCard;
