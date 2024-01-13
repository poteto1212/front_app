import * as React from "react";
import styled from "styled-components";

const EBM_form = () =>{
  return (
    <Div>
      <Div2>
        <Column>
          <Div3>
            <Div4>
              <p>論文タイトル</p>
            </Div4>
            <FormInput1
              type="text"
              placeholder="身長入力"
              name="height"
              defaultValue=""
              required={false}
            />
            <Div5>
              <p>要約</p>
            </Div5>
            <FormInput2
              placeholder=""
              name="height"
              defaultValue=""
              required={false}
            />
            <Div6>
              <p>P</p>
            </Div6>
            <FormInput1
              type="text"
              placeholder="対象者"
              name="height"
              defaultValue=""
              required={false}
            />
            <Div7>
              <p>E</p>
            </Div7>
            <FormInput1
              type="text"
              placeholder="介入群"
              name="bw"
              required={false}
            />
            <Div8>
              <p>C</p>
            </Div8>
            <FormInput5
              type="text"
              placeholder="Hello there"
              name="fbs"
              required={false}
            />
            <Div9>
              <p>O</p>
            </Div9>
            <FormInput6
              type="text"
              placeholder="Hello there"
              name="glc_3_auc"
              required={false}
            />
          </Div3>
        </Column>
        <Column2>
          <Div10>
            <Div11>
              <Div12>
                <p>
                  <span style={{'font-size': "30px"}}>結果・考察</span>
                </p>
              </Div12>
              <FormInput7
                placeholder=""
                name="height"
                defaultValue=""
                required={false}
              />
            </Div11>
            <Div13>
              <Div14>
                <p>統計シミュレーション</p>
              </Div14>
              <div data-missing-component="BuilderTabs" />
            </Div13>
          </Div10>
        </Column2>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1000px;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 100%;
    margin-bottom: 200px;
  }
`;

const Div2 = styled.div`
  gap: 20px;
  display: flex;
  width: 1000px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 50%;
  }
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  height: 926px;
  @media (max-width: 640px) {
    height: 710px;
  }
`;

const Div4 = styled.div`
  position: relative;
  height: auto;
  font-size: 30px;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 40px;
  }
  @media (max-width: 640px) {
    font-size: 25px;
  }
`;

const FormInput1 = styled.input`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 100%;
  padding: 15px 200px 15px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px 0;
  }
  @media (max-width: 640px) {
    max-width: 378px;
  }
`;

const Div5 = styled.div`
  position: relative;
  height: auto;
  font-size: 30px;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 40px;
  }
  @media (max-width: 640px) {
    font-size: 25px;
  }
`;

const FormInput2 = styled.textarea`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 10px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 100%;
  height: 260px;
  @media (max-width: 991px) {
    max-width: 300px;
    padding: 15px 0;
  }
  @media (max-width: 640px) {
    max-width: 378px;
  }
`;

const Div6 = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 4px auto 0 0;
`;

const Div7 = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 20px auto 0 0;
`;

const Div8 = styled.div`
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
  max-width: 100％;
  padding: 15px 200px 15px 10px;
  @media (max-width: 991px) {
    max-width: 300px;
    padding: 15px 0;
  }
  @media (max-width: 640px) {
    max-width: 378px;
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

const FormInput6 = styled.input`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 100%;
  padding: 15px 200px 15px 10px;
  @media (max-width: 991px) {
    max-width: 300px;
    padding: 15px 0;
  }
  @media (max-width: 640px) {
    max-width: 378px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div10 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 600px;
  @media (max-width: 640px) {
    height: 638px;
  }
`;

const Div11 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  height: 437px;
  @media (max-width: 991px) {
    margin-left: -3px;
  }
`;

const Div12 = styled.div`
  position: relative;
  height: auto;
  font-size: 30px;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 40px;
  }
  @media (max-width: 640px) {
    font-size: 25px;
  }
`;

const FormInput7 = styled.textarea`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 10px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 100%;
  height: 350px;
  @media (max-width: 991px) {
    max-width: 300px;
    padding: 15px 0;
  }
  @media (max-width: 640px) {
    max-width: 378px;
  }
`;

const Div13 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 400px;
`;

const Div14 = styled.div`
  position: relative;
  height: auto;
  font-size: 30px;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 40px;
  }
  @media (max-width: 640px) {
    font-size: 25px;
  }
`;

export default EBM_form
