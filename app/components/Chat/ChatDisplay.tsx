import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ params }) => {
	return getWorkspaceById(params.workspace as string);
};

export default function ChatDisplay() {
	return <div></div>;
}
