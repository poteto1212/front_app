import * as React from "react";
import styled from "styled-components";
import Header from '@/components/layouts/header';
import Predict_dm_1_form from "@/components/forms/predict_dm_1_form";
import Namber from "@/components/layouts/namver";
import EBM_form from "@/components/forms/ebm_form";
const Predict_dm_1 = ()=> {
  return (
    <>
      <Namber/>
      <Header>
        <p>ロジスティクス回帰モデルによる</p>
        <p>糖尿病予測_その1</p>
      </Header>

      <Img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e"
      />
      
      <Overview>
        <p>予測モデルの概要</p>
      </Overview>

      <Predict_dm_1_form/>
      
      <Ans_dm_1>
        <Div15>
          <p>予測結果</p>
        </Div15>
        <Div16>
          <p>DMの可能性が~</p>
        </Div16>
      </Ans_dm_1>
      <EBM_form/>
    </>
  );
}

const Img = styled.img`
  aspect-ratio: 1.79;
  object-fit: cover;
  object-position: center;
  width: 100%;
  min-height: 20px;
  min-width: 20px;
  overflow: hidden;
  max-width: 1191px;
  margin: 20px auto 0;
`;

const Overview = styled.div`
  position: relative;
  height: auto;
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
  padding: 20px 0 30px;
  @media (max-width: 640px) {
    font-size: 40px;
  }
`;

const Ans_dm_1 = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: auto;
    padding-bottom: 30px;
    max-width: 700px;
    margin: 20px auto 0;
`;

const Div15 = styled.div`
  position: relative;
  margin-top: 20px;
  height: auto;
  font-size: 25px;
  max-width: 500px;
`;

const Div16 = styled.div`
  position: relative;
  margin-top: 20px;
  height: auto;
  font-size: 25px;
  max-width: 500px;
`;

export default Predict_dm_1