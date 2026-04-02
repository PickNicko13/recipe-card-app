import React from 'react';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

const Card: React.FC<CardProps> & {
  Header: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Body: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Footer: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>>;
} = ({ hoverable, className, children, ...rest }) => {
  const cardClasses = [
    styles.card,
    hoverable && styles.hoverable,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

Card.Header = ({ className, children, ...rest }) => (
  <div className={[styles.header, className].join(' ')} {...rest}>
    {children}
  </div>
);

Card.Body = ({ className, children, ...rest }) => (
  <div className={[styles.body, className].join(' ')} {...rest}>
    {children}
  </div>
);

Card.Footer = ({ className, children, ...rest }) => (
  <div className={[styles.footer, className].join(' ')} {...rest}>
    {children}
  </div>
);

Card.Title = ({ className, children, ...rest }) => (
  <h3 className={[styles.title, className].join(' ')} {...rest}>
    {children}
  </h3>
);

export default Card;
