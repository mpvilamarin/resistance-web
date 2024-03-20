
// import React from 'react'
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
// import { GET_ALL_POSTS } from '../../graphql/queries';

// export default function Blog({ posts }) {

//     return (
//         <div>
//             <h2>Todas las entradas</h2>
//             <br />
//             {postsposts.map((val, i) => {
//                 return (
//                     <div key={i}>
//                         <h3>{val.attributes.title}</h3>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export async function getServerSideProps() {

//     const client = new ApolloClient({
//         uri: "http://localhost:1337/graphql",
//         cache: new InMemoryCache()
//     })
//     console.log(client);
//     const { data } = await client.query({
//         query: GET_ALL_POSTS
//     })
//     console.log("data", data);

//     return {
//         props: {
//             posts: data.blogPosts
//         }
//     }
// }