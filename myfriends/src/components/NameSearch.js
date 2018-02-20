import React from 'react';

class NameSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    this.props.handleFormSubmit(this.state.value);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Friend's Name:
          <input className="input-field" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    );
  }
}


export default NameSearch;
