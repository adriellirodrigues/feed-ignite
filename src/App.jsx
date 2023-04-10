import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/adriellirodrigues.png',
      name: 'Adrielli Rodrigues',
      role: 'Web Developer',
    },
    content: [
          {type:'paragraph', content: 'What`s up, guys! 👋'},
          {type: 'paragraph', content: 'I just uploaded another project to my portfolio. It`s a project I did at the NLW Return, Rocketseat event. The name of the project is DoctorCare 🚀'},
          {type: 'link', content: 'jane.design/doctorcare'},
        ],
    publishedAt: new Date('2023-04-08 11:42:00')
},
{
  id: 2,
  author: {
    avatarUrl: 'https://github.com/maykbrito.png',
    name: 'Mayk Brito ',
    role: 'Web Developer',
  },
  content: [
           {type:'paragraph', content: 'What`s up, guys! 👋'},
           {type: 'paragraph', content: 'I just uploaded another project to my portfolio. It`s a project I did at the NLW Return, Rocketseat event. The name of the project is DoctorCare 🚀'},
           {type: 'link', content: 'jane.design/doctorcare'},
      ],
  publishedAt: new Date('2023-04-03 11:42:00')
},

]


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
          <main>
             {posts.map(post =>{
                return (
                  <Post 
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                />)
             })}
          </main>
      </div>
     
    
    </div>
    
    

    )
}

