
import MeetupList from "../components/meetups/MeetupList";

const DUMMYDATA = [
    {
     title: "A first meetup",
     image: '/china.jpg',
     address: ' somewhere in 19, 2nd crescent dulipa ave, greenville',
     description: 'blockchain for entrepreneurs and the future',
    },
     {
     title: "A second meetup",
     image: '/china.jpg',
     address: 'good time hasslefare, 15th ave, mollygill crescent, sospredan',
     description: 'The innovation for the generation unborn',
    },
     {
     title: "A Third meetup",
     image: '/china.jpg',
     address: 'good time hasslefare, 15th ave, mollygill crescent, sospredan',
     description: 'The innovation for the generation unborn',
    },
]


const HomePage = () => {
    return (
        <div>
            
          <MeetupList meetups={DUMMYDATA}/>
        </div>
    )
}

export default HomePage;
