import "./Blogview.css"
import { useParams } from "react-router-dom"
import blogs from "./../../data"

export default function Blogview() {

  const { id } = useParams()

  const selectedBlog = blogs.find((blogObject) =>  blogObject.id === id )

  return (
    <div>
      <h1>{selectedBlog.title}</h1>
      <p>
        {selectedBlog.author.name} | {selectedBlog.date}
      </p>
      <p>{selectedBlog.content}</p>

      {selectedBlog.author.avatar}

      <h3>{selectedBlog.author.name} </h3> 

      <h5>{selectedBlog.categories}</h5>

    </div>
  )

}
