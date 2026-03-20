<template>
  <UDropdownMenu
      v-slot="{ open }"
      :content="{ align: 'start' }"
      :items="[{
      label: $t('templateMenu.starter'),
      to: 'https://starter-template.nuxt.dev/'
    }, {
      label: $t('templateMenu.landing'),
      to: 'https://landing-template.nuxt.dev/',
      color: 'primary',
      checked: true,
      type: 'checkbox'
    }, {
      label: $t('templateMenu.docs'),
      to: 'https://docs-template.nuxt.dev/'
    }, {
      label: $t('templateMenu.saas'),
      to: 'https://saas-template.nuxt.dev/'
    }, {
      label: $t('templateMenu.dashboard'),
      to: 'https://dashboard-template.nuxt.dev/'
    }, {
      label: $t('templateMenu.chat'),
      to: 'https://chat-template.nuxt.dev/'
    }, {
      label: $t('templateMenu.portfolio'),
      to: 'https://portfolio-template.nuxt.dev/'
    }, {
      label: $t('templateMenu.changelog'),
      to: 'https://changelog-template.nuxt.dev/'
    }]"
      :modal="false"
      :ui="{ content: 'min-w-fit' }"
      size="xs"
  >
    <UButton
        :class="[open && 'bg-primary/15']"
        :label="$t('templateMenu.landing')"
        :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
      }"
        class="-mb-[6px] font-semibold rounded-full truncate"
        size="xs"
        trailing-icon="i-lucide-chevron-down"
        variant="subtle"
    />
  </UDropdownMenu>
</template>