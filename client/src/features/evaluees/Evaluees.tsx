import React, { useState } from 'react'
import styles from './Evaluees.module.css';
import { Evaluee } from '../evaluee/Evaluee';


export function Evaluees() {
  const [evaluees, setEvaluees] = useState([
    { id: '123', name: 'חיים שקלניק', fetcures: { a: '', b: '', c: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '', l: '', m: '' } },
    { id: '456', name: 'יהונתן גולד', fetcures: { a: '', b: '', c: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '', l: '', m: '' } },
    { id: '789', name: 'ברק רביד', fetcures: { a: '', b: '', c: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '', l: '', m: '' } },
  ])

  const featuresDisplayNames = [
    'יכולות אלתור', 'הומור עצמי', 'עמידה בזמנים', 'יחסי אנוש',
    'מקצועי', 'סדר וארגון', 'התאמה לקצונה', 'רמת טיסה', 'מסירות'
    , 'אמינות', 'מסירות', 'אמינות'
  ]

  const onChanged = (updatedEvaluee: { id: string, name: string, fetcures: any }) => {
    const updatedEvaluees = evaluees.map(evaluee => {
      return evaluee.id === updatedEvaluee.id ? updatedEvaluee : evaluee;
    })
    setEvaluees(updatedEvaluees)
  }

  const onSubmit = () => (console.log(evaluees))

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.titles}>
          <div className={styles.spacer}></div>
          {
            featuresDisplayNames.map((feture, index) => (
              <div className={styles.title} key={index}>{feture}</div>
            ))
          }
        </div>
        {
          evaluees.map((evaluee, index) => (
            <Evaluee evalueeInput={evaluee} onChanged={onChanged} key={evaluee.id} />
          ))
        }
        <button type="button" onClick={onSubmit}>שמור</button>
      </form>
    </div>
  );
}