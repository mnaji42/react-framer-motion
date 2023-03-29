import React, { useState, useEffect } from "react"
import Modal from "./Modal"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
}

const titleVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
}

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}

const toppingVariants = {
  hidden: {
    opacity: 0,
    y: 48,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const Order = ({ pizza }) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      {showModal ? <Modal /> : null}
      <motion.div
        className="container order"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.h2 variants={titleVariants}>
          Thank you for your order :)
        </motion.h2>
        <motion.div variants={childVariants}>
          <p>You ordered a {pizza.base} pizza with:</p>
          {pizza.toppings.map((topping) => (
            <motion.div variants={toppingVariants} key={topping}>
              {topping}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Order
