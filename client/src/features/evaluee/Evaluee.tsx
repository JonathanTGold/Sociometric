import React, { useState, useEffect } from 'react'
import styles from './Evaluee.module.css';

interface Props {
  evalueeInput: { id: string, name: string, fetcures: {} };
  onChanged: (evaluee: { id: string, name: string, fetcures: {} }) => void;
}

export const Evaluee: React.FC<Props> = ({ evalueeInput, onChanged }) => {
  const [evaluee, setevaluee] = useState(evalueeInput.fetcures)

  const handelChanged = (e: any) => {
    const updatedevaluee = { ...evaluee, [e.target.id]: e.target.value }
    setevaluee(updatedevaluee)
  }

  useEffect(() => {
    onChanged({ ...evalueeInput, fetcures: evaluee })
  }, [evaluee])

  return (
    <div className={styles.formContainer}>
      <div className={styles.evalueeName}>{evalueeInput.name}</div>
      {
        Object.keys(evaluee).map((question) => (
          <div key={question} className={styles.inputBox}>
            <input className={styles.input}
              type="number"
              min="1"
              max="6"
              id={question}
              name={question}
              value={evaluee[question]}
              onChange={handelChanged} />
          </div>
        ))
      }
    </div>
  );
}