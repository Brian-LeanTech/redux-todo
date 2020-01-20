import {
    VisibilityFilters,
    SET_VISIBILITY_FILTER,
    ADD_TODO,
    COMPLETE_TODO
} from './actions';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};

function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            // Aqui tambien se puede usar spread operator
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });

        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.types,
                        completed: false
                    }
                ]
            });

        case COMPLETE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: true
                        });
                    }
                    return todo;
                })
            });

        default:
            return state;
    }
}
