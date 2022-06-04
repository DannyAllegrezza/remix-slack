const remixWorkspaceId = "123EFG";

const danny: User = {
	avatarUrl: "https://www.dannyallegrezza.com/static/7c3c8fe6109d66a1aa2cf8e2060d7245/7d509/danny.jpg",
	name: "Danny Allegrezza",
	id: "USR123",
};

const mockChannelMessages: Message[] = [
	{
		id: "1",
		workspaceId: remixWorkspaceId,
		user: danny,
		timestamp: "11:23",
		content: "Hey there, whats up everyone??",
		reactions: null,
		parentId: null,
		edited: false,
	},
	{
		id: "2",
		workspaceId: remixWorkspaceId,
		user: danny,
		timestamp: "11:23",
		content: "Hey there, whats up everyone??",
		reactions: null,
		parentId: null,
		edited: false,
	},
];

export const mockChannels: ChannelDetails[] = [
	{
		id: "G3N3R4L",
		firstMessageTimestamp: null,
		name: "general",
		topic: "Talk about anything and everything related to Remix!",
		messages: mockChannelMessages,
		participants: [
			{
				name: "Ryan Flo-rence",
				avatarUrl: "https://avatars.githubusercontent.com/u/100200?v=4",
				id: "123",
				presence: "active",
				status: "👷‍♂️ workin on Remix",
				channelId: "R3M1X",
			},
		],
		workspaceId: remixWorkspaceId,
	},
	{
		id: "R3M1X",
		firstMessageTimestamp: null,
		name: "remix",
		topic: "👩🏽‍💻 talk remix dev in here!",
		messages: [],
		participants: [
			{
				name: "Ryan Flo-rence",
				avatarUrl: "https://avatars.githubusercontent.com/u/100200?v=4",
				id: "123",
				presence: "active",
				status: "👷‍♂️ workin on Remix",
				channelId: "R3M1X",
			},
		],
		workspaceId: remixWorkspaceId,
	},
];

interface ChannelDetails {
	id: string;
	name: string;
	topic: string | null;
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

interface ChannelParticipant extends User {
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
	user: User;
}
