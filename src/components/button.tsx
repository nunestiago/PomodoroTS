import React from 'react';

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}

export function Button(props: Props): JSX.Element {
  return (
    <div>
      <button onClick={props.onClick} className={props.className}>
        {props.text}
      </button>
    </div>
  );
}
