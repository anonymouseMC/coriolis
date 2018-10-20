import React from 'react';
import PropTypes from 'prop-types';
import { autoBind } from 'react-extras';

/**
 * Announcement component
 */
export default class Announcement extends React.Component {

  static propTypes = {
    text: PropTypes.string
  };

  /**
   * Constructor
   * @param  {Object} props   React Component properties
   */
  constructor(props) {
    super(props);
    autoBind(this);
  }

  /**
   * Renders the announcement
   * @return {React.Component} A href element
   */
  render() {
    return <p>{this.props.text}</p>;
  }

}
