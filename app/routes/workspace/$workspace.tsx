import type { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { Workspace } from "~/data/workspaces.server";
import { getWorkspaceById } from "~/data/workspaces.server";
// import ChatInput from "~/components/Chat/ChatInput";
// import ChatMessage from "~/components/Chat/ChatMessage";

import Sidebar from "~/components/Sidebar";

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

export const loader: LoaderFunction = async ({ params }) => {
	return getWorkspaceById(params.workspace as string);
};

export default function WorkspacePage() {
	console.log("hello from $workspace.tsx");
	const workspace = useLoaderData<Workspace>();

	return (
		<>
			<Sidebar workspace={workspace} />
			<Outlet />
		</>
	);
}
