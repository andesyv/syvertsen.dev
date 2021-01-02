import React from 'react';
import GitHubButton from 'react-github-btn';
import { GitHubButtonProps } from 'github-buttons';

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
      <GitHubButton {...args}>
        {props.children || props.label || capitalizeFirst(props.type)}
      </GitHubButton>
    </>
  );
};

export default GithubButton;
