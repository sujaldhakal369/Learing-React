import { useState } from "react";

const CheckBox = () => {
  const [liked, setLiked] = useState(true);

  const handleChange = (e) => {
    setLiked(e.target.checked);
  };

  return (
    <>
      <div className="all_center">
        <div className="group">
          <label>
            <input type="checkbox" onChange={handleChange} checked={liked} />
            <p>Like Here</p>
          </label>
        </div>
        <p>you {liked ? "liked" : "did not like"} here</p>
      </div>
      {/* <input type="checkbox" /> */}
    </>
  );
};

export default CheckBox;
