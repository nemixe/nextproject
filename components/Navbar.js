import { Link } from '../routes'
import { Menu } from 'antd'
export default class extends React.Component {
  render() {
    return (
      <div>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link route="/"><a>Home</a></Link></Menu.Item>
          <Menu.Item key="2"><Link route="/about"><a>About</a></Link></Menu.Item>
        </Menu>
      </div>
    );
  }
}