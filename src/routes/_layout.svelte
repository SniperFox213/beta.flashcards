<script>
	// Importing components
	import { Icon } from "../components";

	let menuOpened = true;

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

{ #if menuOpened }
	<div style="z-index: 999; overflow-y: auto;" class="fixed inset-0 w-full h-full bg-white p-4">
		<!-- Mini-header -->
		<div on:click={(e) => {
			menuOpened = false;
		}} class="w-full flex items-center opacity-80">
			<Icon name="chevron-left" attrs={{ class: "w-6 h-6 text-black" }} />
	
			<p class="text-black text-base ml-1">Назад</p>
		</div>

		<!-- User Account + His current level -->
		<div class="mt-10 flex flex-col items-center justify-center">
			<div class="w-2/3 flex items-center relative">
				<!-- Avatar -->
				<div style="background-image: url('./icons/when_rejected.png'); background-size: cover; background-position: center;" class="w-24 h-24 relative rounded-full border-2 border-gray-200">
					<div class="absolute top-0 right-0">

					</div>
				</div>

				<!-- Texts -->
				<div class="ml-4 text-left">
					<h1 class="text-xl text-black font-medium">жулипуп</h1>

					<!-- Badges -->
					<div class="flex items-center">
						<div class="mt-0.5 w-min h-6 mr-2 rounded-full bg-gray-200 px-4 flex items-center justify-center">
							<p class="text-sm text-black opacity-80">Путин</p>
						</div>

						<div class="mt-0.5 w-min h-6 mr-2 rounded-full bg-gray-200 px-4 flex items-center justify-center">
							<Icon name="more-horizontal" attrs={{ class: "w-4 h-4 text-black opacity-80" }}/>
						</div>
					</div>
				</div>
			</div>

			<!-- Level -->
			<!-- Title -->
			<!-- <p class="mt-8 text-left w-full text-sm text-black opacity-60 px-1 uppercase">Рівень</p> -->
			<div class="w-full mt-6 flex items-center">

				<!-- Information -->
				<!-- <div class="w-1/3 px-1">
					<p class="text-xs text-gray-800 opacity-80">Покращуйте свій рівень виконуючі різні завдання та вивчаючи новий матеріал!</p>
				</div> -->

				<div class="w-full">
					<!-- Progress bar -->
					<div class="w-full rounded-full h-6 bg-gray-200">
						<div class="w-1/3 rounded-full h-6 bg-indigo-400"></div>
					</div>

					<div class="w-full py-2 flex justify-between items-center">
						<p class="text-xs text-gray-800 opacity-80">1200 очков</p>

						<p class="text-xs text-gray-800 opacity-80">4 уровень <span class="border-b border-dotted border-gray-800">(2000 очков)</span></p>
					</div>
				</div>

			</div>
		</div>

		<!-- Settings List -->
		<div class="mt-16">
			<!-- Title -->
			<p class="text-sm text-black opacity-60 px-1 uppercase">Налаштування</p>

			<div class="w-full my-4 h-32 rounded-md bg-indigo-400 flex items-center px-4">
				<!-- Image -->
				<div class="w-1/4">
					<img class="w-2/3" src="./icons/old_shrugging_guy.png" alt="">
				</div>

				<!-- Text -->
				<div class="ml-4 w-3/4">
					<h1 class="text-xl text-white font-medium">Lorem ipsum dolor sit.</h1>
					<p class="text-base text-gray-100 opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>

			<div class="w-full my-4 h-32 rounded-md bg-pink-400 flex items-center px-4">
				<!-- Image -->
				<div class="w-1/4">
					<img class="w-2/3" src="./icons/old_shrugging_guy.png" alt="">
				</div>

				<!-- Text -->
				<div class="ml-2 w-3/4">
					<h1 class="text-xl text-white font-medium">Lorem ipsum dolor sit.</h1>
					<p class="text-base text-gray-100 opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
		</div>

		<!-- Services List -->
		<div class="mt-10">
			<!-- Title -->
			<p class="text-sm text-black opacity-60 px-1 uppercase">Інші сервіси</p>

			<div class="w-full my-4 h-32 rounded-md bg-purple-400 flex items-center px-4">
				<!-- Image -->
				<div class="w-1/4">
					<img class="w-2/3" src="./icons/old_shrugging_guy.png" alt="">
				</div>

				<!-- Text -->
				<div class="ml-4 w-3/4">
					<h1 class="text-xl text-white font-medium">Lorem ipsum dolor sit.</h1>
					<p class="text-base text-gray-100 opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>

			<div class="w-full my-4 h-32 rounded-md bg-yellow-500 flex items-center px-4">
				<!-- Image -->
				<div class="w-1/4">
					<img class="w-2/3" src="./icons/old_shrugging_guy.png" alt="">
				</div>

				<!-- Text -->
				<div class="ml-2 w-3/4">
					<h1 class="text-xl text-white font-medium">Lorem ipsum dolor sit.</h1>
					<p class="text-base text-gray-100 opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
		</div>

		<!-- Logout/Change account -->
		<div class="mt-10 mb-8">
			<!-- Title -->
			<p class="text-sm text-black opacity-60 px-1 uppercase">Аккаунт</p>

			<div class="w-full my-4 h-32 rounded-md bg-purple-400 flex items-center px-4">
				<!-- Image -->
				<div class="w-1/4 flex justify-center">
					<Icon name="refresh-cw" attrs={{ class: "w-8 h-8 text-white" }} />
				</div>

				<!-- Text -->
				<div class="ml-4 w-3/4">
					<h1 class="text-xl text-white font-medium">Змінити аккаунт</h1>
					<p class="text-base text-gray-100 opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>

			<div class="w-full my-4 h-32 rounded-md bg-red-400 flex items-center px-4">
				<!-- Image -->
				<div class="w-1/4 flex justify-center">
					<Icon name="log-out" attrs={{ class: "w-8 h-8 text-white" }} />
				</div>

				<!-- Text -->
				<div class="ml-4 w-3/4">
					<h1 class="text-xl text-white font-medium">Вийти</h1>
					<p class="text-base text-gray-100 opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
		</div>

	</div>
{ /if }

<!-- Header -->
<header style="z-index: 2;" class="fixed top-0 w-full md:bg-white">
	<!-- Services -->
	<div class="w-full flex justify-between items-center p-2 md:px-4">
		<!-- Bёta logotype -->
		<div class="bg-indigo-400 text-white font-bold w-12 h-12 rounded-md shadow-md flex md:hidden items-center justify-center text-md">
			Bё
		</div>
		
		<!-- Current Service -->
		<div class="hidden md:flex items-center px-4 py-2 relative">
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
		<button on:click={(e) => {
			menuOpened = true;
		}} class="h-12 w-12 bg-gray-100 rounded-md flex justify-center items-center md:mx-3">
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