// words.js

// Actions
const CREATE = "words/CREATE";//추가하기

const initialState = {
    list: [("단어": 1),("설명": 2),("예시": 3) ]
};//이거 이렇게 하는 거 맞냐..

// const LOAD = 'my-app/words/LOAD';//서버에서 가지고 올떄
// const UPDATE = 'my-app/words/UPDATE';
// const REMOVE = 'my-app/words/REMOVE';



// Action Creators
export function createwords(words) {
    return { type: CREATE, words };
}

// export function loadWidgets() {
// return { type: LOAD };
// }

// export function createWidget(widget) {
// return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
// return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
// return { type: REMOVE, widget };
// }


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "words/CREATE": {
            const new_word_list = [...state.list, action.words];
            return { list: new_word_list };
        }
        default: return state;
    }
};



// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }