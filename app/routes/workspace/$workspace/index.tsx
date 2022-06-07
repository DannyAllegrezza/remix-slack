import type { LoaderFunction } from "@remix-run/node";
import { getWorkspaceById } from "~/data/workspaces.server";

// export const loader: LoaderFunction = async ({ params }) => {
// 	const workspace = getWorkspaceById(params.workspace as string);

// 	if (!workspace) {
// 		throw new Response("Not Found", { status: 404 });
// 	}

// 	return workspace;
// };

export default function WorkspaceIndex() {
	return (
		<div>
			<h1>No workspace found</h1>
		</div>
	);
}
