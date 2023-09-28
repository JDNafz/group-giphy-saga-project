import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Header from '../Header/Header';

function DisplayItems() {
  const newGifs = useSelector((state) => state.newGifs);
  console.log("WATER:", newGifs[0]);
  const url0 = newGifs[0];
  return (
    <>
      <div>
        {newGifs.map((thing) => {
          return (
            <>
              <img
                key={thing.url}
                src={thing.images.original.url}
                alt="gif"
              ></img>
            </>
          );
        })}
      </div>
    </>
  );
}

export default DisplayItems;
