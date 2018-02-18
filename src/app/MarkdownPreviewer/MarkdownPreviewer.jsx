import React from 'react';
import {Link} from 'react-router-dom';
import marked from 'marked';

import {INITIAL_TEXT} from '../../const';

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.textareaHandler = this.textareaHandler.bind(this);
  }

  textareaHandler(e) {
    const text = e.target.value;
    document.querySelector('.markdown-previewer__result').innerHTML = marked(text);
  }

  render() {
    return (
      <div className='content-wrapper'>
        <Link to='/' className='link-item -back'>Back</Link>
        <h1>MarkdownPreviewer</h1>
        <div className="markdown-previewer">
          <textarea className='markdown-previewer__input' cols='30' rows='10' onKeyUp={this.textareaHandler} defaultValue={INITIAL_TEXT}></textarea>
          <div className='markdown-previewer__result' dangerouslySetInnerHTML={{__html: marked(INITIAL_TEXT)}}></div>
        </div>
      </div>
    );
  }
}


export default MarkdownPreviewer;