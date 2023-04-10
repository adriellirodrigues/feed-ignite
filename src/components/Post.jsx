import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

import { useState } from 'react';

export function Post({  author, publishedAt, content   }) {
 const publishedDateFormatted = format(publishedAt, "LLLL dd'th' 'at' HH:mm'h'")
 const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true
})

const [comments, setComments ] = useState([
    'Very  nice work, huh?!'  
])

    const [newCommentText, setNewCommentText ] = useState('')

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText])

        setNewCommentText('');

    }

   function handleNewCommentChange() {
     event.target.setCustomValidity('')
     setNewCommentText(event.target.value)
   }

   function handleNewCommentInvalid() {
    event.target.setCustomValidity('Please, fill out this field!')
   }

   function deleteComment(commentToDelete) {
     const commentsWithoutDeletedOne = comments.filter(comment => {
        return comment !== commentToDelete;
     })

     setComments(commentsWithoutDeletedOne)

   }

   const isNewCommentEmpty = newCommentText.length === 0
    return (


        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} /> 
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div> 

                <time title={publishedDateFormatted} dateTime={publishedAt.toString()}>
                    
                    {publishedDateRelativeToNow}
                </time>   
            </header> 
            <div className={styles.content}>
                {content.map( item => {
                    if(item.type === 'paragraph') {
                    return <p key={item.content}>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p key={item.content}> <a href="#">{item.content}</a> </p>
                    }
                })}
                 
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback</strong>
                <textarea 
                    name="comment"
                    placeholder="Drop a comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required    
                >
                </textarea>
                
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publish</button>
                </footer>
            </form>


            <div className={styles.commentList}>
                {comments.map(comment => {
                    return( 
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                    />)
                })}
            </div>
        </article>
    )
}


//  const publishedDateFormatted = format(publishedAt, "LLLL dd'th' 'at' HH:mm'h'",{
//     locale: ptBR,
//  })

// const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
//     locale: ptBR,
//     addSuffix: true
// })

//  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'") pt-Br
// or
//    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR',{
//         day: '2-digit',
//         month:'long',
//         hour: '2-digit',
//         minute: '2-digit'
//    }).format(publishedAt);