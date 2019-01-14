import React, { Component } from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import { connect } from 'react-redux';

import { Layout, Breadcrumb } from 'antd';
import { Icon } from 'antd';
import { CardDetail } from '../components/card';
import { Rate } from 'antd';
import {H2,H3,Span1,H4,H5} from '../components/Titlemv';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const {  Content, Footer } = Layout;
class detailHome extends Component {

  state = {
    data: []
  }

  render() {
    console.log(this.props.dataid)

    const movie = this.props.movies.filter(movie => this.props.dataid === movie.id)[0];

    return (
      <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Movie Titles</Breadcrumb.Item>
          <Breadcrumb.Item>{movie.name}</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Row>
            <Col span={16} push={6}>  
              <CardDetail>
                <H4> { movie.name } </H4> 
                <H5> {movie.released} </H5>
                <H2>
                เรื่องย่อ  : {movie.name} ({movie.released}) ฝังแค้นพยัคฆ์ระห่ำเรื่องราวของ ทนายความที่พูดเร็วเปลี่ยนร่างกายของเขาและรับปากเงียบไม่ให้ความแตกจนกว่าเขาจะพบว่าใครฆ่าภรรยา และลูกสาวของเขาและมีการแก้แค้นของเขาได้สำเร็จ ฝังแค้นพยัคฆ์ระห่ำ
                </H2>
                <H3> <Rate disabled defaultValue={movie.rated} /> {movie.rated} <Span1>/10</Span1></H3>
                <Icon type="caret-right" />
              </CardDetail>
            </Col>
            <Col span={6} pull={16}> 
              <img className="picture" alt="example" src= { movie.image }></img>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Good Movie By Nuttaporn
      </Footer>
    </Layout>
    );
    }
}
const mapStateToProps = state => ({
    movies: state.checktype,
    dataid: state.checkid
  })

export default connect ( //สามารถส่งได้ 2 ตัว และสามารถเชื่อมต่อกับredux ได้ 
  mapStateToProps,
  null
  )(detailHome);
library.add(faStar)
