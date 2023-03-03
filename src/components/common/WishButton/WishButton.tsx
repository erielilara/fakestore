import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../../../redux/actions";

export const ButtonLike = (props: any) => {
  const dispatch = useDispatch();
  const favoritesProducts = useSelector((state: any) => state.favorites);
  const [heartColor, setHeartColor] = useState({ color: "gray" });

  const handleLike = async () => {
    if (favoritesProducts.some((obj: any) => obj.id === props.product.id)) {
      setHeartColor({ color: "gray" });
      dispatch({ type: REMOVE_FAVORITE, payload: props.product });
    } else {
      setHeartColor({ color: "red" });
      dispatch({ type: ADD_FAVORITE, payload: props.product });
    }
  };

  return (
    <div style={{ marginLeft: "-5vh" }}>
      {!favoritesProducts.some((obj: any) => obj === props.product.id) ? (
        <div
          style={{
            color: heartColor.color,
            cursor: "pointer",
            display: "flex",
            padding: "5px",
            justifyContent: "end",
          }}
        >
          <AiFillHeart size={30} onClick={handleLike} />
        </div>
      ) : (
        <div
          style={{
            color: "red",
            cursor: "pointer",
            display: "flex",
            padding: "5px",
            justifyContent: "end",
          }}
        >
          <AiFillHeart size={30} onClick={handleLike} />
        </div>
      )}
    </div>
  );
};
