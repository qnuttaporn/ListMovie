import React, { Component } from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import { Cardmovie } from '../components/card';
import { Row, Col } from 'antd';
import {H1,H2,H3,Span1} from '../components/Titlemv';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {Button1} from '../components/botton'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Home extends Component {

 state = {
   data: []
  }

 ClickDetail = (id) =>{
    this.props.movieid(id) 
}

 render() {
   return (
    <div className="App-bg">
      <Row gutter={16}>  
       {
        this.props.movies.map(Items => (
              <Col className="gutter-row" span={6}>
              <div className="gutter">
              <Cardmovie bordered={ false }  hoverable>
                <H1> { Items.name } </H1> 
                <H2> {Items.released} </H2>
                {<img alt="example" src= { Items.image }/>}
                <H3> <FontAwesomeIcon icon="star" style={{color:'#f8d65b'}} /> {Items.rated} <Span1>/10</Span1></H3>
                <Link to={"/detail/"+Items.id}>
                <Button1 type='danger'  id={ Items.id } name={Items.id} onClick={()=>this.ClickDetail(Items.id)} >Details</Button1>
                </Link>
                </Cardmovie>
                </div>
              </Col>
         ))
       }
       </Row>
     </div>

   );
 }

}
    
const mapStateToProps = state => ({
  movies: state.checktype //movie ขื่ออะไรก็ได้เอาไป.ใช้
})

const mapDispatchToProps = dispatch => ({
  movieid(responseid){
  dispatch({
    type: "ID",
    responseid: responseid
  })
  }
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Home);
library.add(faStar)