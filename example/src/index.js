import React, { PropTypes } from 'react';
const ReactDOM = require('react-dom');
import { Text, TextArea, Image, Icon } from 'nocms-atoms';
import events from 'nocms-events';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      simple: 'Simple editor',
      linkeditor: 'Editor with link',
      textArea: 'Text area',
    };

    events.listenTo('nocms.value-changed', (scope, value) => {
      const state = {};
      state[scope] = value;
      this.setState(state);
    });
  }

  render() {
    return (
      <div>
        <div className="container-wrapper">
          <div className="container">
            <h2>Text atom</h2>
            <p>Simple atom for displaying text. Offers a few different editor types, see nocms-forms package.</p>
            <h3>End user version</h3>
            <Text text={this.state.simple} placeholder="Test-input" activeEditMode={this.props.activeEditMode} editorType="simple" scope="simple" />
            <Text text={this.state.linkeditor} placeholder="Test-input" activeEditMode={this.props.activeEditMode} editorType="simpleWithLink" scope="linkeditor" />
            <h3>Admin version</h3>
            <Text text={this.state.simple} placeholder="Test-input" activeEditMode editorType="simple" scope="simple" />
            <Text text={this.state.linkeditor} placeholder="Test-input" activeEditMode editorType="simpleWithLink" scope="linkeditor" />
          </div>
        </div>
        <div className="container-wrapper">
          <div className="container">
            <h2>Text area atom</h2>
            <p>Simple atom for multiline text.</p>
            <h3>End user version</h3>
            <TextArea text={this.state.simple} paragraph={false} activeEditMode={this.props.activeEditMode} />
            <h3>Admin version</h3>
            <TextArea text={this.state.textArea} paragraph={false} activeEditMode scope={this.state.textArea} />
          </div>
        </div>
        <div className="container-wrapper">
          <div className="container">
            <h2>Image atom</h2>
            <p>Simple atom for images. WIP.</p>
            <Image src="/src/img/hero.jpg" alt="Bilde" className="small-image" />
          </div>
        </div>
        <div className="container-wrapper">
          <div className="container">
            <h2>Icon atom</h2>
            <p>Wraps material icons in different sizes</p>
            <Icon type="face" size="small" />
            <Icon type="face" />
            <Icon type="face" size="large" />
            <Icon type="face" size="xlarge" />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  activeEditMode: PropTypes.bool,
};

App.defaultProps = {
  activeEditMode: false,
};

ReactDOM.render(<App />, document.getElementById('app'));
