import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

import { Avatar } from './Avatar';
import { useState } from 'react';


export function Comment({   content, onDeleteComment}) {

     function handleDeleteComment(){
        onDeleteComment(content)
    }

    const [ likeCount, setLikeCount ] = useState(0) 
        
    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return(
        <div className={styles.comment}>
           <Avatar hasBorder={false} className={styles.avatarWithouBorder} src="https:/github.com/adriellirodrigues.png" />
       

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Adrielli Rodrigues</strong>
                        <time title="07th April at 08:32" dateTime="2023-04-07 08:32:12">Published at 1hr ago</time>   
                    </div>

                    <button onClick={handleDeleteComment} title="Delet comment">
                        <Trash size={24}/>
                    </button>
                </header>
                <p>{content}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp size={20}/>
                    Like <span>{likeCount}</span>
                </button>
               
            </footer>
        </div>
       
    </div>
    )
}