import { Link } from "@remix-run/react";

interface ChatMessageProps {
	user: {
		avatarUrl: string;
		name: string;
	};
	timestamp: string;
	message: string;
}

function formatTaggedUser(userName: string) {
	return (
		<Link to="#" className="inline-block bg-blue-50 text-blue-900 no-underline">
			@{userName}
		</Link>
	);
}

function formatCodeBlock(codeBlock: string) {
	return (
		<div className="bg-gray-800 border border-grey-light text-gray-500 text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
			{codeBlock}
		</div>
	);
}

export default function ChatMessage({ user, timestamp, message }: ChatMessageProps) {
	return (
		<div className="px-5 flex items-start py-1 mb-3 text-sm hover:bg-slate-100">
			<img src={user.avatarUrl} className="w-10 h-10 rounded mr-3" alt={`${user.name}'s avatar.`} />
			<div className="flex-1 overflow-hidden">
				<div>
					<span className="font-bold">{user.name}</span>
					<span className="text-gray-300 text-xs px-1">{timestamp}</span>
				</div>
				<p className="text-black leading-normal">{message}</p>
			</div>
		</div>
	);
}
