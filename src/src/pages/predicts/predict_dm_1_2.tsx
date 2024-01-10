import * as React from "react";
import styled from "styled-components";
import Header from '@/components/header';

const Predict_dm_1 = ()=> {
  return (
    <>
      <Header
            title='ロジスティクス回帰モデルによる'
            subtitle='糖尿病予測_その1'
        />

      <Img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F56d42effa12c495ab0e6ce121d494cf6%2F126d927eea344efbbba25a953b296f8e"
      />

      <Overview>
        <p>予測モデルの概要</p>
      </Overview>

      <Predict_dm_1_form>
        <Form_title>
          <p>主な説明変数</p>
        </Form_title>
        
        <Div5>
          <p>身長(cm)</p>
        </Div5>
        <FormInput1
          type="text"
          placeholder="身長入力"
          name="height"
          defaultValue=""
          required={false}
        />
        <Div6>体重</Div6>
        <FormInput2
          type="text"
          placeholder="体重入力"
          name="bw"
          required={false}
        />
        <Div7>
          <p>空腹時血糖</p>
        </Div7>
        <FormInput3
          type="text"
          placeholder="空腹時血糖入力"
          name="fbs"
          required={false}
        />
        <Div8>
          <p>3時間血糖下面積</p>
        </Div8>
        <FormInput4
          type="text"
          placeholder="3時間血糖下面積"
          name="glc_3_auc"
          required={false}
        />
        <Div9>
          <p>血漿グルコース下面積</p>
        </Div9>
        <FormInput5
          type="text"
          placeholder="血漿グルコース下面積"
          name="glc_plasma_auc"
          required={false}
        />
        <Div10>
          <p>定常状態血糖値</p>
        </Div10>
        <FormInput6
          type="text"
          placeholder="定常状態血糖値"
          name="glc_css"
          required={false}
        />
        <Div11>
          <Div12>
            <p>現在の入力値</p>
          </Div12>
          <Div13>
            <p>現在の入力値</p>
          </Div13>
        </Div11>
        <Button>予測の実行</Button>
      </Predict_dm_1_form>
      
      <Ans_dm_1>
        <Div15>
          <p>予測結果</p>
        </Div15>
        <Div16>
          <p>DMの可能性が~</p>
        </Div16>
      </Ans_dm_1>
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

const Predict_dm_1_form = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  padding-bottom: 30px;
  max-width: 700px;
  margin: 20px auto 0;
`;

const Form_title = styled.div`
  position: relative;
  margin-top: 20px;
  height: auto;
  font-size: 40px;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Div5 = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 4px auto 0 0;
`;

const FormInput1 = styled.input`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 700px;
  padding: 15px 200px 15px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px 0;
  }
`;

const FormInput2 = styled.input`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 700px;
  padding: 15px 200px 15px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px 0;
  }
`;

const Div6 = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 20px auto 0 0;
`;

const Div7 = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 20px auto 0 0;
`;

const FormInput3 = styled.input`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 700px;
  padding: 15px 200px 15px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px 0;
  }
`;

const Div8 = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 20px auto 0 0;
`;

const FormInput4 = styled.input`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 700px;
  padding: 15px 200px 15px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px 0;
  }
`;

const Div9 = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 20px auto 0 0;
`;

const FormInput5 = styled.input`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 700px;
  padding: 15px 200px 15px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px 0;
  }
`;

const Div10 = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 20px auto 0 0;
`;

const FormInput6 = styled.input`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 20px;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: #ccc;
    max-width: 700px;
    padding: 15px 200px 15px 10px;
    @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px 0;
    }
`;

const Div11 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  height: 200px;
  padding-right: 8px;
  max-width: 501px;
`;

const Div12 = styled.div`
  position: relative;
  margin-top: 20px;
  height: auto;
  font-size: 25px;
  max-width: 500px;
`;

const Div13 = styled.div`
  position: relative;
  margin-top: 20px;
  height: auto;
  font-size: 25px;
  max-width: 500px;
`;

const Button = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  position: relative;
  appearance: none;
  background-color: rgba(80, 227, 194, 1);
  color: rgba(0, 0, 0, 1);
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  width: 500px;
  font-size: 30px;
  font-weight: 600;
  margin: 28px auto 0;
  padding: 25px;
  @media (max-width: 991px) {
    max-width: 300px;
    background-color: rgba(80, 227, 194, 1);
    color: rgba(0, 0, 0, 1);
    font-weight: 600;
    line-height: px;
    border-style: none;
    border-width: 1px;
    font-size: 30px;
    text-align: center;
    margin: 30px auto 0;
    padding: 25px 0;
  }
  @media (max-width: 640px) {
    margin-right: auto;
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