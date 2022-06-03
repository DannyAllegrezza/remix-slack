export const mockChannels: Channel[] = [
	{
		id: "1",
		firstMessageTimestamp: null,
		messages: [],
		type: "dm",
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

interface Channel {
	id: string;
	firstMessageTimestamp: string | null;
	messages: Message[];
	type: "channel" | "dm";
}

interface ChannelParticipant {
	userId: string;
	channelId: string;
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
	};
}
