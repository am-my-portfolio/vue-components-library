<template>
  <div id="ogs-column-layout" class="flex justify-center items-center">
    <div id="ogs-cl-grid" class="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
      <!-- Left Content -->
      <div id="ogs-cl-title" class="col-span-1 md:col-span-2 space-y-2 md:space-y-6">
        <h1 :class="[
          'text-pop-secondary',
          'text-4xl md:text-5xl font-bold leading-tight'
        ]">
          <slot name="title" />
        </h1>

        <div id="ogs-cl-sub-title" :class="['text-pop-primary', 'flex space-x-12']">
          <slot name="subTitle" />
        </div>

        <p id="ogs-cl-description" :class="['text-dull-secondary/50', 'text-lg md:text-2xl']">
          <slot name="description" />
        </p>

        <div id="ogs-cl-left-content">
          <slot name="leftContent" />
        </div>
      </div>

      <!-- Right Image -->
      <div id="ogs-cl-right-content" class="col-span-1 md:col-span-2">
        <slot name="rightContent" />
      </div>
    </div>
  </div>
</template>
