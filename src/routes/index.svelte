<script>
  // Importing components
  import { Icon } from "../components";
</script>

<div class="w-full">
  <!-- Current sessions cards -->
  <section style="background-image: linear-gradient(to top right, #a18cd1 0%, #fbc2eb 100%);" class="w-full h-screen relative flex justify-center items-center">

    <!-- Cards -->
    <div class="w-2/3">
      <!-- Title -->
      <div class="text-center">
        <h2 class="text-3xl text-white">Завдання на сьогодні</h2>
        <p class="text-sm text-white">Виконуйте ці завдання кожен день та покращуйте свої знання з різних шкільних предметів!</p>
      </div>

      <div class="mt-4 px-10 w-full flex relative">
        <!-- Arrow left -->
        <div class="absolute inset-y-0 h-full flex items-center left-0">
          <Icon name="chevron-left" attrs={{ class: "w-7 h-7 text-white" }} />
        </div>

        <!-- Arrow right -->
        <div class="absolute inset-y-0 h-full flex items-center right-0">
          <Icon name="chevron-right" attrs={{ class: "w-7 h-7 text-white" }} />
        </div>
        
        <!-- Card #1 -->
        <div class="w-1/3 px-4 relative">
          <div style="padding-top: 150%;" class="w-full relative">
            <div class="absolute inset-0 w-full h-full rounded-md bg-white flex flex-col">
            
              <!-- Mini-Header -->
              <div class="absolute inset-x-0 top-0 w-full flex justify-between items-center p-3">
                <div class="h-6 w-6 rounded-md bg-green-400 flex justify-center items-center text-md text-white font-bold">
                  1
                </div>
                
                <!-- Settings button -->
                <button class="w-6 h-6 flex justify-center items-center opacity-70">
                  <Icon name="more-horizontal" attrs={{ class: "text-gray-900 w-4 h-4" }} />
                </button>
              </div>

              <!-- Content -->
              <div style="overflow: hidden; overflow-y: auto;" class="p-4">
                <!-- Math Icon -->
                <div class="w-full flex justify-center">
                  <img class="h-24" src="./3D/Empty-BOX.png" alt="Empty Box">
                </div>

                <!-- Title -->
                <div class="text-center">
                  <!-- Title -->
                  <h2 class="mt-1 text-xl text-black font-medium">Нові знання</h2>
                  
                  <div class="flex w-full justify-center items-center opacity-60 mt-0.5">
                    <!-- Creator -->
                    <p class="text-xs text-gray-800 border-b border-dotted border-gray-800">Математика</p>

                    <!-- Dot -->
                    <div class="w-1 h-1 rounded-full bg-gray-800 mx-2"></div>

                    <!-- Time to complete -->
                    <p class="text-xs text-gray-800 border-b border-dotted border-white">4 хв.</p>
                  </div>
                </div>

                <!-- Texts -->
                <div class="mt-4 text-center">
                  <p class="text-sm text-gray-800 opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, maxime eligendi debitis beatae sit facere?</p>
                </div>
              </div>
              
              <!-- Progress and so on -->
              <div class="absolute inset-x-0 bottom-0 p-4 w-full flex items-center bg-white rounded-b-md">
                <!-- Buttons -->
                <button class="w-full h-8 rounded-md flex justify-center items-center bg-green-400">
                  <p class="text-sm text-white">Розпочати</p>
                </button>
              </div>

            </div>
          </div>
        </div>

        <!-- Card #2 -->
        <div class="w-1/3 px-4 relative">
          <div style="padding-top: 150%;" class="w-full relative">
            <div class="absolute inset-0 w-full h-full rounded-md bg-white">

              <!-- Mini-Header -->
              <div class="absolute inset-x-0 top-0 w-full flex justify-between items-center p-3">
                <div class="h-6 w-6 rounded-md bg-indigo-400 flex justify-center items-center text-md text-white font-bold">
                  2
                </div>
                
                <!-- Settings button -->
                <button class="w-6 h-6 flex justify-center items-center opacity-70">
                  <Icon name="more-horizontal" attrs={{ class: "text-gray-900 w-4 h-4" }} />
                </button>
              </div>

              <!-- Content -->
              <div style="overflow: hidden; overflow-y: auto;" class="p-4 flex-grow">
                <!-- Math Icon -->
                <div class="w-full flex justify-center relative">
                  <img class="h-24" src="./3D/Light.png" alt="Empty Box">
                </div>

                <!-- Title -->
                <div class="text-center">
                  <!-- Title -->
                  <h2 class="mt-1 text-xl text-black font-medium">Повторення старого</h2>
                  
                  <div class="flex w-full justify-center items-center opacity-60 mt-0.5">
                    <!-- Lesson -->
                    <p class="text-xs text-gray-800 border-b border-dotted border-gray-800">Англійська</p>
                    
                    <!-- Dot -->
                    <div class="w-1 h-1 rounded-full bg-gray-800 mx-2"></div>

                    <!-- Time to complete -->
                    <p class="text-xs text-gray-800 border-b border-dotted border-white">10 хв.</p>
                  </div>
                </div>

                <!-- Texts -->
                <div class="mt-4 text-center">
                  <p class="text-sm text-gray-800 opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, maxime eligendi debitis beatae sit facere?</p>
                </div>
              </div>
              
              <!-- Progress and so on -->
              <div class="absolute inset-x-0 bottom-0 p-4 w-full flex items-center bg-white rounded-b-md">
                <!-- Buttons -->
                <button class="w-full h-8 rounded-md flex justify-center items-center bg-indigo-400">
                  <!-- Text -->
                  <p class="text-sm text-white">Продовжити</p>
                </button>

                <!--  -->
                <div class="ml-1 w-12 h-8 flex justify-center items-center">
                
                  <div style="border-color: rgba(209, 213, 219); border-top-color: rgba(129, 140, 248);" class="border-4 rounded-full w-6 h-6"></div>
                
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Card #3 -->
        <div class="w-1/3 px-4 relative">
          <div style="padding-top: 150%;" class="w-full relative">
            <div class="absolute inset-0 w-full h-full rounded-md bg-white">

              <!-- Mini-Header -->
              <div class="absolute inset-x-0 top-0 w-full flex justify-between items-center p-3">
                <div class="h-6 w-6 rounded-md bg-yellow-400 flex justify-center items-center">
                  <Icon name="help-circle" attrs={{ class: "text-white h-4 w-4" }} />
                </div>
                
                <!-- Settings button -->
                <button class="w-6 h-6 flex justify-center items-center opacity-70">
                  <Icon name="more-horizontal" attrs={{ class: "text-gray-900 w-4 h-4" }} />
                </button>
              </div>

              <!-- Content -->
              <div style="overflow: hidden; overflow-y: auto;" class="p-4 flex-grow">
                <!-- Math Icon -->
                <div class="w-full flex justify-center relative">
                  <img class="h-24" src="./3D/Gear.png" alt="Gear">
                </div>

                <!-- Title -->
                <div class="text-center">
                  <!-- Title -->
                  <h2 class="mt-1 text-xl text-black font-medium">Налаштуйте свій аккаунт</h2>
                </div>

                <!-- Texts -->
                <div class="mt-4 text-center">
                  <p class="text-sm text-gray-800 opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, maxime eligendi debitis beatae sit facere?</p>
                </div>
              </div>
              
              <!-- Progress and so on -->
              <div class="absolute inset-x-0 bottom-0 p-4 w-full flex items-center bg-white rounded-b-md">
                <!-- Buttons -->
                <button class="w-full h-8 rounded-md flex justify-center items-center bg-yellow-400">
                  <!-- Text -->
                  <p class="text-sm text-white">Перейти</p>
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- Dots -->
    <div class="opacity-70 absolute inset-x-0 bottom-0 w-full flex flex-col justify-center items-center py-6">
      <!-- Dots themselves -->
      <div class="flex mt-2 justify-center items-center">
        
        <div class="w-4 h-4 bg-white rounded-full mx-4"></div>
        <div class="w-3 h-3 border-2 border-white rounded-full mx-4"></div>
        <div class="w-3 h-3 border-2 border-white rounded-full mx-4"></div>

      </div>
    </div>
  </section>
</div>