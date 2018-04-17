import React from 'react';

// Displays an array of TextItem as a table
export default class TextItemTable extends React.Component {

  static propTypes = {
    textItems: React.PropTypes.array.isRequired,
    showWhitespaces: React.PropTypes.bool
  };

  render() {
    const {showWhitespaces, textItems} = this.props;

    return (<div></div>);
  }
}
