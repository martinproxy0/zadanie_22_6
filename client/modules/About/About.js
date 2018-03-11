import React, { Component } from 'react';
// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// Import Style
// import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About page!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae massa a libero imperdiet congue
          sit amet et purus. Mauris vitae sodales nisl. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Quisque interdum lectus ac mauris porta ultrices. Donec ut mi a
          mauris pellentesque tincidunt. Fusce facilisis eros nec dui iaculis, quis pretium nisi aliquam. Curabi
          tur dui tortor, maximus vel lacinia sit amet, luctus placerat massa. Morbi vel maximus justo. Nulla ac
          velit et enim suscipit consectetur. Etiam in aliquam enim, id porta ipsum.
        </p>
      </div>
    );
  }
}

/*
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
*/
export default About;
