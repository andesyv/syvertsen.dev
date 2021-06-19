import React from 'react';
import { IDataExtended } from '../data/data';

const PortfolioContext = React.createContext<IDataExtended>({} as any); // Undefined default value

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
