import Link from 'next/link';

import Logo from './logo';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          React Meetups
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetup</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;