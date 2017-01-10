import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4 search_bar">
        <input className="form-control" onChange = {event => this.onSearchChange(event.target.value)}/>
      </div>
    )
  }

  onSearchChange(param) {
    this.setState({term : param});
    this.props.onSearchChange(param);
  }
}

export default SearchBar;
