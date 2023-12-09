import Link from 'next/link';
import styles from '../../styles/Notifications.module.css';
import Avatar from '../avatar';

//data
const array = [
'Anna',
'Yazmin',
'Bob',
'Diego',
'Pamela',
'Julian',
'Sandra'
]

export default function Notifications() {
    const NotificationsArray = array.map((s, idx) => {
        return <p key={idx}>{s}</p>
    })
    return (
        <div className= {styles.container}>
            <h1>Your Notifications</h1>
            <Avatar />
            <p>Don't miss anything</p>
            <p>Your top notifiations come from  {array[5]}</p>
            <div>
                Your most recent notifications:
                {NotificationsArray}
            </div>
            <Link href="/">Return Home</Link>
        </div>
    )
}