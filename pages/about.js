import 'isomorphic-fetch'
import React from 'react'
import { connect } from 'react-redux'

import Layout from '../components/_layout'

class About extends React.Component {

	render() {
		return (
			<Layout title="index">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at turpis ac orci efficitur blandit in eu tellus. Nulla sit amet libero suscipit, tempor felis non, blandit diam. Fusce bibendum convallis turpis, a bibendum mi dignissim sed. Suspendisse facilisis urna sed dui euismod, ut egestas purus suscipit. Praesent volutpat nulla a ipsum laoreet molestie. Nullam sagittis neque vel erat sagittis fermentum. Ut ultricies turpis sed quam fringilla, a iaculis purus vehicula.
				Nulla quis velit sapien. Pellentesque sed est nec mauris efficitur facilisis ut sed risus. Nulla vestibulum tincidunt lorem vitae faucibus. Cras ac tortor nibh. Donec ornare, risus ac sagittis commodo, ipsum lectus porttitor orci, eget gravida sapien purus nec lectus. Sed massa turpis, consectetur in ultricies eu, suscipit vitae orci. Suspendisse sagittis commodo ante varius efficitur. Duis pellentesque tellus sit amet mattis scelerisque. Sed vitae purus dui. Etiam luctus lacus at finibus suscipit.
				Morbi hendrerit mi eget massa gravida, sed scelerisque urna pellentesque. Donec tincidunt justo efficitur tempus tempor. Sed maximus tincidunt lacus eget imperdiet. Sed tempor fermentum mauris, quis blandit arcu fermentum id. Nam lobortis velit sed tellus aliquam convallis. Sed at lorem mollis purus feugiat tincidunt. Curabitur egestas magna elementum lacinia maximus. Aenean hendrerit justo arcu, eget lacinia mi tempus vel. Nunc enim leo, porta sit amet ultricies sed, tempor a ligula.
				Proin id lacus id velit pulvinar ullamcorper. Vestibulum interdum eleifend consectetur. Donec at eros varius, gravida tortor a, varius diam. Maecenas nulla urna, fringilla gravida risus in, scelerisque accumsan orci. Cras id turpis nunc. Nunc laoreet congue augue non dictum. Nulla porttitor quis dolor in tristique. Nulla elementum sollicitudin ultrices. Cras maximus elit eros, et congue nibh convallis eget. Suspendisse eu eleifend massa. Maecenas eu fermentum dolor. Praesent semper tortor sit amet eleifend pretium. Donec pulvinar imperdiet diam, ac auctor nunc auctor et. Nam dapibus, massa ultricies fermentum maximus, ante ex porttitor justo, eu ornare lectus dolor venenatis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
				Pellentesque varius ex in felis volutpat, at vulputate mi accumsan. Ut porta quam sed libero ullamcorper, sed eleifend massa semper. Maecenas luctus urna vel mauris egestas aliquam. Mauris viverra vestibulum tristique. Praesent fringilla justo elit, ac cursus massa pretium id. Donec luctus vitae lacus at volutpat. Mauris leo nisi, feugiat at lectus ac, aliquet efficitur quam. Pellentesque sed ligula id ligula laoreet facilisis. Vivamus suscipit mi ornare arcu pellentesque, sed tincidunt mi blandit. Mauris vel lacus eu quam ornare porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sodales elit sed augue posuere sodales. Suspendisse ac neque et eros eleifend condimentum at nec leo. In a velit eu quam efficitur bibendum vitae vitae est. Aliquam ultrices purus et convallis auctor. Phasellus quis felis ut lorem dapibus malesuada.
			</Layout>
		)
	}
}

export default connect()(About)
