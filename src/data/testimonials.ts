export interface Testimonial {
	quote: string;
	name: string;
	source: string;
}

// Edited excerpts from public Google reviews. Verify attribution and final wording before launch.
export const testimonials: Testimonial[] = [
	{
		quote:
			'I have been going to Dr Swegman for over 20 years. This practice is the best. He is very professional and has the most updated technology. I highly recommend this practice.',
		name: 'Linda Zellers',
		source: 'Public Google review',
	},
	{
		quote:
			'I have gone to numerous chiropractors in my 83 years, at home in Michigan, in several other states, and in a few foreign countries. I have yet to find one that has the kind of equipment for adjustment and who is as simply competent and caring as Dr. Swegman. I highly recommend his practice.',
		name: 'Pat Montgomery',
		source: 'Public Google review',
	},
	{
		quote:
			'I did not feel rushed, and he took the time to explain everything that he was doing and what was going on. If you are looking for professional and caring service, you should consider giving Beverly a call.',
		name: 'Jim McCort',
		source: 'Public Google review',
	},
	{
		quote:
			'I have recommended many family and friends, and they all join me in singing his praises.',
		name: 'Cheryl T',
		source: 'Public Google review',
	},
];
