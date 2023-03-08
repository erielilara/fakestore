import { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from "../../../redux/actions";

export const ButtonLike = (props: any) => {
  const dispatch = useDispatch();
  const [heartColor, setHeartColor] = useState({ color: "gray" });
  const wishList = useSelector((state: any) => state.wishList);

  useEffect(() => {
    if (wishList.find((product: any) => product.id === props.product.id)) {
      setHeartColor({ color: "red" });
    } else {
      setHeartColor({ color: "gray" });
    }
  }, []);

  const handleLike = async () => {
    if (heartColor.color === "red") {
      setHeartColor({ color: "gray" });
      dispatch(removeProductFromWishlist(props.product.id));
    } else {
      setHeartColor({ color: "red" });
      dispatch(addProductToWishlist(props.product));
    }
  };

  return (
    <div>
      {heartColor.color === "gray" ? (
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
