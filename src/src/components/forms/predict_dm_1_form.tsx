import styled from "styled-components";
import { memo, useState } from 'react'
import axios from 'axios';

const Predict_dm_1_form = () => {
  // 身長　体重　空腹時血糖　3時間血糖下面積　血漿インスリン下面積　定常状態血糖値
  const [height, setHeight] = useState<number>()
  const [bw, setBw] = useState<number>()
  const [fbs, setFbs] = useState<number>()
  const [glc_3_auc, setGlc_3_auc] = useState<number>()
  const [ins_plasma_auc, setIns_plasma_auc] = useState<number>()
  const [glc_css, setGlc_css] = useState<number>()
  //予測結果
  const [data, setData] = useState(
    {
      height: null,
      bw: null,
      fbs: null,
      glc_3_auc: null,
      ins_plasma_auc: null,//TODO ここ名前おかしいのでサーバー含め修正
      glc_css: null,
    }
  );

  const [response, setResponse] = useState<{
    predict_val: string;
    result: string;
  } | null>(null);

  //API呼び出し
  const postData = async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL+'/predict_dm_1/',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        },
      );
      setResponse(response.data)
    } catch (error) {//存在しないrequest等
      console.error('Error:', error);
    }
  };
  
  //入力値の取得
  const handle_change = (fieldName: string, value: string | number) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const input_Height = (height: number) => {
    setHeight(height)
    handle_change("height", height)
  }

  const input_Bw = (bw: number) => {
    setBw(bw)
    handle_change("bw", bw)
  }

  const input_Fbs = (fbs: number) => {
    setFbs(fbs)
    handle_change("fbs", fbs)
  }

  const input_Glc_3_auc = (glc_3_auc: number) => {
    setGlc_3_auc(glc_3_auc)
    handle_change("glc_3_auc", glc_3_auc)
  }

  const input_Ins_plasma_auc = (ins_plasma_auc: number) => {
    setIns_plasma_auc(ins_plasma_auc)
    handle_change("ins_plasma_auc", ins_plasma_auc)
  }

  const input_Glc_css = (glc_css: number) => {
    setGlc_css(glc_css)
    handle_change("glc_css", glc_css)
  }

  return (
    <Body>
      <Form_title>
        <p>主な説明変数</p>
      </Form_title>

      <Height>
        <p>身長(cm)</p>
      </Height>
      <Height_input
        type="number"
        placeholder="身長入力"
        name="height"
        defaultValue=""
        required={false}
        value={height}
        onChange={(e) => input_Height(e.target.valueAsNumber)}
      />

      <Bw>
        <p>体重(kg)</p>
      </Bw>
      <BwInput
        type="number"
        placeholder="体重入力"
        name="bw"
        required={false}
        value={bw}
        onChange={(e) => input_Bw(e.target.valueAsNumber)}
      />

      <Fbs>
        <p>空腹時血糖(mg/dL)</p>
      </Fbs>
      <Fbs_input
        type="number"
        placeholder="基準値: 70~110mg/dL 140以上でDM"
        name="fbs"
        required={false}
        value={fbs}
        onChange={(e) => input_Fbs(e.target.valueAsNumber)}
      />

      <Glc_3_auc>
        <p>3時間血糖下面積</p>
      </Glc_3_auc>
      <Glc_3_auc_input
        type="number"
        placeholder="3時間血糖下面積"
        name="glc_3_auc"
        required={false}
        value={glc_3_auc}
        onChange={(e) => input_Glc_3_auc(e.target.valueAsNumber)}
      />

      <Ins_plasma_auc>
        <p>血漿インスリン下面積</p>
      </Ins_plasma_auc>
      <Ins_plasma_auc_input
        type="number"
        placeholder="平均: 186"
        name="ins_plasma_auc"
        required={false}
        value={ins_plasma_auc}
        onChange={(e) => input_Ins_plasma_auc(e.target.valueAsNumber)}
      />

      <Glc_css>
        <p>定常状態血糖値</p>
      </Glc_css>
      <Glc_cssInput
        type="number"
        placeholder="定常状態血糖値"
        name="glc_css"
        required={false}
        value={glc_css}
        onChange={(e) => input_Glc_css(e.target.valueAsNumber)}
      />

      <Input_value>
        <Input_value_title>
          <p>現在の入力値</p>
        </Input_value_title>
        <Input_value_table>
          <Table border={1}>
            <Thead>
              <Tr>
                <Th>身長</Th>
                <Th>体重</Th>
                <Th>空腹時血糖</Th>
                <Th>3時間血糖下面積</Th>
                <Th>血漿インスリン下面積</Th>
                <Th>定常状態血糖値</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{height}cm</Td>
                <Td>{bw}kg</Td>
                <Td>{fbs}mg/dL</Td>
                <Td>{glc_3_auc}</Td>
                <Td>{ins_plasma_auc}</Td>
                <Td>{glc_css}mg/dL</Td>
              </Tr>
            </Tbody>
          </Table>

          <p>
            予測結果: {response && (
              response.result
            )}
          </p>

        </Input_value_table>
      </Input_value>
      <Button onClick={postData}>予測の実行</Button>

    </Body>
  )
}
const Body = styled.div`
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

const Height = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 4px auto 0 0;
`;

const Height_input = styled.input`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 700px;
  padding: 15px 0px 15px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px 0;
  }
`;

const Bw = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 20px auto 0 0;
`;

const BwInput = styled.input`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 700px;
  padding: 15px 0px 15px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px 0;
  }
`;

const Fbs = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 20px auto 0 0;
`;

const Fbs_input = styled.input`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 700px;
  padding: 15px 0px 15px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px 0;
  }
`;

const Glc_3_auc = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 20px auto 0 0;
`;

const Glc_3_auc_input = styled.input`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 700px;
  padding: 15px 0px 15px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px 0;
  }
`;

const Ins_plasma_auc = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 20px auto 0 0;
`;

const Ins_plasma_auc_input = styled.input`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  max-width: 700px;
  padding: 15px 0px 15px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px 0;
  }
`;

const Glc_css = styled.div`
  position: relative;
  height: auto;
  font-size: 25px;
  max-width: 700px;
  padding-right: 200px;
  margin: 20px auto 0 0;
`;

const Glc_cssInput = styled.input`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 20px;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: #ccc;
    max-width: 700px;
    padding: 15px 0px 15px 10px;
    @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px 0;
    }
`;

const Input_value = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 0px;
  height: 200px;
  padding-right: 8px;
  max-width: 100%;
`;

const Input_value_title = styled.div`
  position: relative;
  margin-top: 0px;
  height: 40px;
  font-size: 25px;
  max-width: 100%;
`;

const Input_value_table = styled.div`
  position: relative;
  margin-top: 0px;
  height: 160px;
  font-size: 25px;
  max-width: 100%;
`;

const Table = styled.table`
  border:2px solid;
  margin:auto;
  width: 100%;
  font-size: 15px;
  border-collapse: collapse;
  @media (max-width: 991px) {
    font-size: 10px
  }
`;

const Thead = styled.thead`
  border:1px solid;
`;

const Tbody = styled.tbody`
`;


const Tr = styled.tr`
`;

const Th = styled.th`
  border:1px solid;
  text-align: center;
`;

const Td = styled.td`
  border:1px solid;
  text-align: center;
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
export default memo(Predict_dm_1_form)
