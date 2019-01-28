import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Routing from './routes/indexRoutes'
import { Tabs } from 'antd';


const TabPane = Tabs.TabPane;

function callback(key) {
  // console.log(key);
}

class App extends Component {
  render() {
    return (
      <div className="my-app">
        {/* <nav className="navbar is-light" role="navigation" aria-label="main navigation"> */}
          <div className="container">
            <div className="navbar-menu">
            <Link to="/">jjjjjjjjj
              <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="Home" key="1">
                  </TabPane>
              </Tabs>
            </Link>
              </div>
            </div>
        {/* </nav> */}

        <Routing />
      </div>
    )
  }
}

export default App

// import React, { Component } from 'react';
// import './App.css';
// import 'antd/dist/antd.css';
// import { Cardmovie } from './components/card.js';
// import { Row, Col } from 'antd';
// import {H1,H2,H3,Span1} from './components/Titlemv';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import {Button1} from './components/botton'
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
// class App extends Component {

//  state = {
//    data: []
//  }

//  componentDidMount = () => {
//   fetch('http://www.mocky.io/v2/5c3724b83000009d001f6253')
//   .then(res => res.json())
//   .then((response) => {
//       this.props.datamovie(response.movies) //ส่งค่าไปยังmapDispatchToProps
//     })
//  }

//  render() {
//   console.log(this.props.movie) 

//    return (
//     <div className="App-bg">
//       <Row gutter={16}>  
//        {
//         this.props.movie.map(Item => (
//               <Col className="gutter-row" span={6}>
//               <div className="gutter">
//               <Cardmovie bordered={ false }  hoverable>
//                 <H1> { Item.name } </H1> 
//                 <H2> {Item.released} </H2>
//                 {<img alt="example" src= { Item.image }/>}
//                 <H3> <FontAwesomeIcon icon="star" style={{color:'#f8d65b'}} /> {Item.rated} <Span1>/10</Span1></H3>
//                 <Button1 type='danger'>Details</Button1>
//                 </Cardmovie>
//                 </div>
//               </Col>
//          ))
//        }
//        </Row>
//      </div>

//    );
//  }

// }

// const mapStateToProps = state => ({
//   movie: state.checktype //movie ขื่ออะไรก็ได้เอาไป.ใช้
// })

// const mapDispatchToProps = dispatch => ({
//   datamovie(res){
//     dispatch({
//       type: "API",
//       data: res
//     })
//   }
// })
// export default connect (
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
// library.add(faStar)