import 'antd/dist/antd.min.css'
import './App.css';
import AppHeader from './components/common/Header';
import AppHome from './views/Home';
import { Layout } from 'antd';
import AppFooter from './components/common/Footer';
const { Header, Content, Footer } = Layout;

function App() {
  
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
          <AppHome/>
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
