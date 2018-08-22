import 'isomorphic-fetch'
import Head from 'next/head'
import styles from '../styles/styles.scss'
import { Layout, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout
import Navbar from './Navbar';

export default class extends React.Component {
    render() {
        return (
            <div role="main">
                <Head>
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="apple-touch-icon" href="/static/icon.png" />

                    <meta name="theme-color" content="#ff6600" />
                    <link rel="manifest" href="static/manifest.json" />
                    <link rel="icon" href="static/img/favicon.ico" />
                    <style dangerouslySetInnerHTML={{ __html: styles }} />
                </Head>

                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <Navbar />
                    </Header>

                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                            {this.props.children}
                        </div>
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        )
    }
}