import React, { useEffect, useState } from 'react';
import './DisplayBlogs.css';
import axios from 'axios';
import BlogCard from './BlogCard/BlogCard';
import moment from 'moment';

const DisplayBlogs = () => {
    const [data, setData] = useState([]);

    const response = async () => {
        const res = await axios.get('https://server-for-my-portfolio.vercel.app/getAllBlogs');
        if (res.data.length > 0) {
            setData(res.data);
        } else {
            setData(false);
        }
    };

    useEffect(() => {
        response();
    }, [])
    // console.log('all data: ', data);

    return (
        <div className="blog-div-parent">
            <h1>All Blogs</h1>
            <hr />
            <div className='blog-div'>
                {/* <p>Total Blog Found : {data.length}</p> */}
                {data.map(index => <BlogCard index={index} key={index._id}></BlogCard>)}
                {data.length === 0 && <p>Loading...</p>}
                {!data && <p>No Blogs Found !</p>}
            </div>
        </div>
    );
};

export default DisplayBlogs;







// in mongodb i have data like this : ""[
//     {
//       _id: "64beaba8425b7770ebea5ee6",
//       category: [
//         "webDevelopment"
//       ],
//       title: "Testing - 2",
//       createdAt: "2023-07-24T16:49:42.065Z"
//     },
//     {
//       _id: "64c50861687b8379d9d92427",
//       content: "<div style=\"color: #cccccc;background-color: #1f1f1f;font-family: Fira Code, Consolas, monospace, Menlo, Monaco, 'Courier New', monospace;font-weight: 400;font-size: 19px;line-height: 29px;white-space: pre;\"><div><span style=\"color: #cccccc;\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dicta inventore rerum autem eligendi harum quo vero consectetur, nulla similique doloremque minus iusto in ad nobis culpa tenetur sint, illo ex, soluta quas obcaecati est fugiat laboriosam! Alias magni veritatis voluptates iste minus nesciunt accusantium natus cumque necessitatibus? Adipisci, quas.</span></div></div>,
//       category: [
//         "programming"
//       ],
//       title: "Programming",
//       createdAt: "2023-07-29T12:38:54.758Z"
//     },
//     {
//       _id: "64c5087f687b8379d9d92428",
//       content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dicta inventore rerum autem eligendi harum quo vero consectetur, nulla similique doloremque minus iusto in ad nobis culpa tenetur sint, illo ex, soluta quas obcaecati est fugiat laboriosam! Alias magni veritatis voluptates iste minus nesciunt accusantium natus cumque necessitatibus? Adipisci, quas.</p>",
//       category: [
//         "mac"
//       ],
//       title: "Mac",
//       createdAt: "2023-07-29T12:39:25.608Z"
//     },
//     {
//       _id: "64c508b3687b8379d9d92429",
//       content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dicta inventore rerum autem eligendi harum quo vero consectetur, nulla similique doloremque minus iusto in ad nobis culpa tenetur sint, illo ex, soluta quas obcaecati est fugiat laboriosam! Alias magni veritatis voluptates iste minus nesciunt accusantium natus cumque necessitatibus? Adipisci, quas.</p>",
//       category: [
//         "webDevelopment"
//       ],
//       title: "Web Development",
//       createdAt: "2023-07-29T12:40:17.129Z"
//     },
//     {
//       _id: "64c508c5687b8379d9d9242a",
//       content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dicta inventore rerum autem eligendi harum quo vero consectetur, nulla similique doloremque minus iusto in ad nobis culpa tenetur sint, illo ex, soluta quas obcaecati est fugiat laboriosam! Alias magni veritatis voluptates iste minus nesciunt accusantium natus cumque necessitatibus? Adipisci, quas.</p>",
//       category: [
//         "dsa"
//       ],
//       title: "DSA",
//       createdAt: "2023-07-29T12:40:35.633Z"
//     },
//     {
//       _id: "64c508d6687b8379d9d9242b",
//       content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dicta inventore rerum autem eligendi harum quo vero consectetur, nulla similique doloremque minus iusto in ad nobis culpa tenetur sint, illo ex, soluta quas obcaecati est fugiat laboriosam! Alias magni veritatis voluptates iste minus nesciunt accusantium natus cumque necessitatibus? Adipisci, quas.</p>",
//       category: [
//         "react"
//       ],
//       title: "React",
//       createdAt: "2023-07-29T12:40:53.287Z"
//     }
//   ]""
// now in react  if i want to get data from the above mongodb database that matches only 'react' keyword in the 'category' array, how may i do that ? 