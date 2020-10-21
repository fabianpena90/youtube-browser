import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'


function SearchBar(props) {
  const [text, setText] = useState('')

  function handleChange(e){
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onFormSubmit(text)
  }

  return (
    <div className="search-bar ui segment">
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
      <label>Search Video</label>
        <input type="text" value={text} onChange={handleChange} />
      </div>
    </form>
    </div>
  );
}

export default SearchBar;