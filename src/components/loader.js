import { useState, CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#B58DCA");

  return (
    <div className="sweet-loading">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
      {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

      <PropagateLoader
          color={color}
        //   loading={loading}
              cssOverride={override}
              //   size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            //   PuffLoader={60}
      />
    </div>
  );
}

export default Loader;
