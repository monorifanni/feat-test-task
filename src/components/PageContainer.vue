<template>
  <div class="pageContainer">
    <div class="imgContainer">
      <img src="@/assets/main-page-image.png" class="image" />
      <h2>Any program is only as good as it is useful</h2>
      <h3>The aim is to consistently craft pixel-perfect and high-performance solutions</h3>
    </div>

    <div class="content">
      <div>
        <img alt="feat logo" src="@/assets/feat.svg" />
        <div class="slotContainer">
          <slot></slot>
        </div>
      </div>

      <div class="langSelect">
        <div>HU</div>
        <div>EN</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imgContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem 2rem;
}

.image {
  width: 496px;
}

.langSelect {
  position: relative;
  top: 0;
  right: 0;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
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
