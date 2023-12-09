import Link from 'next/link';
import styles from '../../styles/Updates.module.css';
import Avatar from '../avatar';

//data
const updatesArray = [
    {topic: 'Technology', description: 'GA becoming one of the most successful SEI programs'},
    {topic: 'Economy', description: 'What is going on with the stock market'},
    {topic: 'Politics', description: 'What are the next elections bringing to the table'},

]
export default function Updates() {
    const updatesArrayDisplay = updatesArray.map((obj, idx) => {
        return (
            <div className={styles.card} key={idx}>
                <h3>{obj.topic}</h3>
                <p>{obj.description}</p>

            </div>
        )
    })
    return (
        <div className= {styles.container}>
            <h1>Updates</h1>
            <Avatar/>
           

            <div className={styles.grid}>
                {updatesArrayDisplay}

            </div>
            <Link href="/">Return Home</Link>
        </div>
    )
}