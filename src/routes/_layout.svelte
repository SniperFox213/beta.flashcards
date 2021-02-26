<script>
	// Importing layout components
	import HeaderPage from "../pages/Header/index.svelte";
	import MenuPage from "../pages/Settings/index.svelte";

	let menuOpened = false;
</script>

<!-- Menu -->
<MenuPage bind:opened={menuOpened} />

<!-- Container -->
<main class="bg-gray-100">
	<!-- Header -->
	<HeaderPage on:openMenu={() => menuOpened ? menuOpened = false : menuOpened = true} />

	<slot />
</main>