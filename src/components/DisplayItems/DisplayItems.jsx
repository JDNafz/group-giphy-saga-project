import { ImageList, ImageListItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./DisplayItems.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function DisplayItems() {
  const history = useHistory();

  const newGifs = useSelector((state) => state.newGifs);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    console.log("Sending item to favorites db:", item);
    dispatch({ type: "POST_FAVORITE", payload: item });
  };

  return (
    <>
      <div className="imageListContainer">
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {newGifs.map((item, idx) => {
            // console.log("ITEM:",item);
            return (
              <ImageListItem key={`result${idx}`}>
                <img
                  onClick={() => handleClick(item)}
                  src={item.url}
                  alt={item.title}
                ></img>
              </ImageListItem>
            );
          })}
        </ImageList>
      </div>
    </>
  );
}

export default DisplayItems;
