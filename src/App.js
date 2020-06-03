import React, { useState } from "react";
import ReduxUsePage from "./pages/ReduxUsePage";
// import RouterPage from "./pages/RouterPage";
// import MyRCForm from "./pages/MyRCForm";

function App() {
  const [num, setNum] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        change num: {num}
      </button>
      {num % 2 && <ReduxUsePage />}
    </div>
    // <RouterPage />
  );
}
export default App;
