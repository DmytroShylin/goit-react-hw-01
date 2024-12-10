import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <img className={styles.avatar} src={avatar} alt="User avatar" />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={isOnline ? styles.online : styles.offline}>
            {isOnline ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FriendListItem;