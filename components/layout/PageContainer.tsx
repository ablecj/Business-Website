import React, { PropsWithChildren } from "react";

type PageContainerProps = {
  className?: string;
};

const PageContainer = ({ children, className = "" }: PropsWithChildren<PageContainerProps>) => {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[112px] ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
