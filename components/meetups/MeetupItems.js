import Image from 'next/image';
import Link from 'next/dist/client/link';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

const MeetupItems = (props) => {
    return (
        <li className={classes.list} key={props.key}>
            <Card>
                <Image src={props.image} width="800px" height="400px"/>
                <div className={classes.content}>
                    <h2>{props.title}</h2>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                    <button><Link href={`/${props.id}`}>show details</Link></button>
                </div>
                
            </Card>
           
        </li>
    )
}

export default MeetupItems
