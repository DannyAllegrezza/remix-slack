import { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import ChatInput from "~/components/Chat/ChatInput";
import ChatMessage from "~/components/Chat/ChatMessage";
import Sidebar, { Channel, CurrentUser, DirectMessage, Workspace } from "~/components/Sidebar";

const mockChatMessages = [
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

const mockWorkspaceData: WorkspaceLoaderData = {
	workspace: {
		id: "123",
		name: "Remix 📀",
	},
	currentUser: {
		name: "Danny Allegrezza",
		id: "12345",
		status: "active",
	},
	channels: [
		{
			name: "general",
			id: "G3N3R4L",
		},
		{
			name: "remix",
			id: "R3M1X",
		},
	],
	directMessages: [
		{
			name: "Ryan Flo-rence",
			id: "24112",
			status: "active",
		},
		{
			name: "Kent Doddz",
			id: "23421",
			status: "away",
		},
	],
};

interface WorkspaceLoaderData {
	workspace: Workspace;
	currentUser: CurrentUser;
	channels: Channel[];
	directMessages: DirectMessage[];
}

export const loader: LoaderFunction = async ({ params }) => {
	return mockWorkspaceData;
};

export default function WorkspacePage() {
	const { workspace, currentUser, channels, directMessages } = useLoaderData<WorkspaceLoaderData>();

	return (
		<>
			<Sidebar workspace={workspace} currentUser={currentUser} channels={channels} directMessages={directMessages} />
			<Outlet />
		</>
	);
}
