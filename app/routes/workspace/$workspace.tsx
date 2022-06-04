import type { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData, useMatches } from "@remix-run/react";
import type { Workspace } from "~/data/workspaces.server";
import { getWorkspaceById } from "~/data/workspaces.server";

import Sidebar from "~/components/Sidebar";

export const loader: LoaderFunction = async ({ params }) => {
	return getWorkspaceById(params.workspace as string);
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
	console.log(`matches: ${JSON.stringify(matches, null, 2)}`);

	return (
		<>
			<Sidebar workspace={workspace} />
			<Outlet />
		</>
	);
}
