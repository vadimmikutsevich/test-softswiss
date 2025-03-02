import OfferCard from "./OfferCard";

import realityBorderSpace from "../assets/images/reality_borders_space.svg";
import isNotJustSpace from "../assets/images/is_not_just_space.svg";
import starsDreamSpace from "../assets/images/stars_dream_space.svg";
import fantasticDreamsSpace from "../assets/images/fantastic_dreams_space.svg";

const Offers = () => {
  return (
    <section className="offers">
      <div className="wrapper">
        <h4 className="offers__heading">Offers</h4>
        <div className="offers__grid">
          <OfferCard
            className="offers__item1"
            variant="wide"
            title="Move the borders of reality!"
            subtitle="Go on a space adventure - it's possible with us!"
            bgImage={realityBorderSpace}
          />
          <OfferCard
            className="offers__item2"
            title="Space is not just stars and planets"
            subtitle="Go on a space adventure"
            bgImage={isNotJustSpace}
          />
          <OfferCard
            className="offers__item3"
            title="For those who dream of stars"
            subtitle="Our offer: make your dream come true"
            bgImage={starsDreamSpace}
          />
          <OfferCard
            className="offers__item4"
            variant="wide"
            title="Fulfill your fantastic dreams"
            subtitle="Space has never been so close"
            bgImage={fantasticDreamsSpace}
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
