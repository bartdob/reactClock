import PropTypes from "prop-types";

function Clock(props: any) {
  return (
    <>
      <div
        className="flex-container text-center pt-2 mt-5 text-light m-5"
        style={{
          backdropFilter: "blur(5px)",
          alignItems: "center",
          maxHeight: "auto",
          maxWidth: "auto",
        }}
      >
        <h2>{props.time}</h2>
      </div>
    </>
  );
}

Clock.prototype = {
  time: PropTypes.string,
};

export default Clock;
