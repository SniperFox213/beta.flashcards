<script>
	// Importing modules
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	// Importing layout components
	import HeaderPage from "../pages/Header/index.svelte";
	import MenuPage from "../pages/Settings/index.svelte";
	
	// Importing other components
	import { Spinner } from "@atbeta/components/basic";
	
	// Importing stores
	import profile from "../stores/profile.js";

	// Importing configuration files
	import { urls } from "../config/api";

	// onMount event
	// - Here we'll get our
	// profile information
	onMount(() => {
		profile.initialize()
		.then(() => {
			loaded = true;
		}).catch((err) => {
			if (err == "createProfile") {
				window.location.href = urls.authUrl;
			} else {
				error = true;
			};
		});
	});

	// Variables
	let menuOpened = false;

	let loaded = false;
	let error  = false;
</script>

{ #if loaded }
	<!-- Menu -->
	<MenuPage bind:opened={menuOpened} />

	<!-- Container -->
	<main class="bg-gray-100">
		<!-- Header -->
		<HeaderPage on:openMenu={() => menuOpened ? menuOpened = false : menuOpened = true} />

		<slot />
	</main>
{ :else }
	<!-- Loading screen -->
	<div out:fade class="fixed inset-0 w-full h-screen bg-gray-100 flex justify-center items-center">
		{ #if error }
			<div class="w-full md:w-1/3 md:bg-white md:rounded-lg flex flex-col justify-center items-center p-6">
				<!-- Img -->
				<img class="w-1/3" src="https://media.tenor.com/images/1bb3fa895bbe74e6b325a051cd836f1f/tenor.gif" alt="">
		
				<!-- Text -->
				<div class="my-4 text-center">
					<h1 class="text-xl text-black font-medium">Оп ошибка</h1>
					<p class="text-sm text-gray-900 opacity-80">Мы не ожидали, что тут когда-либо произойдёт ошибка. Но она произошла. Ошибка произошла с вашим аккаунтом, так что не факт что она решится простой перезагрузкой страницы.<br/><br/>Можете радоваться.</p>
				</div>
		
				<!-- Buttons -->
				<div class="w-full flex items-center">
					<button class="bg-black rounded-md px-4 py-2 w-1/2">
						<p class="text-white">Помощь</p>
					</button>
		
					<button class="bg-black rounded-md ml-4 px-4 py-2 w-1/2">
						<p class="text-white">На главную</p>
					</button>
				</div>
			</div>
		{ :else }
			<Spinner size="25" />
		{ /if }
	</div>
{ /if }