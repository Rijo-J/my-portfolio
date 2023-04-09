import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";

export default function Post() {
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },alt
          }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="">
      <section className="">
        <h1 className="">Blog Post Page</h1>
        <h2 className="">
          Welcome to my blog page
        </h2>
        <div className="">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className=""
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className=""
                    />
                    <span className="">
                      <h3 className="">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
