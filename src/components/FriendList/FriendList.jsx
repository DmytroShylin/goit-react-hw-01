import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friendList}>
      {friends.map(friend => (
        <div key={friend.id} className={styles.listItem}>
          <FriendListItem 
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </div>
      ))}
    </div>
  );
};

export default FriendList;