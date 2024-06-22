# Desert Mamba Productions

<!-- Songs -->

- Loo Jajuok

# Tabs

- Documentaries
- Music
- Livestream
- Podcasts
- Shows

Station Ident
Montarge

```js
<div class="hs-dropdown hs-dropdown-example relative inline-flex">
  <button
    id="hs-dropdown-example-${value}"
    type="button"
    class="hs-dropdown-toggle py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50"
  >
    View
    <svg
      class="hs-dropdown-open:rotate-180 size-4 text-gray-600 dark:text-neutral-600"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  </button>

  <div
    class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-16-- hidden z-10 mt-2 bg-white shadow-md rounded-lg p-2"
    aria-labelledby="hs-dropdown-example-${value}"
  >
    <button
      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      onClick="viewUser(${userId})"
    >
      View User
    </button>
    <button
      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      onClick="modifyRole(${userId})"
    >
      Modify Role
    </button>
    <button
      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      onClick="archiveUser(${userId})"
    >
      Archive User
    </button>
  </div>
</div>
```
