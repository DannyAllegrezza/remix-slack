const mockWorkspacesData = [
	{
		id: "123EFG",
		name: "Remix Workspace 📀",
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
	},
	{
		id: "345ABC",
		name: "Langdiff Hangout 💣",
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
				name: "dev",
				id: "D3V1337",
			},
			{
				name: "help",
				id: "H3LPM3",
			},
		],
		directMessages: [
			{
				name: "Big Billy",
				id: "1337",
				status: "active",
			},
			{
				name: "Aulugaluga Cat",
				id: "33533",
				status: "away",
			},
		],
	},
];

export function getWorkspacesForUser() {
	const workspaces = mockWorkspacesData.map((x) => ({
		fullName: x.name,
		shortName: x.name.charAt(0),
		id: x.id,
	}));

	return workspaces;
}

export function getWorkspaceById(id: string): Workspace {
	console.log(`getWorkspaceById(): id=${id}`);
	const workspace = mockWorkspacesData.find((x) => x.id === id);

	return workspace!;
}

export interface Workspace {
	id: string;
	name: string;
	currentUser: {
		name: string;
		id: string;
		status: string;
	};
	directMessages: DirectMessage[];
	channels: Channel[];
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
