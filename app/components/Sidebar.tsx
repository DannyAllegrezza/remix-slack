import Workspaces from "./Workspaces";

const workspaces = [
	{
		fullName: "Remix Workspace",
		shortName: "R",
		id: "123",
	},
	{
		fullName: "Langdiff Hangout",
		shortName: "L",
		id: "345",
	},
];
export default function Sidebar() {
	return (
		<>
			<Workspaces spaces={workspaces} />

			<div className="bg-slate-800 text-purple-lighter flex-none w-64 pb-6 hidden md:block">
				<div className="text-white mb-2 mt-3 px-4 flex justify-between">
					<div className="flex-auto">
						<h1 className="font-semibold text-xl leading-tight mb-1 truncate">Workspace Name</h1>
						<div className="flex items-center mb-6">
							<svg className="h-2 w-2 fill-current text-green-500 mr-2" viewBox="0 0 20 20">
								<circle cx="10" cy="10" r="10" />
							</svg>
							<span className="text-white opacity-50 text-sm">Danny Allegrezza</span>
						</div>
					</div>
					<div>
						<svg className="h-6 w-6 fill-current text-white opacity-25" viewBox="0 0 20 20">
							<path
								d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
								fillRule="evenodd"
							/>
						</svg>
					</div>
				</div>
				<div className="mb-8">
					<div className="px-4 mb-2 text-white flex justify-between items-center">
						<div className="opacity-75">Channels</div>
						<div>
							<svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
							</svg>
						</div>
					</div>
					<div className="bg-teal-600 py-1 px-4 text-white"># general</div>
				</div>
				<div className="mb-8">
					<div className="px-4 mb-2 text-white flex justify-between items-center">
						<div className="opacity-75">Direct Messages</div>
						<div>
							<svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
							</svg>
						</div>
					</div>
					<div className="flex items-center mb-3 px-4">
						<svg className="h-2 w-2 fill-current text-green-500 mr-2" viewBox="0 0 20 20">
							<circle cx="10" cy="10" r="10" />
						</svg>
						<span className="text-white opacity-75">
							Danny Allegrezza <span className="text-grey text-sm">(you)</span>
						</span>
					</div>
					<div className="flex items-center mb-3 px-4">
						<svg className="h-2 w-2 fill-current text-green-500 mr-2" viewBox="0 0 20 20">
							<circle cx="10" cy="10" r="10" />
						</svg>
						<span className="text-white opacity-75">Ryan Flo-rence</span>
					</div>
					<div className="flex items-center px-4 mb-6 opacity-50">
						<svg className="h-2 w-2 stroke-current text-white mr-2" viewBox="0 0 22 22">
							<circle cx="11" cy="11" r="9" fill="none" strokeWidth="3" />
						</svg>
						<span className="text-white">Kent Doddz</span>
					</div>
				</div>
				<div>
					<div className="px-4 mb-2 text-white flex justify-between items-center">
						<div className="opacity-75">Apps</div>
						<div>
							<svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
