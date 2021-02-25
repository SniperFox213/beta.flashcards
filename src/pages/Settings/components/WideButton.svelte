<script>
  // Importing components
  import { Icon } from "../../../components";

  // Exporting some variables
  export let attrs = {
    icon: "./icons/old_shrugging_guy.png",
    
    title: "Lorem ipsum dolor sit.",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    background: "indigo-400"
  };
</script>

<div class="w-full my-4 h-32 rounded-md bg-{ attrs.background } flex items-center px-4">
  <!-- Image -->
  <div class="flex justify-center items-center w-1/4">
    { #if attrs.icon.includes("$") }
      <Icon name='{ attrs.icon.replace("$", "") }' attrs={{ class: "w-8 h-8 text-white" }} />
    { :else }
      <img class="w-full md:w-2/3" src="{ attrs.icon }" alt="">
    { /if }
  </div>
  
  <!-- Text -->
  <div class="ml-4 w-3/4">
    <h1 class="text-xl text-white font-medium">{ attrs.title }</h1>
    <p class="text-base text-gray-100 opacity-80">{ attrs.subtitle }</p>
  </div>
</div>