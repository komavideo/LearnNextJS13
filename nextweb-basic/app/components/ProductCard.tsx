import React from 'react'
import BtnAddtoCart from './BtnAddtoCart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className='pb-5'>ProductCard</div>
      <BtnAddtoCart />
    </div>
  )
}

export default ProductCard