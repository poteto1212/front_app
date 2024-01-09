import {useState} from 'react';
// import { text } from 'stream/consumers';
import styled from "styled-components";
import Header from '@/components/header';

export default function Predict_dm_1() {
    const [age,setAge] = useState<number>()
    function reload_age(age: number){
        return setAge(age)
    }
    return (
    <>
        <Header
            title='ロジスティクス回帰モデルによる'
            subtitle='糖尿病予測_その1'
        />
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