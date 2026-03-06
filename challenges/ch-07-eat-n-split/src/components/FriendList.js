
import { Friend } from "./Friend";


export function FriendList({friends, selectedFriend, onSelection}) {
  return (
    <ul className="">
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} selectedFriend={selectedFriend} onSelection={onSelection}/>
      ))}
    </ul>
  );
}
