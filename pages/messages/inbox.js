import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Inbox.module.css';
import Message from '../messages';
import Avatar from '../avatar';

// data
const messagesArray = [
    { username: '@Yaz', message: 'Hey how are you'},
    { username: '@Pam', message: 'What are we having for dinner?'},
    { username: '@Diego', message: 'I have a soccer game this Friday'},
    { username: 'Kendra', message: 'New hire onboarding Thursday'},
    { username: '@KyleElectric', message: 'Payment due 12/15'},
]

export default function Inbox() {
    const displayMessagesArray = messagesArray.map((person, idx) => {
        return <Message image={<Avatar />} username={person.username} message={engineer.message} key={idx} />
    });

    return (
        <div className={styles.container}>
            <h1>Message Inbox</h1>
            
            <div className={styles.grid}>
                {displayMessagesArray}
            </div>

            <Link href="/">Return Home</Link>
        </div>
    )
}