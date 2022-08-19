import React from 'react';
import { IDataExtended } from '../data/data';

const PortfolioContext = React.createContext<IDataExtended>({} as IDataExtended);

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
