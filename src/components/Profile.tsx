import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img 
        src="data:image/jpeg;base64,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" 
        alt="Gato"
      />
      <div>
        <strong>Gatinho Preguiçoso</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}
