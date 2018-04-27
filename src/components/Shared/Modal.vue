<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <div
          class="close"
          @click="$emit('close')"
        />
        <slot />
      </div>
    </div>
  </transition>
</template>

<style scoped lang="stylus">
.modal-mask
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
  display flex
  justify-content center
  align-items center

.modal-container
  padding 2rem
  border-radius 18px
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  min-width 300px
  min-height 100px
  position relative
  .close
    position absolute
    top 10px
    right 0
    background url('../../assets/close.svg') no-repeat
    width 40px
    height 40px
    transition .2s
    &:hover
      cursor pointer

.modal-enter
  opacity: 0

.modal-leave-active
  opacity: 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  transform: scale(1.1);

</style>
