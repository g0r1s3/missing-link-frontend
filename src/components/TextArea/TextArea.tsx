// src/components/TextArea/TextArea.tsx
// @ts-ignore
import React from 'react';
import './TextArea.css';

export type TextAreaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'children'
> & {
  id: string;
  label?: string;
  error?: string;
  helperText?: string;
};

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, label, error, helperText, className = '', ...rest }, ref) => {
    return (
      <div className={`tf-root tf-root--textarea`}>
        {label && (
          <label htmlFor={id} className="tf-label">
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          className={`tf-input ${error ? 'tf-input--error' : ''} ${className}`}
          {...rest}
        />
        {(helperText || error) && (
          <div className={`tf-helper ${error ? 'tf-helper--error' : ''}`}>
            {error ?? helperText}
          </div>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
export { TextArea };