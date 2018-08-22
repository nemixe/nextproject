import 'isomorphic-fetch'
import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/_layout'

class About extends React.Component {

	render() {
		return (
			<Layout title="About">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed varius erat, eu tincidunt quam. Curabitur id urna molestie, aliquet velit eget, commodo lacus. Duis tempor nisi id neque efficitur gravida. Praesent vitae facilisis dui, ut malesuada mi. In nec mauris tempus, congue felis laoreet, vulputate elit. Integer ut orci lorem. Nunc interdum convallis urna varius convallis. Praesent elementum erat sit amet eros mattis suscipit. Nam tempor eget nibh et aliquet. Etiam elementum viverra nibh non suscipit.
	
	Sed id imperdiet metus. Duis id auctor mi. In tempus sem nisl, ac commodo ante porttitor ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus metus neque, quis sagittis neque finibus et. Aliquam eget metus est. Pellentesque vitae commodo ante, et vulputate odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam in consectetur massa, in accumsan magna. Suspendisse potenti.
	
	Duis tortor leo, mollis et nisi nec, iaculis tempus magna. Ut in est eleifend, blandit urna ut, luctus est. Vivamus tristique orci sed iaculis vestibulum. Ut molestie in justo posuere pharetra. In libero nunc, fermentum ac condimentum non, pellentesque et lacus. Proin at pretium neque. Vivamus viverra a lectus et pretium.
	
	Nulla sit amet tortor quis enim maximus aliquet. Ut aliquet luctus ligula, vitae dignissim dolor convallis non. Ut ut pretium turpis. Nunc eget condimentum eros. Vestibulum ut nisl id mi varius consectetur. Fusce at nisl diam. Vestibulum odio arcu, ultrices vel sapien a, tincidunt tincidunt dui. Cras condimentum libero ac ligula ornare porttitor. Aliquam dignissim augue eu accumsan ultrices. Ut at efficitur eros. Duis ornare lorem ac nisi congue, ac rhoncus dui tempor. Sed nunc lorem, efficitur non viverra ac, rutrum sed magna. Vivamus sit amet maximus tellus. Morbi sit amet nunc feugiat, vulputate purus non, vulputate nisl.
	
	Cras tincidunt felis id massa lobortis volutpat. Aenean ultricies tincidunt urna, sit amet dapibus nisl pretium a. Quisque facilisis nunc eget arcu tincidunt, eu iaculis massa scelerisque. Nullam convallis sit amet lectus congue hendrerit. Nam id nisi maximus, faucibus nunc ac, consectetur ante. Praesent sit amet lacinia justo, non efficitur nunc. Ut sed pellentesque risus, at dictum magna.
				</p>
			</Layout>
		)
	}
}

export default connect()(About)
