import { createContext, Dispatch } from 'react';
import { IStyleState, BodyUpdateAction } from '../interfaces';

const StyleContext = createContext<{
  state: IStyleState;
  dispatch: Dispatch<BodyUpdateAction> | null;
}>({
  state: {
    bodyStyle: '',
  },
  dispatch: null,
});
export { StyleContext };

export const reducer = (
  state: IStyleState,
  action: BodyUpdateAction
): IStyleState => {
  switch (action.type) {
    case 'updateBodyStyle':
      const { bodyStyle } = action.payload;
      return {
        ...state,
        bodyStyle,
      };
  }
};
