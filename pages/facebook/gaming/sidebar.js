import { React} from "react";
import styles from '../../../styles/Sidebar.module.css';
import Image from 'next/image';
import Search from './/sidebar/search';
import Yourgames from './/sidebar/your-games';
import Categories from './/sidebar/categories';


    export default function Sidebar() {
        return (
            <div className="sidebar">
                <Search/>
                <Yourgames/>
                <Categories/>
                </div>
        )
}