import { createContext } from 'react';
import requestService from '../../requestService/requestService';

export const RequestContext = createContext();

/**
* Crée un fournisseur de contexte pour le RequestContext.
*
* @param {Object} props - L'objet props.
* @param {React.ReactNode} props.children - Les composants enfants.
* @return {JSX.Element} Le composant RequestContext.Provider.

 */
export const RequestContextProvider = ({ children }) => {
  const service = new requestService();

  return (
    <RequestContext.Provider value={service}>
      {children}
    </RequestContext.Provider>
  );
};