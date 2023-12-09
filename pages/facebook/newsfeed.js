import Link from 'next/link';
import styles from '../../styles/NewsFeed.module.css';
import Avatar from '../avatar';

//data
const newsFeedArray = [
    {topic: 'stories', description: 'check out what is going on with your friends'},
    {topic: 'market place', description: 'Find the best deals'},
    {topic: 'Ads', description: 'Find the things you did not know you needed'},

]
export default function Newsfeed() {
    const newsFeedArrayDisplay = newsFeedArray.map((obj, idx) => {
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
                {newsFeedArrayDisplay}

            </div>
            <Link href="/">Return Home</Link>
        </div>
    )
}