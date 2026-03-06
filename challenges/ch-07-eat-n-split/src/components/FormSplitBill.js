import { useState } from 'react';
import {Button} from './Button'

export function FormSplitBill({selectedFriend, onSplitBill}) {
    const [bill, setBill] = useState(0);
    const [expense, setExpense] = useState(0);
    const [whoIsPaying, setWhoIsPaying] = useState("user");
    const paidByFriend = bill? bill - expense : 0;

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!bill || !expense) return;

        onSplitBill(whoIsPaying === "user" ? paidByFriend : -expense);
        setBill(0);
        setExpense(0);
        setWhoIsPaying("user");
    }
    
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))}/>

      <label> your expense</label>
      <input type="text" value={expense} onChange={(e) => setExpense(Number(e.target.value) > bill ? bill : Number(e.target.value))}/>

      <label>{selectedFriend.name}'s expense</label>
      <input type="text" value={paidByFriend} disabled/>

      <label>Who is paying the bill?</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button> Split bill </Button>
    </form>
  );
}