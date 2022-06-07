const remixWorkspaceId = "123EFG";

const danny: User = {
	avatarUrl: "https://avatars.githubusercontent.com/u/7738918?v=4",
	name: "Danny Allegrezza",
	id: "USR123",
};

const rf: User = {
	name: "Ryan Flo-rence",
	avatarUrl: "https://avatars.githubusercontent.com/u/100200?v=4",
	id: "USR22123",
};

const chance: User = {
	name: "chaance",
	avatarUrl: "https://avatars.githubusercontent.com/u/3082153?v=4",
	id: "USR3122",
};

const saul: User = {
	name: "Saul Goodman",
	avatarUrl: "https://pbs.twimg.com/profile_images/2603710564/dp3ln37ptpcb6lhz54ql_400x400.jpeg",
	id: "USR2222",
};

const baseMockMessage = {
	workspaceId: remixWorkspaceId,
	reactions: null,
	parentId: null,
	edited: false,
};

const mockChannelMessages: Message[] = [
	{
		...baseMockMessage,
		id: "1",
		content: "Hey there, whats up everyone??",
		timestamp: "11:23",
		user: danny,
	},
	{
		...baseMockMessage,
		id: "2",
		content: "I'm checking out some old episodes of breaking bad...",
		timestamp: "11:24",
		user: danny,
	},
	{
		...baseMockMessage,
		id: "3",
		content: "Not much, just working on Remix!",
		timestamp: "11:25",
		user: rf,
	},
	{
		...baseMockMessage,
		id: "4",
		content: "Don't Drink And Drive, But When You Do, Call Saul.",
		timestamp: "11:29",
		user: saul,
	},
	{
		...baseMockMessage,
		id: "5",
		content: "Let’s just say I know a guy… who knows a guy… who knows another guy.",
		timestamp: "11:29",
		user: saul,
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
				...rf,
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

export function getChannelDetailsById(channelId: string): ChannelDetails {
	return mockChannels.find((x) => x.id === channelId)!;
}

export interface ChannelDetails {
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
