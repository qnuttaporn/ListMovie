import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const Cardmovie = styled(Card)`
width: 300px;
text-align: center;
`

const CardDetail = styled(Card)`
padding-top: 10px;
width: 500px;
text-align: center;
`

export{
    Cardmovie,CardDetail
}