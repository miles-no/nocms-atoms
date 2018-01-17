import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Text, TextArea, Image, Icon, PageInput, Code, Link } from 'nocms-atoms';
import { listenToGlobal } from 'nocms-events';

const javascript = `var data = 1;
var d = 2;`;

const jsx = `<MyComponent prop1="test">
  <MyChildComponent />
</MyComponent>`;

const markup = `<div class="container">
  Text
</div>`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      simple: 'Simple editor',
      linkeditor: 'Editor with link',
      textArea: 'Text area',
      pageInput: 'Page input',
      editMode: false,
      activeEditMode: false,
    };

    listenToGlobal('nocms.value-changed', (scope, value) => {
      const state = {};
      state[scope] = value;
      this.setState(state);
    });
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.toggleActiveEditMode = this.toggleActiveEditMode.bind(this);
  }

  getChildContext() {
    return {
      editMode: this.state.editMode,
    };
  }

  toggleEditMode(e) {
    this.setState({ editMode: e.currentTarget.checked });
  }

  toggleActiveEditMode(e) {
    this.setState({ activeEditMode: e.currentTarget.checked });
  }

  render() {
    const options = [{ value: 1, label: 'Val 1' }, { value: 2, label: 'Val 2' }];
    const stringOptions = ['no', 'en'];
    return (
      <div>
        <div className="container-wrapper">
          <div className="container">
            <h2>Edit mode</h2>
            <label><input type="checkbox" checked={this.state.editMode} onChange={this.toggleEditMode} /> Edit mode</label>
            <label><input type="checkbox" checked={this.state.editMode && this.state.activeEditMode} onChange={this.toggleActiveEditMode} /> Active edit mode</label>
          </div>
        </div>
        <div className="container-wrapper">
          <div className="container">
            <h2>Code atom</h2>
            <p>Simple atom for displaying and highlighting code</p>
            <Code code={javascript} placeholder="Skriv kode her" language="javascript"  />
            <Code code={jsx} placeholder="Skriv kode her" language="jsx"/>
            <Code code={markup} placeholder="Skriv kode her" language="markup"/>
            <Code code={''} placeholder="Skriv kode her"/>
          </div>
        </div>
        <div className="container-wrapper">
          <div className="container">
            <h2>Text atom</h2>
            <p>Simple atom for displaying text. Offers a few different editor types, see nocms-forms package.</p>
            <h3>End user version</h3>
            <Text text={this.state.simple} placeholder="Test-input" activeEditMode={this.state.activeEditMode} editorType="simple" scope="simple" />
            <Text text={this.state.linkeditor} placeholder="Test-input" activeEditMode={this.state.activeEditMode} editorType="simpleWithLink" scope="linkeditor" />
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
            <TextArea text={this.state.simple} paragraph={false} activeEditMode={this.state.activeEditMode} />
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
        <div className="container-wrapper">
          <div className="container">
            <h2>Links</h2>
            <Link activeEditMode={this.state.activeEditMode} scope="example.link" />
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

App.childContextTypes = {
  editMode: PropTypes.bool,
};

ReactDOM.render(<App />, document.getElementById('app'));
