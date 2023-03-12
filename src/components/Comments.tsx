import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comments.module.css'

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comments ({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLIkecount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment( content )
    }

    function handleLikeComment() {
        setLIkecount((state) =>{
            return state + 1
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/DanielQueirozDaCruz.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daniel Queiroz</strong>
                            <time title="25 de janeiro àS 17:54" dateTime="2023-01-24 17:25:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}