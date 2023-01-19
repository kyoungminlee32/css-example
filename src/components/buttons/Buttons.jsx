import React from 'react';
import Button from './Button';
import styles from './button.module.css';
export default function Buttons() {
  
  return (
    <>
      <div className={styles.BtnGroup}>
        <Button
          label = {'이전'}
          className={styles.BtnPrev}
        />
        <Button
          label = {'다음'}
          className={styles.BtnNext}
        />
      </div>
    </>
  );
}
