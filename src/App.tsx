import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import './App.css';
import Routers from './routers/Routers';
import store from './redux/store';

const App = () => {

  return (
    <>
      <ConfigProvider
      // theme={{
      //   token: {},
      //   components: {}
      // }}
      >
        <Provider store={store}>
          <Routers />
        </Provider>
      </ConfigProvider>
    </>
  )
}

export default App;
