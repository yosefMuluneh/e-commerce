import React from 'react'
import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

import classes from './index.module.scss'
import Link from 'next/link'

const Categories = ({ categories } : { categories : Category[]}) => {
  return (
    <section className={classes.container}>
        <div className={classes.titleWrapper}>
            <h3>Shop by Category</h3>
            <Link href='/products'>Show All</Link>
        </div>
        <div className={classes.list}>
            {
                categories.map((category) => (
                     <CategoryCard key={category.id} category={category} />
                ))
            }
        </div>
    </section>
  )
}

export default Categories