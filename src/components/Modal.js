import React from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0 0 6px white",
    boxShadow: "0 0 6px white",
    transition: {
      duration: 0.25,
      yoyo: Infinity,
    },
  },
}

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const modalVariants = {
  hidden: {
    transform: "translate(-50%, -400%)",
  },
  visible: {
    transform: "translate(-50%, -50%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 120,
    },
  },
}

const Modal = () => {
  return (
    <>
      <motion.div
        className="backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      ></motion.div>
      <motion.div
        className="modal"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <h2>Want to make another pizza ?</h2>
        <Link to="/">
          <motion.button variants={buttonVariants} whileHover="hover">
            Start Again
          </motion.button>
        </Link>
      </motion.div>
    </>
  )
}

export default Modal
