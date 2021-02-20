<script>
	// Importing components
	import { Icon } from "../components";

	// Services list
	let services = [
		{
			"id": "02",
			"href": "https://flashcards.beta.ml",
			"title": "Flashcards",
			"description": "Картки для веселого та швидкого заучування матеріалу",
			"icon": {
				"background": "background-image: linear-gradient(45deg, rgb(255, 154, 158) 0%, rgb(250, 208, 196) 99%, rgb(250, 208, 196) 100%);",
				"image": "ledger.png"
			}
		},
		{
			"id": "library",
			"href": "/library",
			"title": "Library",
			"description": "Все, що тільки існує по Математиці та іншим наукам",
			"icon": {
				"background": "background-image: linear-gradient(to right top, rgb(161, 140, 209) 0%, rgb(251, 194, 235) 100%);",
				"image": "books.png"
			}
		},
	];

	let current = "02";
</script>

<!-- Header -->
<header style="z-index: 2;" class="fixed top-0 w-full bg-white">
	<!-- Services -->
	<div class="w-full flex justify-between items-center px-4 py-2">
		<!-- Current Service -->
		<div class="flex items-center px-4 py-2 relative">
			<div class="w-12 h-12 md:w-8 md:h-8 rounded-md flex justify-center items-center opacity-70" style="{ services.find((x) => x.id == current).icon.background }">
				<img class="w-2/3" src="./icons/{ services.find((x) => x.id == current).icon.image }" alt="" />
			</div>

			<div class="pl-3 w-2/3">
				<h2 class="text-xl md:text-sm text-gray-800 font-medium flex">
					{ services.find((x) => x.id == current).title }
				</h2>
			</div>
		</div>

		<!-- Divider -->
		<div style="width: 0.05rem;" class="hidden md:block h-8 bg-gray-800 opacity-40 rounded-md mx-2"></div>

		<div style="overflow: hidden; overflow-y: auto;" class="flex-grow hidden md:flex items-center">
			{ #each services.filter((x) => !x.wip && x.id != current) as page }
				<div class="w-8 h-8 mx-2 rounded-md flex justify-center items-center opacity-70" style="{ page.icon.background }">
					<img class="w-2/3" src="./icons/{ page.icon.image }" alt="" />
				</div>
			{ /each }

			<!-- Other Services -->
			<div class="w-8 h-8 mx-2 border-2 border-gray-300 border-dotted rounded-md flex justify-center items-center opacity-70">
				<Icon name="more-horizontal" attrs={{ class: "w-2/3 text-gray-500" }} />
			</div>
		</div>

		<!-- Grid -->
		<button class="h-12 w-12 bg-gray-100 rounded-md flex justify-center items-center mx-3">
			<Icon name="grid" attrs={{ class: "w-6 h-6 text-gray-800" }} />
		</button>

		<!-- Account -->
		<div class="hidden md:flex items-center px-4 h-12 relative bg-gray-100 rounded-md">
			<img class="w-10 h-10 rounded-full" src="./icons/when_rejected.png" alt="" />

			<div class="pl-3 w-2/3">
				<h2 class="text-sm text-gray-800 font-medium flex">
					Аккаунт 
				</h2>
			</div>
		</div>
	</div>
</header>

<!-- Container -->
<main class="bg-gray-100">
	<slot />
</main>