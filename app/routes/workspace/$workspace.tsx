import { LoaderFunction, redirect } from "@remix-run/node";
import { Outlet, useLoaderData, useMatches } from "@remix-run/react";
import type { Workspace } from "~/data/workspaces.server";
import { getWorkspaceById } from "~/data/workspaces.server";

import Sidebar from "~/components/Sidebar";

export const loader: LoaderFunction = async ({ params }) => {
	const workspace = getWorkspaceById(params.workspace as string);

	if (!workspace) {
		throw new Response("Not Found", { status: 404 });
	}

	return workspace;
};

/**
 * This dynamic route fetches data associated with the matching `$workspace`
 * needed to populate the <Sidebar /> component. This includes:
 * - The name of the workspace
 * - The names of the channels
 * - The names of any open Direct Messages
 */
export default function WorkspacePage() {
	const workspace = useLoaderData<Workspace>();
	const matches = useMatches();
	// console.log(`matches: ${JSON.stringify(matches, null, 2)}`);

	return (
		<>
			<Sidebar workspace={workspace} />
			<Outlet />
		</>
	);
}
