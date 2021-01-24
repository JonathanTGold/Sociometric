import React from 'react';
import styles from './Main.module.css';
import { Evaluees } from '../evaluees/Evaluees';


export function Main() {

  return (
    <div className={styles.container + " col"}>
      <div className={styles.header + " row"}>
        <div className={styles.sociometricName + " col"}>
          <div className={styles.sociometricNameTitle}>יחידת הנדסה - סוציומטרית חוגרים גף UX</div>
          <div className={styles.date}>12/12/2021</div>
        </div>
        <div className={styles.ratingRange}>
          <div className={styles.ratingRangeBox + " row"}>
            <div className={styles.describtion + " row"}>סולם הערכה</div>
            <div className={styles.ratingRangeGraph + " col"}>
              <div className={styles.graph + " row"}>
                <div className={styles.box + " row"}>1</div>
                <div className={styles.box + " row"}>2</div>
                <div className={styles.box + " row"}>3</div>
                <div className={styles.box + " row"}>4</div>
                <div className={styles.box + " row"}>5</div>
                <div className={styles.box + " row"}>6</div>
              </div>
              <div className={styles.subtitles + " row"}>
                <div className={styles.rightTitle}>הערכה נמוכה</div>
                <div className={styles.leftTitle}>הערכה גבוהה</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.formContaner}>
        <div className={styles.tabs + " row"}>
          <div className={`${styles.tab} ${styles.activTab}`}>קצינים</div>
          <div className={styles.tab}>נגדים</div>
          <div className={styles.tab}>חוגרים</div>
          <div className={styles.tab}>מילולי</div>
        </div>
        <div>
          <Evaluees />
        </div>
      </div>
    </div>
  );
}