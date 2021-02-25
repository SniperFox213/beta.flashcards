<script>
  // Importing modules
  import categories from "../../config/site/pageCategories.json";

  // Importing components
  import { Icon } from "../../components";
  import Button from "./components/WideButton.svelte";

  let opened = true;
</script>

{ #if opened }
  <div style="z-index: 999;" class="fixed overflow-y-auto inset-0 w-full h-full bg-white p-4">
    <!-- Mini-header -->
    <div on:click={(e) => {
      opened = false;
    }} style="z-index: 2;" class="fixed top-0 w-full opacity-80 py-4 md:px-6 bg-white">
      <!-- (desktop-view) -->
      <div class="hidden md:flex">
        <div class="bg-indigo-400 text-white font-bold w-9 h-9 rounded-md shadow-md flex items-center justify-center text-md">
          Bё
        </div>
      </div>

      <!-- (mobile view) -->
      <div class="flex md:hidden">
        <Icon name="chevron-left" attrs={{ class: "w-6 h-6 text-black" }} />

        <p class="text-black text-base ml-1">Назад</p>
      </div>
    </div>

    <div class="md:flex md:items-center md:justify-center h-full relative md:px-6">
      <!-- User Account + His current level -->
      <div class="w-full mt-16 md:mt-0 md:w-1/4 md:h-full md:py-24 flex justify-center">

        <div class="w-full md:h-full flex flex-col items-center justify-center md:rounded-md md:bg-gray-100 md:p-6">
          <div class="w-2/3 flex md:flex-col items-center relative">
            <!-- Avatar -->
            <div style="background-image: url('./icons/when_rejected.png'); background-size: cover; background-position: center;" class="w-24 h-24 relative rounded-full border-2 border-gray-200">
              <!-- <div class="absolute top-0 right-0">
              </div> -->
            </div>

            <!-- Texts -->
            <div class="ml-4 md:mt-4 md:ml-0 text-left md:text-center">
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