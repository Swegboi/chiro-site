export interface OfficeHour {
	day: string;
	time: string;
}

export interface Service {
	number: string;
	title: string;
	description: string;
	href: string;
	linkLabel?: string;
}

// Replace bracketed values with practice-approved details before launch.
export const site = {
	name: 'McCandless Township Chiropractic',
	shortName: 'McCandless Township',
	category: 'Chiropractic',
	doctor: {
		name: 'Dr. Ken Swegman',
		credentials: 'D.C.',
		education: 'Sherman College of Chiropractic in Spartanburg, South Carolina',
		practiceSince: 1988,
		yearsInPractice: `${new Date().getFullYear() - 1988}+ years`,
		homeOfficeYears: '20 years',
	},
	tagline: 'A clearer next step for everyday care.',
	description:
		'An approachable chiropractic practice serving the McCandless Township area. Learn what to expect, find the office, and make contact when you are ready.',
	url: 'https://mccandlesstownshipchiropractic.com',
	phone: '412-366-2663',
	phoneMnemonic: 'BONE',
	phoneHref: 'tel:+14123662663',
	address: {
		street: '997 Cumberland Road',
		locality: 'Pittsburgh',
		region: 'PA',
		postalCode: '15237',
		area: 'McCandless Township',
	},
	bookingUrl: '',
	googleReviewsUrl: 'https://share.google/G0xdJAoWP7k1Skc7F',
	visitPolicy: {
		firstVisit: 'By appointment only',
		returningVisit: 'Walk-ins welcome',
	},
	mapUrl:
		'https://www.google.com/maps/search/?api=1&query=997+Cumberland+Road%2C+Pittsburgh%2C+PA+15237',
	shockwave: {
		name: 'Focused shockwave therapy',
		schedule: 'Mondays by appointment only',
		frequency: 'Once per week',
		pricePerArea: 50,
		prepayPrice: 100,
		prepayTreatments: 3,
		prepayNote: 'Same pain area for all 3 treatments',
		typicalSessions: '3-5',
		moreChronicSessions: '6-12',
		conditions: [
			{
				name: 'Plantar fasciitis',
				detail: 'Heel pain',
				definition: 'Irritation of the thick band of tissue along the bottom of the foot, often felt near the heel and during the first steps after rest.',
			},
			{
				name: 'Tennis or golfer\'s elbow',
				detail: 'Elbow pain',
				definition: 'Overuse-related tendon pain around the elbow that can make gripping, lifting, or wrist movement uncomfortable.',
			},
			{
				name: 'Calcific tendinitis',
				detail: 'Shoulder or rotator cuff pain',
				definition: 'Calcium deposits within or near a tendon, commonly involving the rotator cuff and sometimes limiting shoulder movement.',
			},
			{
				name: 'Patellar tendinopathy',
				detail: 'Knee pain',
				definition: 'A load-related problem affecting the tendon between the kneecap and shinbone, often associated with jumping, running, or repeated knee use.',
			},
			{
				name: 'Greater trochanteric pain syndrome',
				detail: 'Hip pain',
				definition: 'Pain around the outside of the hip that can involve the gluteal tendons and nearby tissues, often aggravated by side-lying, stairs, or walking.',
			},
			{
				name: 'Carpal tunnel syndrome',
				detail: 'Wrist or hand symptoms',
				definition: 'Pressure on the median nerve at the wrist that may cause numbness, tingling, or weakness in parts of the hand.',
			},
			{
				name: 'Ankle pain',
				detail: 'Ankle and surrounding soft tissue',
				definition: 'Ankle discomfort can have several causes, including a sprain, tendon irritation, joint problems, or another condition that needs evaluation.',
			},
			{
				name: 'Lumbar facet joint pain',
				detail: 'Chronic back pain',
				definition: 'Pain that may involve the small joints at the back of the lower spine and can be aggravated by certain movements or positions.',
			},
		],
	},
	hours: [
		{ day: 'Monday', time: 'Shockwave therapy by appointment only' },
		{ day: 'Tuesday', time: '10:00 AM - 6:00 PM' },
		{ day: 'Wednesday', time: '10:00 AM - 6:00 PM' },
		{ day: 'Thursday', time: '10:00 AM - 6:00 PM' },
		{ day: 'Friday', time: '10:00 AM - 2:00 PM' },
		{ day: 'Saturday', time: '10:00 AM - 2:00 PM' },
		{ day: 'Sunday', time: 'Closed' },
	] satisfies OfficeHour[],
	services: [
		{
			number: '01',
			title: 'Chiropractic adjustment',
			description: '$20 per visit with clear, upfront pricing.',
			href: '/services/',
		},
		{
			number: '02',
			title: 'Focused shockwave therapy',
			description: 'Once-weekly Monday appointments for selected chronic pain areas. $50 per pain area per treatment.',
			href: '/shockwave-therapy/',
			linkLabel: 'Explore shockwave therapy',
		},
		{
			number: '03',
			title: 'Transparent pricing',
			description: 'Know the visit price before you schedule. Ask the office about payment and receipts.',
			href: '/services/',
		},
	] satisfies Service[],
};

export const navItems = [
	{ label: 'About', href: '/about/' },
	{ label: 'Services', href: '/services/' },
	{ label: 'What to expect', href: '/what-to-expect/' },
	{ label: 'FAQ', href: '/faq/' },
	{ label: 'Reviews', href: '/reviews/' },
	{ label: 'Contact', href: '/contact/' },
];

export const faqs = [
	{
		question: 'How do I schedule a visit?',
		answer:
			'Call the office or use the online scheduling link once it has been added to this site. The practice can help you choose the right next step.',
	},
	{
		question: 'Do I need an appointment?',
		answer:
			`First visits are ${site.visitPolicy.firstVisit.toLowerCase()}. Returning patients are welcome to walk in during posted office hours. Call ${site.phone} to schedule a first visit or ask a question.`,
	},
	{
		question: 'What should I bring to a first visit?',
		answer:
			'Bring any information the office requests when you schedule. If you have questions about paperwork, insurance, or payment, ask the office before your visit.',
	},
	{
		question: 'What is focused shockwave therapy?',
		answer:
			'Focused shockwave therapy uses focused acoustic waves delivered through the skin to a targeted area. The office offers it once per week on Mondays by appointment only. Ask Dr. Swegman whether it is appropriate for your situation.',
	},
	{
		question: 'Can I use HSA or FSA funds?',
		answer:
			'The office currently operates as a cash practice. Ask for an itemized receipt, then check with your HSA/FSA plan administrator about reimbursement and whether your card can be used.',
	},
	{
		question: 'How are payments handled?',
		answer:
			'The office currently operates as a cash practice. Ask for an itemized receipt and check with your plan administrator about reimbursement.',
	},
	{
		question: 'Where is the office located?',
		answer:
			`The office is at ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}, serving the ${site.address.area} area.`,
	},
];

export const hasPhone = Boolean(site.phoneHref);
export const hasBookingLink = Boolean(site.bookingUrl);
