import {useRouter} from 'next/router'

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem({id, image, title, address}) {
  const router = useRouter()

  const showDetailsHandler = () => {
    //We could also define an anchor or <Link>, but with the router object, we
    // can also use this push method, which is convenient for button handlers.
    router.push('/' + id)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
