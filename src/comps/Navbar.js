import "./style.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Accueil from "../pages/Accueil";
import Etudiant from "../pages/Etudiant";
import Professeur from "../pages/Professeur";
import Administrateur from "../pages/Administrateur";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
function Navbar() {
  return (
    <div className="Navbar">
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="1">
              <Link to="/accueil"> </Link>accueil
                </Menu.Item>
                <Menu.Item key="2"><Link to="/administrateur"> </Link>Administrateur</Menu.Item>
                <Menu.Item key="3"><Link to="/etudiant"> </Link>Etudiant</Menu.Item>
                <Menu.Item key="4"><Link to="/professeur"> </Link>Professeur</Menu.Item>
                <Menu.Item key="6">subnav1</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="7">option5</Menu.Item>
                <Menu.Item key="8">option6</Menu.Item>
                <Menu.Item key="9">option7</Menu.Item>
                <Menu.Item key="10">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="subnav 3"
              >
                <Menu.Item key="11">option9</Menu.Item>
                <Menu.Item key="12">option10</Menu.Item>
                <Menu.Item key="13">option11</Menu.Item>
                <Menu.Item key="14">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Routes>
                <Route path="/accueil" exact element={<Accueil />}></Route>
                <Route path="/administrateur" exact element={<Administrateur />}></Route>
                <Route path="/etudiant" exact element={<Etudiant />}></Route>
                <Route path="/professeur" exact element={<Professeur />}></Route>
               
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Navbar;
