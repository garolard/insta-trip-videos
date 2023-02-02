import React from 'react';
import { Destination, Journey, Origin, Trip } from 'react-trip-animation';
 
/* Barcelona to Doha, Doha to Hanoi */
const TripAnimation: React.FC<{height: string}> = ({height}) => (
  <Trip
		height={height}
		mode={Trip.mode.SEGMENT}
		flyDuration={0}
		zoom={4}
		tile='https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png'>
    <Journey duration={1500}>
      <Origin position={[41.3887901, 2.1589899]} />
      <Destination position={[25.286106, 51.534817]} />
    </Journey>
  </Trip>
);

export default TripAnimation;