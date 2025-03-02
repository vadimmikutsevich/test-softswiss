import Button from "./Button";

const Banner = () => {
  return (
    <article className="banner">
      <div className="wrapper">
        <div className="banner__content">
          <h1 className="banner__heading">
            Discover the vast expanses of <span>space</span>
          </h1>
          <h2 className="banner__sub-heading">
            Where the possibilities are <span>endless!</span>
          </h2>
          <Button className="banner__button" variant="default">
            Learn more
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Banner;
