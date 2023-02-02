// import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
// import {Logo} from './HelloWorld/Logo';
// import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';
import TripAnimation from './Trip';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Animate from 0 to 1 after 25 frames
	// const logoTranslationProgress = spring({
	// 	frame: frame - 25,
	// 	fps,
	// 	config: {
	// 		damping: 100,
	// 	},
	// });

	// Move the logo up by 150 pixels once the transition starts
	// const logoTranslation = interpolate(
	// 	logoTranslationProgress,
	// 	[0, 1],
	// 	[0, -150]
	// );

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<AbsoluteFill>
				{/* <AbsoluteFill style={{transform: `translateY(${logoTranslation}px)`}}>
					<Logo />
				</AbsoluteFill> */}
				{/* Sequences can shift the time for its children! */}
				<Sequence from={15} durationInFrames={35}>
					<Title titleText={titleText} titleColor={titleColor} animationDirection={true} />
				</Sequence>
				<Sequence from={50} durationInFrames={35}>
					<Title titleText={titleText} titleColor={titleColor} animationDirection={false} />
				</Sequence>
				<Sequence from={85} durationInFrames={fps*6}>
					<TripAnimation height='100%' />
				</Sequence>
				{/* The subtitle will only enter on the 75th frame. */}
				{/* <Sequence from={75}>
					<Subtitle />
				</Sequence> */}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
