import { useState } from "react";

function Show() {
  const [block, setBlock] = useState();

  const blockShow = () => {
    setBlock(!block);
  };

  return (
    <div>
      <button onClick={blockShow}> Показать или скрыть </button>
      <p style={{ display: block ? "block" : "none" }}>Любой текст</p>
    </div>
  );
}

export default Show;
