<template>
  <div class="pageContainer">
    <div class="imgContainer">
      <img src="@/assets/main-page-image.png" class="image" />
      <img src="@/assets/object-1.svg" class="floating-object-1" />
      <img src="@/assets/object-2.svg" class="floating-object-2" />

      <h2>{{ t('mainPage.title') }}</h2>
      <h3>{{ t('mainPage.subTitle') }}</h3>
    </div>

    <div class="content">
      <div>
        <img alt="feat logo" src="@/assets/feat.svg" />
        <div class="slotContainer">
          <slot></slot>
        </div>
      </div>

      <div class="langSelect">
        <div @click="setLocale('hu')" :class="{ isActive: locale === 'hu' }">HU</div>
        <div @click="setLocale('en')" :class="{ isActive: locale === 'en' }">EN</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n({ useScope: 'global' })

const setLocale = (value: string) => {
  locale.value = value
}
</script>

<style scoped>
.imgContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem 2rem;
  position: relative;
  height: max-content;
  text-align: center;
}

.image {
  width: 496px;
}

.floating-object-1 {
  width: 180px;
  position: relative;
  animation: float 3s ease-in-out infinite;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 992px) {
    width: 120px;
  }
}

.floating-object-2 {
  width: 100px;
  position: relative;
  animation: float 3s ease-in-out infinite;
  position: absolute;
  bottom: 0;
  right: -32px;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-16px);
  }

  100% {
    transform: translateY(0);
  }
}

.langSelect {
  position: relative;
  top: 0;
  right: 0;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  cursor: pointer;
}

.isActive {
  font-weight: bold;
}

.content {
  background-color: var(--vt-c-white);
  padding: 1rem;
  display: grid;
  grid-template-columns: 4fr 1fr;
}

.slotContainer {
  padding-top: 4rem;
}

.pageContainer {
  display: grid;
  grid-template-columns: 7fr 5fr;
  width: 90%;
  height: 100vh;
  margin: auto;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 992px) {
    .image {
      width: 400px;
    }
  }

  @media (max-width: 896px) {
    grid-template-columns: 6fr 6fr;
    .image {
      width: 350px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 32px;

    .imgContainer {
      display: none;
    }
  }

  @media (max-width: 480px) {
    padding: 0;
  }
}
</style>
