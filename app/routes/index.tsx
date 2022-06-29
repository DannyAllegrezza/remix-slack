import { ActionFunction, LoaderFunction, MetaFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { getWorkspaceById, getWorkspacesForUser } from "~/data/workspaces.server";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex justify-center items-center h-screen bg-[url('/endless-constellation.svg')]">{children}</div>
	);
}

function LoginForm() {
	return (
		<div className="container px-4 mx-auto">
			<div className="max-w-md mx-auto py-12 px-8 bg-gray-200 rounded-lg text-center">
				<span className="text-sm text-gray-500 font-semibold uppercase">Sign Up</span>
				<h3 className="mb-8 text-3xl font-bold font-heading">Create new account</h3>
				<Form method="post">
					<input
						className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
						name="email"
						type="email"
						placeholder="E-mail address"
					/>

					<button className="w-full inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-gray-500 hover:bg-gray-600 rounded transition duration-200">
						Sign Up
					</button>
				</Form>
				{/* <p className="text-sm text-gray-500">
					<span>Already have an account?</span>{" "}
					<a className="font-bold hover:underline" href="#">
						Sign In
					</a>
				</p> */}
			</div>
		</div>
	);
}

export const meta: MetaFunction = () => {
	return {
		title: "Login",
	};
};

export const loader: LoaderFunction = async ({}) => {
	return null;
};

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData();
	const email = formData.get("email");
	console.log(`email: ${email}`);

	// TODO: Implement actual login functionality here :)
	const workspaces = getWorkspacesForUser();
	const remixWorkspace = getWorkspaceById(workspaces[0].id);

	return redirect(`/workspace/${remixWorkspace.id}/${remixWorkspace.channels[0].id}`);
};

export default function Index() {
	return (
		<Layout>
			<LoginForm />
		</Layout>
	);
}
