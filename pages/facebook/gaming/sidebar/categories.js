import Link from 'next/link';
import styles from '../../../../styles/Sidebar.module.css';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MapIcon from '@mui/icons-material/Map';
import CasinoIcon from '@mui/icons-material/Casino';



const array = [
'All games',
    'Action',
    'Adventure',
    'Arcade',
    'Battle',
    'Board',
    'Builder',
    'Card',
    'Casino'
    ]
    
    export default function Categories() {
        const CategoriesArray = array.map((s, idx) => {
            return <p key={idx}>{s}</p>
        })
        return (
            <div className= {styles.container}>

                <div className={styles.CategoriesArray}>
                    <h3 className={styles.title}>Categories</h3>
                    {CategoriesArray}
                </div>
                <Link href="/">Return Home</Link>
            </div>
        )
    }