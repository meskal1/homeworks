import React from 'react'
import { text } from 'stream/consumers'
import { HW5 } from '../../../p2-homeworks/h5-rrd-v6/HW5'
import s from './App.module.css'

export function App() {
  return (
    <div className={s.App}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 0 0' }}>REACT HOMEWORKS</div>
      <HW5 />
    </div>
  )
}

export default App
