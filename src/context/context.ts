import React from 'react';

const PortfolioContext = React.createContext<any>(undefined);

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
