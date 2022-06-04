import type { LoaderFunction } from "@remix-run/node";
import ChatInput from "~/components/Chat/ChatInput";
import ChatMessage from "~/components/Chat/ChatMessage";

export const loader: LoaderFunction = async ({ params }) => {
	const channel = params["channel"];

	return null;
};

/**
 * This dynamic route is responsible for fetching data for the provided `$channel`.
 * Includes:
 * - Channel description
 */
export default function ChannelOverview() {
	return (
		<div className="flex-1 flex flex-col bg-white overflow-hidden">
			<div className="border-b flex px-6 py-2 items-center flex-none">
				<div className="flex flex-col">
					<h3 className="text-grey-darkest mb-1 font-extrabold">#general</h3>
					<div className="text-grey-dark text-sm truncate">Super cool channel description!</div>
				</div>
				<div className="ml-auto hidden md:block">
					<div className="relative">
						<input
							type="search"
							placeholder="Search"
							className="appearance-none border border-grey rounded-lg pl-8 pr-4 py-2"
						/>
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center justify-center">
							<svg
								className="fill-current text-gray-500 h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
			{/* Chat */}
			<div className="py-4 flex-1 overflow-y-scroll">
				{/* A chat message */}
				{/* <ChatMessage />
				<ChatMessage />
				<ChatMessage />
				<ChatMessage /> */}
			</div>
			<ChatInput />
		</div>
	);
}
