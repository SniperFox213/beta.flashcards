<script>
	// Importing layout components
	import HeaderPage from "../pages/Header/index.svelte";
	import MenuPage from "../pages/Settings/index.svelte";

</script>

<!-- Menu -->
<MenuPage />

<!-- Container -->
<main class="bg-gray-100">
	<!-- Header -->
	<HeaderPage />

	<slot />
</main>