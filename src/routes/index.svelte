<script>
  // Importing components
  import { Icon } from "../components";
</script>

<!-- Cards -->
<section style="background-image: linear-gradient(to top right, #a18cd1 0%, #fbc2eb 100%);" class="w-full h-screen relative flex justify-center items-center">
  <!-- (desktop) -->
  <div class="hidden md:block w-full h-full p-4 pt-16 md:pt-20">
    <div class="w-full h-full flex rounded-md bg-white relative">
      <!-- Sidebar -->
      <sidebar class="p-3 h-full w-2/12 flex flex-col">

        <!-- Links -->
        <div class="mb-4 overflow-hidden overflow-y-auto w-full flex-grow">
          <!-- Link entry (current) -->
          <button class="w-full my-1 rounded-md h-10 flex items-center px-2 bg-indigo-400"> 
            <!-- Icon -->
            <div class="w-6 h-6 flex justify-center items-center bg-white rounded-md">
              <Icon name="home" attrs={{ class: "w-4 h-4 text-indigo-400" }} />
            </div>

            <!-- Text -->
            <div class="ml-2">
              <h1 class="text-base text-white">Головна</h1>
            </div>
          </button>

          <!-- Link entry (not current) -->
          <button class="w-full my-1 rounded-md h-10 flex items-center px-2 opacity-60"> 
            <!-- Icon -->
            <div class="w-6 h-6 flex justify-center items-center bg-white rounded-md">
              <Icon name="book" attrs={{ class: "w-4 h-4 black" }} />
            </div>

            <!-- Text -->
            <div class="ml-2">
              <h1 class="text-base text-black">Бібліотека</h1>
            </div>
          </button>

          <!-- Link entry (not current) -->
          <button class="w-full my-1 rounded-md h-10 flex items-center px-2 opacity-60"> 
            <!-- Icon -->
            <div class="w-6 h-6 flex justify-center items-center bg-white rounded-md">
              <Icon name="message-square" attrs={{ class: "w-4 h-4 black" }} />
            </div>

            <!-- Text -->
            <div class="ml-2">
              <h1 class="text-base text-black">Чат</h1>
            </div>
          </button>
        </div>

        <!-- Small ad -->
        <section class="w-full pt-4 flex flex-col items-center justify-center rounded-md bg-gray-100 relative">
          <!-- Mini-header -->
          <div class="absolute inset-x-0 top-0 w-full p-2 flex justify-end items-center">
            <button class="opacity-80">
              <Icon name="x" attrs={{ class: "w-4 h-4 text-black" }} />
            </button>
          </div>

          <!-- Image -->
          <img class="w-1/2" src="./3D/Hearts.png" alt="">

          <!-- Texts -->
          <div class="my-2 text-center">
            <h1 class="text-sm text-black">Допоможіть нам</h1>
            <p class="text-xs text-gray-900 opacity-80">Допоможіть нам зробити цей ресурс більш доступним та кращим.</p>
          </div>

          <!-- Buttons -->
          <button class="w-full rounded-md bg-black h-8 flex items-center justify-center">
            <p class="text-xs text-white">Я хочу допомогти</p>
          </button>
        </section>
      </sidebar>

      <!-- Content -->
      <div class="h-full overflow-hidden overflow-y-auto w-8/12 rounded-md flex flex-col">
        <!-- Current session -->
        <div class="w-full p-4">
          <!-- Mini-header -->
          <div class="w-full flex justify-between items-center">
            <!-- Title -->
            <h1 class="text-2xl text-black font-medium">Сьогодні</h1>

            <!-- Buttons -->
            <div class="flex items-center">
              <!-- Search icon -->
              <button class="w-7 h-7 flex items-center justify-center relative mx-2">
                <Icon name="search" attrs={{ class: "w-5 h-5 text-black" }} />
              </button>

              <!-- Bell icon -->
              <button class="w-7 h-7 flex items-center justify-center relative mx-2">
                <Icon name="bell" attrs={{ class: "w-5 h-5 text-black" }} />

                <!-- Notification circle -->
                <div class="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-400"></div>
              </button>
            </div>
          </div>

          <!-- Card -->
          <div class="mt-4 w-full h-64 rounded-lg bg-black">
            s
          </div>
          
        </div>


        <!-- All courses -->
        <div class="mt-2 w-full p-2">
          <!-- Mini-header -->
          <div class="p-2 w-full flex justify-between items-center">
            <!-- Title -->
            <h1 class="text-2xl text-black font-medium">Матеріал, який я вивчаю</h1>

            <!-- Buttons -->
            <div class="flex items-center">
              <button class="flex items-center">
                <a href="/" class="text-sm text-indigo-400">Подивитись весь список</a>
              
                <Icon name="chevron-right" attrs={{ class: "w-4 h-4 text-indigo-400 ml-1" }} />
              </button>
            </div>
          </div>

          <!-- List -->
          <div class="w-full flex flex-wrap flex-grow mt-4">
            
            <div class="w-1/3 h-32 p-2 relative">
              <div class="w-full h-full bg-black rounded-md">

              </div>    
            </div>
          
            <div class="w-1/3 h-32 p-2 relative">
              <div class="w-full h-full bg-black rounded-md">

              </div>    
            </div>

            <div class="w-1/3 h-32 p-2 relative">
              <div class="w-full h-full bg-black rounded-md">

              </div>    
            </div>

          </div>

        </div>
      </div>

      <!-- Chat -->
      <div class="h-full flex flex-col w-4/12 relative bg-gray-100 rounded-r-md">
        <!-- Mini-header -->
        <div class="p-4 w-full flex justify-between items-center">
          <h1 class="text-2xl text-black font-medium">Чат</h1>

          <!-- Close button -->
          <button class="h-8 w-8 flex justify-center items-center">
            <Icon name="x" attrs={{ class: "w-6 h-6 text-black" }} />
          </button>
        </div>

        <!-- Chat itself -->
        <div class="flex-grow p-4">

          <!-- Message -->
          <div class="my-4 w-full flex items-center justify-start">
            <!-- Avatar -->
            <div class="w-10 h-10 rounded-full bg-red-500 relative">
              <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full"></div>
            </div>

            <!-- Message itself -->
            <div class="ml-2 w-2/3">
              <div class="rounded-lg bg-white shadow-sm p-3">
                <p class="text-black">Lorem ipsum dolor sit.</p>
              </div>

              <!-- Timestamp -->
              <p class="text-xs text-gray-900 opacity-80 mt-0.5">10 хвилин тому</p>
            </div>
          </div>

          <div class="my-4 w-full flex items-center justify-end">
            <!-- Message itself -->
            <div class="mr-2 w-2/3">
              <div class="rounded-lg bg-white shadow-sm p-3">
                <p class="text-black">Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, architecto!</p>
              </div>

              <!-- Timestamp -->
              <p class="text-xs text-gray-900 opacity-80 mt-0.5 text-left">5 хвилин тому</p>
            </div>
            
            <!-- Avatar -->
            <div class="w-10 h-10 rounded-full bg-red-500 relative">
              <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>

        </div>

        <!-- Send message -->
        <div class="w-full p-2">
          <div class="w-full bg-white rounded-md flex items-center p-2">

            <!-- Add attachement -->
            <button class="w-8 h-8 flex justify-center items-center mr-2">
              <Icon name="paperclip" attrs={{ class: "w-5 h-5 text-black" }} />
            </button>

            <!-- Message input -->
            <input class="h-8 w-auto" type="text" placeholder="Повідомлення">

            <!-- Send button -->
            <button class="h-8 rounded-md bg-indigo-400 ml-2 px-2 flex items-center justify-center">
              <!-- Icon -->
              <Icon name="chevron-right" attrs={{ class: "w-5 h-5 text-white" }} />
            </button>

          </div>
        </div>
      </div>

    </div>
  </div>
  
  <!-- (mobile) -->
  <div class="md:hidden w-full h-full p-4 pt-16 md:pt-20">
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