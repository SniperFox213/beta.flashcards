<script>
  // Importing components
  import { Icon } from "../components";
</script>

<!-- Cards -->
<section style="background-image: linear-gradient(to top right, #a18cd1 0%, #fbc2eb 100%);" class="w-full h-screen relative flex justify-center items-center">
  <!-- Main card (mobile) -->
  <div class="w-full h-full p-4 pt-16 md:pt-20">
    <div class="w-full h-full flex flex-col rounded-md bg-white relative">
      <!-- Mini-Header -->
      <div class="w-full flex items-center justify-between px-4 h-16 opacity-80">
        <!-- Task name -->
        <div class="h-8 w-8 rounded-md bg-green-400 flex justify-center items-center text-xl text-white font-bold">
          1
        </div>
        
        <!-- Settings -->
        <button class="w-10 h-10 flex justify-center items-center">
          <Icon name="settings" attrs={{ class: "w-5 h-5 text-black" }} />
        </button>
      </div>

      <!-- Content -->
      <div class="flex-grow overflow-hidden overflow-y-auto px-4 w-full relative">
        <div class="w-full flex justify-center">
          <img class="w-2/3" src="./3D/Empty-BOX.png" alt="Empty Box">
        </div>

        <!-- Title -->
        <div class="text-center">
          <!-- Title -->
          <h2 class="mt-1 text-3xl text-black font-medium">Нові знання</h2>
          
          <div class="flex w-full justify-center items-center opacity-60 mt-0.5">
            <!-- Creator -->
            <p class="text-sm text-gray-800 border-b border-dotted border-gray-800">Математика</p>

            <!-- Dot -->
            <div class="w-1 h-1 rounded-full bg-gray-800 mx-2"></div>

            <!-- Time to complete -->
            <p class="text-sm text-gray-800 border-b border-dotted border-white">4 хв.</p>
          </div>
        </div>

        <!-- Texts -->
        <div class="mt-6 md:mt-4 text-center">
          <p class="text-base text-gray-800 opacity-70">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, est perferendis. Distinctio ipsam, quia, porro facere, repudiandae dicta ullam enim molestiae a temporibus minus ipsum.</p>
        </div>
      </div>

      <!-- Buttons -->
      <div class="w-full h-16 border-t border-solid border-gray-100 flex justify-center items-center">
        <div class="h-16 w-1/2 border-r border-solid border-gray-200 flex items-center justify-center">
          <Icon name="chevron-left" attrs={{ class: "w-7 h-7 text-black mr-2" }} />
          
          <p class="text-base text-black">Повторення</p>
        </div>

        <div class="h-16 w-1/2 border-r border-solid border-gray-200 flex items-center justify-center">
          <p class="text-base text-black">Повторення</p>

          <Icon name="chevron-right" attrs={{ class: "w-7 h-7 text-black ml-2" }} />
        </div>
      </div>
    </div>
  </div>
</section>