import { useState} from 'react';
// import { text } from 'stream/consumers';
export default function Predict_dm_1() {
    const [age,setAge] = useState<number>()
    function reload_age(age: number){
        return setAge(age)
    }
    return (
    <>
        <h1>年齢入力</h1>
        <input
            type='number'
            pattern='[1-9]|[1-9][0-9]|100'
            value={age}
            placeholder="年齢入力"
            onChange={e => {
                reload_age(e.target.valueAsNumber)
            }}
        />
        <p>入力年齢: {age}</p>
    </>

    );
  }