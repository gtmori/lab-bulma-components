import React, { Component, Fragment } from 'react';

class Message extends Component {
  render() {
    return (
      <article className="message is-info">
        <div className="message-header">
          <p>{this.props.title}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {this.props.children}
        </div>
      </article>
    )
  }}

export default Message