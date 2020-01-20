import {
    VisibilityFilters,
    SET_VISIBILITY_FILTER,
    ADD_TODO,
    COMPLETE_TODO
} from './actions';

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];

        case COMPLETE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: true
                    });
                }
                return todo;
            });

        default:
            return state;
    }
}

function visibilityFilter(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;

        default:
            return state;
    }
}

/**
 * Ahora el reducer principal simplemente llama a
 * los demas sub-reducers que controlan distintas partes
 * del state, y los combina en un objeto.
 *
 * Los valores iniciales del state son determinados
 * por los default de cada uno de los sub-reducers
 * (ver nota completa en el cuaderno .. separando reducers)
 */
function todoApp(state = initialState, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    };
}
