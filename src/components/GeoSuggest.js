import React from "react";
import Geosuggest from "react-geosuggest";

class App extends React.Component {
  onSuggestionSelect = suggestion => {
    if (suggestion) {
      const { name } = this.props;
      const data = {
        target: {
          name,
          value: suggestion.description
        }
      };
      this.props.onChange(data);
    }
  };

  render() {
    const { initialValue } = this.props;
    return (
      <Geosuggest
        placeholder="City"
        initialValue={initialValue}
        ref={el => (this._geoSuggest = el)}
        onSuggestSelect={this.onSuggestionSelect}
      />
    );
  }
}

export default App;
