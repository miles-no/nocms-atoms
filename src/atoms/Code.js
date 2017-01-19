import React, { PropTypes } from 'react';
import Prism from 'prismjs';

require('prismjs/components/prism-aspnet.js');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-c');
require('prismjs/components/prism-clike');
require('prismjs/components/prism-coffeescript');
require('prismjs/components/prism-cpp');
require('prismjs/components/prism-csharp');
require('prismjs/components/prism-docker');
require('prismjs/components/prism-fsharp');
require('prismjs/components/prism-groovy');
require('prismjs/components/prism-java');
require('prismjs/components/prism-json');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-less');
require('prismjs/components/prism-php');
require('prismjs/components/prism-perl');
require('prismjs/components/prism-powershell');
require('prismjs/components/prism-scala');
require('prismjs/components/prism-sass');
require('prismjs/components/prism-scss');
require('prismjs/components/prism-sql');
require('prismjs/components/prism-swift');
require('prismjs/components/prism-typescript');
require('prismjs/components/prism-yaml');

const Code = (props) => {
  const {
    code,
    placeholder,
    language,
  } = props;

  const prismLang = Prism.languages[language] || Prism.languages.javascript;
  const html = Prism.highlight(code, prismLang);

  console.log('lang', language, prismLang, Prism.languages);

  return (
    <pre>
      { code ?
        <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: html }} />
        : placeholder }
    </pre>
  );
};

Code.propTypes = {
  code: PropTypes.string,
  placeholder: PropTypes.string,
  language: PropTypes.string,
};

Code.defaultProps = {
  language: 'javascript',
};

export default Code;
