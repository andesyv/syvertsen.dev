import React, { PureComponent, Component } from 'react';

// import GitHubButton from 'react-github-btn';
import { GitHubButtonProps } from 'github-buttons';

interface GHStateInterface {
  element: React.ReactElement
}
class ButtonComponent extends React.PureComponent<GitHubButtonProps, GHStateInterface> {
  constructor(props: GitHubButtonProps) {
    super(props);
    this.state = { element: <span /> };
  }

  async componentDidMount() {
    if (typeof window !== 'undefined') {
      window.render = require('github-buttons').render;
    }

    const response = await new Promise<HTMLIFrameElement | HTMLSpanElement>((resolve) => {
      render(this.props, (el: HTMLIFrameElement | HTMLSpanElement) => {
        resolve(el);
      });  
    });
    this.setState({ element: <>{response}</> });
  }

  render() {
    return (
      <div>
        {this.state.element}
      </div>
    );
  }
}

const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

interface Props {
  repo: string;
  type: 'fork' | 'star' | 'issue';
  label?: string;
}

const GithubButton: React.FC<Props> = (props) => {
  const args: GitHubButtonProps = {
    href: `https://github.com/${props.repo}`,
    'data-size': 'large',
    'data-show-count': true,
  };

  switch (props.type) {
    case 'fork':
      args.href = `${args.href}/fork`;
      args['data-icon'] = 'octicon-repo-forked';
      args['aria-label'] = `Fork ${props.repo} on GitHub`;
      break;
    case 'star':
      args['data-icon'] = 'octicon-star';
      args['aria-label'] = `Star ${props.repo} on GitHub`;
      break;
    case 'issue':
      args.href = `${args.href}/issues`;
      args['data-icon'] = 'octicon-issue-opened';
      args['aria-label'] = `Report an issue`;
      break;
  }

  return (
    <>
      <ButtonComponent {...args}>
        {props.children || props.label || capitalizeFirst(props.type)}
      </ButtonComponent>
    </>
  );
};

export default GithubButton;
