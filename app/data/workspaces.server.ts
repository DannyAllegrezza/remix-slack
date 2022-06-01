const mockWorkspacesData = {
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

export function getWorkspacesForUser(): Workspace[] {
	return [
		{
			fullName: "Remix Workspace",
			shortName: "R",
			id: "123EFG",
		},
		{
			fullName: "Langdiff Hangout",
			shortName: "L",
			id: "345ABC",
		},
	];
}

export interface Workspace {
	id: string;
	fullName: string;
	shortName: string;
}

export interface CurrentUser {
	name: string;
	id: string;
	status: string;
}

export interface Channel {
	name: string;
	id: string;
}

export interface DirectMessage {
	name: string;
	id: string;
	status: string;
}

interface WorkspaceLoaderData {
	workspace: Workspace;
	currentUser: CurrentUser;
	channels: Channel[];
	directMessages: DirectMessage[];
}
