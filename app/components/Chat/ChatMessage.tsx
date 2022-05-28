export default function ChatMessage() {
	return (
		<div className="px-5 flex items-start py-1 mb-3 text-sm hover:bg-slate-100">
			<img src="https://picsum.photos/200/300" className="w-10 h-10 rounded mr-3" />
			<div className="flex-1 overflow-hidden">
				<div>
					<span className="font-bold">Danny Allegrezza</span>
					<span className="text-gray-300 text-xs px-1">11:46</span>
				</div>
				<p className="text-black leading-normal">
					Remix is pretty cool 🔥.{" "}
					<a href="#" className="inline-block bg-blue-50 text-blue-900 no-underline">
						@Ryan Flo-rence
					</a>{" "}
					check this out!
					<div className="bg-gray-800 border border-grey-light text-gray-500 text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
						Here is some cool code yo
					</div>
				</p>
			</div>
		</div>
	);
}
