import "styles/global.css"
import { Provider } from 'react-redux'
import store from 'redux/store'
import TodoPage from "container/todo-page/TodoPage";




function App(): JSX.Element {

    return (
        <Provider store={store}>
            <div className="App">
                < TodoPage />
            </div>
        </Provider>
    );
};

export default App;
