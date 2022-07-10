// import React from "react";
//
// interface OthersCarouselProps {
// }
//
// const OthersCarousel: React.FC = (props: OthersCarouselProps) => {
//
// return (
//     <div>
//     </div>
//     )
// }
//
// export default OthersCarousel;

import React, { CSSProperties } from 'react';
import { Carousel } from 'react-responsive-carousel';

// // carousel styles
// import '../src/main.scss';
// import '../src/carousel.scss';
// import '../src/examples/presentation/presentation.scss';

const createCarouselItemImage = (index, options = {}) => (
    <div key={index}>
        <img src={`/assets/${index}.jpeg`} />
        <p className="legend">Legend {index}</p>
    </div>
);

const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;

const tooglesGroupId = 'Toggles';
const valuesGroupId = 'Values';
const mainGroupId = 'Main';

// const getConfigurableProps = () => ({
//     showArrows: boolean('showArrows', true, tooglesGroupId),
//     showStatus: boolean('showStatus', true, tooglesGroupId),
//     showIndicators: boolean('showIndicators', true, tooglesGroupId),
//     infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
//     showThumbs: boolean('showThumbs', true, tooglesGroupId),
//     useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
//     autoPlay: boolean('autoPlay', true, tooglesGroupId),
//     stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
//     swipeable: boolean('swipeable', true, tooglesGroupId),
//     dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
//     emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
//     autoFocus: boolean('autoFocus', false, tooglesGroupId),
//     thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
//     selectedItem: number('selectedItem', 0, {}, valuesGroupId),
//     interval: number('interval', 2000, {}, valuesGroupId),
//     transitionTime: number('transitionTime', 500, {}, valuesGroupId),
//     swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
//     ariaLabel: text('ariaLabel', undefined),
// });

export default {
    title: '01 - Basic',
    decorators: [withKnobs],
    component: Carousel,
};

export const OthersCarousel: React.FC = () => (
    <Carousel
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={20}
    >
        {baseChildren.props.children}
    </Carousel>
);
