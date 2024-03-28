import React from 'react'
import Link from 'next/link'
import { parse } from 'node-html-parser';
import styles from './page.module.css'
import { link } from 'fs';

type Props = {
    result:Result
}

export default function Item({result}: Props) {
    let data =  parse(result.extract)
    
  return (
   <div className={styles.items} >
    <div className={styles.inbox}>
    <h2>
        <Link href = {`https://en.wikipedia.org/?curid=${result.pageid}`} target='_blank' className={styles.item_link} >
        {result.title}
        </Link>
    </h2>
    {data.text}
    </div>
    <hr />
   </div>
  )
}