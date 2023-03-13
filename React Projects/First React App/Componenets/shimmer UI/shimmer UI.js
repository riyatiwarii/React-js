import "./shimmer UI.css";
import "../Cards/card.css";

const ShimmerEffect = () => {
  return (
    <div className="cards-container ">
      <div className="card">
        <div
          className="card-media shimmer"
          style={{
            background: "rgba(82, 81, 81, 0.12)",
            height: "240px",
            width: "375px",
          }}
        >
          <div
            className="pro-discount shimmer"
            style={{
              background: "rgba(82, 81, 81, 0.12)",
              height: "21px",
              width: "62px",
            }}
          ></div>
          <div
            className="delivery-time shimmer"
            style={{
              background: "rgba(82, 81, 81, 0.12)",
              height: "21px",
              width: "50px",
            }}
          ></div>
          <div className="bookmark"></div>
        </div>
        <div className="card-description">
          <div
            className="about-place "
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "60px",
            }}
          >
            <div
              className="place shimmer"
              style={{
                height: "60px",
                width: "213px",
                background: "rgba(82, 81, 81, 0.12)",
              }}
            >
              <p
                className="place-name shimmer"
                style={{
                  height: "28px",
                  width: "213px",
                  background: "rgba(82, 81, 81, 0.12)",
                }}
              ></p>
              <p
                className="place-speciality shimmer"
                style={{
                  height: "32px",
                  width: "213px",
                  background: "rgba(82, 81, 81, 0.12)",
                }}
              ></p>
            </div>
            <div
              className="place-review shimmer"
              style={{
                background: "rgba(82, 81, 81, 0.12)",
                height: "45px",
                width: "128px",
              }}
            >
              <p
                className="rating shimmer"
                style={{
                  height: "23px",
                  width: "60px",
                  background: "rgba(82, 81, 81, 0.12)",
                }}
              ></p>
              <p
                className="per-person shimmer"
                style={{
                  height: "16px",
                  width: "72px",
                  background: "rgba(82, 81, 81, 0.12)",
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShimmerUI = () => {
  return (
    <>
    <div className = "shimmer_container">  
      <ShimmerEffect />
      <ShimmerEffect />
      <ShimmerEffect />
      <ShimmerEffect />
      <ShimmerEffect />
      <ShimmerEffect />
      <ShimmerEffect />
      <ShimmerEffect />
      <ShimmerEffect />
      <ShimmerEffect />
      <ShimmerEffect />
      <ShimmerEffect />
      </div>
    </>

  );
};
export { ShimmerUI };
