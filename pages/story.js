import 'isomorphic-fetch'
import Layout from '../components/_layout';

export default class extends React.Component {
  static async getInitialProps({ query }) {

    const req = await fetch(`https://node-hnapi.herokuapp.com/item/${query.id}`)
    const story = await req.json()
    return { story }
  }

  fetchData() {
    return (
      this.props.story.comments.map((comment) => (
        <li key={comment.id}>
          <div dangerouslySetInnerHTML={{ __html: comment.content }}></div>
        </li>
      ))
    )
  }

  render() {
    return (
      <Layout title="tes">
        <ul>
          {this.fetchData()}
        </ul>
      </Layout>
    )
  }
}