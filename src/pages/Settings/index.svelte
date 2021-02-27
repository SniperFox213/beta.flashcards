<script>
  // Importing modules
  import categories from "../../config/site/pageCategories.json";

  // Importing components
  import { Icon } from "../../components";
  import Button from "./components/WideButton.svelte";

  export let opened = false;
</script>

<svelte:window on:mousemove={(e) => {
  let el = document.getElementById("background");

  if (el != null) {
    el.style.backgroundPositionX = -Math.round(e.pageX/20) + "px";
    el.style.backgroundPositionY = -Math.round(e.pageY/20) + "px";
  }
}} />

{ #if opened }
  <div style="z-index: 1000;" class="fixed inset-0 w-full h-full">
    <!-- Background -->
    <div id="background" style="background-image: url('./background/1.svg'); z-index: -1;" class="mt-16 md:mt-20 bg-white absolute inset-0 w-full h-full"></div>

    <!-- Mini-header -->
    <div on:click={() => opened = false} style="z-index: 1000;" class="fixed top-0 flex items-center h-16 md:h-20 pl-10 md:pl-12">
      <!-- (mobile view) -->
      <button on:click={() => opened = false} class="ml-6">
        <p class="text-white text-base">На головну</p>
      </button>
    </div>

    <div class="overflow-hidden overflow-y-auto mt-16 md:flex md:items-center md:justify-center w-full h-full relative px-4 md:px-6 pb-16">
      <!-- User Account + His current level -->
      <div class="w-full mt-16 md:mt-0 md:w-1/4 md:h-full md:py-24 flex justify-center">

        <div class="w-full md:h-full flex flex-col items-center justify-center md:rounded-md md:bg-gray-100 md:p-6">
          <div class="w-2/3 flex flex-col items-center relative">
            <!-- Avatar -->
            <div style="background-image: url('./icons/when_rejected.png'); background-size: cover; background-position: center;" class="w-24 h-24 relative rounded-full border-2 border-gray-200">
            </div>

            <!-- Texts -->
            <div class="mt-4 text-center">
              <h1 class="text-xl text-black font-medium">жулипуп</h1>

              <!-- Badges -->
              <div class="flex items-center">
                <div class="mt-0.5 w-min h-6 mr-2 rounded-full bg-gray-200 px-4 flex items-center justify-center">
                  <p class="text-sm text-black opacity-80">Путин</p>
                </div>

                <div class="mt-0.5 w-min h-6 rounded-full bg-gray-200 px-4 flex items-center justify-center">
                  <Icon name="more-horizontal" attrs={{ class: "w-4 h-4 text-black opacity-80" }}/>
                </div>
              </div>
            </div>
          </div>

          <!-- Level -->
          <div class="w-full mt-6 flex items-center">

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

          <!-- Desktop-only buttons -->
          <div class="hidden md:flex mt-6 w-full items-center">
            <button class="rounded-md bg-gray-300 px-4 h-10 w-1/2 flex justify-center items-center">
              <Icon name="refresh-cw" attrs={{ class: "w-4 h-4 text-black opacity-80" }} />
            
              <p class="text-sm text-black opacity-80 ml-2">Змінити</p>
            </button>

            <button class="rounded-md bg-gray-300 ml-4 px-4 h-10 w-1/2 flex justify-center items-center">
              <Icon name="log-out" attrs={{ class: "w-4 h-4 text-black opacity-80" }} />
            
              <p class="text-sm text-black opacity-80 ml-2">Вийти</p>
            </button>
          </div>
        </div>
      </div>

      <div class="md:pl-6 md:py-16 flex flex-wrap md:overflow-hidden md:overflow-y-auto md:h-full md:w-3/4 relative">
        { #each categories as category }
          <div class="w-full my-5 md:my-0 md:w-1/2 md:px-2 { category.id == 2 ? "md:hidden" : "" }">
            <p class="text-sm text-black opacity-60 px-1 uppercase">{ category.title }</p>

            { #each category.pages as page }
              <Button attrs={{ 
                  icon: page.icon,
                  title: page.title,
                  subtitle: page.subtitle,
                  background: page.background
                }} />
            { /each }
          </div>
        { /each }
      </div>
    </div>
  </div>
{ /if }