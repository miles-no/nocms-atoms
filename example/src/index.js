import React, { PropTypes } from 'react';
const ReactDOM = require('react-dom');
import { Text, TextArea, Image, Icon, PageInput, Code } from 'nocms-atoms';
import events from 'nocms-events';

const code = `var data = 1;
var d = 2;`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      simple: 'Simple editor',
      linkeditor: 'Editor with link',
      textArea: 'Text area',
      pageInput: 'Page input',
    };

    events.listenTo('nocms.value-changed', (scope, value) => {
      const state = {};
      state[scope] = value;
      this.setState(state);
    });
  }

  render() {
    const options = [{ value: 1, label: 'Val 1' }, { value: 2, label: 'Val 2' }];
    const stringOptions = ['no', 'en'];
    return (
      <div>
        <div className="container-wrapper">
          <div className="container">
            <h2>Code atom</h2>
            <p>Simple atom for displaying and highlighting code</p>
            <Code code={code} placeholder="Skriv kode her" />
            <Code code={code} editMode={true} activeEditMode={true} placeholder="Skriv kode her" />
            <Code code={''} placeholder="Skriv kode her" />
            <Code code={''} editMode={true} activeEditMode={true} placeholder="Skriv kode her" />
          </div>
        </div>
        <div className="container-wrapper">
          <div className="container">
            <h2>Text atom</h2>
            <p>Simple atom for displaying text. Offers a few different editor types, see nocms-forms package.</p>
            <h3>End user version</h3>
            <Text text={this.state.simple} placeholder="Test-input" activeEditMode={this.props.activeEditMode} editorType="simple" scope="simple" />
            <Text text={this.state.linkeditor} placeholder="Test-input" activeEditMode={this.props.activeEditMode} editorType="simpleWithLink" scope="linkeditor" />
            <h3>Admin version</h3>
            <Text text={this.state.simple} placeholder="Test-input" activeEditMode editMode editorType="simple" scope="simple" />
            <Text text={this.state.linkeditor} placeholder="Test-input" activeEditMode editMode editorType="simpleWithLink" scope="linkeditor" />
          </div>
        </div>
        <div className="container-wrapper">
          <div className="container">
            <h2>Text area atom</h2>
            <p>Simple atom for multiline text.</p>
            <h3>End user version</h3>
            <TextArea text={this.state.simple} paragraph={false} activeEditMode={this.props.activeEditMode} />
            <h3>Admin version</h3>
            <TextArea text={this.state.textArea} paragraph={false} activeEditMode editMode scope={this.state.textArea} />
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
        <div className="container-wrapper">
          <div className="container">
            <h2>Page input</h2>
            <PageInput value={this.state.pageInput} scope="pageInput" label="Page Input" />
            <PageInput type="select" options={options} value={this.state.pageSelect} scope="pageSelect" label="Page select" />
            <PageInput type="select" options={stringOptions} value={this.state.pageSelectStringOptions} scope="pageSelectStringOptions" label="Page select, string options" />
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
