const COMPLETE = 'editor/COMPLETE' as const;
const INCOMPLETE = 'editor/INCOMPLETE' as const;

export const complete = () => ({ type: COMPLETE });
export const incomplete = () => ({ type: INCOMPLETE });

type EditorAction = 
  | ReturnType<typeof complete>
  | ReturnType<typeof incomplete>;

type EditorState = {
  lastRowDone: boolean
};

const initialState: EditorState = {
  lastRowDone: false
};

function editor(state: EditorState = initialState, action: EditorAction) {
  switch(action.type) {
    case 'editor/COMPLETE':
      return { lastRowDone: true };
    case 'editor/INCOMPLETE':
      return { lastRowDone: false };
    default:
      return state;
  }
};

export default editor;