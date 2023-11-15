import {Component} from 'react'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <ul className="blogs-list">
        {blogsList.map(eachBlog => (
          <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
        ))}
      </ul>
    )
  }
}

export default BlogList
