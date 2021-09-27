import './App.css';
import {useEffect} from 'react';
import LoginButton from './components/auth/auth0/LoginButton';
import LogoutButton from './components/auth/auth0/LogoutButton';
import Profile from './components/auth/auth0/Profile';


async function gql(query, variables={}) {
  const data = await fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          query,
          variables
      })
  });

  return data.json();
}

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "alexzaharia") {
            publication {
                posts(page: $page) {
                    title,
                    brief,
                    slug,
                    dateAdded,
                    contentMarkdown,
                    coverImage,
                    tags {
                      slug,
                      tagline,
                      wiki
                    }
                },
                domain
            }
        }
    }
`;

async function fetchPosts() {
  gql(GET_USER_ARTICLES, {page: 0})
    .then(result => {
      console.log("Posts: ", result.data.user.publication);
    })
} 


function App() {
  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
      
    </div>
  );
}

export default App;
