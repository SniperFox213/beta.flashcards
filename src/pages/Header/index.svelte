<script>
  // Importing components
  import { Icon } from "../../components";
</script>

<div style="z-index: 999;" class="fixed top-0 w-full h-16 md:h-20 flex justify-between items-center px-4">
  <!-- Logotype -->
  <div class="w-1/3">
    <div class="bg-indigo-400 text-white font-bold w-10 md:w-12 h-10 md:h-12 rounded-md shadow-md flex items-center justify-center text-md">
      Bё
    </div>
  </div>

  <!-- Centered buttons (for desktop) -->
  <div class="hidden md:flex items-center justify-center w-2/3">
    <a href="/" class="mx-5 text-xs text-white">Завдання</a>
    <div class="mx-5 flex items-center">
      <p class="text-xs text-white">Сервіси</p>
      <Icon name="chevron-down" attrs={{ class: "w-4 h-4 text-white ml-0.5" }} />
    </div>
    <a href="/" class="mx-5 text-xs text-white">Бібліотека</a>
  </div>

  <!-- Other buttons -->
  <div class="w-1/3 flex justify-end items-center">
    <!-- Account button -->
    <div class="bg-white rounded-md w-10 md:w-auto md:px-2 h-10 md:h-12 mx-2 flex items-center justify-center">
      <div style="background-image: url('./icons/when_rejected.png'); background-size: cover; background-position: center;" class="w-8 h-8 relative rounded-full border-2 border-gray-200">
        <div class="absolute top-0 right-0">
          <!-- Notification -->
          <div class="w-2 h-2 rounded-full bg-red-400"></div>
        </div>
      </div>

      <!-- Account information (Desktop-only) -->
      <div class="hidden md:flex items-center">
        <!-- Author name -->
        <div class="ml-2 mr-4">
          <h1 class="text-md text-black font-medium">жулипуп</h1>
          <p class="text-xs text-gray-900 opacity-80">1 рівень</p>
        </div>

        <!-- Settings button -->
        <div class="h-8 w-8 bg-gray-200 rounded-md mx-2 flex justify-center items-center">
          <Icon name="settings" attrs={{ class: "w-4 h-4 text-black" }} />
        </div>

        <!-- Change account -->
        <div class="h-8 w-8 bg-gray-200 rounded-md flex justify-center items-center">
          <Icon name="log-out" attrs={{ class: "w-4 h-4 text-red-400" }} />
        </div>        
      </div>
    </div>

    <!-- Menu button -->
    <div class="bg-white rounded-md w-10 md:w-12 h-10 md:h-12 flex justify-center items-center">
      <Icon name="grid" attrs={{ class: "w-5 h-5 text-black" }} />
    </div>
  </div>
</div>