import { Component } from 'react';

import { connect } from 'react-redux';

class Fetch extends Component {

    componentDidMount = () => {
        fetch('http://www.mocky.io/v2/5c3724b83000009d001f6253')
        .then(res => res.json())
        .then((response) => {
          this.props.DataMovie(response.movies)
          this.props.DataMovieid(response.movies)
        })   
      }

    render (){
        return (
            this.props.children
          )
    }
}
  const mapDispatchToProps = dispatch => ({
    DataMovie(res) {
      dispatch({
        type: "API",
        data: res
      })
    },
    DataMovieid(responseid) {
      dispatch({
        type: "ID",
        responseid: responseid
      })
    }
  })

export default connect (
  null,
  mapDispatchToProps
)(Fetch);