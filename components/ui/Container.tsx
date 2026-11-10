import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'content' | 'hero' | 'full';
  children: React.ReactNode;
}

export function Container({
  size = 'content',
  className = '',
  children,
  ...props
}: ContainerProps) {
  const sizeStyles = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    content: 'max-w-[1200px]',
    hero: 'max-w-[1320px]',
    full: 'max-w-full',
  }[size];

  return (
    <div
      className={`w-full mx-auto px-5 sm:px-6 md:px-8 lg:px-12 ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
