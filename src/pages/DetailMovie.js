
import React, { Component } from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import { Layout,Breadcrumb } from 'antd';
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
const { Content } = Layout;

class Details extends Component {

  state = {
    data: []
  }

  componentDidMount = () => {
    fetch('http://www.mocky.io/v2/5c3724b83000009d001f6253')
    .then(res => res.json())
    .then((response) => {
        this.props.datamovie(response.movies) //ส่งค่าไปยังmapDispatchToProps
      })
   }
  
   
    render() {
      return (
        <Layout className="layout">
        <Content style={{ padding: '20px' }}>
          <Breadcrumb style={{textAlign:"center"}}>
            <Breadcrumb.Item>SUPERMAN</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 20, minHeight: 280 }}>
          <div>
              <Row gutter={16}>{
              this.props.movie.map(Item => (
                    <Col className="gutter-row" span={6}>
                    <div className="gutter">
                    <Cardmovie bordered={ false }  hoverable>
                      <H1> { Item.name } </H1> 
                      <H2> {Item.released} </H2>
                      {<img alt="example" src= { Item.image }/>}
                      <H3> <FontAwesomeIcon icon="star" style={{color:'#f8d65b'}} /> {Item.rated} <Span1>/10</Span1></H3>
                      <Link to="/detail">
                          {/* <Button1 type='danger' name={ Item.id } onClick={this.ClickDetail} id={ Item.id }>Details</Button1> */}
                      </Link>
                      </Cardmovie>
                      </div>
                    </Col>
              ))
            }
            </Row>
     </div>

          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>
        </Footer> */}
      </Layout>
      );
    }
   
  }
   
  const mapStateToProps = state => ({
    movie: state.checktype //movie ขื่ออะไรก็ได้เอาไป.ใช้
  })
  
  const mapDispatchToProps = dispatch => ({
    datamovie(res){
      dispatch({
        type: "API",
        data: res
      })
    }
  })
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Details);
  library.add(faStar)