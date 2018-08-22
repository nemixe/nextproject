import 'isomorphic-fetch'
import React from 'react'
import { Link } from '../routes'
import { connect } from 'react-redux'

import Layout from '../components/_layout'

class Index extends React.Component {
	static async getInitialProps() {
		const req = await fetch(`https://api.hackerwebapp.com/news`)
		const stories = await req.json()
		return { stories }
	}

	fetchData() {
		return this.props.stories.map(story => (
			<li key={story.id}>
				<a href={story.url}>
					{story.title}
				</a>
				<Link route={`stories`} params={{ id: story.id }}>
					<a>
						{story.comments_count}
					</a>
				</Link>
			</li>
		))
	}

	render() {
		return (
			<Layout title="index">
				<ul>
					{this.fetchData()}
				</ul>
			</Layout>
		)
	}
}

export default connect()(Index)
