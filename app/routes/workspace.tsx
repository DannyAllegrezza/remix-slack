import type { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getWorkspacesForUser } from "~/data/workspaces.server";

import Workspaces from "~/components/Workspaces";

/**
 * This loader is responsible for fetching all of the workspaces a user is a
 * part of.
 */
export const loader: LoaderFunction = async ({ params }) => {
	return getWorkspacesForUser();
};

export default function WorkspacesPage() {
	const workspaces = useLoaderData();

	return (
		<div className="font-sans antialiased h-screen flex">
			<Workspaces spaces={workspaces} />
			<Outlet />
		</div>
	);
}
