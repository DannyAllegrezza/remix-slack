import type { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { Workspace } from "~/data/workspaces.server";
import { getWorkspaceById } from "~/data/workspaces.server";

import Sidebar from "~/components/Sidebar";

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
