import {useState} from 'react';
// import { text } from 'stream/consumers';
import styled from "styled-components";
import Header from '@/components/header';


export default function Predict_dm_1() {
    const [age,setAge] = useState<number>()
    function reload_age(age: number){
        return setAge(age)
    }

    // const logistic_regression_image = "../../images/logistic_regression.png"
    return (
    <>
        <Header
            title='ロジスティクス回帰モデルによる'
            subtitle='糖尿病予測_その1'
        />

        <Explanatory_Img
            loading='lazy'
            src = '/images/logistic_regression.png'
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


const Explanatory_Img = styled.img`
  aspect-ratio: 1.79;
  object-fit: cover;
  object-position: center;
  width: 100%;
  margin-top: 20px;
  min-height: 20px;
  min-width: 20px;
  overflow: hidden;
  max-width: 1191px;
`;
