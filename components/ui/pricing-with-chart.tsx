'use client';

import { Button } from '@/components/ui/button';
import { CheckCircleIcon } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';

export function PricingWithChart() {
	return (
		<div className="mx-auto max-w-6xl">
			{/* Heading */}
			<div className="mx-auto mb-10 max-w-2xl text-center">
				<h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
					Pricing that Scales with You
				</h1>
				<p className="text-gray-300 mt-4 text-sm md:text-base">
					Choose the right plan to unlock powerful tools and insights.
					Transparent pricing built for modern teams.
				</p>
			</div>

			{/* Pricing Grid */}
			<div className="bg-white/5 backdrop-blur-sm border border-white/10 grid rounded-xl md:grid-cols-6">
				{/* Starter Plan */}
				<div className="flex flex-col justify-between border-b border-white/10 p-6 md:col-span-2 md:border-r md:border-b-0">
					<div className="space-y-4">
						<div>
							<h2 className="backdrop-blur-2 inline rounded-[2px] p-1 text-xl font-semibold text-white">
								Starter
							</h2>
							<span className="my-3 block text-3xl font-bold text-primary">
								₹15,000
							</span>
							<p className="text-gray-400 text-sm">
								Best for testing & understanding
							</p>
						</div>

						<Button asChild variant="outline" className="w-full border-white/20 bg-white/10 text-white hover:bg-white/20">
							<a href="#">Get Started</a>
						</Button>

						<div className="bg-white/10 my-6 h-px w-full" />

						<ul className="text-gray-300 space-y-3 text-sm">
							{[
								'15 Reels (filming + editing)',
								'Basic Analytics Dashboard',
								'Email & Chat Support',
							].map((item, index) => (
								<li key={index} className="flex items-center gap-2">
									<CheckCircleIcon className="h-4 w-4 text-primary" />
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Growth Plan */}
				<div className="z-10 grid gap-8 overflow-hidden p-6 md:col-span-4 lg:grid-cols-2">
					{/* Pricing + Chart */}
					<div className="flex flex-col justify-between space-y-6">
						<div>
							<h2 className="text-xl font-semibold text-white">Growth Monthly Package</h2>
							<span className="my-3 block text-3xl font-bold text-primary">
								₹25,000
							</span>
							<p className="text-gray-400 text-sm">
								Perfect for small businesses & startups
							</p>
						</div>
						<div className="bg-white/5 backdrop-blur-sm h-fit w-full rounded-lg border border-white/10 p-2">
							<InterestChart />
						</div>
					</div>
					{/* Features */}
					<div className="relative w-full">
						<div className="text-sm font-medium text-white">Everything in Starter plus:</div>
						<ul className="text-gray-300 mt-4 space-y-3 text-sm">
							{[
								'Full Instagram management',
								'Captions & content creation',
								'Lead collection',
								'Monthly reports',
								'Priority customer support',
								'Advanced analytics dashboard',
								'Team collaboration included',
								'Customizable workflows',
								'Integration with third-party apps',
								'Role-based access control',
							].map((item, index) => (
								<li key={index} className="flex items-center gap-2">
									<CheckCircleIcon className="h-4 w-4 text-primary" />
									{item}
								</li>
							))}
						</ul>

						{/* Call to Action */}
						<div className="mt-10 grid w-full grid-cols-2 gap-2.5">
							<Button
								asChild
								className="bg-primary text-white hover:bg-primary/80 hover:text-white"
							>
								<a href="#">Get Started</a>
							</Button>
							<Button asChild variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
								<a href="#">Start free trial</a>
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Business Plan */}
			<div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
				<div className="grid md:grid-cols-2 gap-8">
					<div>
						<h2 className="text-xl font-semibold text-white mb-2">Business Package</h2>
						<span className="text-3xl font-bold text-primary">₹35,000<span className="text-lg text-gray-400">/month</span></span>
						<p className="text-gray-400 text-sm mt-2">
							Everything in Growth plus enterprise features
						</p>
					</div>
					<div>
						<ul className="text-gray-300 space-y-3 text-sm">
							{[
								'Website maintenance',
								'SEO optimization',
								'Google profile management',
								'Cold calling leads',
								'Dedicated account manager',
								'Custom integrations',
								'White-label solutions',
								'Priority support 24/7',
							].map((item, index) => (
								<li key={index} className="flex items-center gap-2">
									<CheckCircleIcon className="h-4 w-4 text-primary" />
									{item}
								</li>
							))}
						</ul>
						<Button className="mt-6 bg-primary text-white hover:bg-primary/80">
							Get Started
						</Button>
					</div>
				</div>
			</div>

			{/* Website Design Section */}
			<div className="mt-8 text-center">
				<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-2xl mx-auto">
					<h3 className="text-2xl font-bold text-white mb-4">Website Design/Redesign</h3>
					<p className="text-gray-300 mb-6">
						One-time cost, depends on requirements and complexity. 
						Contact us for a custom quote tailored to your needs.
					</p>
					<Button className="bg-primary text-white hover:bg-primary/80">
						Get Quote
					</Button>
				</div>
			</div>
		</div>
	);
}

function InterestChart() {
	const chartData = [
		{ month: 'January', interest: 120 },
		{ month: 'February', interest: 180 },
		{ month: 'March', interest: 150 },
		{ month: 'April', interest: 210 },
		{ month: 'May', interest: 250 },
		{ month: 'June', interest: 300 },
		{ month: 'July', interest: 280 },
		{ month: 'August', interest: 320 },
		{ month: 'September', interest: 340 },
		{ month: 'October', interest: 390 },
		{ month: 'November', interest: 420 }, // pre-holiday spike
		{ month: 'December', interest: 500 }, // big holiday spike
	];

	const chartConfig = {
		interest: {
			label: 'Interest',
			color: 'hsl(var(--primary))',
		},
	} satisfies ChartConfig;

	return (
		<Card className="bg-transparent border-white/10">
			<CardHeader className="space-y-0 border-b border-white/10 p-3">
				<CardTitle className="text-lg text-white">Plan Popularity</CardTitle>
				<CardDescription className="text-xs text-gray-400">
					Monthly trend of people considering this plan.
				</CardDescription>
			</CardHeader>
			<CardContent className="p-3">
				<ChartContainer config={chartConfig}>
					<LineChart data={chartData} margin={{ left: 12, right: 12 }}>
						<CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
							tick={{ fill: 'rgba(255,255,255,0.6)' }}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
						<Line
							dataKey="interest"
							type="monotone"
							stroke="var(--color-interest)"
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
