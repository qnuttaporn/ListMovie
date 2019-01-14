import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const Cardmovie = styled(Card)`
width: 300px;
text-align: center;
`

const CardDetail = styled(Card)`
padding-top: 10px;
width: auto;
height: auto;
text-align: center;
margin-right: 65px;
`

export{
    Cardmovie,CardDetail
}