import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { connect } from "react-redux";
import { MdClose } from "react-icons/md";
import img from "./modal.jpg";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const { isModalOpen, setIsModalOpen } = props;
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: props.isModalOpen ? 1 : 0,
    transform: props.isModalOpen ? `translateY(0%)` : `translateY(-100%)`,
  });
  const addToCartHandler = (item) => {
    const isInCart = props.cart.find((el) => el.title === item.title);
    if (isInCart) {
      props.setText("item is already in cart");
      props.addToCartInfoHandler();
      return;
    }
    props.setText("Added To Cart");
    props.addToCartInfoHandler();
    props.addToCart(item);
    props.setIsModalOpen();
  };
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setIsModalOpen();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen();
      }
    },
    [setIsModalOpen, isModalOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {props.isModalOpen ? (
        <div className={styles.Background} ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className={styles.ModalWrapper}>
              <img
                className={styles.ModalImg}
                src={props.modalDetails.image}
                alt={props.modalDetails.title}
              />
              <div className={styles.ModalContent}>
                <p>Category: {props.modalDetails.category}</p>
                <button onClick={() => addToCartHandler(props.modalDetails)}>
                  Add to Cart
                </button>
              </div>
              <MdClose
                className={styles.CloseModalButton}
                aria-label="Close modal"
                onClick={props.setIsModalOpen}
              />
              <div className={styles.Description}>
                <h3 className={styles.Description__title}>
                  {props.modalDetails.title}
                </h3>
                <p className={styles.Description__text}>
                  {props.modalDetails.description}
                </p>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    isModalOpen: state.isModalOpen,
    modalDetails: state.modalDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch({ type: "ADD_PRODUCT_TO_CART", product }),
    addToCartInfoHandler: () => dispatch({ type: "CHANGE_ADD_TO_CART_INFO" }),
    setIsModalOpen: () => dispatch({ type: "SET_IS_MODAL_OPEN" }),
    setText: (text) => dispatch({ type: "SET_TEXT", text }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
