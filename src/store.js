import saga from 'src/saga';
import reducer from 'src/reducer';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(reducer, middleware);

sagaMiddleware.run(saga);

export default store;
