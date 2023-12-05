import Link from 'next/link';
import styles from '../../styles/newsfeed.module.css';
import Avatar from '../avatar';

//data
const reactArray = [
    {topic: 'components', description: 'components are used to build React App'},
    {topic: 'pros', description: 'props are used to pass data down to other components'},
    {topic: 'link tag', description: 'Link tag is next tag used to navigate React App'},

]
export default function newsfeed() {
    const reactArrayDisplay = reactArray.map((obj, idx) => {
        return (
            <div className={styles.card} key={idx}>
                <h3>{obj.topic}</h3>
                <p>{obj.description}</p>

            </div>
        )
    })
    return (
        <div className= {styles.container}>
            <h1>Newsfeed</h1>
            <Avatar/>
            <p>The world of react</p>

            <div className={styles.grid}>
                {reactArrayDisplay}

            </div>
            <Link href="/">Return Home</Link>
        </div>
    )
}