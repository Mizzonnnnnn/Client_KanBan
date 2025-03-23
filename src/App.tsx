import { Provider } from 'react-redux';
import { ConfigProvider, App as AntdApp } from 'antd';
import './App.css';
import Routers from './routers/Routers';
import store from './redux/store';

const App = () => {
  // console.log("Check env: ", process.env.REACT_APP_ID)

  return (
    <>
      <ConfigProvider
        theme={{
          token: {},
          components: {}
        }}
      >
        <AntdApp>
          <Provider store={store}>
            <Routers />
          </Provider>
        </AntdApp>
      </ConfigProvider>
    </>
  )
}

export default App;
