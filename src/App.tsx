import { Provider } from 'react-redux';
import { ConfigProvider, message } from 'antd';
import './App.css';
import Routers from './routers/Routers';
import store from './redux/store';

message.config({
  top: 30,           // Khoảng cách từ đỉnh trình duyệt đến message (px)
  duration: 2,       // Thời gian hiển thị mỗi message (giây)
  maxCount: 3,       // Tối đa bao nhiêu message hiển thị cùng lúc
  rtl: true,         // Hỗ trợ hiển thị từ phải sang trái (Right-To-Left)
  prefixCls: 'my-message', // CSS prefix để tùy chỉnh style riêng
});

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
