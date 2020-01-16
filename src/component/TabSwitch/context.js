import { createContext } from 'react';

const context = createContext({});
const {
  Provider: TabSwitchProvider,
  Consumer: TabSwitchConsumer,
} = context;

export { context, TabSwitchProvider, TabSwitchConsumer };
