export default function AppLoader({ overlay }: { overlay?: boolean }) {
	return (
		<div
			className={`grid size-full place-content-center p-8 backdrop-blur-[1px] ${overlay ? "absolute top-0 left-0 z-10" : ""}`}
		>
			<span className="inline-flex cursor-wait  items-center gap-4 before:size-10 before:animate-spin before:rounded-full before:border-4 before:border-blue-500" />
		</div>
	);
}
