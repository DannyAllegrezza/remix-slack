export const mockChannels: ChannelDetails[] = [
	{
		id: "1",
		firstMessageTimestamp: null,
		messages: [],
		participants: [
			{
				name: "Ryan Flo-rence",
				avatarUrl: "https://avatars.githubusercontent.com/u/100200?v=4",
				id: "123",
				presence: "active",
				status: "👷‍♂️ workin on Remix",
				channelId: "1",
			},
		],
		workspaceId: "",
	},
];

const mockChannelMessages = [
	{
		user: {
			avatarUrl: "https://www.dannyallegrezza.com/static/7c3c8fe6109d66a1aa2cf8e2060d7245/7d509/danny.jpg",
			name: "Danny Allegrezza",
		},
		timestamp: "11:23",
		message: "Hey there, whats up everyone??",
	},
	{
		user: {
			avatarUrl: "https://www.dannyallegrezza.com/static/7c3c8fe6109d66a1aa2cf8e2060d7245/7d509/danny.jpg",
			name: "Danny Allegrezza",
		},
		timestamp: "11:24",
		message: "So... is anyone out there?",
	},
];

interface ChannelDetails {
	id: string;
	workspaceId: string;
	firstMessageTimestamp: string | null;
	messages: Message[];
	participants: ChannelParticipant[];
}

interface User {
	avatarUrl: string;
	name: string;
	id: string;
}

interface ChannelParticipant {
	avatarUrl: string;
	name: string;
	id: string;
	channelId: string;
	presence: "away" | "active";
	status: string | null;
}

interface Message {
	id: string;
	workspaceId: string;
	content: string;
	timestamp: string;
	reactions: string | null;
	// If a message has a parentId, it means its a reply to a thread
	parentId: string | null;
	edited: boolean;
	// TODO: Create a standard User type and Pick<> properties from it
	user: {
		avatarUrl: string;
		name: string;
		id: string;
	};
}
